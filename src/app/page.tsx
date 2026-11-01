"use client";

import React, { useState, useEffect } from "react";
import { invitationContent } from "@/config/invitationContent";
import { Scene1TempleOpening } from "@/components/scenes/Scene1TempleOpening";
import { Scene2MagentaIntro } from "@/components/scenes/Scene2MagentaIntro";
import { Scene3CoupleFraming } from "@/components/scenes/Scene3CoupleFraming";
import { Scene5GroomBrideIntro } from "@/components/scenes/Scene5GroomBrideIntro";
import { Scene6PhotoCollage } from "@/components/scenes/Scene6PhotoCollage";
import { Scene7SaveTheDate } from "@/components/scenes/Scene7SaveTheDate";
import { Scene8EventVenue } from "@/components/scenes/Scene8EventVenue";
import { Scene9FinalCouple } from "@/components/scenes/Scene9FinalCouple";
import { MusicPlayer } from "@/components/ui/MusicPlayer";
import { TapToOpenModal } from "@/components/ui/TapToOpenModal";
import { SceneNavigator } from "@/components/ui/SceneNavigator";

export default function InvitationHomePage() {
  const [hasInteracted, setHasInteracted] = useState(false);

  const { groom, bride, event, venue, placeholders } = invitationContent;

  const handleOpenInvitation = () => {
    setHasInteracted(true);
  };

  // Cinematic Scroll Reveal Observer with safety fallback
  useEffect(() => {
    const revealSelectors = ".reveal-on-scroll, .reveal-scale, .reveal-slide-left, .reveal-slide-right";
    const elements = document.querySelectorAll(revealSelectors);

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -30px 0px",
        threshold: 0.12,
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Fallback: Reveal any elements after 2.5s to ensure content is never hidden
    const fallbackTimer = window.setTimeout(() => {
      elements.forEach((el) => el.classList.add("is-revealed"));
    }, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <main className="min-h-screen w-full bg-[#2c0211] text-white flex justify-center items-start relative selection:bg-[#f3c64f] selection:text-[#580524]">
      {/* Desktop Ambient Background Accents */}
      <div className="fixed inset-0 pointer-events-none hidden lg:block opacity-25">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#800837] blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#f5c542] blur-[140px]" />
      </div>

      {/* Tap To Open Modal (User-Initiated Opening for Audio & Immersion) */}
      <TapToOpenModal onOpen={handleOpenInvitation} />

      {/* Floating Action Controls - English Music Controller */}
      <header className="fixed top-3 inset-x-0 max-w-[440px] mx-auto z-40 px-3 flex justify-end items-center pointer-events-none">
        <div className="pointer-events-auto">
          <MusicPlayer autoStartTriggered={hasInteracted} />
        </div>
      </header>

      {/* Continuous Mobile-First Invitation Canvas - 8 Seamless Scenes */}
      <div className="mobile-container w-full max-w-[440px] shadow-2xl relative bg-[#580524] overflow-hidden">
        {/* Scene 1: Grand South Indian Temple Opening */}
        <Scene1TempleOpening
          groom={groom}
          bride={bride}
        />

        {/* Scene 2: Ornamental Magenta and Gold Introduction */}
        <Scene2MagentaIntro
          event={event}
          placeholders={placeholders}
        />

        {/* Scene 3: Couple Names and Traditional Decorative Framing */}
        <Scene3CoupleFraming
          groom={groom}
          bride={bride}
        />

        {/* Scene 4: Golden Groom and Bride Introduction */}
        <Scene5GroomBrideIntro
          groom={groom}
          bride={bride}
        />

        {/* Scene 5: Hand-Painted Couple Illustration */}
        <Scene6PhotoCollage
          groom={groom}
          bride={bride}
        />

        {/* Scene 6: Dusty-Pink Save the Date & Vintage Vehicle */}
        <Scene7SaveTheDate
          event={event}
          venue={venue}
        />

        {/* Scene 7: Engagement Event and Venue Information */}
        <Scene8EventVenue
          event={event}
          venue={venue}
        />

        {/* Scene 8: Final Illustrated Couple Scene with Traditional Decorations */}
        <Scene9FinalCouple
          groom={groom}
          bride={bride}
          event={event}
        />
      </div>

      {/* Floating Cinematic Scene Navigator */}
      <SceneNavigator />
    </main>
  );
}
