import React, { useEffect, useState } from 'react';

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
    </div>
  );
};
