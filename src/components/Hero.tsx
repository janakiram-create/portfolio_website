import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Brain, Cpu, Database, Network, Camera, Upload, Trash2 } from "lucide-react";

interface HeroProps {
  isDarkMode: boolean;
  onViewProjects: () => void;
  onContact: () => void;
}

export default function Hero({ isDarkMode, onViewProjects, onContact }: HeroProps) {
  const [imageError, setImageError] = useState(false);
  const [imgSrcIndex, setImgSrcIndex] = useState(0);

  const [profilePhoto] = useState<string | null>(() => {
    try {
      return localStorage.getItem("jrj_profile_photo");
    } catch {
      return null;
    }
  });

  const possibleSrcs = [
    "https://www.gravatar.com/avatar/71f62358193c8676ddfcb26633498e5f?s=400",
    "/profile.jpg",
    "/profile.png",
    "/avatar.jpg",
    "/avatar.png",
    "/janaki.jpg",
    "/janaki.png",
    "/image.jpg",
    "/image.png",
    "/janaki_photo.jpg",
    "/janaki_photo.png"
  ];

  const handleImageError = () => {
    if (imgSrcIndex < possibleSrcs.length - 1) {
      setImgSrcIndex(prev => prev + 1);
    } else {
      setImageError(true);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Hero Copy (8 columns on large screens) */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          
          {/* Pulsing Status Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full border text-xs font-semibold tracking-wide ${
              isDarkMode
                ? "bg-zinc-900/60 border-zinc-800 text-indigo-400 shadow-[0_4px_20px_rgba(99,102,241,0.1)]"
                : "bg-indigo-50/60 border-indigo-100 text-indigo-600 shadow-[0_4px_16px_rgba(99,102,241,0.05)]"
            }`}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
            </span>
            <span className="font-mono text-center">CURRENTLY DESIGNING INTELLIGENT EXPERIENCES</span>
          </motion.div>

          {/* Master Heading */}
          <div className="space-y-2">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight font-display text-zinc-900 dark:text-white leading-[1.1] col-span-1"
            >
              Hi, I'm{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Janaki Ram Jami
              </span>
            </motion.h1>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-zinc-700 dark:text-zinc-100 font-sans"
            >
              AI Intern | Graduate Engineer | Passionate About AI, Software Development, and Product Innovation
            </motion.h2>
          </div>

          {/* Intro Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-base sm:text-lg max-w-xl font-medium leading-relaxed ${
              isDarkMode ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Fusing strict structured system automation with deep human-centric product strategy to design high-compliance SaaS systems and intelligent pipelines for the post-AGI world.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            {/* Primary View Projects */}
            <button
              onClick={onViewProjects}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-bold text-gray-900 rounded-xl group bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 transition duration-300 transform active:scale-95 cursor-pointer shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
            >
              <span className="relative px-6 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-zinc-950 rounded-xl group-hover:bg-opacity-0 flex items-center gap-2">
                View Portfolio Projects
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1.5 transition-transform" />
              </span>
            </button>

            {/* Secondary Contact Me */}
            <button
              onClick={onContact}
              className={`px-6 py-4 rounded-xl text-sm font-bold transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 border cursor-pointer hover:shadow-lg ${
                isDarkMode
                  ? "bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-white hover:border-zinc-700"
                  : "bg-white border-zinc-200 hover:bg-zinc-50 text-zinc-900 hover:border-zinc-300"
              }`}
            >
              Contact Me
            </button>
          </motion.div>

        </div>

        {/* Hero Interactive Visual (5 columns) */}
        <div className="lg:col-span-5 flex justify-center relative">
          
          {/* Framed Interactive Avatar Space */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 60 }}
            className="relative w-76 h-76 sm:w-96 sm:h-96"
          >
            {/* Spinning Orbit Indicator rings (Tech Aesthetics) */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/20 dark:border-indigo-500/10 animate-[spin_60s_linear_infinite]" />
            <div className="absolute -inset-6 rounded-full border border-dashed border-purple-500/15 dark:border-purple-500/5 animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute -inset-12 rounded-full border border-indigo-500/10 dark:border-indigo-500/3 animate-[spin_100s_linear_infinite]" />

            {/* Glowing active orbits (particle intersections) */}
            <div className="absolute top-[10%] left-[10%] w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_12px_#6366f1] animate-[pulse_2s_infinite]" />
            <div className="absolute bottom-[20%] right-[10%] w-2.5 h-2.5 bg-pink-500 rounded-full shadow-[0_0_12px_#ec4899] animate-[pulse_3s_infinite]" />
            <div className="absolute top-[60%] right-[5%] w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7] animate-[pulse_4s_infinite]" />

            {/* Core Avatar Card Container */}
            <div className={`absolute inset-4 rounded-3xl overflow-hidden p-6 relative flex flex-col justify-between transition-all duration-300 ${
              isDarkMode
                ? "glass-card-dark border-zinc-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                : "glass-card-light border-zinc-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
            }`}>
              
              {/* Card Meta Row */}
              <div className="flex justify-between items-center">
                <span className="font-mono text-[9px] tracking-widest text-zinc-400 dark:text-zinc-500">JRJ_PROTO_V2026</span>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
              </div>

              {/* Inner Artistic Profile Representation */}
              <div className="my-auto py-4 flex flex-col items-center justify-center">
                <div className="relative mb-4 group">
                  {/* Glowing Back-panel */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300 animate-pulse" />
                  
                  {/* Rounded stylized placeholder */}
                  <div className="relative w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-950 via-zinc-900 to-purple-950 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center text-white border-2 border-zinc-200 dark:border-zinc-800 shadow-[0_8px_32px_rgba(124,58,237,0.15)] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                    
                    {profilePhoto ? (
                      <img
                        src={profilePhoto}
                        alt="Janaki Ram Jami"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover relative z-10"
                      />
                    ) : !imageError ? (
                      <img
                        src={possibleSrcs[imgSrcIndex]}
                        alt="Janaki Ram Jami"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover relative z-10"
                        onError={handleImageError}
                      />
                    ) : (
                      <div className="w-full h-full relative z-10">
                        {/* Custom high-end SVG vector illustration matching Janaki's face & style from his photo */}
                        <svg viewBox="0 0 100 100" className="w-full h-full object-cover">
                          <defs>
                            <linearGradient id="avatar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#121026" />
                              <stop offset="50%" stopColor="#080c14" />
                              <stop offset="100%" stopColor="#22092c" />
                            </linearGradient>
                            <linearGradient id="skin-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#d2965e" />
                              <stop offset="100%" stopColor="#ac7138" />
                            </linearGradient>
                          </defs>
                          <rect width="100" height="100" fill="url(#avatar-grad)" />
                          
                          {/* Matrix Pattern Overlay */}
                          <path d="M0,20 L100,20 M0,40 L100,40 M0,60 L100,60 M0,80 L100,80 M20,0 L20,100 M40,0 L40,100 M60,0 L60,100 M80,0 L80,100" stroke="rgba(99,102,241,0.1)" strokeWidth="0.5" />
                          
                          {/* Light Blue dress shirt */}
                          <path d="M15,100 L85,100 L78,78 C72,70 65,68 50,68 C35,68 28,70 22,78 Z" fill="#93c5fd" />
                          <path d="M42,68 L50,81 L58,68 L50,68 Z" fill="#60a5fa" />
                          <path d="M37,68 L50,77 L43,68 Z" fill="#1d4ed8" opacity="0.3" />
                          <path d="M63,68 L50,77 L57,68 Z" fill="#1d4ed8" opacity="0.3" />
                          
                          {/* Neck */}
                          <rect x="44" y="56" width="12" height="15" fill="#a06830" />
                          <path d="M44,68 C44,68 50,73 56,68 Z" fill="#ac7138" opacity="0.4" />

                          {/* Face */}
                          <ellipse cx="50" cy="44" rx="20" ry="22" fill="url(#skin-grad)" />

                          {/* Ears */}
                          <circle cx="29" cy="44" r="3.5" fill="#ac7138" />
                          <circle cx="71" cy="44" r="3.5" fill="#ac7138" />

                          {/* Neat Short Dark Hair matching photo */}
                          <path d="M28,38 C28,21 38,16 50,16 C62,16 72,21 72,38 C74,34 73,28 69,22 C64,18 58,16 50,16 C42,16 36,18 31,22 C27,28 26,34 28,38 Z" fill="#111827" />
                          <path d="M30,32 C34,24 41,20 50,20 C59,20 66,24 70,32 C65,26 59,24 50,24 C41,24 35,26 30,32 Z" fill="#1f2937" />

                          {/* Eyebrows */}
                          <path d="M35,37 C38,35 42,36 44,38" stroke="#111827" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                          <path d="M65,37 C62,35 58,36 56,38" stroke="#111827" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                          
                          {/* Kind dark eyes */}
                          <ellipse cx="39" cy="41" rx="2" ry="1.5" fill="#111827" />
                          <ellipse cx="61" cy="41" rx="2" ry="1.5" fill="#111827" />
                          <circle cx="39.5" cy="40.5" r="0.6" fill="#ffffff" />
                          <circle cx="61.5" cy="40.5" r="0.6" fill="#ffffff" />

                          {/* Nose */}
                          <path d="M48,42 L50,49 L52,49" stroke="#905820" strokeWidth="1.5" fill="none" strokeLinecap="round" />

                          {/* Mouth / Smile */}
                          <path d="M43,53 Q50,57 57,53" stroke="#6b1d1d" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                          <path d="M45,53.5 Q50,55.5 55,53.5" fill="#ffffff" opacity="0.9" />

                          {/* Full Beard and Mustache (Janaki's style) */}
                          <path d="M30,42 C30,42 31,59 50,62 C69,59 70,42 70,42 C71,47 69,57 64,60 C58,63 50,64 50,64 C50,64 42,63 36,60 C31,57 29,47 30,42 Z" fill="#111827" opacity="0.95" />
                          <path d="M41,49 Q50,48 59,49 C55,47 45,47 41,49 Z" fill="#111827" />
                          <path d="M42,50 Q50,50.5 58,50 C54,49 46,49 42,50 Z" fill="#111827" />
                          <path d="M48,48 L52,48 L50,51 Z" fill="#111827" />
                        </svg>
                      </div>
                    )}

                  </div>
                </div>

                {/* Micro Metadata */}
                <div className="text-center space-y-1 z-10">
                  <h3 className="font-display font-semibold text-lg text-zinc-900 dark:text-white">Janaki Ram Jami</h3>
                  <p className="text-xs font-mono text-indigo-500 dark:text-indigo-400 font-semibold uppercase">AI Intern & Graduate Engineer</p>
                  
                  <div className="flex items-center justify-center gap-1.5 pt-2 text-[10px] font-mono text-zinc-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>LOC: 18.1124° N, 83.3986° E</span>
                  </div>
                </div>
              </div>

              {/* Grid statistics overlay inside the avatar box */}
              <div className="grid grid-cols-3 border-t border-zinc-200/50 dark:border-zinc-800/40 pt-4 text-center">
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono text-zinc-400">ROLE</div>
                  <div className="text-[11px] font-bold text-zinc-900 dark:text-zinc-200">AI Intern</div>
                </div>
                <div className="space-y-0.5 border-x border-zinc-200/50 dark:border-zinc-800/40">
                  <div className="text-[10px] font-mono text-zinc-400">FOCUS</div>
                  <div className="text-[11px] font-bold text-zinc-900 dark:text-zinc-200">AI & Dev</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono text-zinc-400">PRODUCT</div>
                  <div className="text-[11px] font-bold text-zinc-900 dark:text-zinc-200">Innovation</div>
                </div>
              </div>

            </div>

            {/* floating interactive buttons/nodes that expand on hover */}
            <motion.div
              style={{ x: -10, y: -20 }}
              drag
              dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
              className={`absolute top-0 right-0 p-3.5 rounded-2xl flex items-center justify-center cursor-grap hover:shadow-lg transition-all duration-300 ${
                isDarkMode 
                  ? "glass-card-dark border-zinc-800 text-purple-400 bg-zinc-900/80" 
                  : "glass-card-light border-zinc-200 text-indigo-500 bg-white/80"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Drag Me!"
            >
              <Brain className="w-5 h-5" />
            </motion.div>

            <motion.div
              style={{ x: 20, y: 15 }}
              drag
              dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
              className={`absolute bottom-[15%] -left-6 p-3.5 rounded-2xl flex items-center justify-center cursor-grap hover:shadow-lg transition-all duration-300 ${
                isDarkMode 
                  ? "glass-card-dark border-zinc-800 text-indigo-400 bg-zinc-900/80" 
                  : "glass-card-light border-zinc-200 text-indigo-500 bg-white/80"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Drag Me!"
            >
              <Cpu className="w-5 h-5" />
            </motion.div>

          </motion.div>
        </div>

      </div>

      {/* Floating scroll down node */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-500 font-mono text-xs pointer-events-none">
        <span className="text-[9px] uppercase tracking-widest">DRAG ELEMENTS & SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-6 rounded-full bg-zinc-400/40 dark:bg-zinc-700 relative"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 absolute top-1 left-0" />
        </motion.div>
      </div>
    </section>
  );
}
