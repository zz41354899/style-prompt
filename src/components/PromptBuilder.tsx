'use client';

import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { Copy, Download, Eye, Blocks, GripVertical, X, Lock, Unlock, Sparkles, Star, AlertTriangle, CreditCard, Code, Database, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { 
  assemblePrompt, 
  getAvailableOptions, 
  assemblePromptWithBlocks,
  getBlockModules,
  type PromptParams,
  type PlanTier,
} from '../lib/promptEngine';
import { 
  getRecommendedUses, 
  isUseValidForIndustry, 
  getSupabaseScore,
} from '../data/blocks';
import { Toast } from './Toast';

// Backend block IDs that should have their own tabs
const BACKEND_BLOCK_IDS = ['backend.architecture', 'auth.login', 'admin.users'];

// Block type definition
type BlockType = 'style' | 'industry' | 'use' | 'feature';

interface Block {
  id: string;
  type: BlockType;
  value: string;
  label: string;
}

// Block color configuration
const blockColors: Record<BlockType, { bg: string; border: string; hover: string }> = {
  style: { bg: '#4285F4', border: '#2b65c9', hover: '#5294ff' },
  industry: { bg: '#0F9D58', border: '#0b7541', hover: '#16b568' },
  use: { bg: '#8E24AA', border: '#6a1b9a', hover: '#a033c0' },
  feature: { bg: '#F59E0B', border: '#D97706', hover: '#FBBF24' },
};

const getBlockLabels = (t: (key: string) => string): Record<BlockType, string> => ({
  style: t('promptBuilder.style'),
  industry: t('promptBuilder.industry'),
  use: t('promptBuilder.use'),
  feature: t('promptBuilder.feature') || 'Feature',
});

interface PromptBuilderProps {
  className?: string;
  initialStyleId?: string;
  onStyleChange?: (styleId: string) => void;
}

export const PromptBuilder: React.FC<PromptBuilderProps> = ({ className = '', initialStyleId, onStyleChange }) => {
  const { t } = useTranslation();
  const blockLabels = getBlockLabels(t);
  const selectedStyle = initialStyleId || 'S01';
  
  // Ref to mark internal changes
  const isInternalChange = useRef(false);
  
  // Get available options
  const options = useMemo(() => getAvailableOptions(), []);
  
  // Current selected params - use selectedStyle as initial value
  const [params, setParams] = useState<PromptParams>(() => ({
    styleId: selectedStyle || initialStyleId || 'S01',
    industryId: 'SaaS',
    useId: 'FullLandingPage',
  }));
  
  // Drag state
  const [draggedBlock, setDraggedBlock] = useState<Block | null>(null);
  const [dragOverSlot, setDragOverSlot] = useState<BlockType | null>(null);
  const [activeTab, setActiveTab] = useState<BlockType>('style');
  
  // Assembly area block order
  const [assembledBlocks, setAssembledBlocks] = useState<BlockType[]>(['style', 'industry', 'use']);
  
  // Feature blocks state (積木系統)
  const [planId, setPlanId] = useState<PlanTier>('free');
  const [selectedBlockIds, setSelectedBlockIds] = useState<string[]>([]);
  const featureBlocks = useMemo(() => getBlockModules(), []);
  
  // Prompt type state (frontend/backend)
  const [activePromptType, setActivePromptType] = useState<'frontend' | 'backend'>('frontend');
  
  // Get selected backend blocks
  const selectedBackendBlocks = useMemo(() => {
    return selectedBlockIds.filter(id => BACKEND_BLOCK_IDS.includes(id));
  }, [selectedBlockIds]);
  
  // Pro subscription state
  const [isPro, setIsPro] = useState<boolean>(() => {
    // Check localStorage for pro status
    if (typeof window !== 'undefined') {
      return localStorage.getItem('style-prompt-pro') === 'true';
    }
    return false;
  });
  const [showProModal, setShowProModal] = useState(false);
  
  // Handle plan switch with pro check
  const handlePlanSwitch = (newPlan: PlanTier) => {
    if (newPlan === 'pro' && !isPro) {
      // Show pro modal if not subscribed
      setShowProModal(true);
    } else {
      setPlanId(newPlan);
    }
  };
  
  // Handle pro subscription (for testing/demo - will be replaced by Stripe callback)
  const handleProSubscribe = () => {
    // Save pro status to localStorage
    localStorage.setItem('style-prompt-pro', 'true');
    setIsPro(true);
    setPlanId('pro');
    setShowProModal(false);
    setToast({ message: t('promptBuilder.proActivated') || 'Pro 已啟用！', type: 'success' });
  };
  
  // Handle Stripe checkout - redirect to Stripe payment page
  const handleStripeCheckout = async () => {
    // TODO: Replace with actual Stripe checkout session creation
    // This will call your backend API to create a Stripe checkout session
    // Example:
    // const response = await fetch('/api/create-checkout-session', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ priceId: 'price_xxx' })
    // });
    // const { url } = await response.json();
    // window.location.href = url;
    
    // For now, simulate successful payment (demo mode)
    handleProSubscribe();
  };
  
  // Toast state
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);
  
  // Responsive style update - when selectedStyle changes externally (e.g. sidebar click)
  useEffect(() => {
    // Skip if internal change (dropdown)
    if (isInternalChange.current) {
      isInternalChange.current = false;
      return;
    }
    
    // Sync to params on external change
    if (selectedStyle && selectedStyle !== params.styleId) {
      setParams(prev => ({
        ...prev,
        styleId: selectedStyle,
      }));
    }
  }, [selectedStyle]);
  
  // Generate Prompt (使用積木系統)
  const { generatedPrompt, diagnostics, backendPrompt } = useMemo(() => {
    try {
      // Filter out backend blocks for frontend prompt
      const frontendBlockIds = selectedBlockIds.filter(id => !BACKEND_BLOCK_IDS.includes(id));
      
      // Frontend prompt
      let frontendPrompt = '';
      if (frontendBlockIds.length > 0) {
        // 使用帶積木的組裝器，只傳入前端積木
        const result = assemblePromptWithBlocks({
          ...params,
          planId,
          selectedBlockIds: frontendBlockIds,
        });
        frontendPrompt = result.prompt;
      } else {
        // 沒有選擇積木時使用原本的組裝器
        frontendPrompt = assemblePrompt(params);
      }
      
      // Backend prompt - combine all selected backend blocks
      let backendPrompt = '';
      const backendSections: string[] = [];
      const deniedBlocks: { id: string; title: string; requiredTier: PlanTier }[] = [];
      
      selectedBackendBlocks.forEach(blockId => {
        const block = featureBlocks.find(b => b.id === blockId);
        if (!block) return;
        
        if (block.tier === 'free' || isPro) {
          // User has access, generate the prompt
          if (blockId === 'backend.architecture') {
            const { backendArchitectureBlock } = require('../data/blocks/backendArchitecture');
            backendSections.push(backendArchitectureBlock.render(params.industryId, params.useId));
          } else if (blockId === 'auth.login') {
            const { authLoginBlock } = require('../data/blocks/authLogin');
            backendSections.push(authLoginBlock.render(params.industryId, params.useId));
          } else if (blockId === 'admin.users') {
            const { adminUsersBlock } = require('../data/blocks/adminUsers');
            backendSections.push(adminUsersBlock.render(params.industryId, params.useId));
          }
        } else {
          // User doesn't have access, add to denied list
          deniedBlocks.push({
            id: block.id,
            title: block.title,
            requiredTier: block.tier
          });
        }
      });
      
      // Combine all backend sections with separators
      if (backendSections.length > 0) {
        backendPrompt = backendSections.join('\n\n---\n\n');
      }
      
      return { 
        generatedPrompt: frontendPrompt, 
        backendPrompt,
        diagnostics: {
          deniedBlocks,
          appliedBlocks: selectedBackendBlocks.filter(id => {
            const block = featureBlocks.find(b => b.id === id);
            return block && (block.tier === 'free' || isPro);
          })
        }
      };
    } catch (error) {
      console.error('Error generating prompt:', error);
      return { 
        generatedPrompt: t('promptBuilder.errorGenerating'), 
        backendPrompt: '',
        diagnostics: { 
          deniedBlocks: [] as { id: string; title: string; requiredTier: PlanTier }[],
          appliedBlocks: [] as string[]
        } 
      };
    }
  }, [params, planId, selectedBlockIds, selectedBackendBlocks, t, isPro, featureBlocks]);
  
  // Toggle feature block selection
  const toggleBlockSelection = (blockId: string) => {
    setSelectedBlockIds(prev => {
      const newIds = prev.includes(blockId) 
        ? prev.filter(id => id !== blockId)
        : [...prev, blockId];
      
      // Auto-switch to frontend if current tab is being removed
      if (activePromptType !== 'frontend' && !newIds.includes(activePromptType)) {
        setActivePromptType('frontend');
      }
      
      return newIds;
    });
  };
  
  // Handle param change
  const handleParamChange = (key: keyof PromptParams, value: string) => {
    setParams(prev => ({
      ...prev,
      [key]: value,
    }));
    
    // If style change, sync to parent callback
    if (key === 'styleId') {
      // Mark as internal change to avoid useEffect override
      isInternalChange.current = true;
      
      if (onStyleChange) {
        onStyleChange(value);
      }
    }
  };
  
  // Drag start
  const handleDragStart = useCallback((e: React.DragEvent, block: Block) => {
    setDraggedBlock(block);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', JSON.stringify(block));
    
    // Set visual effect during drag
    const target = e.target as HTMLElement;
    target.style.opacity = '0.5';
  }, []);
  
  // Drag end
  const handleDragEnd = useCallback((e: React.DragEvent) => {
    setDraggedBlock(null);
    setDragOverSlot(null);
    const target = e.target as HTMLElement;
    target.style.opacity = '1';
  }, []);
  
  // Drag over target area
  const handleDragOver = useCallback((e: React.DragEvent, slotType: BlockType) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverSlot(slotType);
  }, []);
  
  // Drag leave target area
  const handleDragLeave = useCallback(() => {
    setDragOverSlot(null);
  }, []);
  
  // Drop block
  const handleDrop = useCallback((e: React.DragEvent, slotType: BlockType) => {
    e.preventDefault();
    setDragOverSlot(null);
    
    try {
      const data = e.dataTransfer.getData('text/plain');
      const block: Block = JSON.parse(data);
      
      // Only allow same type blocks into corresponding slots
      if (block.type === slotType) {
        const paramKey = slotType === 'style' ? 'styleId' : slotType === 'industry' ? 'industryId' : 'useId';
        handleParamChange(paramKey as keyof PromptParams, block.value);
      }
    } catch (error) {
      console.error('Drop error:', error);
    }
    
    setDraggedBlock(null);
  }, [handleParamChange]);
  
  // Handle assembly area block reordering
  const handleAssemblyDragStart = useCallback((e: React.DragEvent, index: number) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('assembly-index', String(index));
  }, []);
  
  const handleAssemblyDrop = useCallback((e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData('assembly-index'), 10);
    
    if (!isNaN(sourceIndex) && sourceIndex !== targetIndex) {
      setAssembledBlocks(prev => {
        const newBlocks = [...prev];
        const [removed] = newBlocks.splice(sourceIndex, 1);
        newBlocks.splice(targetIndex, 0, removed);
        return newBlocks;
      });
    }
  }, []);
  
  // Copy to clipboard
  const handleCopy = async () => {
    const promptToCopy = activePromptType === 'frontend' ? generatedPrompt : backendPrompt;
    try {
      await navigator.clipboard.writeText(promptToCopy);
      setToast({
        message: t('promptBuilder.promptCopied'),
        type: 'success'
      });
    } catch (error) {
      console.error('Copy failed:', error);
      setToast({
        message: t('promptBuilder.copyFailed'),
        type: 'error'
      });
    }
  };
  
  // Download as file
  const handleDownload = () => {
    const promptToDownload = activePromptType === 'frontend' ? generatedPrompt : backendPrompt;
    const blob = new Blob([promptToDownload], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const suffix = activePromptType === 'frontend' ? '' : '-backend';
    a.download = `prompt${suffix}-${params.styleId}-${params.industryId}-${params.useId}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

// ... (rest of the code remains the same)
  
  // Get currently selected block info
  const getSelectedBlock = (type: BlockType): Block => {
    if (type === 'style') {
      return { id: params.styleId, type: 'style', value: params.styleId, label: t(`styles.${params.styleId}.name`) };
    } else if (type === 'industry') {
      return { id: params.industryId, type: 'industry', value: params.industryId, label: t(`industries.${params.industryId}`) };
    } else {
      return { id: params.useId, type: 'use', value: params.useId, label: t(`uses.${params.useId}`) };
    }
  };
  
  // Render draggable block
  const renderDraggableBlock = (block: Block, isDragging: boolean = false, isSelected: boolean = false, disabled: boolean = false) => {
    const colors = blockColors[block.type];
    
    return (
      <div
        draggable={!disabled}
        onDragStart={(e) => !disabled && handleDragStart(e, block)}
        onDragEnd={handleDragEnd}
        className={`
          relative flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 rounded-xl
          border-b-4 border-r-4 shadow-lg
          transform transition-all duration-150
          ${disabled ? 'cursor-not-allowed' : 'cursor-pointer md:cursor-grab active:cursor-grabbing hover:-translate-y-1 hover:shadow-xl'}
          ${isDragging ? 'opacity-50 scale-95' : 'opacity-100'}
          ${isSelected ? 'ring-2 ring-white ring-offset-2 ring-offset-[#1a1a1a]' : ''}
        `}
        style={{
          backgroundColor: colors.bg,
          borderBottomColor: colors.border,
          borderRightColor: colors.border,
        }}
      >
        <GripVertical className="w-4 h-4 text-white/60" />
        <div className="flex flex-col">
          <span className="text-white/70 text-xs uppercase tracking-wider">{blockLabels[block.type]}</span>
          <span className="text-white font-bold text-sm">{block.label}</span>
        </div>
        {/* Block connector tab */}
        <div 
          className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-6 rounded-r-lg"
          style={{ backgroundColor: colors.bg }}
        />
      </div>
    );
  };
  
  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a] pt-8 pb-24 overflow-x-hidden ${className}`}>
      {/* Header */}
      <div className="mb-8 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {t('promptBuilder.title')}
        </h1>
        <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
          {t('promptBuilder.subtitle')}
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Main drag area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          
          {/* Left: Block library */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-4 md:p-6">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Blocks className="w-5 h-5" />
                {t('promptBuilder.blockLibrary')}
              </h2>
              
              {/* Category tabs */}
              <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                {(['style', 'industry', 'use', 'feature'] as BlockType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveTab(type)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all border-b-3 ${
                      activeTab === type
                        ? 'text-white border-b-2'
                        : 'text-gray-400 hover:text-white border-b-2 border-transparent'
                    }`}
                    style={{
                      backgroundColor: activeTab === type ? blockColors[type].bg : 'transparent',
                      borderBottomColor: activeTab === type ? blockColors[type].border : 'transparent',
                    }}
                  >
                    {blockLabels[type]}
                  </button>
                ))}
              </div>
              
              {/* Draggable block list */}
              <div className="space-y-2 max-h-[250px] md:max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {activeTab === 'style' && options.styles.map((style) => (
                  <div 
                    key={style.id}
                    onClick={() => handleParamChange('styleId', style.id)}
                    className="cursor-pointer"
                  >
                    {renderDraggableBlock({
                      id: style.id,
                      type: 'style',
                      value: style.id,
                      label: `${style.id} — ${t(`styles.${style.id}.name`)}`,
                    }, draggedBlock?.value === style.id, params.styleId === style.id)}
                  </div>
                ))}
                {activeTab === 'industry' && options.industries.map((industry) => {
                  const supabaseScore = getSupabaseScore(industry.id);
                  
                  return (
                    <div 
                      key={industry.id}
                      onClick={() => handleParamChange('industryId', industry.id)}
                      className="cursor-pointer relative"
                    >
                      {renderDraggableBlock({
                        id: industry.id,
                        type: 'industry',
                        value: industry.id,
                        label: t(`industries.${industry.id}`),
                      }, draggedBlock?.value === industry.id, params.industryId === industry.id)}
                      {/* Supabase Score Badge - only show when feature blocks are selected */}
                      {selectedBlockIds.length > 0 && (
                        <div className="absolute top-1 right-6 flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-2.5 h-2.5 ${i < supabaseScore ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
                {activeTab === 'use' && options.uses.map((use) => {
                  // Only apply validation when feature blocks are selected
                  const isValid = selectedBlockIds.length > 0 
                    ? isUseValidForIndustry(params.industryId, use.id) 
                    : true;
                  const isRecommended = getRecommendedUses(params.industryId).includes(use.id);
                  
                  return (
                    <div 
                      key={use.id}
                      onClick={() => isValid && handleParamChange('useId', use.id)}
                      className={`relative ${isValid ? '' : 'opacity-40'}`}
                    >
                      {renderDraggableBlock({
                        id: use.id,
                        type: 'use',
                        value: use.id,
                        label: t(`uses.${use.id}`),
                      }, draggedBlock?.value === use.id, params.useId === use.id, !isValid)}
                      {/* Recommended badge - only show when feature blocks are selected */}
                      {selectedBlockIds.length > 0 && isRecommended && isValid && (
                        <div className="absolute top-1 right-6">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        </div>
                      )}
                      {/* Not recommended warning - only show when feature blocks are selected */}
                      {selectedBlockIds.length > 0 && !isValid && (
                        <div className="absolute top-1 right-6">
                          <AlertTriangle className="w-3 h-3 text-orange-400" />
                        </div>
                      )}
                    </div>
                  );
                })}
                
                {/* Feature Blocks Tab Content */}
                {activeTab === 'feature' && (
                  <div className="space-y-3">
                    {/* Plan Toggle */}
                    <div className="flex items-center justify-between p-2 bg-[#111] rounded-lg">
                      <span className="text-xs text-gray-400">{t('promptBuilder.plan') || '方案'}</span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handlePlanSwitch('free')}
                          className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                            planId === 'free' 
                              ? 'bg-gray-700 text-white' 
                              : 'text-gray-500 hover:text-white'
                          }`}
                        >
                          Free
                        </button>
                        <button
                          onClick={() => handlePlanSwitch('pro')}
                          className={`px-2 py-1 rounded text-xs font-medium transition-all flex items-center gap-1 ${
                            planId === 'pro' 
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                              : 'text-gray-500 hover:text-white'
                          }`}
                        >
                          {isPro ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                          Pro
                        </button>
                      </div>
                    </div>
                    
                    {/* Feature Blocks List - Filter by plan */}
                    {featureBlocks
                      .filter((block) => {
                        // Free mode: only show free blocks
                        // Pro mode: only show pro blocks
                        if (planId === 'free') return block.tier === 'free';
                        return block.tier === 'pro';
                      })
                      .map((block) => {
                      const isSelected = selectedBlockIds.includes(block.id);
                      
                      return (
                        <button
                          key={block.id}
                          onClick={() => toggleBlockSelection(block.id)}
                          className={`
                            w-full flex items-start gap-3 p-3 rounded-xl border-2 transition-all text-left
                            ${isSelected 
                              ? 'border-yellow-500 bg-yellow-500/10' 
                              : 'border-gray-700 hover:border-gray-600 hover:bg-gray-800/50'
                            }
                          `}
                        >
                          {/* Checkbox */}
                          <div className={`
                            flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5
                            ${isSelected 
                              ? 'bg-yellow-500 border-yellow-500' 
                              : 'border-gray-600'
                            }
                          `}>
                            {isSelected && (
                              <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-bold text-white text-sm">{t(`blocks.${block.id}.title`) || block.title}</span>
                              {block.tier === 'pro' && (
                                <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase rounded bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                                  Pro
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-gray-400 line-clamp-2">{t(`blocks.${block.id}.description`) || block.description}</p>
                          </div>
                        </button>
                      );
                    })}
                    
                    {/* Applied blocks indicator */}
                    {diagnostics.appliedBlocks.length > 0 && (
                      <div className="flex items-center gap-2 text-xs text-green-400 p-2 bg-green-500/10 rounded-lg">
                        <Sparkles className="w-3 h-3" />
                        <span>{t('promptBuilder.blocksApplied', { count: diagnostics.appliedBlocks.length })}</span>
                      </div>
                    )}
                    
                    {/* Denied blocks warning */}
                    {diagnostics.deniedBlocks.length > 0 && (
                      <div className="p-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                        <div className="flex items-start gap-2">
                          <Lock className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-yellow-500 text-xs font-medium">
                              {t('promptBuilder.upgradeRequired') || '需要升級到 Pro：'}
                            </p>
                            <ul className="text-[10px] text-yellow-400/80">
                              {diagnostics.deniedBlocks.map(b => (
                                <li key={b.id}>• {b.title}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Right: Assembly area */}
          <div className="lg:col-span-8">
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-4 md:p-6">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <GripVertical className="w-5 h-5" />
                {t('promptBuilder.assemblyArea')}
              </h2>
              
              {/* Assembly slots */}
              <div className="space-y-2 md:space-y-4">
                {assembledBlocks.map((blockType, index) => {
                  const colors = blockColors[blockType];
                  const isOver = dragOverSlot === blockType;
                  const selectedBlock = getSelectedBlock(blockType);
                  
                  return (
                    <div
                      key={blockType}
                      draggable
                      onDragStart={(e) => handleAssemblyDragStart(e, index)}
                      onDragOver={(e) => {
                        e.preventDefault();
                        handleDragOver(e, blockType);
                      }}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => {
                        // Check if reordering
                        const assemblyIndex = e.dataTransfer.getData('assembly-index');
                        if (assemblyIndex) {
                          handleAssemblyDrop(e, index);
                        } else {
                          handleDrop(e, blockType);
                        }
                      }}
                      className={`
                        relative flex items-center gap-2 md:gap-4 p-2 md:p-4 rounded-xl cursor-grab active:cursor-grabbing
                        border-2 border-dashed transition-all duration-200
                        ${isOver 
                          ? 'border-yellow-400 bg-yellow-400/10 scale-[1.02]' 
                          : 'border-gray-700 hover:border-gray-600'
                        }
                      `}
                    >
                      {/* Drag handle - hidden on mobile */}
                      <div className="hidden md:flex flex-shrink-0 p-2 bg-gray-800 rounded-lg">
                        <GripVertical className="w-5 h-5 text-gray-500" />
                      </div>
                      
                      {/* Slot label - hidden on mobile */}
                      <div 
                        className="hidden md:flex flex-shrink-0 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider"
                        style={{ backgroundColor: colors.bg + '30', color: colors.bg }}
                      >
                        {blockLabels[blockType]}
                      </div>
                      
                      {/* Currently selected block */}
                      <div
                        className="flex-1 flex items-center gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-3 rounded-xl border-b-4 border-r-4 shadow-lg"
                        style={{
                          backgroundColor: colors.bg,
                          borderBottomColor: colors.border,
                          borderRightColor: colors.border,
                        }}
                      >
                        <div className="flex flex-col min-w-0">
                          <span className="text-white/70 text-xs uppercase tracking-wider">{blockLabels[blockType]}</span>
                          <span className="text-white font-bold text-xs md:text-sm truncate">{selectedBlock.label}</span>
                        </div>
                        {/* Block connector tab */}
                        <div 
                          className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-8 rounded-r-lg hidden lg:block"
                          style={{ backgroundColor: colors.bg }}
                        />
                      </div>
                      
                      {/* Reset button */}
                      <button 
                        className="flex-shrink-0 p-1 md:p-2 text-gray-500 hover:text-red-400 transition-colors"
                        onClick={() => {
                          // Reset to default value
                          const defaultValues: Record<BlockType, string> = {
                            style: 'S01',
                            industry: 'SaaS',
                            use: 'FullLandingPage',
                            feature: '',
                          };
                          const paramKey = blockType === 'style' ? 'styleId' : blockType === 'industry' ? 'industryId' : 'useId';
                          handleParamChange(paramKey as keyof PromptParams, defaultValues[blockType]);
                        }}
                      >
                        <X className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </div>
                  );
                })}
              </div>
              
              {/* Combination preview - hidden on mobile */}
              <div className="hidden md:block mt-6 p-4 bg-[#111] rounded-xl border border-gray-800">
                <div className="flex flex-wrap gap-2 items-center justify-center">
                  {assembledBlocks.map((blockType, index) => {
                    const colors = blockColors[blockType];
                    const selectedBlock = getSelectedBlock(blockType);
                    
                    return (
                      <React.Fragment key={blockType}>
                        <div
                          className="flex items-center px-3 py-2 rounded-lg border-b-3 text-white text-sm font-medium"
                          style={{
                            backgroundColor: colors.bg,
                            borderBottomColor: colors.border,
                          }}
                        >
                          <span className="mr-2 opacity-70 text-xs uppercase">{blockLabels[blockType].slice(0, 3)}</span>
                          <span className="truncate max-w-[120px]">{selectedBlock.label}</span>
                        </div>
                        {index < assembledBlocks.length - 1 && (
                          <div className="w-6 h-1 bg-gray-600 rounded-full" />
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
                
                {/* Animation indicator */}
                <div className="mt-4 flex items-center justify-center gap-2 text-gray-500 text-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#4285F4] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-[#0F9D58] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-[#8E24AA] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                  <span>{t('promptBuilder.assembling')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Preview area with action buttons */}
        <div className="relative group">
          <div className="relative bg-[#1e1e1e] border-2 border-gray-700 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-[#2d2d2d] px-4 md:px-6 py-3 md:py-4 border-b-2 border-gray-700">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-[#4285F4] rounded-md flex items-center justify-center border-b-2 border-[#2b65c9]">
                    <Eye className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-white">{t('promptBuilder.generatedPrompt')}</h2>
                </div>
                {/* Action buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="group relative inline-flex items-center gap-2 px-4 py-2 bg-[#4285F4] border-b-3 border-[#2b65c9] text-white rounded-lg transition-all duration-100 hover:bg-[#5294ff] active:border-b-0 active:translate-y-0.5"
                  >
                    <Copy className="w-4 h-4" />
                    <span className="font-bold text-sm">{t('promptBuilder.copyPrompt')}</span>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="group relative inline-flex items-center gap-2 px-4 py-2 bg-[#0F9D58] border-b-3 border-[#0b7541] text-white rounded-lg transition-all duration-100 hover:bg-[#16b568] active:border-b-0 active:translate-y-0.5"
                  >
                    <Download className="w-4 h-4" />
                    <span className="font-bold text-sm">{t('promptBuilder.downloadMD')}</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Tabs - Show when any backend blocks are selected */}
            {selectedBackendBlocks.length > 0 && (
              <div className="px-4 md:px-6 py-2 bg-[#2a2a2a] border-b border-gray-700">
                <div className="flex gap-1 p-1 bg-[#1a1a1a] rounded-lg">
                  {/* Frontend tab */}
                  <button
                    onClick={() => setActivePromptType('frontend')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      activePromptType === 'frontend'
                        ? 'bg-[#4285F4] text-white shadow-sm'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Code className="w-4 h-4" />
                    {t('promptBuilder.frontendPrompt')}
                  </button>
                  
                  {/* Backend tab */}
                  <button
                    onClick={() => setActivePromptType('backend')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      activePromptType === 'backend'
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Database className="w-4 h-4" />
                    {t('promptBuilder.backendPrompt')}
                    {diagnostics.deniedBlocks.length > 0 && (
                      <Lock className="w-3 h-3 ml-1" />
                    )}
                  </button>
                </div>
              </div>
            )}
            
            <div className="p-4 md:p-6">
              {activePromptType === 'frontend' ? (
                // Frontend prompt
                <div className="bg-[#111111] rounded-lg p-4 md:p-6 border-2 border-gray-800 shadow-inner">
                  <pre className="whitespace-pre-wrap text-xs md:text-sm font-mono text-gray-300 max-h-80 md:max-h-96 overflow-y-auto leading-relaxed">
                    {generatedPrompt}
                  </pre>
                </div>
              ) : (
                // Backend prompt
                <div>
                  {/* Show upgrade notice if there are denied blocks */}
                  {diagnostics.deniedBlocks.length > 0 && !isPro && (
                    <div className="mb-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Lock className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-yellow-500 text-sm font-medium mb-1">
                            {t('promptBuilder.upgradeRequired')}
                          </p>
                          <p className="text-yellow-400/80 text-xs">
                            {diagnostics.deniedBlocks.map(b => b.title).join(', ')}
                          </p>
                          <button
                            onClick={() => handlePlanSwitch('pro')}
                            className="mt-2 text-xs text-yellow-400 hover:text-yellow-300 underline"
                          >
                            {t('promptBuilder.buyNow')}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {backendPrompt ? (
                    // Show combined backend prompt
                    <div className="bg-[#111111] rounded-lg p-4 md:p-6 border-2 border-gray-800 shadow-inner">
                      <pre className="whitespace-pre-wrap text-xs md:text-sm font-mono text-gray-300 max-h-80 md:max-h-96 overflow-y-auto leading-relaxed">
                        {backendPrompt}
                      </pre>
                    </div>
                  ) : (
                    // No backend blocks selected or no accessible content
                    <div className="bg-[#111111] rounded-lg p-6 md:p-8 border-2 border-gray-800 shadow-inner text-center">
                      <Database className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">請選擇後端功能</h3>
                      <p className="text-gray-400 mb-6">請從功能積木區選擇 Authentication System、Backend Architecture 或 User Management</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Toast notification */}
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
      
      {/* Custom scrollbar styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a1a1a;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #444;
        }
      `}</style>
      
      {/* Pro Subscription Modal */}
      {showProModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-3xl p-6 md:p-8 max-w-4xl w-full shadow-2xl relative my-auto bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
            {/* Close button */}
            <button
              onClick={() => setShowProModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-10 p-2 rounded-full hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                {t('promptBuilder.upgradeTitle') || '升級到 Pro'}
              </h2>
              <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto leading-relaxed">
                {t('promptBuilder.upgradeDescription') || '解鎖進階功能，獲得更強大的 Supabase 後端架構建建議'}
              </p>
            </div>
            
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
              {/* Free Plan */}
              <div className="border border-gray-800 rounded-2xl p-6 md:p-8 bg-[#111] flex flex-col hover:border-gray-700 transition-colors">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-300 mb-2">Free</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">NT$0</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {t('promptBuilder.freeFeature1') || '基礎設計提示詞'}
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {t('promptBuilder.freeFeature2') || '身份驗證系統'}
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                      <X className="w-3 h-3" />
                    </div>
                    {t('promptBuilder.freeFeature3') || '後端架構建議'}
                  </li>
                </ul>
                <button
                  onClick={() => setShowProModal(false)}
                  className="w-full py-3 rounded-xl border border-gray-700 text-white font-medium hover:bg-gray-800 transition-all text-sm"
                >
                  {t('promptBuilder.currentPlan') || '目前方案'}
                </button>
              </div>
              
              {/* Pro Plan */}
              <div className="relative border-2 border-purple-500/30 rounded-2xl p-6 md:p-8 bg-gradient-to-b from-purple-500/5 to-purple-500/0 flex flex-col shadow-[0_0_40px_-10px_rgba(168,85,247,0.15)]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-[10px] font-bold text-white tracking-wide uppercase shadow-lg">
                  {t('promptBuilder.recommended') || '推薦'}
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-purple-400 mb-2">Pro</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">NT$2,000</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm text-white font-medium">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {t('promptBuilder.proFeature1') || '完整後端架構建議'}
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {t('promptBuilder.proFeature2') || 'Supabase RLS 政策範例'}
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {t('promptBuilder.proFeature3') || 'Edge Functions 範例程式碼'}
                  </li>
                </ul>
                <button
                  onClick={handleProSubscribe}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold cursor-pointer flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-purple-500/25"
                >
                  <Sparkles className="w-4 h-4" />
                  {t('promptBuilder.buyNow', { defaultValue: '馬上購買' })}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
