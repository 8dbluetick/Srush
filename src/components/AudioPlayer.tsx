import React, { useState, useEffect, useRef } from 'react';
import { Music, VolumeX } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isCancelledRef = useRef<boolean>(false);

  const startAmbientMusic = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      isCancelledRef.current = false;

      // Soft romantic pentatonic notes (F3, A3, C4, E4, G4, A4, C5)
      const frequencies = [174.61, 220.00, 261.63, 329.63, 392.00, 440.00, 523.25];
      
      const playNextNote = () => {
        if (isCancelledRef.current || !audioCtxRef.current) return;

        const ctx = audioCtxRef.current;
        const now = ctx.currentTime;

        // Choose a random harmonic frequency
        const freq = frequencies[Math.floor(Math.random() * frequencies.length)];

        // Oscillator
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = Math.random() > 0.4 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        // Soft envelope
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.06, now + 1.2);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);

        // Biquad filter for warm tone
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, now);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 4.6);

        // Schedule next note randomly every 1.2 to 2.4 seconds
        const delay = 1200 + Math.random() * 1200;
        setTimeout(playNextNote, delay);
      };

      // Start 2 concurrent gentle melody threads
      playNextNote();
      setTimeout(playNextNote, 800);

    } catch (e) {
      console.warn("Audio Context playback error", e);
    }
  };

  const stopAmbientMusic = () => {
    isCancelledRef.current = true;
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopAmbientMusic();
      setIsPlaying(false);
    } else {
      startAmbientMusic();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      isCancelledRef.current = true;
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleMusic}
      aria-label={isPlaying ? "Mute ambient background music" : "Play ambient background music"}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-3.5 py-2.5 rounded-full glass-card hover:bg-wine-mid/80 border border-rosegold/30 text-blush-light text-xs font-medium transition-all duration-300 shadow-xl group active:scale-95"
    >
      <div className="relative flex items-center justify-center">
        {isPlaying ? (
          <>
            <Music className="w-4 h-4 text-rosegold animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blush-mid opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rosegold"></span>
            </span>
          </>
        ) : (
          <VolumeX className="w-4 h-4 text-gray-400 group-hover:text-blush-light" />
        )}
      </div>

      <span className="hidden sm:inline">
        {isPlaying ? "Music On" : "Romantic Ambience"}
      </span>

      {isPlaying && (
        <div className="flex items-end gap-0.5 h-3 ml-0.5">
          <div className="w-0.5 bg-rosegold h-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-0.5 bg-blush-mid h-3/4 animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-0.5 bg-rosegold h-1/2 animate-bounce"></div>
        </div>
      )}
    </button>
  );
};
