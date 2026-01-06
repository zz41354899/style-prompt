import React from 'react';
import { Monitor, Smartphone, Tablet } from 'lucide-react';

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

interface DeviceSwitcherProps {
  deviceMode: DeviceMode;
  setDeviceMode: (mode: DeviceMode) => void;
}

export const DeviceSwitcher: React.FC<DeviceSwitcherProps> = ({
  deviceMode,
  setDeviceMode,
}) => {
  return (
    <>
      {/* Device switch */}
      <div className="hidden md:flex items-center p-1 bg-white/5 border border-white/5 rounded-xl backdrop-blur-sm flex-shrink-0">
        <button
          onClick={() => setDeviceMode('desktop')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
            deviceMode === 'desktop'
              ? 'bg-white/10 text-white shadow-sm shadow-black/20'
              : 'text-white/40 hover:text-white/80 hover:bg-white/5'
          }`}
        >
          <Monitor className="w-4 h-4" />
          <span>Desktop</span>
        </button>
        <div className="w-px h-4 bg-white/5 mx-1" />
        <button
          onClick={() => setDeviceMode('tablet')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
            deviceMode === 'tablet'
              ? 'bg-white/10 text-white shadow-sm shadow-black/20'
              : 'text-white/40 hover:text-white/80 hover:bg-white/5'
          }`}
        >
          <Tablet className="w-4 h-4" />
          <span>Tablet</span>
        </button>
        <div className="w-px h-4 bg-white/5 mx-1" />
        <button
          onClick={() => setDeviceMode('mobile')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
            deviceMode === 'mobile'
              ? 'bg-white/10 text-white shadow-sm shadow-black/20'
              : 'text-white/40 hover:text-white/80 hover:bg-white/5'
          }`}
        >
          <Smartphone className="w-4 h-4" />
          <span>Mobile</span>
        </button>
      </div>
    </>
  );
};
