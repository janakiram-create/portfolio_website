import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Credentials from "./components/Credentials";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import ParticleBackground from "./components/ParticleBackground";
import { Sparkles, ArrowUp, ArrowRight } from "lucide-react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync isDarkMode class on the root body or container
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Handle scroll to show "re-center" arrow
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const topOffset = 85;
      const offsetPos = element.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPos, behavior: "smooth" });
    }
  };

  const handleContactScroll = () => {
    const element = document.getElementById("contact");
    if (element) {
      const topOffset = 85;
      const offsetPos = element.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPos, behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 relative font-sans selection:bg-indigo-505 selection:text-white ${
      isDarkMode ? "grid-bg-dark text-white" : "grid-bg-light text-zinc-900"
    }`}>
      
      {/* Noise aesthetic layer */}
      <div className="absolute inset-0 noise-overlay pointer-events-none z-0" />

      {/* Floating Particles */}
      <ParticleBackground isDarkMode={isDarkMode} />

      {/* Header / Nav */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Main Core Layout */}
      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <Hero 
          isDarkMode={isDarkMode} 
          onViewProjects={handleViewProjects} 
          onContact={handleContactScroll} 
        />

        {/* Divider Grid separator line */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-zinc-200/40 dark:border-zinc-900/60" />
        </div>

        {/* ABOUT SECTION */}
        <About isDarkMode={isDarkMode} />

        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-zinc-200/40 dark:border-zinc-900/60" />
        </div>

        {/* PROJECTS SECTION */}
        <Projects isDarkMode={isDarkMode} />

        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-zinc-200/40 dark:border-zinc-900/60" />
        </div>

        {/* TIMELINE SECTION */}
        <Timeline isDarkMode={isDarkMode} />

        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-zinc-200/40 dark:border-zinc-900/60" />
        </div>

        {/* SKILLS SECTION */}
        <Skills isDarkMode={isDarkMode} />

        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-zinc-200/40 dark:border-zinc-900/60" />
        </div>

        {/* CREDENTIALS SECTION */}
        <Credentials isDarkMode={isDarkMode} />

        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-zinc-200/40 dark:border-zinc-900/60" />
        </div>

        {/* ACHIEVEMENTS STATS SECTION */}
        <Achievements isDarkMode={isDarkMode} />

        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-zinc-200/40 dark:border-zinc-900/60" />
        </div>

        {/* CONTACT SECTION */}
        <Contact isDarkMode={isDarkMode} />

      </main>

      {/* Bottom Footer block */}
      <footer className={`py-12 border-t z-10 relative ${
        isDarkMode 
          ? "border-zinc-900/80 bg-zinc-950/40" 
          : "border-zinc-100 bg-zinc-50"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <span className="font-display font-black text-sm tracking-wide text-zinc-800 dark:text-zinc-250 uppercase">
              Janaki Ram Jami
            </span>
          </div>

          <p className="text-xs font-mono text-zinc-500 text-center">
            &copy; {new Date().getFullYear()} Janaki Ram Jami. Optimized for 2026 digital compliance.
          </p>

          <span className="text-[10px] font-mono text-indigo-500 dark:text-indigo-400 font-extrabold uppercase tracking-widest">
            AI PRODUCT BLUEPRINT
          </span>
        </div>
      </footer>

      {/* Floating back-to-top bubble */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className={`fixed bottom-6 right-6 p-3 p-3.5 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer z-50 border ${
            isDarkMode
              ? "bg-zinc-950/90 border-zinc-800 hover:border-zinc-700 text-white"
              : "bg-white/90 border-zinc-200 hover:border-zinc-300 text-zinc-900"
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
