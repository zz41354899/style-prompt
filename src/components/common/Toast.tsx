import React, { useEffect } from 'react';
import { Check, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ 
  message, 
  type, 
  onClose, 
  duration = 3000 
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3 px-4 py-3 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[250px] animate-in slide-in-from-bottom-2">
      {type === 'success' ? (
        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
      ) : (
        <X className="w-5 h-5 text-red-500 flex-shrink-0" />
      )}
      <span className="text-sm text-gray-800">{message}</span>
      <button
        onClick={onClose}
        className="ml-auto text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
