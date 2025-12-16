import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface PreviewFrameProps {
  children: React.ReactNode;
  width: number;
  height: number;
}

export const PreviewFrame = ({ children, width, height }: PreviewFrameProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeBody, setIframeBody] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      const doc = iframe.contentDocument;
      if (!doc) return;

      // 複製主文檔的樣式到 iframe
      const styles = document.querySelectorAll('style, link[rel="stylesheet"]');
      styles.forEach((style) => {
        const clone = style.cloneNode(true);
        doc.head.appendChild(clone);
      });

      // 設置 iframe body 樣式
      doc.body.style.margin = '0';
      doc.body.style.padding = '0';
      doc.body.style.overflow = 'auto';
      doc.body.style.height = '100%';
      doc.documentElement.style.height = '100%';

      setIframeBody(doc.body);
    };

    iframe.addEventListener('load', handleLoad);
    
    // 手動觸發一次，因為 iframe 可能已經載入
    if (iframe.contentDocument?.readyState === 'complete') {
      handleLoad();
    }

    return () => {
      iframe.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        border: 'none',
        background: 'white',
      }}
      title="Preview"
    >
      {iframeBody && createPortal(children, iframeBody)}
    </iframe>
  );
};
