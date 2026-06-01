import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { statsData } from "../data";
import { Target, Award, Code, CheckCircle, Flame } from "lucide-react";

// Count Up component for stats ticker
function StatCount({ value, target }: { value: string; target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1500; // 1.5s total countup

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      
      const currentCount = Math.floor(progressPercentage * target);
      setCount(currentCount);

      if (progressPercentage < 1) {
        requestAnimationFrame(animateCount);
      } else {
        // Fallback or exact setting at the end
        setCount(target);
      }
    };

    requestAnimationFrame(animateCount);
  }, [target]);

  // If value is non-numeric (e.g. "Active"), return the normal string
  if (isNaN(Number(value.replace(/[^0-9]/g, '')))) {
    return <span>{value}</span>;
  }

  // Check if target value has a trailing symbol like '+'
  const hasPlus = value.includes("+");
  return (
    <span>
      {count}
      {hasPlus && "+"}
    </span>
  );
}

export default function Achievements({ isDarkMode }: { isDarkMode: boolean }) {
  const getStatIcon = (id: string) => {
    switch (id) {
      case "stat-1":
        return <Code className="w-5 h-5 text-indigo-400" />;
      case "stat-2":
        return <Flame className="w-5 h-5 text-purple-400" />;
      case "stat-3":
        return <Award className="w-5 h-5 text-pink-400" />;
      default:
        return <Target className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="stats" className="py-24 relative overflow-hidden">
      {/* Decorative gradient glowing backing nodes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500/3 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-bold tracking-widest text-indigo-400 font-mono">
            <Target className="w-3.5 h-3.5" />
            <span>05 . STATISTICAL CONFIRMATIONS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-zinc-900 dark:text-white tracking-tight">
            Quantifiable Professional Standing
          </h2>
          
          <p className={`text-base max-w-xl text-center ${isDarkMode ? "text-zinc-400" : "text-zinc-650"}`}>
            A raw metric synopsis mapping real deployment counts, specialized certifications, and cumulative learning modules.
          </p>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-indigo-505 to-purple-500" />
        </div>

        {/* Responsive Bento Box Layout for Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`p-6 sm:p-8 rounded-3xl border text-center relative group overflow-hidden flex flex-col justify-between ${
                isDarkMode
                  ? "glass-card-dark bg-zinc-950/40 border-zinc-855 hover:border-zinc-700 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
                  : "glass-card-light bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)]"
              }`}
            >
              {/* Internal abstract visual patterns */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60 rounded-b-3xl" />
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/5 to-transparent blur-xl" />

              {/* Box Top Header: Icon & Category Stamp */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-2.5 bg-zinc-100 dark:bg-zinc-900/80 rounded-xl border border-zinc-200/50 dark:border-zinc-800">
                  {getStatIcon(stat.id)}
                </div>
                <span className="font-mono text-[9px] tracking-widest text-zinc-400 dark:text-zinc-500 font-bold uppercase">
                  {stat.badge}
                </span>
              </div>

              {/* Large Counter Number */}
              <div className="my-3">
                <span className="text-4xl sm:text-5xl font-black font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <StatCount value={stat.value} target={stat.numericValue} />
                </span>
              </div>

              {/* Lower Descriptive Label */}
              <div className="border-t border-zinc-200/50 dark:border-zinc-800/40 pt-4 mt-4">
                <h3 className="font-sans font-bold text-sm text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                  {stat.label}
                </h3>
                <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 mt-1">
                  AUTHENTICATED RECORD
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
