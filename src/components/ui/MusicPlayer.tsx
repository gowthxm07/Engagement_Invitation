"use client";

import React, { useState, useEffect, useRef } from "react";

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
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (autoStartTriggered && !hasInteracted && audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(() => {
          // Browser audio policy prevented auto-play
          setIsPlaying(false);
        });
    }
  }, [autoStartTriggered, hasInteracted]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch((err) => {
          console.warn("Audio playback error:", err);
        });
    }
  };

  return (
    <>
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />
      <button
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Mute traditional music" : "Play traditional music"}
        className={`fixed top-4 right-4 z-40 w-11 h-11 rounded-full flex items-center justify-center bg-[#3b0318]/90 backdrop-blur-md border border-[#e8b32e] text-[#fcd55c] shadow-lg transition-transform hover:scale-105 active:scale-95 ${className}`}
      >
        {isPlaying ? (
          // Playing: Equalizer sound waves
          <div className="flex items-center gap-0.5 h-4">
            <span className="w-1 bg-[#fcd55c] h-3 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1 bg-[#fcd55c] h-4 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1 bg-[#fcd55c] h-2 rounded-full animate-bounce [animation-delay:-0.45s]" />
          </div>
        ) : (
          // Muted / Paused: Music note with strike
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
