"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface MusicPlayerProps {
  audioSrc?: string;
  autoStartTriggered?: boolean;
  className?: string;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  audioSrc = "/audio/traditional_instrumental.mp3",
  autoStartTriggered = false,
  className = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [usingSynthesizer, setUsingSynthesizer] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthNodesRef = useRef<{ stop: () => void } | null>(null);

  // Soft Indian classical Tanpura drone synthesizer (C# / Pa-Sa-Sa-Kharja)
  const startTanpuraSynth = () => {
    try {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtxClass) return false;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtxClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Master Gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.08, ctx.currentTime);

      // Low pass filter for warm, soothing timbre
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(800, ctx.currentTime);
      filter.connect(ctx.destination);
      masterGain.connect(filter);

      // Classical South Indian scale notes (C# key):
      // Pa (G#3 = 207.65 Hz), Sa (C#4 = 277.18 Hz), Sa (277.18 Hz), Kharja (C#3 = 138.59 Hz)
      const freqs = [207.65, 277.18, 277.6, 138.59];
      const oscillators: OscillatorNode[] = [];
      const gains: GainNode[] = [];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Subtle harmonic detuning for acoustic warmth
        osc.detune.setValueAtTime((idx - 1.5) * 4, ctx.currentTime);

        // Cyclic amplitude modulation simulating tanpura plucking
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.25 + idx * 0.08, ctx.currentTime);
        lfoGain.gain.setValueAtTime(0.02, ctx.currentTime);
        lfo.connect(gain.gain);
        lfo.start();

        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start();

        oscillators.push(osc);
        gains.push(gain);
      });

      synthNodesRef.current = {
        stop: () => {
          oscillators.forEach((osc) => {
            try {
              osc.stop();
              osc.disconnect();
            } catch {
              // ignore
            }
          });
          synthNodesRef.current = null;
        },
      };

      setUsingSynthesizer(true);
      return true;
    } catch (e) {
      console.warn("Web Audio synthesis not supported or blocked:", e);
      return false;
    }
  };

  const stopAllAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (synthNodesRef.current) {
      synthNodesRef.current.stop();
    }
    setIsPlaying(false);
  };

  const playAudio = useCallback(async () => {
    // First try the configured audio track
    if (audioRef.current && audioSrc) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setUsingSynthesizer(false);
        return;
      } catch {
        // Fallback to synthesizer
      }
    }

    // Fallback to soft Tanpura drone synthesizer
    const started = startTanpuraSynth();
    if (started) {
      setIsPlaying(true);
    }
  }, [audioSrc]);

  const toggleMusic = () => {
    if (isPlaying) {
      stopAllAudio();
    } else {
      playAudio();
    }
  };

  useEffect(() => {
    if (autoStartTriggered && !isPlaying) {
      const timer = window.setTimeout(() => {
        playAudio();
      }, 50);
      return () => window.clearTimeout(timer);
    }
  }, [autoStartTriggered, isPlaying, playAudio]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (synthNodesRef.current) {
        synthNodesRef.current.stop();
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
        onError={() => {
          // If file does not exist, silence the console error and mark for synth fallback
          setUsingSynthesizer(true);
        }}
      />

      <button
        type="button"
        onClick={toggleMusic}
        aria-label={
          isPlaying
            ? "Mute traditional instrumental music"
            : "Play traditional instrumental music"
        }
        title={
          isPlaying
            ? usingSynthesizer
              ? "Playing soft Tanpura drone (Tap to mute)"
              : "Playing traditional music (Tap to mute)"
            : "Play traditional music"
        }
        className={`w-11 h-11 rounded-full flex items-center justify-center bg-[#3b0318]/90 backdrop-blur-md border border-[#e8b32e] text-[#fcd55c] shadow-lg transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#fcd55c] ${className}`}
      >
        {isPlaying ? (
          // Playing: Animated equalizer sound bars
          <div className="flex items-center gap-0.5 h-4 pointer-events-none" aria-hidden="true">
            <span className="w-1 bg-[#fcd55c] h-3 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1 bg-[#fcd55c] h-4 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1 bg-[#fcd55c] h-2 rounded-full animate-bounce [animation-delay:-0.45s]" />
          </div>
        ) : (
          // Muted: Music note with red strike
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="pointer-events-none"
            aria-hidden="true"
          >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
            <line x1="2" y1="2" x2="22" y2="22" stroke="#ef4444" strokeWidth="2.5" />
          </svg>
        )}
      </button>
    </>
  );
};
