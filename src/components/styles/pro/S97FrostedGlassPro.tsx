import React, { useState } from 'react';
import { useResponsive } from '@/hooks/useResponsive';
import {
    Move,
    Layers,
    Eye,
    Box,
    Menu,
    X,
    Play,
    ChevronRight,
    Plus,
    Image as ImageIcon,
    MessageSquare,
    Music,
    Video
} from 'lucide-react';

export const S97FrostedGlassPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white/30 selection:text-white relative overflow-hidden">
            {/* 
        FROSTED GLASS PRO (VisionOS / Spatial)
        - Background: Abstract colorful gradients
        - Cards: Heavy backdrop blur, white translucency
        - Depth: Drop shadows, parallax simulation
        - Roundness: heavily rounded corners
      */}

            {/* Dynamic Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-purple-600/40 rounded-full blur-[150px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-blue-600/40 rounded-full blur-[150px] animate-pulse-slow delay-1000"></div>
                <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-pink-500/30 rounded-full blur-[120px] animate-pulse-slow delay-2000"></div>
            </div>

            {/* NAVBAR */}
            <nav className="sticky top-6 z-50 px-6">
                <div className="max-w-4xl mx-auto h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-between px-6 shadow-2xl">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center">
                            <Eye size={20} />
                        </div>
                        <span className="font-medium tracking-tight">Visionary</span>
                    </div>

                    {!isMobile && (
                        <div className="flex items-center gap-8 text-sm font-medium">
                            {['Product', 'Spatial', 'Entertainment', 'Work'].map((item) => (
                                <a key={item} href="#" className="hover:text-white/70 transition-colors">
                                    {item}
                                </a>
                            ))}
                        </div>
                    )}

                    {!isMobile && (
                        <button className="px-5 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
                            Pre-order
                        </button>
                    )}

                    {isMobile && (
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>
            </nav>

            <main className="relative z-10 px-6">
                {/* HERO SECTION */}
                <section className="min-h-[90vh] flex flex-col items-center justify-center text-center space-y-10 py-20">
                    <h1 className="text-6xl md:text-8xl font-medium tracking-tight drop-shadow-2xl">
                        Your world, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">dimensified.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                        Welcome to the era of spatial computing. Seamlessly blend digital content with your physical space.
                    </p>

                    <div className="flex items-center gap-4">
                        <button className="px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-lg font-medium hover:bg-white/30 transition-all hover:scale-105 flex items-center gap-2 shadow-xl">
                            Watch the Film <Play size={18} fill="currentColor" />
                        </button>
                    </div>

                    {/* Floating Glass Panels */}
                    <div className="relative w-full max-w-5xl h-[400px] mt-12 hidden md:block">
                        {/* Center Panel */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center z-20 hover:scale-105 transition-transform duration-500">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                    <ImageIcon size={32} />
                                </div>
                                <h3 className="text-2xl font-medium">Photos</h3>
                                <p className="text-white/60">Spatial Memories</p>
                            </div>
                        </div>

                        {/* Left Panel */}
                        <div className="absolute top-1/2 left-20 -translate-y-1/2 -rotate-y-12 w-[300px] h-[200px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl z-10 hover:z-30 hover:scale-110 transition-all duration-500 hover:bg-white/10 cursor-pointer">
                            <div className="h-full flex flex-col items-center justify-center">
                                <Music size={32} className="mb-2" />
                                <span>Music</span>
                            </div>
                        </div>

                        {/* Right Panel */}
                        <div className="absolute top-1/2 right-20 -translate-y-1/2 rotate-y-12 w-[300px] h-[200px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl z-10 hover:z-30 hover:scale-110 transition-all duration-500 hover:bg-white/10 cursor-pointer">
                            <div className="h-full flex flex-col items-center justify-center">
                                <Video size={32} className="mb-2" />
                                <span>Cinema</span>
                            </div>
                        </div>
                    </div>
                </section>


                {/* FEATURES SCROLL */}
                <section className="py-32">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                        <div className="space-y-8 sticky top-32 h-fit">
                            <h2 className="text-5xl font-medium leading-tight">Apps live in <br /> your space.</h2>
                            <p className="text-xl text-white/70 leading-relaxed">
                                With Visionary OS, apps break free from the boundaries of a display. They can fill the space around you, move with you, and scale to the perfect size.
                            </p>
                            <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90">
                                Explore Apps
                            </button>
                        </div>

                        <div className="space-y-8">
                            {[
                                { icon: Layers, title: "Infinite Canvas", desc: "Arrange apps anywhere. Scale them to the perfect size." },
                                { icon: Eye, title: "Eye Tracking", desc: "Navigate simply by looking. Interface elements react to your gaze." },
                                { icon: Move, title: "Hand Gestures", desc: "Tap your fingers to select. Flick to scroll. Natural interaction." },
                                { icon: Box, title: "3D Objects", desc: "Pull 3D models out of apps and view them from any angle." },
                            ].map((feat, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-colors">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                                        <feat.icon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-medium mb-3">{feat.title}</h3>
                                    <p className="text-white/60 leading-relaxed">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* ENVIRONMENTAL IMMERSION */}
                <section className="py-32 relative">
                    <div className="max-w-6xl mx-auto bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-[48px] p-12 md:p-24 text-center overflow-hidden relative">
                        {/* Background Image Scenery Simulation */}
                        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000)' }}></div>
                        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black to-transparent"></div>

                        <div className="relative z-10 space-y-8">
                            <h2 className="text-4xl md:text-6xl font-medium">Environments</h2>
                            <p className="text-xl text-white/80 max-w-2xl mx-auto">
                                Transform your room into a personal movie theater, or focus on work with a beautiful landscape. Control how immersed you are with a simple twist.
                            </p>

                            <div className="flex justify-center gap-4 pt-8">
                                <div className="h-2 w-64 bg-white/20 rounded-full overflow-hidden backdrop-blur-md">
                                    <div className="h-full w-2/3 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* CTA */}
                <section className="py-32 text-center">
                    <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">Ready to enter?</h2>
                    <button className="px-10 py-5 bg-white text-black text-xl font-medium rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                        Pre-order Visionary
                    </button>
                    <p className="mt-6 text-white/40">Available next Spring.</p>
                </section>

            </main>

            <footer className="py-12 px-6 border-t border-white/10 text-xs text-white/40">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        Copyright © 2024 Visionary Inc.
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Sales Policy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
