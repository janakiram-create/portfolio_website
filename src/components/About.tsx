import { motion } from "motion/react";
import { Brain, Sparkles, Compass, Lightbulb, Code, Cpu, Workflow, Eye } from "lucide-react";

export default function About({ isDarkMode }: { isDarkMode: boolean }) {
  const pillars = [
    {
      title: "Artificial Intelligence",
      icon: <Brain className="w-6 h-6 text-indigo-500" />,
      tag: "ORCHESTRATION",
      desc: "Architecting context-aware workflows, prompt patterns, and utilizing modern LLM integrations to create self-correcting pipelines.",
      color: "from-indigo-500/10 to-indigo-500/0",
      border: "hover:border-indigo-500/40"
    },
    {
      title: "Product Management",
      icon: <Compass className="w-6 h-6 text-purple-500" />,
      tag: "ROADMAP & PRDS",
      desc: "Translating ambiguous user feedback into actionable, structured product requirements, user mapping blueprints, and milestone metrics.",
      color: "from-purple-500/10 to-purple-500/0",
      border: "hover:border-purple-500/40"
    },
    {
      title: "UI/UX Experience",
      icon: <Lightbulb className="w-6 h-6 text-pink-500" />,
      tag: "GLASSMORPHISM",
      desc: "Obsessing over typography layout, spatial hierarchy, dark/light mode parity, and interactive feedback loops that delight digital users.",
      color: "from-pink-500/10 to-pink-500/0",
      border: "hover:border-pink-500/40"
    },
    {
      title: "Workflow Automation",
      icon: <Workflow className="w-6 h-6 text-blue-500" />,
      tag: "CRON & INTEGRATIONS",
      desc: "Designing secure legal and HR workflow automation blueprints that eliminate repetitive loops, paperwork delay, and tracking overhead.",
      color: "from-blue-500/10 to-blue-500/0",
      border: "hover:border-blue-500/40"
    },
    {
      title: "Web Development",
      icon: <Code className="w-6 h-6 text-teal-500" />,
      tag: "TS / REACT / SQL",
      desc: "Structuring clean full-stack web architectures, optimizing SQL database constraints, and engineering modular frontends.",
      color: "from-teal-500/10 to-teal-500/0",
      border: "hover:border-teal-500/40"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative Blur and Grid Grid overlays */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-bold tracking-widest text-indigo-500 dark:text-indigo-400 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 . FOUNDATION PROFILE</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-zinc-900 dark:text-white tracking-tight">
            Connecting Intricate AI Systems with Human Empathy
          </h2>
          
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>

        {/* Narrative introduction block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className={`text-lg font-medium leading-relaxed ${
              isDarkMode ? "text-zinc-300" : "text-zinc-700"
            }`}>
              I am an AI Intern and aspiring AI Product Manager deeply passionate about bridging technical architectures and market needs. In a digital landscape evolving at breakneck speed, I seek to design SaaS tools that are robust under-the-hood but simple for the end-user.
            </p>
            <p className={`text-base leading-relaxed ${
              isDarkMode ? "text-zinc-400" : "text-zinc-650"
            }`}>
              My technical journey lies at the junction of high-compliance legal systems, enterprise-grade recruiting workflow trackers, and structured prompting paradigms. I don't just prompt AI; I build surrounding interfaces that guide users safely through decisions, minimizing error vectors and maximizing direct conversion rates.
            </p>
            <p className={`text-base leading-relaxed ${
              isDarkMode ? "text-zinc-400" : "text-zinc-650"
            }`}>
              With native foundations in React.js, relational databases (SQL / Supabase), and automation relays, I speak the language of engineering while continuously advocating for product clarity, operational safety, and beautiful visual craftsmanship.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-5 p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
              isDarkMode 
                ? "glass-card-dark border-zinc-800 bg-zinc-950/40" 
                : "glass-card-light border-zinc-200/50 bg-white/40"
            }`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent blur-2xl" />
            <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-6">Janaki's Product Code</h3>
            
            <ul className="space-y-4 font-sans text-sm">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-500 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">1</span>
                <div>
                  <h4 className="font-bold text-zinc-800 dark:text-zinc-200">First-Principles Prompting</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Avoid lazy prompting; construct rigid evaluation pipelines and structured schemas.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-purple-500/10 dark:bg-purple-500/20 text-purple-500 dark:text-purple-400 flex items-center justify-center font-bold text-xs">2</span>
                <div>
                  <h4 className="font-bold text-zinc-800 dark:text-zinc-200">SaaS Compliance as UX Advantage</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Legal, immigration, and recruitment pipelines must feel high-trust and completely secure.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-pink-500/10 dark:bg-pink-500/20 text-pink-500 dark:text-pink-400 flex items-center justify-center font-bold text-xs">3</span>
                <div>
                  <h4 className="font-bold text-zinc-800 dark:text-zinc-200">Pristine Visual Rythms</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">High contrast, clean spacing, and modern typographic hierarchy always lead to premium conversions.</p>
                </div>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Structured Grid of Pillars (The requested cards) */}
        <h3 className="font-display font-bold text-lg text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-8 text-left">
          Core Focus Areas
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`p-6 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                isDarkMode 
                  ? "glass-card-dark border-zinc-850 bg-zinc-950/40 hover:bg-zinc-900/40" 
                  : "glass-card-light border-zinc-200/80 bg-white hover:bg-zinc-50/50"
              } ${p.border}`}
            >
              {/* Card Gradient Background Layer */}
              <div className={`absolute inset-0 bg-gradient-to-b ${p.color} pointer-events-none opacity-20`} />
              
              {/* Header Icon & Tag */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="p-3 bg-zinc-100 dark:bg-zinc-900/80 rounded-xl border border-zinc-200/30 dark:border-zinc-800">
                  {p.icon}
                </div>
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 font-bold">
                  {p.tag}
                </span>
              </div>

              {/* Card Copy */}
              <h4 className="text-lg font-bold font-display text-zinc-900 dark:text-white mb-2 relative z-10">
                {p.title}
              </h4>
              <p className={`text-sm leading-relaxed relative z-10 ${
                isDarkMode ? "text-zinc-400" : "text-zinc-600"
              }`}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
