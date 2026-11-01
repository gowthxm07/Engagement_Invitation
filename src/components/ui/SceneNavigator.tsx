"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface SceneItem {
  id: string;
  number: number;
  title: string;
}

const SCENES: SceneItem[] = [
  { id: "scene-1", number: 1, title: "Temple Opening" },
  { id: "scene-2", number: 2, title: "Divine Blessings" },
  { id: "scene-3", number: 3, title: "Names Reveal" },
  { id: "scene-4", number: 4, title: "Groom & Bride" },
  { id: "scene-5", number: 5, title: "Couple Portrait" },
  { id: "scene-6", number: 6, title: "Save the Date" },
  { id: "scene-7", number: 7, title: "Venue & Directions" },
  { id: "scene-8", number: 8, title: "Auspicious Closing" },
];

interface SceneNavigatorProps {
  className?: string;
}

export const SceneNavigator: React.FC<SceneNavigatorProps> = ({
  className = "",
}) => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const isNavigatingRef = useRef(false);

  // Smooth scroll to scene with debouncing & reduced-motion check
  const scrollToScene = useCallback((index: number) => {
    if (index < 0 || index >= SCENES.length) return;
    if (isNavigatingRef.current) return;

    isNavigatingRef.current = true;
    setActiveSceneIndex(index);

    const targetId = SCENES[index].id;
    const element = document.getElementById(targetId);

    if (element) {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      element.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }

    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 450);
  }, []);

  const handlePrev = useCallback(() => {
    if (activeSceneIndex > 0) {
      scrollToScene(activeSceneIndex - 1);
    }
  }, [activeSceneIndex, scrollToScene]);

  const handleNext = useCallback(() => {
    if (activeSceneIndex < SCENES.length - 1) {
      scrollToScene(activeSceneIndex + 1);
    }
  }, [activeSceneIndex, scrollToScene]);

  // Keyboard navigation (Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Track active scene using IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SCENES.forEach((scene, index) => {
      const el = document.getElementById(scene.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isNavigatingRef.current) {
              setActiveSceneIndex(index);
            }
          });
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const currentScene = SCENES[activeSceneIndex] || SCENES[0];

  return (
    <nav
      aria-label="Invitation Scenes Navigation"
      className={`fixed bottom-3 inset-x-0 max-w-[420px] mx-auto z-40 px-3 flex items-center justify-between pointer-events-none ${className}`}
    >
      <div className="w-full flex items-center justify-between p-1.5 rounded-full bg-[#3b0318]/90 backdrop-blur-md border border-[#e8b32e]/70 shadow-2xl pointer-events-auto">
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={activeSceneIndex === 0}
          aria-label="Previous scene"
          className={`w-11 h-11 flex items-center justify-center rounded-full transition-all ${
            activeSceneIndex === 0
              ? "opacity-30 cursor-not-allowed text-[#fff7df]"
              : "text-[#fcd55c] hover:bg-[#580524] active:scale-90 cursor-pointer"
          }`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Center Progress & Scene Indicator */}
        <div className="flex flex-col items-center justify-center px-2 min-w-[170px] select-none">
          <div
            className="text-[11px] font-bold text-[#fcd55c] tracking-wider uppercase font-royal flex items-center gap-1.5"
            aria-live="polite"
          >
            <span>{activeSceneIndex + 1}/8</span>
            <span className="text-[#e8b32e]/60">•</span>
            <span className="truncate max-w-[130px]">{currentScene.title}</span>
          </div>

          {/* Quick Scene Jump Dots (8 dots) */}
          <div className="flex items-center gap-1 mt-1">
            {SCENES.map((scene, idx) => (
              <button
                key={scene.id}
                type="button"
                onClick={() => scrollToScene(idx)}
                aria-label={`Jump to scene ${scene.number}: ${scene.title}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === activeSceneIndex
                    ? "w-4 h-1.5 bg-[#fcd55c] shadow-xs"
                    : "w-1.5 h-1.5 bg-[#fcd55c]/35 hover:bg-[#fcd55c]/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          disabled={activeSceneIndex === SCENES.length - 1}
          aria-label="Next scene"
          className={`w-11 h-11 flex items-center justify-center rounded-full transition-all ${
            activeSceneIndex === SCENES.length - 1
              ? "opacity-30 cursor-not-allowed text-[#fff7df]"
              : "text-[#fcd55c] hover:bg-[#580524] active:scale-90 cursor-pointer"
          }`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
