import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export default function ParticleBackground({ isDarkMode }: { isDarkMode: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const constraintsRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for subtle background deflection
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    // Generate organic particles
    const list: Particle[] = [];
    const colors = isDarkMode 
      ? ["rgba(99, 102, 241, 0.15)", "rgba(139, 92, 246, 0.15)", "rgba(168, 85, 247, 0.1)", "rgba(59, 130, 246, 0.1)"]
      : ["rgba(99, 102, 241, 0.04)", "rgba(139, 92, 246, 0.04)", "rgba(168, 85, 247, 0.03)", "rgba(59, 130, 246, 0.04)"];
      
    for (let i = 0; i < 24; i++) {
      list.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 200 + 80,
        duration: Math.random() * 25 + 15,
        delay: Math.random() * -10,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setParticles(list);
  }, [isDarkMode]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      // Map displacement safely
      mouseX.set((clientX - window.innerWidth / 2) * 0.03);
      mouseY.set((clientY - window.innerHeight / 2) * 0.03);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div 
      ref={constraintsRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    >
      {/* Mesh Glow Blobs deflected by Mouse */}
      <motion.div 
        style={{ x: springX, y: springY }}
        className="absolute inset-x-0 inset-y-0 opacity-80"
      >
        <div 
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full blur-[120px] mix-blend-screen animate-pulse"
          style={{ 
            background: isDarkMode 
              ? "radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(124, 58, 237, 0.03) 0%, transparent 70%)" 
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full blur-[120px] mix-blend-screen"
          style={{ 
            background: isDarkMode 
              ? "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%)" 
          }}
        />
      </motion.div>

      {/* Scattered Organic Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full blur-2xl"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
          animate={{
            y: ["0%", "15%", "-15%", "0%"],
            x: ["0%", "-10%", "10%", "0%"],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
