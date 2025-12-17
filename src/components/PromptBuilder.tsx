import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { Copy, Download, Eye, Blocks, GripVertical, X } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { assemblePrompt, getAvailableOptions, type PromptParams } from '../lib/promptEngine';
import { Toast } from './Toast';

// Block type definition
type BlockType = 'style' | 'industry' | 'use';

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
};

const blockLabels: Record<BlockType, string> = {
  style: 'Style',
  industry: 'Industry',
  use: 'Use',
};

interface PromptBuilderProps {
  className?: string;
  initialStyleId?: string;
  onStyleChange?: (styleId: string) => void;
}

export const PromptBuilder: React.FC<PromptBuilderProps> = ({ className = '', initialStyleId, onStyleChange }) => {
  // Get currently selected style from URL params
  const { styleId } = useParams<{ styleId: string }>();
  const selectedStyle = styleId || initialStyleId || 'S01';
  
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
  
  // Generate Prompt
  const generatedPrompt = useMemo(() => {
    try {
      return assemblePrompt(params);
    } catch (error) {
      console.error('Error generating prompt:', error);
      return 'Error generating prompt. Please check your selections.';
    }
  }, [params]);
  
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
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setToast({
        message: 'Prompt copied to clipboard!',
        type: 'success'
      });
    } catch (error) {
      console.error('Copy failed:', error);
      setToast({
        message: 'Copy failed, please copy manually.',
        type: 'error'
      });
    }
  };
  
  // Download as file
  const handleDownload = () => {
    const blob = new Blob([generatedPrompt], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `prompt-${params.styleId}-${params.industryId}-${params.useId}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  // Get currently selected block info
  const getSelectedBlock = (type: BlockType): Block => {
    if (type === 'style') {
      const style = options.styles.find(s => s.id === params.styleId);
      return { id: params.styleId, type: 'style', value: params.styleId, label: style?.name || params.styleId };
    } else if (type === 'industry') {
      const industry = options.industries.find(i => i.id === params.industryId);
      return { id: params.industryId, type: 'industry', value: params.industryId, label: industry?.name || params.industryId };
    } else {
      const use = options.uses.find(u => u.id === params.useId);
      return { id: params.useId, type: 'use', value: params.useId, label: use?.name || params.useId };
    }
  };
  
  // Render draggable block
  const renderDraggableBlock = (block: Block, isDragging: boolean = false) => {
    const colors = blockColors[block.type];
    
    return (
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, block)}
        onDragEnd={handleDragEnd}
        className={`
          relative flex items-center gap-2 px-4 py-3 rounded-xl cursor-grab active:cursor-grabbing
          border-b-4 border-r-4 shadow-lg
          transform transition-all duration-150
          hover:-translate-y-1 hover:shadow-xl
          ${isDragging ? 'opacity-50 scale-95' : 'opacity-100'}
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
          Prompt Builder
        </h1>
        <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
          Drag and drop blocks to build your design prompt
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
                Block Library
              </h2>
              
              {/* Category tabs */}
              <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                {(['style', 'industry', 'use'] as BlockType[]).map((type) => (
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
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {activeTab === 'style' && options.styles.map((style) => (
                  <div key={style.id}>
                    {renderDraggableBlock({
                      id: style.id,
                      type: 'style',
                      value: style.id,
                      label: `${style.id} — ${style.name}`,
                    }, draggedBlock?.value === style.id)}
                  </div>
                ))}
                {activeTab === 'industry' && options.industries.map((industry) => (
                  <div key={industry.id}>
                    {renderDraggableBlock({
                      id: industry.id,
                      type: 'industry',
                      value: industry.id,
                      label: industry.name,
                    }, draggedBlock?.value === industry.id)}
                  </div>
                ))}
                {activeTab === 'use' && options.uses.map((use) => (
                  <div key={use.id}>
                    {renderDraggableBlock({
                      id: use.id,
                      type: 'use',
                      value: use.id,
                      label: use.name,
                    }, draggedBlock?.value === use.id)}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right: Assembly area */}
          <div className="lg:col-span-8">
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-4 md:p-6">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <GripVertical className="w-5 h-5" />
                Assembly Area — Drop blocks here
              </h2>
              
              {/* Assembly slots */}
              <div className="space-y-4">
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
                        relative flex items-center gap-4 p-4 rounded-xl cursor-grab active:cursor-grabbing
                        border-2 border-dashed transition-all duration-200
                        ${isOver 
                          ? 'border-yellow-400 bg-yellow-400/10 scale-[1.02]' 
                          : 'border-gray-700 hover:border-gray-600'
                        }
                      `}
                    >
                      {/* Drag handle */}
                      <div className="flex-shrink-0 p-2 bg-gray-800 rounded-lg">
                        <GripVertical className="w-5 h-5 text-gray-500" />
                      </div>
                      
                      {/* Slot label */}
                      <div 
                        className="flex-shrink-0 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider"
                        style={{ backgroundColor: colors.bg + '30', color: colors.bg }}
                      >
                        {blockLabels[blockType]}
                      </div>
                      
                      {/* Currently selected block */}
                      <div
                        className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl border-b-4 border-r-4 shadow-lg"
                        style={{
                          backgroundColor: colors.bg,
                          borderBottomColor: colors.border,
                          borderRightColor: colors.border,
                        }}
                      >
                        <div className="flex flex-col min-w-0">
                          <span className="text-white/70 text-xs uppercase tracking-wider">{blockLabels[blockType]}</span>
                          <span className="text-white font-bold text-sm truncate">{selectedBlock.label}</span>
                        </div>
                        {/* Block connector tab */}
                        <div 
                          className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-8 rounded-r-lg hidden lg:block"
                          style={{ backgroundColor: colors.bg }}
                        />
                      </div>
                      
                      {/* Reset button */}
                      <button 
                        className="flex-shrink-0 p-2 text-gray-500 hover:text-red-400 transition-colors"
                        onClick={() => {
                          // Reset to default value
                          const defaultValues: Record<BlockType, string> = {
                            style: 'S01',
                            industry: 'SaaS',
                            use: 'FullLandingPage',
                          };
                          const paramKey = blockType === 'style' ? 'styleId' : blockType === 'industry' ? 'industryId' : 'useId';
                          handleParamChange(paramKey as keyof PromptParams, defaultValues[blockType]);
                        }}
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  );
                })}
              </div>
              
              {/* Combination preview */}
              <div className="mt-6 p-4 bg-[#111] rounded-xl border border-gray-800">
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
                  <span>Assembling...</span>
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
                  <h2 className="text-lg md:text-xl font-bold text-white">Generated Prompt</h2>
                </div>
                {/* Action buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="group relative inline-flex items-center gap-2 px-4 py-2 bg-[#4285F4] border-b-3 border-[#2b65c9] text-white rounded-lg transition-all duration-100 hover:bg-[#5294ff] active:border-b-0 active:translate-y-0.5"
                  >
                    <Copy className="w-4 h-4" />
                    <span className="font-bold text-sm">Copy Prompt</span>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="group relative inline-flex items-center gap-2 px-4 py-2 bg-[#0F9D58] border-b-3 border-[#0b7541] text-white rounded-lg transition-all duration-100 hover:bg-[#16b568] active:border-b-0 active:translate-y-0.5"
                  >
                    <Download className="w-4 h-4" />
                    <span className="font-bold text-sm">Download MD</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 md:p-6">
              <div className="bg-[#111111] rounded-lg p-4 md:p-6 border-2 border-gray-800 shadow-inner">
                <pre className="whitespace-pre-wrap text-xs md:text-sm font-mono text-gray-300 max-h-80 md:max-h-96 overflow-y-auto leading-relaxed">
                  {generatedPrompt}
                </pre>
              </div>
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
    </div>
  );
};
