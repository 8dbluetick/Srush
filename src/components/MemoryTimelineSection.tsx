import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Feather } from 'lucide-react';

interface MemoryItem {
  id: number;
  title: string;
  icon: string;
  shortSnippet: string;
  expandedDetails: string;
}

export const MemoryTimelineSection: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const memories: MemoryItem[] = [
    {
      id: 1,
      title: "Our random conversations",
      icon: "💬",
      shortSnippet: "The ones that start with nothing and end up lasting hours.",
      expandedDetails: "Whether it's late-night thoughts or midday random texts, talking to you always feels effortless and comforting.",
    },
    {
      id: 2,
      title: "The silly moments",
      icon: "🤪",
      shortSnippet: "When neither of us is taking anything too seriously.",
      expandedDetails: "The jokes, the teasing, and the little laughs we share are genuinely some of my favorite parts of the day.",
    },
    {
      id: 3,
      title: "The deep conversations",
      icon: "🌌",
      shortSnippet: "When you share what actually goes on in your head.",
      expandedDetails: "Hearing your perspective on life, your goals, and your unspoken thoughts makes me appreciate you even more.",
    },
    {
      id: 4,
      title: "The little things you tell me",
      icon: "📝",
      shortSnippet: "The tiny details you think are unimportant.",
      expandedDetails: "You might think nobody is paying attention, but I notice and remember every small story you share.",
    },
    {
      id: 5,
      title: "The moments when you overthink",
      icon: "💭",
      shortSnippet: "When your mind starts running in 100 different directions.",
      expandedDetails: "Whenever you feel overwhelmed or overthink, I want you to know you never have to deal with it alone.",
    },
    {
      id: 6,
      title: "The moments when you just need space",
      icon: "🌿",
      shortSnippet: "When you need time to recharge quietly.",
      expandedDetails: "I respect your space completely. Knowing when to give you room to breathe is just as important as being there.",
    },
    {
      id: 7,
      title: "And all the things still waiting to happen…",
      icon: "✨",
      shortSnippet: "The unwritten chapters ahead of us.",
      expandedDetails: "All the new memories, inside jokes, and quiet moments we haven't even created yet… I look forward to every single one.",
    },
  ];

  return (
    <section id="section-5" className="relative min-h-screen flex flex-col justify-center items-center px-6 py-24 bg-gradient-to-b from-[#090105] via-[#1a040e] to-[#120308]">
      <div className="max-w-2xl mx-auto w-full space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-rosegold/30 text-rosegold text-xs uppercase tracking-wider"
          >
            <Feather className="w-3.5 h-3.5 text-rosegold" />
            <span>Section 05 — Interactive Memory</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl font-bold text-blush-soft"
          >
            Things I Want To Remember
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blush-light/70 text-xs sm:text-sm font-light italic"
          >
            Tap on any memory card to open it ❤️
          </motion.p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-4 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-rosegold/40 before:via-wine-rose before:to-rosegold/10">
          {memories.map((item, index) => {
            const isOpen = activeId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12"
              >
                {/* Timeline Node */}
                <button
                  onClick={() => setActiveId(isOpen ? null : item.id)}
                  className={`absolute left-3 -translate-x-1/2 top-4 w-7 h-7 rounded-full flex items-center justify-center text-xs transition-all duration-300 z-10 ${
                    isOpen
                      ? 'bg-rosegold text-wine-dark shadow-lg shadow-rosegold/50 scale-110 ring-4 ring-rosegold/20'
                      : 'bg-wine-mid text-rosegold-light border border-rosegold/30 hover:scale-105'
                  }`}
                  aria-label={`Toggle details for ${item.title}`}
                >
                  <span>{item.icon}</span>
                </button>

                {/* Card */}
                <div
                  onClick={() => setActiveId(isOpen ? null : item.id)}
                  className={`glass-card rounded-2xl p-5 border transition-all duration-300 cursor-pointer ${
                    isOpen
                      ? 'border-rosegold/50 bg-wine-mid/60 shadow-xl shadow-wine-rose/20'
                      : 'border-rosegold/20 hover:border-rosegold/35'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-semibold text-blush-soft">
                      {item.title}
                    </h3>
                    <ChevronDown
                      className={`w-4 h-4 text-rosegold transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  <p className="text-blush-light/80 text-xs sm:text-sm mt-1 font-light">
                    {item.shortSnippet}
                  </p>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-3 border-t border-rosegold/20 text-sm text-blush-soft font-normal leading-relaxed bg-wine-dark/40 p-3.5 rounded-xl">
                          <p>"{item.expandedDetails}"</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
