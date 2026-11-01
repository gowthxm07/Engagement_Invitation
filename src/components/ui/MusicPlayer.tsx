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
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const lfosRef = useRef<OscillatorNode[]>([]);
  const isSynthInitializedRef = useRef(false);

  // Initialize Web Audio Tanpura synthesizer once
  const initTanpuraSynth = useCallback(() => {
    if (isSynthInitializedRef.current && audioCtxRef.current) {
      return true;
    }

    try {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtxClass) return false;

      const ctx = new AudioCtxClass();
      audioCtxRef.current = ctx;

      // Master Gain for instantaneous, zero-leak muting & unmuting
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
      masterGainRef.current = masterGain;

      // Warm low-pass filter (simulates wooden body resonance of Tanjore Tanpura)
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(820, ctx.currentTime);
      filter.Q.setValueAtTime(1.2, ctx.currentTime);
      filter.connect(ctx.destination);
      masterGain.connect(filter);

      // Traditional South Indian Panchama Shruthi scale (Key: C# / Pa-Sa-Sa-Kharja)
      // Pa (G#3 = 207.65 Hz), Madhya Sa (C#4 = 277.18 Hz), Anusa (277.6 Hz), Mandra Kharja (C#3 = 138.59 Hz)
      const freqs = [207.65, 277.18, 277.6, 138.59];
      const oscs: OscillatorNode[] = [];
      const lfos: OscillatorNode[] = [];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Acoustic natural detuning
        osc.detune.setValueAtTime((idx - 1.5) * 3.5, ctx.currentTime);

        // Cyclic amplitude modulation simulating gentle plucking cycle (Pa -> Sa -> Sa -> Sa)
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.22 + idx * 0.07, ctx.currentTime);
        lfoGain.gain.setValueAtTime(0.025, ctx.currentTime);
        lfo.connect(gain.gain);
        lfo.start();

        gain.gain.setValueAtTime(0.055, ctx.currentTime);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start();

        oscs.push(osc);
        lfos.push(lfo);
      });

      oscillatorsRef.current = oscs;
      lfosRef.current = lfos;
      isSynthInitializedRef.current = true;
      return true;
    } catch (e) {
      console.warn("Web Audio API not supported or blocked by browser:", e);
      return false;
    }
  }, []);

  // Play / Resume sound
  const playSound = useCallback(async () => {
    // 1. If an actual MP3 audio track is present and loaded, prefer it
    if (audioRef.current && isAudioLoaded) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        return;
      } catch {
        // Fall back to synthesizer if HTML5 Audio is blocked
      }
    }

    // 2. Otherwise use the classical South Indian Tanpura synthesizer
    if (!isSynthInitializedRef.current) {
      const initialized = initTanpuraSynth();
      if (initialized && audioCtxRef.current) {
        if (audioCtxRef.current.state === "suspended") {
          await audioCtxRef.current.resume();
        }
        if (masterGainRef.current) {
          masterGainRef.current.gain.setValueAtTime(0.08, audioCtxRef.current.currentTime);
        }
        setIsPlaying(true);
      }
    } else if (audioCtxRef.current) {
      if (audioCtxRef.current.state === "suspended") {
        await audioCtxRef.current.resume();
      }
      if (masterGainRef.current) {
        masterGainRef.current.gain.setValueAtTime(0.08, audioCtxRef.current.currentTime);
      }
      setIsPlaying(true);
    }
  }, [initTanpuraSynth, isAudioLoaded]);

  // Mute / Pause sound immediately
  const muteSound = useCallback(() => {
    // 1. Pause HTML5 audio element
    if (audioRef.current) {
      audioRef.current.pause();
    }

    // 2. Silence Web Audio synthesizer instantly
    if (audioCtxRef.current) {
      if (masterGainRef.current) {
        masterGainRef.current.gain.setValueAtTime(0, audioCtxRef.current.currentTime);
      }
      if (audioCtxRef.current.state === "running") {
        audioCtxRef.current.suspend().catch(() => {});
      }
    }

    setIsPlaying(false);
  }, []);

  // Reliable Toggle handler
  const toggleMusic = () => {
    if (isPlaying) {
      muteSound();
    } else {
      playSound();
    }
  };

  // Trigger auto-start when user opens the card modal
  useEffect(() => {
    if (autoStartTriggered && !isPlaying) {
      const timer = window.setTimeout(() => {
        playSound();
      }, 50);
      return () => window.clearTimeout(timer);
    }
  }, [autoStartTriggered, isPlaying, playSound]);

  // Clean up on component unmount
  useEffect(() => {
    return () => {
      oscillatorsRef.current.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // ignore
        }
      });
      lfosRef.current.forEach((lfo) => {
        try {
          lfo.stop();
          lfo.disconnect();
        } catch {
          // ignore
        }
      });
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
        onCanPlay={() => setIsAudioLoaded(true)}
        onError={() => setIsAudioLoaded(false)}
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
            ? "Playing traditional music (Tap to mute)"
            : "Traditional music muted (Tap to play)"
        }
        className={`w-11 h-11 rounded-full flex items-center justify-center bg-[#3b0318]/90 backdrop-blur-md border border-[#e8b32e] text-[#fcd55c] shadow-lg transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#fcd55c] cursor-pointer ${className}`}
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
            className="pointer-events-none text-[#fcd55c]"
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
