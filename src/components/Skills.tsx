import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { skillsData } from "../data";
import { Award, Sparkles, Filter, Brain, Compass, Code, Layers, CheckCircle } from "lucide-react";
import { SkillItem } from "../types";

export default function Skills({ isDarkMode }: { isDarkMode: boolean }) {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(skillsData[0]);
  const [activeCategory, setActiveCategory] = useState<"all" | "ai" | "pm" | "dev" | "design">("all");

  const categories = [
    { id: "all", label: "All Metas", icon: <Layers className="w-3.5 h-3.5" /> },
    { id: "ai", label: "AI & Prompting", icon: <Brain className="w-3.5 h-3.5" /> },
    { id: "pm", label: "Product Strategy", icon: <Compass className="w-3.5 h-3.5" /> },
    { id: "dev", label: "Full-Stack Dev", icon: <Code className="w-3.5 h-3.5" /> },
  ];

  const filteredSkills = skillsData.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  // Map skill names to stylized metrics & sample real applications
  const getSkillApplications = (name: string): string[] => {
    switch (name) {
      case "AI & Intelligent Tools":
        return ["Google GenAI SDK workflows", "Multi-Agent thread relays", "Classification pipelines"];
      case "Prompt Engineering":
        return ["Few-shot legal auditing", "CoT summary guidelines", "Structured output models"];
      case "Product Management":
        return ["Candidate Portal PRD drafting", "Immigration workflow user maps", "Stakeholder backlog lists"];
      case "React.js":
        return ["Responsive glassmorphism dashboard", "Framer motion fluid animations", "Theme contexts"];
      case "Supabase & Postgres":
        return ["HRMS schema triggers", "Database migration schedules", "Auth policies"];
      case "SQL & Query Tuning":
        return ["Analytical administrative boards", "HRMS report tuning", "JSONB query indexing"];
      default:
        return ["Typography scale design", "Light & Dark Mode layouts", "Micro interaction states"];
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative backdrop mesh */}
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-bold tracking-widest text-indigo-400 font-mono">
            <Award className="w-3.5 h-3.5 animate-pulse" />
            <span>04 . INTERACTIVE CAPABILITIES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-zinc-900 dark:text-white tracking-tight">
            Interrogation & Proficiency Matrix
          </h2>
          
          <p className={`text-base max-w-2xl ${isDarkMode ? "text-zinc-400" : "text-zinc-650"}`}>
            Tap on individual categories to filter, or select any specific capability bar to fetch live credentials, operational descriptions, and execution blueprints in the Inspector.
          </p>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id as any);
                // Auto reset selected skill to first item of new filter list
                const matched = skillsData.find((s) => cat.id === "all" || s.category === cat.id);
                if (matched) setSelectedSkill(matched);
              }}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transform transition-all duration-300 border cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-zinc-950 border-zinc-950 text-white dark:bg-white dark:border-white dark:text-zinc-950 shadow-md"
                  : isDarkMode
                    ? "bg-zinc-950/40 border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-904/40"
                    : "bg-white border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Dual Layout (Bars list + Side Inspector Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Skill Bars (7 columns) */}
          <div className="lg:col-span-7 space-y-5">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => {
                const isCurrent = selectedSkill.name === skill.name;
                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    whileHover={{ scale: 1.005 }}
                    onClick={() => setSelectedSkill(skill)}
                    className={`p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative ${
                      isCurrent
                        ? isDarkMode
                          ? "bg-indigo-950/15 border-indigo-700 shadow-[0_4px_30px_rgba(99,102,241,0.08)] bg-zinc-950/40"
                          : "bg-indigo-50/20 border-indigo-200 shadow-[0_4px_24px_rgba(99,102,241,0.03)] bg-white"
                        : isDarkMode
                          ? "glass-card-dark border-zinc-850 bg-zinc-950/40 hover:border-zinc-800"
                          : "glass-card-light border-zinc-200 bg-white hover:border-zinc-250"
                    }`}
                  >
                    {/* Label and percentage */}
                    <div className="flex justify-between items-center mb-2.5">
                      <div className="space-y-0.5">
                        <span className="font-display font-black text-sm tracking-wide text-zinc-900 dark:text-zinc-100 uppercase">
                          {skill.name}
                        </span>
                        <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-400">
                          {skill.label}
                        </div>
                      </div>
                      
                      <span className="font-mono text-xs font-extrabold text-indigo-500 dark:text-indigo-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="w-full h-2 rounded-full bg-zinc-200/50 dark:bg-zinc-800/60 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Right: Detailed inspector box (5 columns) */}
          <div className="lg:col-span-5 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSkill.name}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className={`p-6 sm:p-8 rounded-3xl border text-left h-full flex flex-col justify-between relative overflow-hidden ${
                  isDarkMode
                    ? "glass-card-dark bg-zinc-950/60 border-zinc-800 shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
                    : "glass-card-light bg-white border-zinc-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                }`}
              >
                {/* Decorative glow inside card */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent blur-3xl" />
                
                <div className="space-y-6 relative z-10">
                  {/* Category Stamp and title */}
                  <div className="space-y-1.5 border-b border-zinc-200/60 dark:border-zinc-800/40 pb-5">
                    <span className="font-mono text-[9px] tracking-widest text-indigo-500 dark:text-indigo-400 font-extrabold uppercase">
                      INSPECTOR MODULE ATTEMPT
                    </span>
                    <h3 className="font-display font-black text-2xl text-zinc-900 dark:text-white leading-tight">
                      {selectedSkill.name}
                    </h3>
                  </div>

                  {/* Core Description block */}
                  <div className="space-y-2.5">
                    <h4 className="font-mono text-xs text-zinc-400 dark:text-zinc-500 font-semibold uppercase tracking-widest">
                      SYSTEM CAPABILITY SUMMARY
                    </h4>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? "text-zinc-300" : "text-zinc-650"}`}>
                      {selectedSkill.description}
                    </p>
                  </div>

                  {/* Sample applications list inside the debugger */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-xs text-zinc-400 dark:text-zinc-500 font-semibold uppercase tracking-widest">
                      PRACTICAL BLUEPRINT USES
                    </h4>
                    <ul className="space-y-2.5">
                      {getSkillApplications(selectedSkill.name).map((app, appIdx) => (
                        <li key={appIdx} className="flex items-center gap-2.5 text-xs">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span className={`${isDarkMode ? "text-zinc-400" : "text-zinc-600"} font-medium`}>
                            {app}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer badge with certificate indicator */}
                <div className="border-t border-zinc-200/60 dark:border-zinc-800/40 pt-5 mt-8 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-5.5 h-5.5 rounded-lg bg-emerald-500/10 dark:bg-emerald-505/20 text-emerald-500 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                      ✔
                    </div>
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">PROFICIENCY BADGE</span>
                  </div>
                  <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/30 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 text-[10px] font-mono tracking-wider rounded-lg uppercase">
                    {selectedSkill.label}
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
