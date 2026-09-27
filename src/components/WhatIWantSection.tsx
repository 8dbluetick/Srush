import React from 'react';
import { motion } from 'framer-motion';
import { Moon } from 'lucide-react';

export const WhatIWantSection: React.FC = () => {
  return (
    <section id="section-4" className="relative min-h-[95vh] flex flex-col justify-center items-center px-6 py-28 bg-[#090105] text-center overflow-hidden">
      {/* Dark Cinematic Vignette & Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-wine-rose/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-xl mx-auto w-full z-10 space-y-10">
        
        {/* Cinematic Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-rosegold/30 text-rosegold-light text-xs uppercase tracking-widest"
        >
          <Moon className="w-3.5 h-3.5 text-rosegold" />
          <span>Section 04 — Honest Intentions</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl sm:text-5xl font-bold text-blush-soft tracking-tight"
        >
          I don't want to rush anything.
        </motion.h2>

        {/* Narrative Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 sm:p-12 border border-rosegold/25 shadow-2xl space-y-8 text-center relative"
        >
          <div className="space-y-4 text-blush-light/85 text-base sm:text-lg font-light leading-relaxed">
            <p>I don't want to force a label.</p>
            <p>I don't want to rush you into an answer.</p>
            <p className="text-blush-soft font-normal">
              And I definitely don't want you to say yes just because you feel pressured.
            </p>
          </div>

          <div className="py-2 border-t border-b border-rosegold/20">
            <p className="text-blush-light text-base font-light italic">
              I just want to be honest about how I feel.
            </p>
          </div>

          {/* Separately Animated Glowing "I like you." */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="py-6"
          >
            <span className="font-serif text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rosegold-light via-blush-soft to-rosegold text-glow-gold block animate-pulse">
              I like you.
            </span>
          </motion.div>

          <div className="space-y-3 text-blush-soft text-base sm:text-xl font-medium leading-relaxed">
            <p>I genuinely enjoy having you in my life.</p>
            <p className="text-rosegold italic font-serif text-xl sm:text-2xl pt-1">
              And I'd love to see where this could go…
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
