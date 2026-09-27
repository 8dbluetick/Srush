import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Compass, MessageCircleHeart, BookmarkCheck, Heart } from 'lucide-react';

export const LittleThingsSection: React.FC = () => {
  const cards = [
    {
      id: 1,
      icon: <Brain className="w-6 h-6 text-rosegold" />,
      text: "You overthink the smallest things.",
      tag: "The Overthinker",
    },
    {
      id: 2,
      icon: <Compass className="w-6 h-6 text-blush-mid" />,
      text: "Sometimes you need your own space.",
      tag: "Quiet Moments",
    },
    {
      id: 3,
      icon: <MessageCircleHeart className="w-6 h-6 text-rosegold-light" />,
      text: "You don't always find it easy to express what you're feeling.",
      tag: "Unsaid Feelings",
    },
    {
      id: 4,
      icon: <BookmarkCheck className="w-6 h-6 text-blush-deep" />,
      text: "But you remember the random little things people tell you.",
      tag: "Thoughtful Mind",
    },
  ];

  return (
    <section id="section-2" className="relative min-h-screen flex flex-col justify-center items-center px-6 py-24 bg-gradient-to-b from-[#120308] via-[#230613] to-[#16040c]">
      <div className="max-w-2xl mx-auto w-full space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs uppercase tracking-widest text-rosegold font-medium"
          >
            Section 02 — Observation
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="font-serif text-3xl sm:text-4xl font-bold text-blush-soft"
          >
            I Notice The Little Things
          </motion.h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.18 }}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-rosegold/20 flex flex-col justify-between space-y-4 group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-wine-dark/60 border border-rosegold/20 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-rosegold-light/70 px-2.5 py-1 rounded-full bg-wine-dark/40 border border-rosegold/10">
                  {card.tag}
                </span>
              </div>

              <p className="text-blush-soft text-base font-medium leading-relaxed group-hover:text-white transition-colors">
                "{card.text}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Closing Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center pt-4"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full glass-card border border-rosegold/30 shadow-xl">
            <Heart className="w-5 h-5 text-blush-mid fill-blush-mid animate-pulse" />
            <span className="font-serif text-lg sm:text-xl text-blush-soft font-semibold italic">
              And somehow, I like all those little things about you.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
