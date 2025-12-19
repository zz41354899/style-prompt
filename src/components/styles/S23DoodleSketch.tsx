import { useState, useEffect } from 'react';
import { Menu, X, Palette, ArrowRight, Zap, PenTool, Coffee } from 'lucide-react';

// i18n translations
const translations = {
  en: {
    // Navigation
    logo: "CrayonUI",
    nav: {
      features: "Features",
      pricing: "Pricing",
      about: "About",
      contact: "Contact"
    },
    cta: {
      getStarted: "Get Started"
    },
    // Hero Section
    hero: {
      badge: "✨ Playful & Creative",
      title: "Draw Your Dreams",
      subtitle: "Unleash your creativity with our whimsical design system. Perfect for apps that want to bring joy and playfulness to their users.",
      primaryAction: "Start Drawing",
      secondaryAction: "View Gallery"
    },
    // Features Section
    features: {
      title: "Creative Features",
      subtitle: "Everything you need to make your app delightful",
      items: [
        {
          icon: "pen",
          title: "Hand-Drawn Icons",
          description: "Custom crafted icons that feel personal and warm"
        },
        {
          icon: "palette",
          title: "Playful Colors",
          description: "Vibrant color palette that brings joy to every interaction"
        },
        {
          icon: "coffee",
          title: "Cozy Typography",
          description: "Friendly fonts that make reading feel like a warm hug"
        }
      ]
    },
    // Testimonials Section
    testimonials: {
      title: "Loved by Creative Teams",
      items: [
        {
          quote: "CrayonUI transformed our kids app. Children love the playful interface!",
          author: "Sarah Chen",
          role: "Product Designer at HappyKids"
        },
        {
          quote: "Finally a design system that doesn't take itself too seriously. Our users adore it!",
          author: "Mike Johnson",
          role: "Creative Director at FunCorp"
        },
        {
          quote: "The whimsical style increased user engagement by 40%. Simply magical!",
          author: "Lisa Park",
          role: "UX Lead at Playful"
        }
      ]
    },
    // Pricing Section
    pricing: {
      title: "Choose Your Creative Plan",
      subtitle: "Flexible pricing for projects of all sizes",
      plans: [
        {
          name: "Starter",
          price: "Free",
          features: ["Basic Icons", "5 Colors", "1 Font Family"],
          highlighted: false
        },
        {
          name: "Creator",
          price: "$29/mo",
          features: ["All Icons", "Unlimited Colors", "3 Font Families", "Sketch Assets"],
          highlighted: true
        },
        {
          name: "Studio",
          price: "$99/mo",
          features: ["Everything", "Custom Icons", "Brand Colors", "Priority Support"],
          highlighted: false
        }
      ]
    },
    // Footer
    footer: {
      tagline: "Made with ❤️ and lots of crayons",
      copyright: "© 2024 CrayonUI. All rights reserved.",
      links: {
        product: ["Features", "Pricing", "Examples"],
        company: ["About", "Blog", "Careers"],
        connect: ["Twitter", "Dribbble", "GitHub"]
      }
    }
  },
  zh: {
    // Navigation
    logo: "蠟筆UI",
    nav: {
      features: "功能",
      pricing: "價格",
      about: "關於",
      contact: "聯絡"
    },
    cta: {
      getStarted: "開始使用"
    },
    // Hero Section
    hero: {
      badge: "✨ 有趣又創意",
      title: "畫出你的夢想",
      subtitle: "用我們的趣味設計系統釋放你的創造力。讓你的應用程式充滿歡樂和玩心。",
      primaryAction: "開始繪畫",
      secondaryAction: "查看畫廊"
    },
    // Features Section
    features: {
      title: "創意功能",
      subtitle: "讓你的應用程式充滿魅力所需的一切",
      items: [
        {
          icon: "pen",
          title: "手繪圖示",
          description: "精心製作的圖示，感覺親切又溫暖"
        },
        {
          icon: "palette",
          title: "趣味色彩",
          description: "充滿活力的色調，為每次互動帶來歡樂"
        },
        {
          icon: "coffee",
          title: "舒適字體",
          description: "友善的字體，讓閱讀感覺像溫暖的擁抱"
        }
      ]
    },
    // Testimonials Section
    testimonials: {
      title: "創意團隊的最愛",
      items: [
        {
          quote: "CrayonUI 改變了我們的兒童應用。孩子們都愛上了這個有趣的介面！",
          author: "陳小美",
          role: "HappyKids 產品設計師"
        },
        {
          quote: "終於有個不那麼嚴肅的設計系統了。我們的用戶都超愛它！",
          author: "張大偉",
          role: "FunCorp 創意總監"
        },
        {
          quote: "這個奇妙的風格讓用戶參與度提高了 40%。真是太神奇了！",
          author: "李小雅",
          role: "Playful UX 主管"
        }
      ]
    },
    // Pricing Section
    pricing: {
      title: "選擇你的創意方案",
      subtitle: "適合各種規模專案的靈活定價",
      plans: [
        {
          name: "入門版",
          price: "免費",
          features: ["基本圖示", "5 種顏色", "1 個字體家族"],
          highlighted: false
        },
        {
          name: "創作者",
          price: "$29/月",
          features: ["所有圖示", "無限顏色", "3 個字體家族", "素描素材"],
          highlighted: true
        },
        {
          name: "工作室",
          price: "$99/月",
          features: ["所有功能", "自訂圖示", "品牌顏色", "優先支援"],
          highlighted: false
        }
      ]
    },
    // Footer
    footer: {
      tagline: "用 ❤️ 和很多蠟筆製作",
      copyright: "© 2024 蠟筆UI。保留所有權利。",
      links: {
        product: ["功能", "價格", "範例"],
        company: ["關於", "部落格", "工作機會"],
        connect: ["Twitter", "Dribbble", "GitHub"]
      }
    }
  }
};

// SVG Filter for crayon texture
const CrayonFilter = () => (
  <svg width="0" height="0">
    <filter id="crayon-texture">
      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
      <feDiffuseLighting in="noise" lightingColor="white" surfaceScale="1">
        <feDistantLight azimuth="45" elevation="60" />
      </feDiffuseLighting>
      <feComponentTransfer>
        <feFuncA type="discrete" tableValues="0 0.05 0.05 0.1 0.1 0.05 0.05 0" />
      </feComponentTransfer>
      <feComposite operator="over" in2="SourceGraphic" />
    </filter>
  </svg>
);

export const S23DoodleSketch = ({ deviceMode, language = 'en' }: { deviceMode?: 'desktop' | 'tablet' | 'mobile', language?: 'en' | 'zh' }) => {
  const isMobile = deviceMode === 'mobile';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];
  
  // Load Google Fonts
  useEffect(() => {
    // Check if fonts are already loaded
    const existingLink = document.querySelector('link[href*="fonts.googleapis.com/css2?family=Patrick+Hand"]');
    if (existingLink) return;
    
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Patrick+Hand:wght@400;700&family=Comic+Neue:wght@400;700&family=Gaegu:wght@400;700&family=Caveat:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);
  
  // Icon mapping
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'pen': return <PenTool className="w-6 h-6" />;
      case 'palette': return <Palette className="w-6 h-6" />;
      case 'coffee': return <Coffee className="w-6 h-6" />;
      default: return <PenTool className="w-6 h-6" />;
    }
  };
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFEF7', fontFamily: "'Patrick Hand', 'Gaegu', cursive" }}>
      {/* SVG Filter for crayon texture */}
      <CrayonFilter />
      
      {/* Crayon paper texture overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,182,193,0.03) 10px, rgba(255,182,193,0.03) 20px),
                           repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(173,216,230,0.03) 10px, rgba(173,216,230,0.03) 20px)`,
          filter: 'url(#crayon-texture)'
        }} />
      </div>
      
      {/* Soft crayon decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#FFB347] opacity-20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-[#A8E6CF] opacity-20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-[#FFDAB9] opacity-10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="relative z-50 border-b-4" style={{ borderColor: '#5A5A5A', backgroundColor: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(8px)' }}>
        <div className={`${isMobile ? 'px-4 py-3' : 'px-6 py-4'} max-w-7xl mx-auto flex items-center justify-between`}>
          <div className="flex items-center gap-4">
            {/* Crayon logo container */}
            <div className="relative">
              <div className="w-16 h-16 bg-[#FF6B9D] rounded-full flex items-center justify-center" 
                   style={{ 
                     boxShadow: '0 6px 16px rgba(255,107,157,0.3)',
                     filter: 'url(#crayon-texture)'
                   }}>
                <PenTool className="w-8 h-8 text-white" />
              </div>
              {/* Soft highlight */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FECA57] opacity-30 rounded-full blur-md" />
            </div>
            <h1 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold`} style={{ color: '#3D3D3D' }}>
              {t.logo}
            </h1>
          </div>
          {/* Desktop Navigation */}
          <nav className={`${isMobile ? 'hidden' : 'flex'} items-center gap-8`}>
            {Object.values(t.nav).map((item, i) => (
              <a 
                key={i} 
                href="#" 
                className={`${isMobile ? 'text-base' : 'text-lg'} font-medium hover:text-[#FF6B9D] transition-colors relative group`}
                style={{ color: '#5A5A5A' }}
              >
                {item}
                {/* Soft underline on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#FF6B9D] transition-all duration-300 group-hover:w-full" 
                  style={{ height: '3px', borderRadius: '2px' }} />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            {isMobile && (
              <button
                className="p-2 bg-[#FFE6E6] rounded-full hover:scale-110 transition-transform"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" style={{ color: '#5A5A5A' }} />
                ) : (
                  <Menu className="w-6 h-6" style={{ color: '#5A5A5A' }} />
                )}
              </button>
            )}
            {/* Desktop buttons */}
            {!isMobile && (
              <>
                {/* Palette button with crayon style */}
                <button className="p-3 bg-[#A8E6CF] rounded-full hover:scale-110 transition-transform group"
                        style={{ boxShadow: '0 4px 12px rgba(168,230,207,0.4)' }}>
                  <Palette className="w-6 h-6 text-[#3D3D3D] group-hover:text-[#FF6B9D]" />
                </button>
                
                {/* CTA button with crayon style */}
                <button className={`px-6 py-3 bg-[#FF6B9D] text-white font-bold rounded-full hover:translate-x-1 hover:translate-y-1 transition-all`}
                        style={{ 
                          boxShadow: '0 6px 16px rgba(255,107,157,0.3)',
                          fontFamily: "'Comic Neue', cursive"
                        }}>
                  {t.cta.getStarted}
                </button>
              </>
            )}
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-full left-0 right-0 p-6" 
               style={{ backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', borderTop: '4px solid #5A5A5A' }}>
            <nav className="flex flex-col gap-4">
              {Object.values(t.nav).map((item, i) => (
                <a key={i} href="#" className="text-lg font-medium" style={{ color: '#5A5A5A' }}>{item}</a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className={`relative z-10 ${isMobile ? 'p-4' : 'p-6'}`}>
        {/* Hero Section */}
        <section className={`max-w-7xl mx-auto ${isMobile ? 'mb-6' : 'mb-12'}`}>
          <div className="relative">
            {/* Soft pastel background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFDAB9] via-white to-[#E6F3FF] -z-10 rounded-3xl" 
                 style={{ filter: 'url(#crayon-texture)', opacity: 0.5 }} />
            
            <div className={`relative ${isMobile ? 'p-6' : 'p-12'}`}>
              {/* Badge with soft crayon style */}
              <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 transform -rotate-2"
                   style={{ 
                     backgroundColor: '#66D9EF',
                     color: '#3D3D3D',
                     borderRadius: '20px',
                     boxShadow: '0 4px 12px rgba(102,217,239,0.3)',
                     fontFamily: "'Comic Neue', cursive"
                   }}>
                <Zap className="w-5 h-5" />
                <span className="font-bold">{t.hero.badge}</span>
              </div>
              
              {/* Main title with crayon style */}
              <h2 className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-bold mb-6 leading-tight`}
                  style={{ 
                    color: '#3D3D3D',
                    textShadow: '2px 2px 4px rgba(255,107,157,0.2)',
                    transform: 'rotate(-0.5deg)'
                  }}>
                {t.hero.title}
              </h2>
              
              <p className={`${isMobile ? 'text-lg' : 'text-xl'} mb-8 max-w-2xl`} style={{ color: '#5A5A5A', lineHeight: 1.6 }}>
                {t.hero.subtitle}
              </p>
              
              <div className={`${isMobile ? 'flex flex-col' : 'flex flex-col sm:flex-row'} gap-4`}>
                {/* Primary action with crayon button */}
                <button className={`group relative ${isMobile ? 'w-full px-6 py-3 text-base' : 'px-8 py-4'} text-white font-bold text-lg rounded-full transition-all hover:translate-x-1 hover:translate-y-1`}
                     style={{ 
                       backgroundColor: '#FF6B9D',
                       boxShadow: '0 8px 20px rgba(255,107,157,0.4)',
                       fontFamily: "'Comic Neue', cursive"
                     }}>
                  <span className="relative z-10 flex items-center gap-2">
                    {t.hero.primaryAction}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Soft highlight effect */}
                  <div className="absolute inset-0 bg-[#FF8FAB] opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                </button>
                
                {/* Secondary action with outline style */}
                <button className={`${isMobile ? 'w-full px-6 py-3 text-base' : 'px-8 py-4'} font-bold text-lg rounded-full transition-all hover:translate-x-1 hover:translate-y-1`}
                     style={{ 
                       color: '#3D3D3D',
                       border: '4px solid #5A5A5A',
                       backgroundColor: 'transparent',
                       boxShadow: '0 4px 12px rgba(90,90,90,0.2)',
                       fontFamily: "'Comic Neue', cursive"
                     }}>
                  {t.hero.secondaryAction}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={`max-w-7xl mx-auto ${isMobile ? 'mb-10' : 'mb-20'}`}>
          <div className="text-center mb-12">
            {/* Section title with crayon style */}
            <h3 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold mb-4 inline-block relative`}
                style={{ 
                  color: '#3D3D3D',
                  textShadow: '1px 1px 3px rgba(255,107,157,0.3)',
                  fontFamily: "'Comic Neue', cursive"
                }}>
              {t.features.title}
              {/* Soft underline */}
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#FECA57] opacity-50 rounded-full blur-sm" />
            </h3>
            <p className={`${isMobile ? 'text-base' : 'text-lg'}`} style={{ color: '#5A5A5A', fontFamily: "'Patrick Hand', cursive" }}>
              {t.features.subtitle}
            </p>
          </div>
          
          <div className={`grid ${isMobile ? 'gap-4' : 'gap-8'}`} style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {t.features.items.map((feature, i) => (
              <div key={i} className="group relative">
                {/* Card with soft crayon style */}
                <div className={`relative ${isMobile ? 'p-4' : 'p-8'} rounded-3xl transition-all hover:translate-x-1 hover:translate-y-1`}
                     style={{ 
                       backgroundColor: 'white',
                       boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                       filter: 'url(#crayon-texture)'
                     }}>
                  {/* Icon with crayon background */}
                  <div className={`w-16 h-16 ${isMobile ? 'mb-3' : 'mb-4'} rounded-2xl flex items-center justify-center`}
                       style={{ 
                         backgroundColor: '#FFE6E6',
                         boxShadow: '0 4px 12px rgba(255,107,157,0.2)'
                       }}>
                    <div style={{ color: '#FF6B9D' }}>
                      {getIcon(feature.icon)}
                    </div>
                  </div>
                  <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold mb-2`} style={{ color: '#3D3D3D', fontFamily: "'Comic Neue', cursive" }}>
                    {feature.title}
                  </h3>
                  <p className={`${isMobile ? 'text-sm' : 'text-base'} leading-relaxed`} style={{ color: '#5A5A5A', fontFamily: "'Patrick Hand', cursive" }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={`max-w-7xl mx-auto ${isMobile ? 'mb-10' : 'mb-20'}`}>
          <div className="text-center mb-12">
            <h3 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold mb-4 inline-block relative`}
                style={{ 
                  color: '#3D3D3D',
                  textShadow: '1px 1px 3px rgba(255,107,157,0.3)',
                  fontFamily: "'Comic Neue', cursive"
                }}>
              {t.testimonials.title}
              {/* Soft underline */}
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#A8E6CF] opacity-50 rounded-full blur-sm" />
            </h3>
          </div>
          
          <div className={`grid ${isMobile ? 'gap-4' : 'gap-8'}`} style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {t.testimonials.items.map((testimonial, i) => (
              <div key={i} className="relative group">
                {/* Quote card with soft crayon style */}
                <div className={`relative ${isMobile ? 'p-4' : 'p-6'} bg-white rounded-2xl transition-all hover:translate-x-1 hover:translate-y-1`}
                     style={{ 
                       boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                       filter: 'url(#crayon-texture)'
                     }}>
                  {/* Quote marks decoration */}
                  <div className="absolute top-2 right-2 text-6xl opacity-10" style={{ color: '#FF6B9D', fontFamily: 'serif' }}>
                    "
                  </div>
                  <p className={`${isMobile ? 'text-sm' : 'text-base'} mb-4 relative z-10`} style={{ color: '#5A5A5A', fontFamily: "'Patrick Hand', cursive" }}>
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#FF8FAB]" />
                    <div>
                      <div className="font-bold" style={{ color: '#3D3D3D', fontFamily: "'Comic Neue', cursive" }}>{testimonial.author}</div>
                      <div className={`${isMobile ? 'text-xs' : 'text-sm'}`} style={{ color: '#9C8B7A', fontFamily: "'Patrick Hand', cursive" }}>{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className={`max-w-7xl mx-auto ${isMobile ? 'mb-10' : 'mb-20'}`}>
          <div className="text-center mb-12">
            <h3 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold mb-4 inline-block relative`}
                style={{ 
                  color: '#3D3D3D',
                  textShadow: '1px 1px 3px rgba(255,107,157,0.3)',
                  fontFamily: "'Comic Neue', cursive"
                }}>
              {t.pricing.title}
              {/* Soft underline */}
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#FECA57] opacity-50 rounded-full blur-sm" />
            </h3>
            <p className={`${isMobile ? 'text-base' : 'text-lg'}`} style={{ color: '#5A5A5A', fontFamily: "'Patrick Hand', cursive" }}>
              {t.pricing.subtitle}
            </p>
          </div>
          
          <div className={`grid ${isMobile ? 'gap-4' : 'gap-8'}`} style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {t.pricing.plans.map((plan, i) => (
              <div key={i} className={`relative group ${plan.highlighted ? 'scale-105' : ''}`}>
                {plan.highlighted && (
                  /* Most popular badge with crayon style */
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="px-4 py-1 bg-[#FF6B9D] text-white text-sm font-bold rounded-full"
                         style={{ fontFamily: "'Comic Neue', cursive" }}>
                      Most Popular!
                    </div>
                  </div>
                )}
                {/* Pricing card with soft crayon style */}
                <div className={`relative ${isMobile ? 'p-6' : 'p-8'} bg-white rounded-3xl transition-all hover:translate-x-1 hover:translate-y-1`}
                     style={{ 
                       boxShadow: plan.highlighted 
                         ? '0 12px 30px rgba(255,107,157,0.2)' 
                         : '0 8px 20px rgba(0,0,0,0.08)',
                       filter: 'url(#crayon-texture)',
                       border: plan.highlighted ? '3px solid #FF6B9D' : 'none'
                     }}>
                  <h4 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold mb-2 text-center`} style={{ color: '#3D3D3D', fontFamily: "'Comic Neue', cursive" }}>
                    {plan.name}
                  </h4>
                  <div className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold text-center mb-6`} style={{ color: '#FF6B9D', fontFamily: "'Comic Neue', cursive" }}>
                    {plan.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2" style={{ color: '#5A5A5A', fontFamily: "'Patrick Hand', cursive" }}>
                        <div className="w-5 h-5 rounded-full bg-[#A8E6CF] flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white" />
                        </div>
                        <span className={`${isMobile ? 'text-sm' : 'text-base'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 font-bold rounded-full transition-all hover:translate-x-1 hover:translate-y-1`}
                          style={{ 
                            backgroundColor: plan.highlighted ? '#FF6B9D' : '#FFE6E6',
                            color: plan.highlighted ? 'white' : '#3D3D3D',
                            boxShadow: plan.highlighted 
                              ? '0 8px 20px rgba(255,107,157,0.3)' 
                              : '0 4px 12px rgba(255,107,157,0.2)',
                            fontFamily: "'Comic Neue', cursive"
                          }}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t-4" style={{ borderColor: '#5A5A5A', backgroundColor: 'rgba(255,255,255,0.7)' }}>
        <div className={`max-w-7xl mx-auto ${isMobile ? 'p-6' : 'p-12'}`}>
          <div className={`grid ${isMobile ? 'gap-6' : 'gap-8'}`} style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {/* Product links */}
            <div>
              <h4 className="text-lg font-bold mb-4" style={{ color: '#3D3D3D', fontFamily: "'Comic Neue', cursive" }}>
                Product
              </h4>
              <ul className="space-y-2">
                {t.footer.links.product.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-[#FF6B9D] transition-colors" 
                       style={{ color: '#5A5A5A', fontFamily: "'Patrick Hand', cursive" }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company links */}
            <div>
              <h4 className="text-lg font-bold mb-4" style={{ color: '#3D3D3D', fontFamily: "'Comic Neue', cursive" }}>
                Company
              </h4>
              <ul className="space-y-2">
                {t.footer.links.company.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-[#FF6B9D] transition-colors" 
                       style={{ color: '#5A5A5A', fontFamily: "'Patrick Hand', cursive" }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Connect links */}
            <div>
              <h4 className="text-lg font-bold mb-4" style={{ color: '#3D3D3D', fontFamily: "'Comic Neue', cursive" }}>
                Connect
              </h4>
              <ul className="space-y-2">
                {t.footer.links.connect.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-[#FF6B9D] transition-colors" 
                       style={{ color: '#5A5A5A', fontFamily: "'Patrick Hand', cursive" }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t-4" style={{ borderColor: '#B8B8B8' }}>
            <p className="text-center" style={{ color: '#5A5A5A', fontFamily: "'Patrick Hand', cursive" }}>
              {t.footer.tagline}
            </p>
            <p className="text-center mt-4" style={{ color: '#5A5A5A' }}>
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
