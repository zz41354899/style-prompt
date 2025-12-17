import { useState, useEffect } from 'react';

type AppMode = 'preview' | 'builder';

interface UrlState {
  styleId: string;
  mode: AppMode;
}

// Valid style IDs
const VALID_STYLE_IDS = [
  'S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10',
  'S11', 'S12', 'S13', 'S14', 'S15', 'S16', 'S17', 'S18'
];

export function useUrlState() {
  const [urlState, setUrlState] = useState<UrlState>(() => {
    // Initialize from URL or use defaults
    if (typeof window === 'undefined') {
      return { styleId: 'S01', mode: 'preview' };
    }
    
    const params = new URLSearchParams(window.location.search);
    const styleId = params.get('style') || 'S01';
    const mode = params.get('mode') as AppMode;
    
    // Validate style ID
    const validStyleId = VALID_STYLE_IDS.includes(styleId) ? styleId : 'S01';
    const validMode = (mode === 'preview' || mode === 'builder') ? mode : 'preview';
    
    return {
      styleId: validStyleId,
      mode: validMode,
    };
  });

  // Update URL when state changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const params = new URLSearchParams();
    params.set('style', urlState.styleId);
    params.set('mode', urlState.mode);
    
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [urlState]);

  // Handle browser back/forward
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const styleId = params.get('style') || 'S01';
      const mode = params.get('mode') as AppMode;
      
      const validStyleId = VALID_STYLE_IDS.includes(styleId) ? styleId : 'S01';
      const validMode = (mode === 'preview' || mode === 'builder') ? mode : 'preview';
      
      setUrlState({
        styleId: validStyleId,
        mode: validMode,
      });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const updateStyleId = (styleId: string) => {
    const validStyleId = VALID_STYLE_IDS.includes(styleId) ? styleId : 'S01';
    setUrlState(prev => ({ ...prev, styleId: validStyleId }));
  };

  const updateMode = (mode: AppMode) => {
    const validMode = (mode === 'preview' || mode === 'builder') ? mode : 'preview';
    setUrlState(prev => ({ ...prev, mode: validMode }));
  };

  const updateState = (styleId: string, mode: AppMode) => {
    const validStyleId = VALID_STYLE_IDS.includes(styleId) ? styleId : 'S01';
    const validMode = (mode === 'preview' || mode === 'builder') ? mode : 'preview';
    setUrlState({ styleId: validStyleId, mode: validMode });
  };

  return {
    styleId: urlState.styleId,
    mode: urlState.mode,
    updateStyleId,
    updateMode,
    updateState,
  };
}
