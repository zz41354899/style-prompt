import { Leaf, Sprout, TreeDeciduous, Wind, Shield, Check, Mail } from 'lucide-react';

export const S12NatureOrganic = () => {
  return (
    <div className="min-h-full p-4 md:p-8 font-sans relative overflow-hidden"
      style={{ backgroundColor: '#F7F4EE' }}
    >
      {/* 有機形狀背景裝飾 */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E8E2D5] opacity-50 -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#D4E2C8] opacity-30 translate-y-1/3 -translate-x-1/4" />
      
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center mb-10 md:mb-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#8FA67A] to-[#5D7052] rounded-full flex items-center justify-center">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-xl text-[#3D4A35] font-medium">Natura</span>
            <div className="text-[10px] tracking-[0.2em] text-[#8FA67A] uppercase">Organic Design</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-8 text-sm text-[#6B7B5E]">
          {['Home', 'Products', 'Philosophy', 'Contact'].map((item, i) => (
            <span key={i} className="cursor-default">
              {item}
            </span>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-10 md:mb-20">
        <div className="md:col-span-6 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-[#8FA67A] mb-6">
            <Wind className="w-4 h-4" />
            <span className="text-xs tracking-[0.2em] uppercase">Sustainable Living</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-[#3D4A35] leading-[1.2] mb-6 md:mb-8">
            With Nature<br />
            <span className="text-[#8FA67A] font-normal">Harmonious Coexistence</span>
          </h1>
          <p className="text-[#6B7B5E] leading-[1.9] mb-10 max-w-md">
            Embrace the warmth of the earth, feel the flowing beauty of organic curves.
            Every design originates from nature's inspiration, every choice is a commitment to the planet.
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-[#5D7052] to-[#6B7B5E] text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-[#5D7052]/20 transition-all">
              Explore Nature
            </button>
            <button className="px-8 py-4 border border-[#8FA67A] text-[#5D7052] rounded-full text-sm font-medium hover:bg-[#8FA67A]/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="hidden md:block md:col-span-6 relative">
          {/* 有機形狀裝飾 */}
          <div className="relative w-full aspect-square">
            <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-[#D4E2C8] rounded-[40%_60%_70%_30%/40%_50%_60%_50%]" />
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 bg-[#C4A77D]/30 rounded-[60%_40%_30%_70%/50%_60%_40%_50%]" />
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[#8FA67A]/20 rounded-full" />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative z-10 mb-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-[#8FA67A] mb-6">
            <Leaf className="w-5 h-5" />
            <span className="text-xs tracking-[0.2em] uppercase">Our Promise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-[#3D4A35] leading-[1.2] mb-8">
            Grounded in Nature<br />
            <span className="text-[#8FA67A] font-normal">Designed for Life</span>
          </h2>
          <p className="text-[#6B7B5E] leading-[1.9] max-w-3xl mx-auto">
            We believe in creating spaces that nurture the human spirit. 
            Our organic approach brings the calming essence of nature into every design,
            fostering wellbeing and connection.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Biophilic Design', desc: 'Connecting people with nature through design', color: '#8FA67A' },
            { title: 'Natural Materials', desc: 'Sustainably sourced, always earth-friendly', color: '#C4A77D' },
            { title: 'Harmonious Spaces', desc: 'Creating balance between form and function', color: '#5D7052' }
          ].map((item, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-4" style={{ backgroundColor: `${item.color}20` }} />
              <h3 className="text-lg text-[#3D4A35] mb-3 font-medium">{item.title}</h3>
              <p className="text-sm text-[#6B7B5E]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Living Walls', desc: 'Vertical gardens that breathe life into spaces', detail: 'Natural air purification' },
            { title: 'Earth Tones', desc: 'Colors inspired by soil, stone, and sky', detail: 'Calming psychological effects' },
            { title: 'Organic Forms', desc: 'Shapes that echo nature\'s curves', detail: 'Fluid, flowing designs' },
            { title: 'Sustainable Materials', desc: 'Bamboo, cork, and reclaimed wood', detail: 'Zero waste philosophy' }
          ].map((item, i) => (
            <div key={i} className="bg-white/60 backdrop-blur-sm p-8 rounded-[2rem]">
              <h3 className="text-lg text-[#3D4A35] mb-3 font-medium">{item.title}</h3>
              <p className="text-sm text-[#6B7B5E] mb-2">{item.desc}</p>
              <p className="text-xs text-[#8FA67A]">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="relative z-10 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-[#3D4A35] mb-4">Eco Partners</h2>
          <p className="text-sm text-[#6B7B5E]">Working with nature-forward brands</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Patagonia', 'Whole Earth', 'TerraCycle', 'Ecosia'].map((item) => (
            <div key={item} className="bg-white/80 backdrop-blur-sm p-6 rounded-[1.5rem] text-center">
              <div className="text-sm text-[#5D7052] font-medium">{item}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics */}
      <section className="relative z-10 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '10K+', label: 'Happy Clients', color: '#8FA67A' },
            { value: '500', label: 'Projects', color: '#C4A77D' },
            { value: '100%', label: 'Sustainable', color: '#5D7052' },
            { value: '24/7', label: 'Nature Support', color: '#6B7B5E' }
          ].map((item, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm p-6 rounded-[1.5rem] text-center">
              <div className="text-3xl font-light mb-2" style={{ color: item.color }}>{item.value}</div>
              <div className="text-xs text-[#6B7B5E] uppercase tracking-[0.15em]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Security */}
      <section className="relative z-10 mb-16">
        <div className="bg-gradient-to-r from-[#D4E2C8] to-[#E8E2D5] p-10 rounded-[2rem]">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#5D7052]" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-light text-[#3D4A35] mb-4">Earth-Safe Protection</h2>
              <p className="text-[#6B7B5E] leading-[1.9] mb-6">
                Your data is protected with the same care we give to the planet. 
                We use renewable energy for our servers and plant a tree for every new client.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  'Green hosting',
                  'Carbon neutral',
                  'Privacy first'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#8FA67A]" />
                    <span className="text-sm text-[#5D7052]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-[#3D4A35] mb-4">Investment in Nature</h2>
          <p className="text-sm text-[#6B7B5E]">Plans that grow with you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Seedling', price: '$49/mo', features: ['Basic designs', 'Email support', '3 revisions'] },
            { name: 'Growth', price: '$149/mo', features: ['All features', 'Priority support', 'Unlimited revisions', 'Source files'] },
            { name: 'Forest', price: '$399/mo', features: ['Everything', 'Dedicated designer', 'Workshops', 'Planting initiative'] }
          ].map((plan) => (
            <div key={plan.name} className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] text-center hover:bg-white transition-colors">
              <h3 className="text-lg text-[#3D4A35] mb-3 font-medium">{plan.name}</h3>
              <div className="text-3xl font-light text-[#5D7052] mb-6">{plan.price}</div>
              <ul className="space-y-3 mb-8 text-sm text-[#6B7B5E]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center gap-2">
                    <Leaf className="w-4 h-4 text-[#8FA67A]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-[#5D7052] to-[#6B7B5E] text-white rounded-full text-sm font-medium hover:shadow-lg transition-all">
                Start Growing
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-[#3D4A35] mb-4">Natural Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: 'How sustainable are your materials?', a: 'All materials are 100% sustainably sourced with full traceability.' },
            { q: 'Can you work with existing spaces?', a: 'Yes! We transform any space into a natural oasis.' },
            { q: 'What is your design process?', a: 'We begin with understanding your connection to nature.' },
            { q: 'Do you offer maintenance?', a: 'We provide ongoing care for all living installations.' }
          ].map((item, i) => (
            <div key={i} className="bg-white/60 backdrop-blur-sm p-6 rounded-[1.5rem]">
              <h3 className="text-lg text-[#3D4A35] mb-3 font-medium flex items-center gap-2">
                <Sprout className="w-4 h-4 text-[#8FA67A]" />
                {item.q}
              </h3>
              <p className="text-sm text-[#6B7B5E]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-10 mb-16">
        <div className="bg-gradient-to-r from-[#5D7052] to-[#6B7B5E] p-10 rounded-[2rem] text-center text-white">
          <Mail className="w-8 h-8 mx-auto mb-4 text-[#B8C9A9]" />
          <h2 className="text-2xl font-light mb-4">Connect with Nature</h2>
          <p className="text-[#B8C9A9] mb-8">Ready to bring organic harmony to your space?</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 px-6 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-[#B8C9A9] focus:outline-none focus:border-white"
            />
            <button className="px-8 py-3 bg-white text-[#5D7052] rounded-full text-sm font-medium hover:shadow-lg transition-all">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 bg-gradient-to-r from-[#5D7052] to-[#6B7B5E] text-white rounded-[2rem] p-10 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { num: '100%', label: 'Natural Materials', icon: <Leaf className="w-5 h-5" /> },
            { num: '50+', label: 'Plant Inspired', icon: <Sprout className="w-5 h-5" /> },
            { num: '0', label: 'Carbon Footprint', icon: <Wind className="w-5 h-5" /> },
            { num: '∞', label: 'Sustainable Cycle', icon: <TreeDeciduous className="w-5 h-5" /> },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center mb-3 text-[#B8C9A9]">{item.icon}</div>
              <div className="text-4xl font-light mb-2">{item.num}</div>
              <div className="text-sm text-[#B8C9A9]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#6B7B5E] pt-6 border-t border-[#E0D8C8]">
        <span>© 2024 Natura Design</span>
        <div className="flex items-center gap-6">
          {[Leaf, Sprout, TreeDeciduous].map((Icon, i) => (
            <Icon key={i} className="w-5 h-5 hover:text-[#5D7052] transition-colors cursor-pointer" />
          ))}
        </div>
        <span className="text-xs tracking-[0.15em] uppercase">Made with Nature</span>
      </footer>
    </div>
  );
};
