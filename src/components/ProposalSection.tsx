import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, RefreshCw, X } from 'lucide-react';

interface ProposalProps {
  onReplay: () => void;
}

export const ProposalSection: React.FC<ProposalProps> = ({ onReplay }) => {
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);

  const fireConfetti = () => {
    // Fireworks / heart burst using canvas-confetti
    const duration = 3.5 * 1000;
    const animationEnd = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#e0a96d', '#f4aabf', '#93254e', '#ffffff'],
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#e0a96d', '#f4aabf', '#93254e', '#ffffff'],
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleYes = () => {
    setHasAccepted(true);
    fireConfetti();
  };

  const handleTimeClick = () => {
    setShowTimeModal(true);
  };

  const handleReplayClick = () => {
    setHasAccepted(false);
    setShowTimeModal(false);
    onReplay();
  };

  return (
    <section id="proposal-section" className="relative min-h-screen flex flex-col justify-center items-center px-6 py-28 bg-[#070104] text-center overflow-hidden">
      {/* Background Soft Glow & Particles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wine-rose/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-xl mx-auto w-full z-10 space-y-10">
        
        <AnimatePresence mode="wait">
          {!hasAccepted ? (
            /* Proposal Form */
            <motion.div
              key="proposal-card"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.7 }}
              className="glass-card rounded-3xl p-8 sm:p-12 border border-rosegold/30 shadow-2xl space-y-8 relative overflow-hidden"
            >
              {/* Heading */}
              <div className="space-y-3">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xs uppercase tracking-widest text-rosegold font-semibold"
                >
                  The Moment
                </motion.span>
                
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-blush-soft">
                  So, Srushti…
                </h2>
              </div>

              {/* Emotional Paragraphs */}
              <div className="space-y-4 text-blush-light text-base sm:text-lg font-light leading-relaxed">
                <p>I don't know what the future looks like.</p>
                <p className="text-blush-soft font-normal italic font-serif text-lg sm:text-xl text-rosegold-light">
                  But I know that I'd like to discover it with you.
                </p>
              </div>

              {/* Proposal Question */}
              <div className="py-4">
                <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-blush-soft tracking-wide text-glow">
                  Will you give us a chance? ❤️
                </h3>
                
                <p className="text-blush-light/70 text-xs sm:text-sm font-light mt-3 space-y-1">
                  <span>No pressure. No perfect answer required.</span> <br />
                  <span>Just be honest with me.</span>
                </p>
              </div>

              {/* Action Buttons (Equal prominence & accessibility) */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                {/* YES BUTTON */}
                <button
                  onClick={handleYes}
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-gradient-to-r from-wine-rose via-wine-bright to-rosegold text-white font-semibold text-sm sm:text-base shadow-xl shadow-wine-rose/40 hover:scale-[1.04] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Heart className="w-5 h-5 fill-white group-hover:animate-bounce" />
                  <span>YES, LET'S SEE WHERE THIS GOES ❤️</span>
                </button>

                {/* I NEED SOME TIME BUTTON */}
                <button
                  onClick={handleTimeClick}
                  className="w-full sm:w-auto px-6 py-4 rounded-full glass-card border border-rosegold/30 text-blush-light hover:text-white hover:bg-wine-mid/50 font-medium text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <span>I NEED SOME TIME 🥺</span>
                </button>
              </div>
            </motion.div>
          ) : (
            /* Full-Screen Celebration Screen */
            <motion.div
              key="celebration-card"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="glass-card rounded-3xl p-8 sm:p-12 border border-rosegold/50 shadow-2xl shadow-rosegold/20 space-y-8 text-center relative"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-rosegold to-blush-mid p-0.5 shadow-xl shadow-rosegold/30 animate-pulse">
                <div className="w-full h-full bg-wine-dark rounded-full flex items-center justify-center">
                  <Heart className="w-10 h-10 text-rosegold fill-rosegold" />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-blush-soft text-glow leading-tight">
                  Okay… you just made me REALLY happy. ❤️
                </h2>

                <p className="font-serif text-xl sm:text-2xl text-rosegold-light italic">
                  Here's to whatever comes next.
                </p>
              </div>

              <div className="pt-6">
                <button
                  onClick={handleReplayClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card border border-rosegold/30 text-rosegold-light hover:text-white font-medium text-xs sm:text-sm hover:bg-wine-mid/40 transition-all duration-300"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Replay this moment ↻</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Modal for "I NEED SOME TIME 🥺" */}
      <AnimatePresence>
        {showTimeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-3xl p-6 sm:p-8 max-w-md w-full border border-rosegold/40 shadow-2xl text-center space-y-6 relative"
            >
              <button
                onClick={() => setShowTimeModal(false)}
                className="absolute top-4 right-4 p-2 text-blush-light/60 hover:text-white rounded-full"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-wine-mid border border-rosegold/30 text-rosegold mx-auto">
                <Heart className="w-7 h-7 text-rosegold fill-rosegold/30" />
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-bold text-blush-soft">
                  That's completely okay. ❤️
                </h3>
                
                <div className="text-blush-light text-sm sm:text-base font-light leading-relaxed space-y-2">
                  <p>Take your time.</p>
                  <p>You never have to rush an answer for me.</p>
                  <p className="text-rosegold font-medium pt-1">
                    Whatever you feel, I'll respect it.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setShowTimeModal(false)}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-wine-rose to-rosegold text-white font-medium text-sm shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-transform"
                >
                  Okay ❤️
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
