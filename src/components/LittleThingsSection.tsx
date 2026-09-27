import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Compass, MessageCircleHeart, BookmarkCheck, Heart, RotateCw, Send } from 'lucide-react';

export const LittleThingsSection: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const toggleFlip = (id: number) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const cards = [
    {
      id: 1,
      icon: <Brain className="w-6 h-6 text-rosegold" />,
      text: "You overthink the smallest things.",
      tag: "The Overthinker",
      backNote: "And even when you overthink, I'll be here to remind you that everything is going to be okay. ❤️",
    },
    {
      id: 2,
      icon: <Compass className="w-6 h-6 text-blush-mid" />,
      text: "Sometimes you need your own space.",
      tag: "Quiet Moments",
      backNote: "Your space is sacred. I'll always respect your quiet time without ever making you feel guilty. 🌙",
    },
    {
      id: 3,
      icon: <MessageCircleHeart className="w-6 h-6 text-rosegold-light" />,
      text: "You don't always find it easy to express what you're feeling.",
      tag: "Unsaid Feelings",
      backNote: "You don't need fancy words with me—I'll always try to understand what's in your heart. 💬",
    },
    {
      id: 4,
      icon: <BookmarkCheck className="w-6 h-6 text-blush-deep" />,
      text: "But you remember the random little things people tell you.",
      tag: "Thoughtful Mind",
      backNote: "It proves how deeply you care about people, even in the smallest unspoken ways. 🌸",
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

          <p className="text-xs text-rosegold-light/70 italic">
            Tap cards to flip 🔄
          </p>
        </div>

        {/* 4 Interactive 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 perspective-1000">
          {cards.map((card, index) => {
            const isFlipped = !!flippedCards[card.id];
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onClick={() => toggleFlip(card.id)}
                className="h-52 cursor-pointer group relative"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="w-full h-full relative rounded-2xl"
                >
                  {/* FRONT SIDE OF CARD */}
                  <div 
                    className="absolute inset-0 glass-card glass-card-hover rounded-2xl p-6 border border-rosegold/20 flex flex-col justify-between space-y-4"
                    style={{ backfaceVisibility: 'hidden' }}
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

                    <div className="flex items-center justify-between text-[11px] text-rosegold-light/60 font-mono">
                      <span>Tap to flip</span>
                      <RotateCw className="w-3.5 h-3.5 text-rosegold animate-spin-slow" />
                    </div>
                  </div>

                  {/* BACK SIDE OF CARD (FLIPPED 3D) */}
                  <div 
                    className="absolute inset-0 glass-card rounded-2xl p-6 border border-rosegold/50 bg-gradient-to-br from-[#400b21] via-[#230613] to-[#120308] flex flex-col justify-between space-y-3"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)' 
                    }}
                  >
                    <div className="flex items-center justify-between border-b border-rosegold/20 pb-2">
                      <div className="flex items-center gap-1.5 text-rosegold font-semibold text-xs">
                        <Send className="w-3.5 h-3.5 text-rosegold -rotate-45" />
                        <span>Reflection</span>
                      </div>
                      <span className="text-[10px] text-blush-mid">❤️</span>
                    </div>

                    <p className="text-blush-soft text-sm sm:text-base font-light italic leading-relaxed">
                      "{card.backNote}"
                    </p>

                    <div className="text-right text-[10px] text-rosegold-light/50 font-mono">
                      Tap again to return ↺
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
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
