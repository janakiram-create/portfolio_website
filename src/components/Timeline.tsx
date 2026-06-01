import { motion } from "motion/react";
import { timelineData } from "../data";
import { Calendar, Briefcase, GraduationCap, MapPin, Sparkles, Trophy, AlignLeft } from "lucide-react";

export default function Timeline({ isDarkMode }: { isDarkMode: boolean }) {
  const getTimelineIcon = (type: string) => {
    switch (type) {
      case "internship":
        return <Briefcase className="w-5 h-5 text-indigo-400" />;
      case "product":
        return <Trophy className="w-5 h-5 text-purple-400" />;
      default:
        return <GraduationCap className="w-5 h-5 text-pink-400" />;
    }
  };

  const getTimelineBadgeStyle = (type: string) => {
    switch (type) {
      case "internship":
        return "bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border-indigo-500/20";
      case "product":
        return "bg-purple-500/10 text-purple-500 dark:text-purple-400 border-purple-500/20";
      default:
        return "bg-pink-500/10 text-pink-500 dark:text-pink-400 border-pink-500/20";
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-bold tracking-widest text-indigo-400 font-mono">
            <Calendar className="w-3.5 h-3.5 animate-pulse" />
            <span>03 . DEVELOPMENT PATHWAY</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-zinc-900 dark:text-white tracking-tight">
            Professional Experience & Milestones
          </h2>
          
          <p className={`text-base max-w-xl text-center ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
            Chronological log detailing the intersection of early engineering, product-defining user discovery, and hands-on AI orchestrations.
          </p>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>

        {/* Chronological Vertical Tree (Centered design) */}
        <div className="relative">
          {/* Vertical axis bar on desktop, on left of screen on mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-zinc-200 dark:border-zinc-800 -translate-x-1/2 pointer-events-none z-0" />

          {timelineData.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 md:mb-20 z-10 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Connector Dot on the center axis */}
                <div className="absolute left-4 md:left-1/2 w-9 h-9 rounded-full bg-zinc-900 dark:bg-zinc-950 border-4 border-indigo-500 shadow-lg -translate-x-1/2 z-20 flex items-center justify-center">
                  {getTimelineIcon(item.type)}
                </div>

                {/* Left/Right Container box */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`p-6 sm:p-8 rounded-3xl border text-left scale-100 hover:scale-[1.01] transition-transform relative group ${
                      isDarkMode
                        ? "glass-card-dark bg-zinc-950/40 border-zinc-850 hover:border-zinc-750"
                        : "glass-card-light bg-white border-zinc-200 hover:border-zinc-300"
                    }`}
                  >
                    
                    {/* Time Frame Tag & Node Category tag */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <span className={`inline-flex px-3 py-1 rounded-lg text-[10px] font-mono font-extrabold tracking-widest border ${getTimelineBadgeStyle(item.type)}`}>
                        {item.years}
                      </span>

                      <div className="flex items-center gap-1 text-xs font-mono text-zinc-500 font-medium">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Role Title and Company name */}
                    <div className="space-y-1 mb-5">
                      <h3 className="font-display font-extrabold text-xl text-zinc-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold tracking-wide text-zinc-500 dark:text-zinc-400">
                        {item.company}
                      </p>
                    </div>

                    {/* Bullet Achievements List */}
                    <ul className="space-y-4 mb-6">
                      {item.achievements.map((achievement, bulletIdx) => (
                        <li key={bulletIdx} className="flex items-start gap-3">
                          {/* Mini decorative list-node spark */}
                          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                          <p className={`text-xs leading-relaxed ${isDarkMode ? "text-zinc-400" : "text-zinc-650"}`}>
                            {achievement}
                          </p>
                        </li>
                      ))}
                    </ul>

                    {/* Skills Gained in this tenure */}
                    <div className="flex flex-wrap gap-1.5 border-t border-zinc-200/50 dark:border-zinc-800/40 pt-4">
                      {item.skillsGained.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2.5 py-0.5 rounded-lg text-[9px] font-mono tracking-wider ${
                            isDarkMode
                              ? "bg-zinc-900 text-zinc-300"
                              : "bg-zinc-100 text-zinc-650"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </motion.div>
                </div>

                {/* Empty spacer side for desktop symmetry */}
                <div className="hidden md:block w-1/2" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
