import React from 'react';
import { motion } from 'framer-motion';
import { Feather, Sparkles, Send } from 'lucide-react';

export const FinalLetterSection: React.FC = () => {
  return (
    <section id="section-7" className="relative min-h-screen flex flex-col justify-center items-center px-6 py-28 bg-gradient-to-b from-[#070104] via-[#16040d] to-[#0c0206] text-center">
      <div className="max-w-xl mx-auto w-full space-y-12">
        
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-rosegold/30 text-rosegold text-xs uppercase tracking-wider"
        >
          <Feather className="w-3.5 h-3.5 text-rosegold" />
          <span>Section 07 — Final Letter</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl sm:text-5xl font-bold text-blush-soft"
        >
          One last thing…
        </motion.h2>

        {/* Handwritten Digital Letter Parchment */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative glass-card rounded-3xl p-8 sm:p-12 border border-rosegold/35 shadow-2xl text-left font-handwritten text-2xl sm:text-3xl text-blush-soft leading-relaxed space-y-6 bg-gradient-to-b from-[#250816]/90 to-[#19040e]/95 overflow-hidden"
        >
          <div className="absolute top-4 right-4 opacity-20">
            <Sparkles className="w-10 h-10 text-rosegold" />
          </div>

          <p className="font-semibold text-rosegold-light text-3xl sm:text-4xl">
            Srushti,
          </p>

          <p className="font-light">
            I don't know where this little journey is going to take us.
          </p>

          <div className="space-y-1 font-light italic text-blush-light">
            <p>Maybe it'll become something beautiful.</p>
            <p>Maybe it'll take time.</p>
            <p>Maybe we'll figure it out along the way.</p>
          </div>

          <p className="font-normal text-blush-soft pt-2">
            But whatever happens, <br />
            <span className="text-rosegold font-semibold">I'm glad I met you.</span>
          </p>

          <div className="pt-4 border-t border-rosegold/20 space-y-2">
            <p className="font-light">
              And if you ever wonder whether someone notices the little things about you…
            </p>
            
            <p className="font-bold text-rosegold text-3xl sm:text-4xl text-glow">
              I do.
            </p>
            
            <p className="text-2xl pt-1">❤️</p>
          </div>

          {/* Signature with Airplane */}
          <div className="pt-6 flex items-center justify-between font-serif text-xl sm:text-2xl font-bold text-rosegold-light italic">
            <motion.div
              animate={{ x: [0, 8, 0], y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Send className="w-5 h-5 text-rosegold -rotate-45" />
            </motion.div>
            <span>— Shreyash</span>
          </div>
        </motion.div>

        {/* Bottom Playful Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="pt-4 text-center space-y-2"
        >
          <p className="text-xs sm:text-sm font-light text-blush-light/70 max-w-sm mx-auto leading-relaxed">
            Made with a little too much overthinking, <br />
            for someone who overthinks even more. 😂❤️
          </p>
        </motion.div>

      </div>
    </section>
  );
};
