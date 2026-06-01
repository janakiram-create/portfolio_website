import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projectsData } from "../data";
import { Sparkles, ArrowUpRight, Github, FolderGit, LayoutGrid, Cpu, UserCheck, Scale, Check, Plus, Minus, Brain, BarChart3, Compass } from "lucide-react";

export default function Projects({ isDarkMode }: { isDarkMode: boolean }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "product", label: "Product & SaaS" },
    { value: "automation", label: "AI & Analytics" },
  ];

  // Map category keywords to filters
  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "product") {
      return p.category.toLowerCase().includes("product") || p.category.toLowerCase().includes("full-stack") || p.category.toLowerCase().includes("saas");
    }
    if (activeFilter === "automation") {
      return p.category.toLowerCase().includes("automation") || p.category.toLowerCase().includes("ai") || p.category.toLowerCase().includes("deep") || p.category.toLowerCase().includes("analytics");
    }
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Map image seeds to decorative gradient visuals with appropriate thematic icons
  const getProjectIcon = (seed: string) => {
    switch (seed) {
      case "candidate":
        return <UserCheck className="w-10 h-10 text-indigo-400" />;
      case "hrms":
        return <LayoutGrid className="w-10 h-10 text-purple-400" />;
      case "immigration":
        return <Scale className="w-10 h-10 text-pink-400" />;
      case "caption":
        return <Brain className="w-10 h-10 text-indigo-300" />;
      case "analytics_pb":
        return <BarChart3 className="w-10 h-10 text-emerald-300" />;
      case "guidance":
        return <Compass className="w-10 h-10 text-amber-300" />;
      default:
        return <Cpu className="w-10 h-10 text-blue-400" />;
    }
  };

  const getProjectGradient = (seed: string) => {
    switch (seed) {
      case "candidate":
        return "from-indigo-600 via-indigo-700 to-indigo-900";
      case "hrms":
        return "from-purple-600 via-purple-700 to-purple-900";
      case "immigration":
        return "from-pink-600 via-pink-705 to-pink-900";
      case "caption":
        return "from-indigo-950 via-indigo-900 to-violet-950";
      case "analytics_pb":
        return "from-emerald-950 via-teal-900 to-zinc-950";
      case "guidance":
        return "from-amber-950 via-neutral-900 to-orange-950";
      default:
        return "from-blue-600 via-blue-700 to-blue-900";
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Absolute Glow Node */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-bold tracking-widest text-indigo-400 font-mono">
              <FolderGit className="w-3.5 h-3.5" />
              <span>02 . CURATED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-zinc-900 dark:text-white tracking-tight">
              Spearheading Intelligent SaaS Platforms
            </h2>
            <p className={`text-base max-w-xl ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
              Explore standard-setting portals, secure regulatory registries, and highly parameterized automation recipes engineered for elite professional compliance.
            </p>
          </div>

          {/* Interactive Filters */}
          <div className="flex flex-wrap gap-2 self-start md:self-end">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => {
                  setActiveFilter(f.value);
                  setExpandedId(null);
                }}
                className={`px-4.5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 border cursor-pointer ${
                  activeFilter === f.value
                    ? "bg-zinc-900 border-zinc-900 text-white dark:bg-white dark:border-white dark:text-zinc-950 shadow-md"
                    : isDarkMode
                      ? "bg-zinc-950/40 border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-900/40"
                      : "bg-white border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, idx) => {
              const isExpanded = expandedId === p.id;
              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`rounded-3xl border text-left flex flex-col justify-between overflow-hidden transition-all duration-300 relative group h-full ${
                    isDarkMode
                      ? "glass-card-dark bg-zinc-950/40 border-zinc-850 hover:border-zinc-700/80 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                      : "glass-card-light bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
                  }`}
                >
                  
                  {/* Visual Decorative Card Header with contextual gradient */}
                  <div className={`relative px-8 py-10 bg-gradient-to-br ${getProjectGradient(p.imageSeed)} text-white flex items-center justify-between`}>
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:16px_16px] pointer-events-none" />
                    
                    <div className="space-y-1 relative z-10">
                      <span className="font-mono text-[10px] tracking-widest text-indigo-200 font-semibold uppercase">{p.category}</span>
                      <h3 className="font-display font-extrabold text-2xl tracking-tight text-white">{p.title}</h3>
                    </div>

                    <div className="relative z-10 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15">
                      {getProjectIcon(p.imageSeed)}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 flex flex-col justify-between flex-grow space-y-6">
                    <p className={`text-sm leading-relaxed ${isDarkMode ? "text-zinc-300" : "text-zinc-600"}`}>
                      {p.description}
                    </p>

                    {/* Expandable Project Architectural Blueprint / Highlights */}
                    <div>
                      <button
                        onClick={() => toggleExpand(p.id)}
                        className={`w-full flex items-center justify-between py-2.5 px-4 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                          isExpanded
                            ? "bg-zinc-100 border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 text-indigo-500"
                            : "bg-transparent border-dashed border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700 text-zinc-500 dark:text-zinc-400"
                        }`}
                      >
                        <span className="flex items-center gap-1.5 uppercase tracking-wider font-mono">
                          {isExpanded ? "Close Blueprint" : "Inspect Key Highlights"}
                        </span>
                        {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </button>

                      {/* Micro Animation Toggling Trays */}
                      <AnimatePresence duration={0.3}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mt-4 pt-1"
                          >
                            <ul className="space-y-3">
                              {p.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-3 text-xs leading-relaxed">
                                  <div className="flex-shrink-0 w-5 h-5 rounded-md bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-500 dark:text-indigo-400 flex items-center justify-center font-bold">
                                    <Check className="w-3 h-3" />
                                  </div>
                                  <span className={isDarkMode ? "text-zinc-400" : "text-zinc-600"}>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Tech Badges Row */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className={`px-3 py-1 rounded-lg text-[10px] font-mono font-semibold uppercase tracking-wider ${
                            isDarkMode
                              ? "bg-zinc-900 border border-zinc-805 text-zinc-400"
                              : "bg-zinc-100 border border-zinc-200 text-zinc-600"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
