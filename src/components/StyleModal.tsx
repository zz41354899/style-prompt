import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import { styles } from '../data/styles';
import { styleComponents } from './styles';

export const StyleModal: React.FC = () => {
  const { styleId } = useParams<{ styleId: string }>();
  const navigate = useNavigate();

  const currentStyle = styles.find(s => s.id === styleId);
  const SelectedComponent = styleComponents[styleId || 'S01'];

  const handleClose = () => {
    navigate(`/${styleId}`);
  };

  if (!currentStyle || !SelectedComponent) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={handleClose}
      />
      <div className="relative bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Style Component</h2>
            <p className="text-gray-600">
              {currentStyle.name} — {currentStyle.description}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden bg-gray-50">
          {/* Preview Frame */}
          <div className="h-full p-8">
            <div className="w-full h-full bg-white rounded-lg shadow-inner overflow-auto">
              <div className="min-w-full">
                <SelectedComponent />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              This is the actual React component for the {currentStyle.name} style
            </p>
            <button
              onClick={() => navigate(`/builder/${styleId}`)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <span>Customize in Builder</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
