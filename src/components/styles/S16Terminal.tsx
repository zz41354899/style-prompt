import { Terminal, Cpu, HardDrive, Wifi, Activity, FolderOpen, FileCode, GitBranch } from 'lucide-react';

export const S16Terminal = () => {
  return (
    <div className="min-h-full bg-[#0d1117] text-[#00ff41] p-3 md:p-4 font-mono text-xs md:text-sm relative">
      {/* 掃描線效果 */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.1) 2px, rgba(0,255,65,0.1) 4px)'
        }}
      />
      
      {/* 終端機視窗 */}
      <div className="relative border border-[#00ff41]/20 rounded-lg overflow-hidden bg-[#0d1117]/90 backdrop-blur">
        {/* 標題列 */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#00ff41]/20 bg-[#161b22]">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-110 transition-all cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:brightness-110 transition-all cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:brightness-110 transition-all cursor-pointer" />
            </div>
            <div className="flex items-center gap-2 text-[#00ff41]/60 text-xs">
              <Terminal className="w-4 h-4" />
              <span>hacker@matrix:~</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[#00ff41]/40 text-xs">
            <span>zsh</span>
            <span>UTF-8</span>
          </div>
        </div>

        {/* 終端機內容 */}
        <div className="p-5 space-y-4 min-h-[400px]">
          {/* 歡迎訊息 */}
          <div className="text-[#00ff41]/50 text-xs">
            Last login: {new Date().toLocaleDateString('zh-TW')} on ttys001
          </div>
          
          {/* ASCII Art */}
          <div className="py-2">
            <pre className="text-[#00ff41] text-xs leading-tight">{`
  ██╗  ██╗ █████╗  ██████╗██╗  ██╗███████╗██████╗ 
  ██║  ██║██╔══██╗██╔════╝██║ ██╔╝██╔════╝██╔══██╗
  ███████║███████║██║     █████╔╝ █████╗  ██████╔╝
  ██╔══██║██╔══██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗
  ██║  ██║██║  ██║╚██████╗██║  ██╗███████╗██║  ██║
  ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝`}</pre>
          </div>

          {/* 命令行 1 */}
          <div>
            <div className="flex items-center gap-1">
              <span className="text-[#58a6ff]">hacker</span>
              <span className="text-white">@</span>
              <span className="text-[#7ee787]">matrix</span>
              <span className="text-white">:</span>
              <span className="text-[#79c0ff]">~</span>
              <span className="text-white">$ </span>
              <span className="text-[#00ff41]">neofetch --style</span>
            </div>
          </div>

          {/* 系統資訊面板 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
            <div className="space-y-3">
              {[
                { icon: <Cpu className="w-4 h-4" />, label: 'CPU', value: 'Design Core i9', color: '#58a6ff' },
                { icon: <HardDrive className="w-4 h-4" />, label: 'Storage', value: '∞ TB Creative', color: '#7ee787' },
                { icon: <Activity className="w-4 h-4" />, label: 'Uptime', value: '24/7 Online', color: '#ff7b72' },
                { icon: <Wifi className="w-4 h-4" />, label: 'Network', value: 'Matrix Connected', color: '#d2a8ff' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span style={{ color: item.color }}>{item.icon}</span>
                  <span className="text-[#8b949e] w-20">{item.label}:</span>
                  <span className="text-[#00ff41]">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="border border-[#00ff41]/20 rounded p-4 bg-[#00ff41]/5">
              <div className="text-xs text-[#8b949e] mb-3">// SYSTEM_MONITOR</div>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>CPU</span>
                    <span>73%</span>
                  </div>
                  <div className="h-2 bg-[#21262d] rounded-full overflow-hidden">
                    <div className="h-full w-[73%] bg-gradient-to-r from-[#00ff41] to-[#58a6ff] rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>MEM</span>
                    <span>45%</span>
                  </div>
                  <div className="h-2 bg-[#21262d] rounded-full overflow-hidden">
                    <div className="h-full w-[45%] bg-gradient-to-r from-[#7ee787] to-[#00ff41] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 命令行 2 */}
          <div>
            <div className="flex items-center gap-1">
              <span className="text-[#58a6ff]">hacker</span>
              <span className="text-white">@</span>
              <span className="text-[#7ee787]">matrix</span>
              <span className="text-white">:</span>
              <span className="text-[#79c0ff]">~</span>
              <span className="text-white">$ </span>
              <span className="text-[#00ff41]">ls -la ./skills</span>
            </div>
          </div>

          {/* 檔案列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-2">
            {[
              { icon: <FolderOpen className="w-4 h-4" />, name: 'terminal-aesthetic/', type: 'dir', color: '#58a6ff' },
              { icon: <FileCode className="w-4 h-4" />, name: 'hacker-style.css', type: 'file', color: '#7ee787' },
              { icon: <FileCode className="w-4 h-4" />, name: 'matrix-theme.js', type: 'file', color: '#ff7b72' },
              { icon: <GitBranch className="w-4 h-4" />, name: 'monospace-font/', type: 'dir', color: '#d2a8ff' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded hover:bg-[#00ff41]/5 transition-colors">
                <span style={{ color: item.color }}>{item.icon}</span>
                <span className={item.type === 'dir' ? 'text-[#58a6ff]' : 'text-[#00ff41]'}>{item.name}</span>
              </div>
            ))}
          </div>

          {/* 當前命令行 */}
          <div className="flex items-center gap-1 pt-2">
            <span className="text-[#58a6ff]">hacker</span>
            <span className="text-white">@</span>
            <span className="text-[#7ee787]">matrix</span>
            <span className="text-white">:</span>
            <span className="text-[#79c0ff]">~</span>
            <span className="text-white">$ </span>
            <span className="w-2 h-5 bg-[#00ff41] animate-pulse" />
          </div>
        </div>
      </div>

      {/* 狀態列 */}
      <div className="mt-3 flex justify-between items-center text-[#00ff41]/40 text-xs px-2">
        <div className="flex items-center gap-4">
          <span>PID: 1337</span>
          <span>TTY: pts/0</span>
          <span>SHELL: zsh</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse" />
          <span>CONNECTED</span>
        </div>
      </div>
    </div>
  );
};
