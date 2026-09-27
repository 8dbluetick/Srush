import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

interface HeroProps {
  onStartClick: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onStartClick }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 overflow-hidden bg-gradient-to-b from-[#18040d] via-[#240613] to-[#120308]">
      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-wine-rose/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-rosegold/10 rounded-full blur-2xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="max-w-xl mx-auto z-10 space-y-6"
      >
        {/* Small greeting tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-rosegold/30 text-rosegold-light text-sm font-medium tracking-wide"
        >
          <Sparkles className="w-4 h-4 text-rosegold" />
          <span>Hey Srushti…</span>
          <Heart className="w-3.5 h-3.5 text-blush-mid fill-blush-mid ml-0.5" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-3xl sm:text-5xl font-bold text-blush-soft leading-tight tracking-tight drop-shadow-md"
        >
          I have something I’ve been wanting to tell you.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="text-blush-light/80 text-base sm:text-lg max-w-md mx-auto font-light leading-relaxed"
        >
          So instead of trying to say it perfectly… I made you this.
        </motion.p>

        {/* Animated Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="pt-6"
        >
          <button
            onClick={onStartClick}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-wine-rose via-wine-bright to-rosegold text-white font-medium text-base shadow-xl shadow-wine-rose/25 hover:shadow-wine-rose/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            <span>Start reading</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-rosegold to-blush-mid opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 -z-10" />
          </button>
        </motion.div>
      </motion.div>

      {/* Down indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-rosegold/50 text-xs font-light flex flex-col items-center gap-1"
      >
        <span>Scroll gently</span>
        <div className="w-1 h-5 rounded-full bg-rosegold/30" />
      </motion.div>
    </section>
  );
};
