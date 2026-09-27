import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: 'heart' | 'sparkle' | 'circle';
}

export const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 16 + 8,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.25,
      type: i % 3 === 0 ? 'heart' : i % 3 === 1 ? 'sparkle' : 'circle',
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Background Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-[-40px] text-blush-mid/40 animate-float"
          style={{
            left: `${p.x}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
          }}
        >
          {p.type === 'heart' ? (
            '❤️'
          ) : p.type === 'sparkle' ? (
            '✨'
          ) : (
            <div 
              className="rounded-full bg-rosegold/30 blur-[1px]" 
              style={{ width: `${p.size}px`, height: `${p.size}px` }} 
            />
          )}
        </div>
      ))}

      {/* Animated Floating 3D Paper Airplane */}
      <motion.div
        initial={{ x: '-10vw', y: '20vh', rotate: -15, scale: 0.8 }}
        animate={{
          x: ['-10vw', '35vw', '70vw', '110vw'],
          y: ['25vh', '15vh', '45vh', '30vh'],
          rotate: [-15, 10, -20, 15],
          rotateY: [0, 180, 0, 180],
          scale: [0.8, 1.1, 0.9, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-0 text-rosegold-light opacity-60 drop-shadow-[0_0_12px_rgba(224,169,109,0.5)] z-0"
      >
        <div className="relative">
          <Send className="w-8 h-8 -rotate-45 text-rosegold" />
          <span className="absolute -bottom-1 -left-2 text-[10px]">❤️</span>
        </div>
      </motion.div>

      {/* Second Soaring Airplane on Lower Trajectory */}
      <motion.div
        initial={{ x: '110vw', y: '70vh', rotate: 165, scale: 0.7 }}
        animate={{
          x: ['110vw', '60vw', '20vw', '-10vw'],
          y: ['70vh', '80vh', '65vh', '75vh'],
          rotate: [165, 190, 155, 175],
          rotateY: [0, 180, 360, 180],
          scale: [0.7, 0.95, 0.85, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          delay: 9,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-0 text-blush-mid opacity-50 drop-shadow-[0_0_10px_rgba(244,170,191,0.5)] z-0"
      >
        <div className="relative">
          <Send className="w-7 h-7 -rotate-45 text-blush-mid" />
          <span className="absolute -top-1 -right-1 text-[8px]">✨</span>
        </div>
      </motion.div>
    </div>
  );
};
