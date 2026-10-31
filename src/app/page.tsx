"use client";

import React, { useState } from "react";
import { invitationContent } from "@/config/invitationContent";
import { Language } from "@/types/invitation";
import { Scene1TempleOpening } from "@/components/scenes/Scene1TempleOpening";
import { Scene2MagentaIntro } from "@/components/scenes/Scene2MagentaIntro";
import { Scene3CoupleFraming } from "@/components/scenes/Scene3CoupleFraming";
import { Scene4FamilyIntro } from "@/components/scenes/Scene4FamilyIntro";
import { Scene5GroomBrideIntro } from "@/components/scenes/Scene5GroomBrideIntro";
import { Scene6PhotoCollage } from "@/components/scenes/Scene6PhotoCollage";
import { Scene7SaveTheDate } from "@/components/scenes/Scene7SaveTheDate";
import { Scene8EventVenue } from "@/components/scenes/Scene8EventVenue";
import { Scene9FinalCouple } from "@/components/scenes/Scene9FinalCouple";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { MusicPlayer } from "@/components/ui/MusicPlayer";
import { TapToOpenModal } from "@/components/ui/TapToOpenModal";

export default function InvitationHomePage() {
  const [language, setLanguage] = useState<Language>("en");
  const [hasInteracted, setHasInteracted] = useState(false);

  const { groom, bride, event, venue, placeholders } = invitationContent;

  const handleOpenInvitation = () => {
    setHasInteracted(true);
  };

  return (
    <main className="min-h-screen w-full bg-[#2c0211] text-white flex justify-center items-start relative selection:bg-[#f3c64f] selection:text-[#580524]">
      {/* Desktop Ambient Background Accents */}
      <div className="fixed inset-0 pointer-events-none hidden lg:block opacity-25">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#800837] blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#f5c542] blur-[140px]" />
      </div>

      {/* Tap To Open Modal (User-Initiated Opening for Audio & Immersion) */}
      <TapToOpenModal
        onOpen={handleOpenInvitation}
        language={language}
      />

      {/* Floating Action Controls */}
      <header className="fixed top-3 inset-x-0 max-w-[440px] mx-auto z-40 px-3 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto">
          <LanguageToggle
            currentLanguage={language}
            onToggle={setLanguage}
          />
        </div>
        <div className="pointer-events-auto">
          <MusicPlayer
            autoStartTriggered={hasInteracted}
          />
        </div>
      </header>

      {/* Continuous Mobile-First Invitation Canvas */}
      <div className="mobile-container w-full max-w-[440px] shadow-2xl relative bg-[#580524] overflow-hidden">
        {/* Scene 1: Grand South Indian Temple Opening */}
        <Scene1TempleOpening
          groom={groom}
          bride={bride}
          language={language}
        />

        {/* Scene 2: Ornamental Magenta and Gold Introduction */}
        <Scene2MagentaIntro
          event={event}
          placeholders={placeholders}
          language={language}
        />

        {/* Scene 3: Couple Names and Traditional Decorative Framing */}
        <Scene3CoupleFraming
          groom={groom}
          bride={bride}
          language={language}
        />

        {/* Scene 4: Family Lineage and Introduction */}
        <Scene4FamilyIntro
          groom={groom}
          bride={bride}
          placeholders={placeholders}
          language={language}
        />

        {/* Scene 5: Golden Groom and Bride Introduction */}
        <Scene5GroomBrideIntro
          groom={groom}
          bride={bride}
          language={language}
        />

        {/* Scene 6: Photograph Collage Section */}
        <Scene6PhotoCollage
          groom={groom}
          bride={bride}
          language={language}
        />

        {/* Scene 7: Dusty-Pink Save the Date & Vintage Vehicle */}
        <Scene7SaveTheDate
          event={event}
          venue={venue}
          language={language}
        />

        {/* Scene 8: Engagement Event and Venue Information */}
        <Scene8EventVenue
          event={event}
          venue={venue}
          placeholders={placeholders}
          language={language}
        />

        {/* Scene 9: Final Illustrated Couple Scene with Traditional Decorations */}
        <Scene9FinalCouple
          groom={groom}
          bride={bride}
          event={event}
          language={language}
        />
      </div>
    </main>
  );
}
