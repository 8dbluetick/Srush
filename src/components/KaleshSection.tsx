import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Smile } from 'lucide-react';

export const KaleshSection: React.FC = () => {
  return (
    <section id="section-3" className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 py-24 bg-gradient-to-b from-[#16040c] via-[#200511] to-[#120308]">
      <div className="max-w-xl mx-auto w-full text-center space-y-10">
        
        {/* Playful Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-rosegold/30 text-rosegold text-xs font-semibold uppercase tracking-wider"
        >
          <Smile className="w-4 h-4 text-rosegold animate-bounce" />
          <span>Section 03 — Playful Promise</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-3xl sm:text-4xl font-bold text-blush-soft leading-tight"
        >
          One thing I already know about you 😂
        </motion.h2>

        {/* Playful Narrative Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-6 sm:p-10 border border-rosegold/30 shadow-2xl text-left space-y-6 relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-rosegold/10 rounded-full blur-3xl pointer-events-none" />

          <p className="text-blush-light text-base sm:text-lg font-light leading-relaxed">
            If someday we have a disagreement, <br />
            I don't want to be the person who tries to win the argument.
          </p>

          <div className="p-4 rounded-xl bg-wine-dark/70 border-l-4 border-rosegold">
            <p className="font-serif text-lg sm:text-xl font-medium text-rosegold-light">
              I want to be the person who listens.
            </p>
          </div>

          <div className="space-y-2 text-blush-light/90 text-base sm:text-lg font-light">
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rosegold inline-block" />
              You can tell me your side.
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rosegold inline-block" />
              You can be angry.
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rosegold inline-block" />
              You can overthink.
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rosegold inline-block" />
              You can take your time.
            </p>
          </div>

          <p className="text-blush-soft font-medium text-lg sm:text-xl pt-2 leading-relaxed border-t border-rosegold/20">
            And when everything is calm, <br />
            <span className="text-rosegold italic">I want us to understand each other with love.</span>
          </p>
        </motion.div>

        {/* Animated Heart / Emoji */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-wine-rose/30 border border-blush-mid/40 shadow-lg text-blush-soft font-medium text-sm"
        >
          <Heart className="w-4 h-4 text-blush-mid fill-blush-mid" />
          <span>No unnecessary drama, just us ❤️</span>
        </motion.div>

      </div>
    </section>
  );
};
