import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export const NavbarProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto flex items-center justify-between px-4 py-2 rounded-full glass-card border border-rosegold/20 shadow-lg">
        <div className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-rosegold fill-rosegold animate-pulse" />
          <span className="font-serif text-sm font-semibold text-blush-soft tracking-wide">
            For Srushti, ❤️
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-20 bg-wine-dark/80 rounded-full h-1.5 overflow-hidden border border-rosegold/20">
            <div 
              className="bg-gradient-to-r from-rosegold to-blush-mid h-full transition-all duration-200 rounded-full"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          <span className="text-[10px] font-mono text-rosegold-light">
            {Math.round(scrollProgress)}%
          </span>
        </div>
      </div>
    </header>
  );
};
