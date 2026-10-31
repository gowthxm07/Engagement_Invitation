"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Language } from "@/types/invitation";

interface SceneItem {
  id: string;
  number: number;
  titleEn: string;
  titleTa: string;
}

const SCENES: SceneItem[] = [
  { id: "scene-1", number: 1, titleEn: "Temple Opening", titleTa: "கோயில் தொடக்கம்" },
  { id: "scene-2", number: 2, titleEn: "Divine Blessings", titleTa: "தெய்வத் திருவருள்" },
  { id: "scene-3", number: 3, titleEn: "Names Reveal", titleTa: "மணமக்கள் பெயர்" },
  { id: "scene-4", number: 4, titleEn: "Family Blessings", titleTa: "குடும்ப ஆசிகள்" },
  { id: "scene-5", number: 5, titleEn: "Couple Intro", titleTa: "தம்பதியர் அறிமுகம்" },
  { id: "scene-6", number: 6, titleEn: "Couple Portraits", titleTa: "தம்பதியர் புகைப்படங்கள்" },
  { id: "scene-7", number: 7, titleEn: "Save the Date", titleTa: "தேதி விபரம்" },
  { id: "scene-8", number: 8, titleEn: "Venue & Directions", titleTa: "மண்டப வழிகாட்டுதல்" },
  { id: "scene-9", number: 9, titleEn: "Auspicious Closing", titleTa: "மங்கள வாழ்த்து" },
];

interface SceneNavigatorProps {
  language: Language;
  className?: string;
}

export const SceneNavigator: React.FC<SceneNavigatorProps> = ({
  language,
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
        { threshold: 0.45 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const currentScene = SCENES[activeSceneIndex] || SCENES[0];
  const sceneTitle = language === "ta" ? currentScene.titleTa : currentScene.titleEn;

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
          aria-label={language === "ta" ? "முந்தைய காட்சி" : "Previous scene"}
          className={`w-11 h-11 flex items-center justify-center rounded-full transition-all ${
            activeSceneIndex === 0
              ? "opacity-30 cursor-not-allowed text-[#fff7df]"
              : "text-[#fcd55c] hover:bg-[#580524] active:scale-90"
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
            <span>{activeSceneIndex + 1}/9</span>
            <span className="text-[#e8b32e]/60">•</span>
            <span className="truncate max-w-[120px]">{sceneTitle}</span>
          </div>

          {/* Quick Scene Jump Dots */}
          <div className="flex items-center gap-1 mt-1">
            {SCENES.map((scene, idx) => (
              <button
                key={scene.id}
                type="button"
                onClick={() => scrollToScene(idx)}
                aria-label={`Jump to scene ${scene.number}: ${scene.titleEn}`}
                className={`transition-all duration-300 rounded-full ${
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
          aria-label={language === "ta" ? "அடுத்த காட்சி" : "Next scene"}
          className={`w-11 h-11 flex items-center justify-center rounded-full transition-all ${
            activeSceneIndex === SCENES.length - 1
              ? "opacity-30 cursor-not-allowed text-[#fff7df]"
              : "text-[#fcd55c] hover:bg-[#580524] active:scale-90"
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
