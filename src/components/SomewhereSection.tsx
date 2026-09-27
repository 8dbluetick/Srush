import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake } from 'lucide-react';

export const SomewhereSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section id="section-1" className="relative min-h-[85vh] flex flex-col justify-center items-center px-6 py-24 bg-gradient-to-b from-[#120308] via-[#1c0510] to-[#120308]">
      <div className="max-w-xl mx-auto w-full text-center space-y-10">
        
        {/* Decorative Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-rosegold/20 text-rosegold text-xs tracking-wider uppercase"
        >
          <HeartHandshake className="w-3.5 h-3.5 text-rosegold" />
          <span>Section 01</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-serif text-2xl sm:text-4xl font-semibold text-blush-soft leading-snug"
        >
          Somewhere along the way, <br className="hidden sm:inline" />
          <span className="text-rosegold italic">you became important to me.</span>
        </motion.h2>

        {/* Narrative Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="glass-card rounded-2xl p-6 sm:p-10 border border-rosegold/20 shadow-2xl space-y-6 text-left relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-wine-rose/10 rounded-full blur-2xl pointer-events-none" />

          <motion.p variants={itemVariants} className="text-blush-light/90 text-base sm:text-lg leading-relaxed font-light">
            I don't know exactly when it happened.
          </motion.p>

          <motion.p variants={itemVariants} className="text-blush-light/90 text-base sm:text-lg leading-relaxed font-light pl-4 border-l-2 border-rosegold/40 italic">
            Maybe it was through all our random conversations, <br />
            the little things you told me, <br />
            the things you overthink, <br />
            the moments you need your own space, <br />
            or just the way you are…
          </motion.p>

          <motion.p variants={itemVariants} className="text-blush-soft font-medium text-lg sm:text-xl leading-relaxed pt-2 text-glow">
            But somewhere along the way, <br />
            I started genuinely caring about you.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
