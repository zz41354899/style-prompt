import { useState } from 'react';
import { Terminal, Cpu, HardDrive, Wifi, Activity, FolderOpen, FileCode, GitBranch, Shield, Mail, Menu, X } from 'lucide-react';

export const S16Terminal = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = deviceMode === 'mobile';
  const isTablet = deviceMode === 'tablet';
  const isDesktop = deviceMode === 'desktop';
  
  return (
    <div className="min-h-full bg-[#0d1117] text-[#00ff41] font-mono relative" style={{ padding: isMobile ? '12px' : isTablet ? '14px' : '16px', fontSize: isMobile ? '12px' : '14px' }}>
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
          {isDesktop ? (
            <div className="flex items-center gap-4 text-[#00ff41]/40 text-xs">
              <span>zsh</span>
              <span>UTF-8</span>
            </div>
          ) : (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1 text-[#00ff41]/60 hover:text-[#00ff41] transition-colors"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>

        {/* Mobile/Tablet Menu */}
        {!isDesktop && menuOpen && (
          <div className="border-b border-[#00ff41]/20 bg-[#161b22] p-4 space-y-2">
            {['Home', 'Features', 'Pricing', 'Docs', 'Contact'].map((item) => (
              <div
                key={item}
                className="text-[#00ff41]/80 hover:text-[#00ff41] cursor-pointer py-2 px-3 hover:bg-[#00ff41]/10 rounded transition-colors text-sm"
              >
                $ cd /{item.toLowerCase()}
              </div>
            ))}
          </div>
        )}

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
          <div className="grid gap-4 py-2" style={{ gridTemplateColumns: (isMobile || isTablet) ? '1fr' : 'repeat(2, 1fr)' }}>
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
          <div className="grid gap-2 py-2" style={{ gridTemplateColumns: (isMobile || isTablet) ? '1fr' : 'repeat(2, 1fr)' }}>
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

          {/* Value Proposition */}
          <div className="mt-6 p-4 border border-[#00ff41]/20 rounded bg-[#00ff41]/5">
            <div className="text-[#8b949e] mb-2">// VALUE_PROPOSITION</div>
            <div className="space-y-2">
              <div><span className="text-[#58a6ff]">$</span> <span className="text-[#00ff41]">echo "Terminal Aesthetics"</span></div>
              <div className="text-[#8b949e]">{'> Where code meets art'}</div>
              <div className="text-[#8b949e]">{'> Minimalist. Powerful. Authentic.'}</div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-4">
            <div className="flex items-center gap-1 mb-3">
              <span className="text-[#58a6ff]">hacker</span>
              <span className="text-white">@</span>
              <span className="text-[#7ee787]">matrix</span>
              <span className="text-white">:</span>
              <span className="text-[#79c0ff]">~</span>
              <span className="text-white">$ </span>
              <span className="text-[#00ff41]">cat features.txt</span>
            </div>
            <div className="p-4 border border-[#00ff41]/20 rounded bg-[#0d1117]">
              <pre className="text-[#00ff41] text-xs">{`
┌─────────────────────────────┐
│ MATRIX TERMINAL FEATURES    │
├─────────────────────────────┤
│ • Real-time syntax highlight │
│ • Command history           │
│ • Custom themes             │
│ • SSH integration           │
│ • Plugin system             │
└─────────────────────────────┘`}</pre>
            </div>
          </div>

          {/* Integrations */}
          <div className="mt-4">
            <div className="flex items-center gap-1 mb-3">
              <span className="text-[#58a6ff]">hacker</span>
              <span className="text-white">@</span>
              <span className="text-[#7ee787]">matrix</span>
              <span className="text-white">:</span>
              <span className="text-[#79c0ff]">~</span>
              <span className="text-white">$ </span>
              <span className="text-[#00ff41]">ls /integrations/</span>
            </div>
            <div className="grid gap-2" style={{ gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)' }}>
              {['Git', 'Docker', 'K8s', 'AWS'].map((item) => (
                <div key={item} className="p-2 border border-[#00ff41]/20 rounded text-center text-[#00ff41]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="mt-4 p-4 border border-[#00ff41]/20 rounded bg-[#00ff41]/5">
            <div className="text-[#8b949e] mb-3">// SYSTEM_METRICS</div>
            <div className="grid gap-4 text-center" style={{ gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)' }}>
              {[
                { value: '10K+', label: 'USERS' },
                { value: '99.9%', label: 'UPTIME' },
                { value: '<1ms', label: 'LATENCY' },
                { value: '∞', label: 'COMMANDS' }
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-[#00ff41] text-lg font-bold">{item.value}</div>
                  <div className="text-[#8b949e] text-xs">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Security */}
          <div className="mt-4">
            <div className="flex items-center gap-1 mb-3">
              <span className="text-[#58a6ff]">hacker</span>
              <span className="text-white">@</span>
              <span className="text-[#7ee787]">matrix</span>
              <span className="text-white">:</span>
              <span className="text-[#79c0ff]">~</span>
              <span className="text-white">$ </span>
              <span className="text-[#00ff41]">sudo security-check</span>
            </div>
            <div className="p-4 border border-[#00ff41]/20 rounded bg-[#0d1117]">
              <div className="flex items-start gap-3">
                <Shield className="w-4 h-4 text-[#58a6ff] mt-0.5" />
                <div className="flex-1">
                  <div className="text-[#00ff41] mb-2">[✓] Security Status: SECURE</div>
                  <div className="space-y-1 text-xs">
                    <div className="text-[#7ee787]">[✓] 256-bit AES encryption</div>
                    <div className="text-[#7ee787]">[✓] SSH key authentication</div>
                    <div className="text-[#7ee787]">[✓] Zero-knowledge architecture</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mt-4">
            <div className="flex items-center gap-1 mb-3">
              <span className="text-[#58a6ff]">hacker</span>
              <span className="text-white">@</span>
              <span className="text-[#7ee787]">matrix</span>
              <span className="text-white">:</span>
              <span className="text-[#79c0ff]">~</span>
              <span className="text-white">$ </span>
              <span className="text-[#00ff41]">pricing --list</span>
            </div>
            <div className="grid gap-3" style={{ gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)' }}>
              {[
                { name: 'FREE', price: '$0', features: ['Basic terminal', 'Limited themes'] },
                { name: 'PRO', price: '$29/mo', features: ['All features', 'Premium support', 'Custom themes'] },
                { name: 'ENTERPRISE', price: 'Custom', features: ['Everything', 'SLA guarantee', 'On-premise'] }
              ].map((plan) => (
                <div key={plan.name} className="p-3 border border-[#00ff41]/20 rounded">
                  <div className="text-[#58a6ff] mb-2">{plan.name}</div>
                  <div className="text-[#00ff41] mb-2">{plan.price}</div>
                  <div className="space-y-1 text-xs text-[#8b949e]">
                    {plan.features.map((feature) => (
                      <div key={feature}>• {feature}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-4 p-4 border border-[#00ff41]/20 rounded bg-[#00ff41]/5">
            <div className="text-[#8b949e] mb-3">// FAQ_DATABASE</div>
            <div className="space-y-3">
              {[
                { q: 'Q: Is it cross-platform?', a: 'A: Yes. Linux, macOS, Windows.' },
                { q: 'Q: Can I customize?', a: 'A: Fully. Colors, fonts, layouts.' },
                { q: 'Q: Open source?', a: 'A: MIT license. Contribute!' }
              ].map((item, i) => (
                <div key={i} className="text-xs">
                  <div className="text-[#58a6ff]">{item.q}</div>
                  <div className="text-[#00ff41]">{item.a}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="mt-4">
            <div className="flex items-center gap-1 mb-3">
              <span className="text-[#58a6ff]">hacker</span>
              <span className="text-white">@</span>
              <span className="text-[#7ee787]">matrix</span>
              <span className="text-white">:</span>
              <span className="text-[#79c0ff]">~</span>
              <span className="text-white">$ </span>
              <span className="text-[#00ff41]">./contact.sh</span>
            </div>
            <div className="p-4 border border-[#00ff41]/20 rounded bg-[#0d1117]">
              <div className="text-[#8b949e] mb-3"># CONTACT_MATRIX</div>
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-4 h-4 text-[#58a6ff]" />
                <span className="text-[#00ff41]">echo "hello@matrix.terminal" | mail</span>
              </div>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Enter message..."
                  className="flex-1 px-3 py-2 bg-[#0d1117] border border-[#00ff41]/20 rounded text-[#00ff41] placeholder-[#8b949e] focus:outline-none focus:border-[#00ff41]"
                />
                <button className="px-4 py-2 border border-[#00ff41]/20 rounded text-[#00ff41] hover:bg-[#00ff41]/10 transition-colors">
                  SEND
                </button>
              </div>
            </div>
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
