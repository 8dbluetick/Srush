import React, { useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const RAW_VIDEOS = [
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502133/_srush16_14050705_150906928.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502135/_srush16_14050705_150905021.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502135/_srush16_14050705_150917795.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502135/_srush16_14050705_150926472.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502135/_srush16_14050705_150921194.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502135/_srush16_14050705_150913539.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502135/_srush16_14050705_150924661.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502136/_srush16_14050705_150930418.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502136/_srush16_14050705_150928350.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502136/_srush16_14050705_150934669.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502137/_srush16_14050705_150937035.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502137/_srush16_14050705_150932383.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502137/_srush16_14050705_150942099.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502137/_srush16_14050705_150946258.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502138/_srush16_14050705_150940305.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502138/_srush16_14050705_150948352.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502138/_srush16_14050705_150954474.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502138/_srush16_14050705_150956239.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502139/_srush16_14050705_151010940.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502139/_srush16_14050705_151000097.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502139/_srush16_14050705_151002036.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502139/_srush16_14050705_151003835.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502140/_srush16_14050705_150958255.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502140/_srush16_14050705_151015663.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502141/_srush16_14050705_151020003.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502141/_srush16_14050705_151017889.mp4",
  "https://res.cloudinary.com/a1ifdeim/video/upload/v1790502141/_srush16_14050705_151013434.mp4"
];

// Optimized Cloudinary helpers
const getOptimizedVideoUrl = (url: string) => {
  return url.replace('/video/upload/', '/video/upload/f_auto,q_auto,w_320/');
};

const getPosterUrl = (url: string) => {
  return url.replace('/video/upload/', '/video/upload/f_auto,q_auto,w_320,so_0/').replace('.mp4', '.jpg');
};

interface VideoCardProps {
  url: string;
  index: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ url, index }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Autoplay fallback when video comes into viewport
    const videoElem = videoRef.current;
    if (!videoElem) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElem.play().catch(() => {});
          } else {
            videoElem.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(videoElem);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex-shrink-0 w-[125px] h-[200px] sm:w-[170px] sm:h-[260px] md:w-[200px] md:h-[300px] rounded-2xl overflow-hidden glass-card border border-rosegold/20 shadow-xl relative group transition-all duration-300 md:hover:scale-[1.04] md:hover:brightness-110 md:hover:border-rosegold/50 md:hover:shadow-rosegold/20 bg-wine-dark/70">
      <video
        ref={videoRef}
        src={getOptimizedVideoUrl(url)}
        poster={getPosterUrl(url)}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={`Srushti memory video ${index + 1}`}
        className="w-full h-full object-cover rounded-2xl"
      />
      {/* Subtle Rose-Gold Border Glow Overlay */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-rosegold/10 pointer-events-none group-hover:ring-rosegold/40 transition-all" />
    </div>
  );
};

interface VideoRowProps {
  videos: string[];
  direction: 'left' | 'right';
  duration: number;
  startIndex: number;
}

const VideoRow: React.FC<VideoRowProps> = ({ videos, direction, duration, startIndex }) => {
  const shouldReduceMotion = useReducedMotion();
  // Duplicate array for infinite seamless looping
  const duplicatedVideos = [...videos, ...videos];

  return (
    <div className="flex overflow-hidden py-2 select-none relative w-full">
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
              }
        }
        transition={{
          repeat: Infinity,
          duration,
          ease: 'linear',
        }}
        className="flex gap-3 sm:gap-4 flex-nowrap will-change-transform"
      >
        {duplicatedVideos.map((url, idx) => (
          <VideoCard
            key={`${startIndex}-${idx}`}
            url={url}
            index={(startIndex + (idx % videos.length))}
          />
        ))}
      </motion.div>
    </div>
  );
};

export const KaleshSection: React.FC = () => {
  const row1Videos = RAW_VIDEOS.slice(0, 9);
  const row2Videos = RAW_VIDEOS.slice(9, 18);
  const row3Videos = RAW_VIDEOS.slice(18, 27);

  return (
    <section id="section-3" className="relative min-h-screen flex flex-col justify-center items-center py-24 bg-gradient-to-b from-[#16040c] via-[#1a030d] to-[#120308] overflow-hidden">
      {/* Ambient Radial Vignette Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-wine-rose/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Header Content */}
      <div className="max-w-2xl mx-auto w-full text-center px-6 space-y-4 mb-10 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-rosegold/30 text-rosegold text-xs font-semibold uppercase tracking-wider"
        >
          <Sparkles className="w-3.5 h-3.5 text-rosegold" />
          <span>SECTION 03 • LITTLE MOMENTS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-3xl sm:text-5xl font-bold text-blush-soft leading-tight"
        >
          One thing I already know about you 😂
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-blush-light/80 text-base sm:text-lg max-w-lg mx-auto font-light leading-relaxed italic"
        >
          "Maybe I don’t know everything about you yet… <br />
          but I’m starting to notice the little things."
        </motion.p>
      </div>

      {/* 3-Row Parallax Video Gallery with Edge Fade Masks */}
      <div className="w-full relative py-4 z-10 overflow-hidden">
        {/* Left Edge Mask Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#16040c] via-[#16040c]/80 to-transparent z-20 pointer-events-none" />
        
        {/* Right Edge Mask Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#16040c] via-[#16040c]/80 to-transparent z-20 pointer-events-none" />

        {/* Video Rows Container */}
        <div className="space-y-3 sm:space-y-4">
          {/* ROW 1: Right to Left (36s) */}
          <VideoRow videos={row1Videos} direction="left" duration={36} startIndex={0} />

          {/* ROW 2: Left to Right (45s) */}
          <VideoRow videos={row2Videos} direction="right" duration={45} startIndex={9} />

          {/* ROW 3: Right to Left (40s) */}
          <VideoRow videos={row3Videos} direction="left" duration={40} startIndex={18} />
        </div>
      </div>

      {/* Section Bottom Narrative */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="max-w-md mx-auto w-full text-center px-6 mt-12 space-y-3 z-10"
      >
        <p className="text-blush-light text-base sm:text-lg font-light leading-relaxed font-serif">
          Some moments are tiny. <br />
          Some are completely random. <br />
          But somehow… <br />
          <span className="text-rosegold-light font-medium italic">they become the ones we remember.</span>
        </p>

        <p className="text-blush-soft font-serif text-lg sm:text-xl font-semibold text-glow pt-2">
          And I’d love to make a few more of those with you. ❤️
        </p>
      </motion.div>
    </section>
  );
};
