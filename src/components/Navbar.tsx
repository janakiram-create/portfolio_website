import { useState, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export default function Navbar({ isDarkMode, setIsDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Credentials", href: "#credentials" },
    { name: "Stats", href: "#stats" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80; // adjust depending on header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 inset-x-4 max-w-7xl mx-auto z-50 rounded-2xl transition-all duration-300 ${
          scrolled
            ? isDarkMode
              ? "glass-card-dark bg-zinc-950/70 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] border-zinc-800/80"
              : "glass-card-light bg-white/70 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] border-zinc-200/50"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "body")}
            className="flex items-center gap-2 group font-display font-bold tracking-tight text-xl text-zinc-900 dark:text-white"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                <Sparkles className="w-4.5 h-4.5 animate-pulse" />
              </div>
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-tr from-indigo-500 to-pink-500 opacity-40 blur-sm group-hover:opacity-80 transition duration-300 pointer-events-none" />
            </div>
            <span className="bg-gradient-to-r from-zinc-950 to-zinc-700 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
              Janaki Ram
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative text-sm font-medium tracking-wide text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action Tools (Theme Toggle + Mobil Menu toggle) */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                isDarkMode
                  ? "bg-zinc-900 hover:bg-zinc-800 border-zinc-800 text-yellow-400 hover:text-yellow-300"
                  : "bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-indigo-600 hover:text-indigo-500"
              }`}
              aria-label="Toggle Theme"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <motion.div
                  initial={false}
                  animate={{ rotate: isDarkMode ? 0 : 90, scale: isDarkMode ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="absolute"
                >
                  <Moon className="w-5 h-5 fill-current" />
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{ rotate: isDarkMode ? -90 : 0, scale: isDarkMode ? 0 : 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="absolute"
                >
                  <Sun className="w-5 h-5 fill-current" />
                </motion.div>
              </div>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2.5 rounded-xl border cursor-pointer ${
                isDarkMode
                  ? "bg-zinc-900 border-zinc-800 text-white"
                  : "bg-zinc-100 border-zinc-200 text-zinc-800"
              }`}
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-24 inset-x-4 z-40 p-6 rounded-2xl md:hidden overflow-hidden ${
              isDarkMode
                ? "glass-card-dark bg-zinc-950/95 border-zinc-800"
                : "glass-card-light bg-white/95 border-zinc-200"
            }`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`py-2 text-base font-semibold border-b transition-colors ${
                    isDarkMode
                      ? "border-zinc-900 text-zinc-300 hover:text-white"
                      : "border-zinc-100 text-zinc-600 hover:text-zinc-950"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
