import { useState } from "react";
import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen, Mic, Flame, Heart, Compass, Sparkles, CheckCircle2 } from "lucide-react";
import { educationData, certificatesData, publicationsData, interestsData } from "../data";

export default function Credentials({ isDarkMode }: { isDarkMode: boolean }) {
  const [activeTab, setActiveTab] = useState<"education" | "certificates" | "media">("education");

  const getMediaIcon = (type: "blog" | "article" | "podcast") => {
    switch (type) {
      case "podcast":
        return <Mic className="w-5 h-5 text-indigo-400" />;
      case "blog":
        return <BookOpen className="w-5 h-5 text-purple-400" />;
      default:
        return <Flame className="w-5 h-5 text-pink-400" />;
    }
  };

  return (
    <section id="credentials" className="py-24 relative overflow-hidden">
      {/* Decorative Blur and Grid Grid overlays */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-bold tracking-widest text-indigo-400 font-mono">
            <Award className="w-3.5 h-3.5 animate-pulse" />
            <span>04 . ACCREDITED CREDENTIALS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-zinc-900 dark:text-white tracking-tight">
            Academic Track, Certificates & Media
          </h2>
          
          <p className={`text-base max-w-xl text-center ${isDarkMode ? "text-zinc-400" : "text-zinc-650"}`}>
            Curated archives of verified academic excellence, professional virtual internships, and public tech publications or podcasts.
          </p>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-center justify-center gap-3 mb-12">
          <div className={`p-1 rounded-2xl flex gap-1 border ${
            isDarkMode ? "bg-zinc-950/80 border-zinc-850" : "bg-zinc-100/80 border-zinc-200"
          }`}>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === "education"
                  ? isDarkMode 
                    ? "bg-zinc-900 text-white border border-zinc-800"
                    : "bg-white text-zinc-950 shadow-sm border border-zinc-200"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              <GraduationCap className="w-4 h-4 text-indigo-500" />
              <span>Academic Pathway</span>
            </button>

            <button
              onClick={() => setActiveTab("certificates")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === "certificates"
                  ? isDarkMode 
                    ? "bg-zinc-900 text-white border border-zinc-800"
                    : "bg-white text-zinc-950 shadow-sm border border-zinc-200"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              <Award className="w-4 h-4 text-purple-500" />
              <span>Certifications</span>
            </button>

            <button
              onClick={() => setActiveTab("media")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === "media"
                  ? isDarkMode 
                    ? "bg-zinc-900 text-white border border-zinc-800"
                    : "bg-white text-zinc-950 shadow-sm border border-zinc-200"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              <Mic className="w-4 h-4 text-pink-500" />
              <span>Publications & Podcast</span>
            </button>
          </div>
        </div>

        {/* Dynamic Inner Tab Panels */}
        <div className="min-h-[350px]">
          {activeTab === "education" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {educationData.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  whileHover={{ y: -5 }}
                  className={`p-6 sm:p-8 rounded-3xl border text-left flex flex-col justify-between relative group ${
                    isDarkMode
                      ? "glass-card-dark bg-zinc-950/40 border-zinc-850 hover:border-zinc-700"
                      : "glass-card-light bg-white border-zinc-200 hover:border-zinc-300"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 border border-indigo-500/20">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-lg text-zinc-900 dark:text-white leading-tight group-hover:text-indigo-500 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-550 mt-1 uppercase tracking-wide">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-zinc-200/50 dark:border-zinc-850/50 pt-4 mt-6 flex justify-between items-center text-xs text-zinc-400">
                    <span className="font-mono tracking-wider">{edu.years}</span>
                    <span className="font-mono bg-indigo-500/10 text-indigo-500 px-2 py-0.5 rounded-lg text-[10px] font-extrabold">{edu.score}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "certificates" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {certificatesData.map((cert) => (
                <motion.div
                  key={cert.title}
                  whileHover={{ scale: 1.015 }}
                  className={`p-5 rounded-2xl border text-left flex items-start gap-4 transition-all duration-300 relative ${
                    isDarkMode
                      ? "glass-card-dark bg-zinc-950/30 border-zinc-850 hover:border-zinc-800"
                      : "glass-card-light bg-white border-zinc-200 hover:bg-zinc-50/50"
                  }`}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                    <CheckCircle2 className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-zinc-900 dark:text-white leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mt-1.5 font-bold">
                      PROVIDER: {cert.provider}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "media" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {publicationsData.map((pub) => (
                <motion.div
                  key={pub.title}
                  whileHover={{ y: -5 }}
                  className={`p-6 sm:p-8 rounded-3xl border text-left flex flex-col justify-between relative h-full ${
                    isDarkMode
                      ? "glass-card-dark bg-zinc-950/40 border-zinc-850 hover:border-zinc-700"
                      : "glass-card-light bg-white border-zinc-200 hover:border-zinc-300"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="p-2.5 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200/40 dark:border-zinc-800/60">
                        {getMediaIcon(pub.type)}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full font-mono text-[9px] font-extrabold uppercase tracking-widest bg-zinc-200/50 dark:bg-zinc-800/80 text-zinc-500">
                        {pub.type}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display font-extrabold text-base text-zinc-900 dark:text-white leading-snug">
                        {pub.title}
                      </h3>
                      <p className={`text-xs mt-2 leading-relaxed ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                        {pub.description}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-zinc-100 dark:border-zinc-900/60 pt-4 mt-6">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-extrabold tracking-widest text-indigo-500 uppercase">
                      <span>Curated Media Publication</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Interests Section */}
        <div className="mt-20 pt-12 border-t border-zinc-200/40 dark:border-zinc-905/60 text-left">
          <h3 className="font-display font-bold text-lg text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-6">
            Interests & Extracurriculars
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {interestsData.map((interest, idx) => (
              <motion.span
                key={interest}
                whileHover={{ scale: 1.03 }}
                className={`px-4.5 py-2 rounded-xl text-xs font-semibold tracking-wide border cursor-default flex items-center gap-2 ${
                  isDarkMode
                    ? "bg-zinc-950/40 border-zinc-800/80 text-zinc-300 hover:border-zinc-700"
                    : "bg-white border-zinc-200 text-zinc-655 hover:border-zinc-300"
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${
                  idx % 3 === 0 ? "bg-indigo-500" : idx % 3 === 1 ? "bg-purple-500" : "bg-pink-500"
                }`} />
                <span>{interest}</span>
              </motion.span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
