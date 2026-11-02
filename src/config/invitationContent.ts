import { InvitationContent } from "@/types/invitation";

/**
 * Centralized, editable content configuration for Praveen S & Swathi N Engagement Invitation.
 * All confirmed event details are recorded here.
 * Placeholders are clearly marked for family & RSVP information yet to be finalized.
 * Supports both English and Tamil languages.
 */
export const invitationContent: InvitationContent = {
  groom: {
    name: "Praveen S",
    nameTamil: "பிரவீன் எஸ்",
    title: "Groom",
    titleTamil: "மணமகன்",
    parentsLineage: "Son of Sengodan.P & Vasanthi.S",
    parentsLineageTamil: "செங்கோடன்.P & வசந்தி.S அவர்களின் அன்பு மகன்",
    familyNote: "[Family Native / Lineage Placeholder]",
    familyNoteTamil: "[குடும்ப விபரம்]",
  },
  bride: {
    name: "Swathi N",
    nameTamil: "சுவாதி என்",
    title: "Bride",
    titleTamil: "மணமகள்",
    parentsLineage: "Daughter of Nachimuthu.P & Sumathi.N",
    parentsLineageTamil: "நாச்சிமுத்து.P & சுமதி.N அவர்களின் அன்பு மகள்",
    familyNote: "[Family Native / Lineage Placeholder]",
    familyNoteTamil: "[குடும்ப விபரம்]",
  },
  event: {
    type: "Engagement Ceremony",
    typeTamil: "திருநிச்சயதார்த்த விழா",
    dateFull: "Friday, 20 November 2026",
    dateFullTamil: "வெள்ளிக்கிழமை, 20 நவம்பர் 2026",
    dayOfWeek: "Friday",
    dayOfWeekTamil: "வெள்ளிக்கிழமை",
    calendarDate: "2026-11-20",
    timeFormatted: "6:00 AM – 7:00 AM",
    timeFormattedTamil: "காலை 6:00 – 7:00 மணி",
    subamuhurthamLabel: "Subamuhurtham",
    subamuhurthamLabelTamil: "சுபமுகூர்த்தம்",
    greetingsMessage: "We warmly invite you to join us in celebrating our engagement",
    greetingsMessageTamil: "எங்கள் திருநிச்சயதார்த்த விழாவிற்கு தங்களை அன்போடு அழைக்கின்றோம்",
    formalInvitationNote:
      "We request the honour of your gracious presence and blessings on the auspicious occasion of our engagement.",
    formalInvitationNoteTamil:
      "எங்கள் இருவீட்டு பெரியோர்களின் ஆசியோடு நடைபெறும் நிச்சயதார்த்த விழாவில் கலந்து கொண்டு தங்களின் மேலான வாழ்த்துக்களை வழங்குமாறு அன்புடன் அழைக்கிறோம்.",
  },
  venue: {
    name: "Aarathana Mahaal",
    nameTamil: "ஆராதனா மஹால்",
    subTitle: "A/C Marriage Hall",
    subTitleTamil: "குளிரூட்டப்பட்ட திருமண மண்டபம்",
    addressLine1: "446/1C2 Attayamparappu NH 44, Madurai By-pass",
    addressLine2: "Near Essar Petrol Bunk",
    landmark: "Madurai By-pass Road, Near Essar Petrol Bunk",
    landmarkTamil: "மதுரை பை-பாஸ் ரோடு, எஸ்ஸார் பெட்ரோல் பங்க் அருகில்",
    city: "Karur",
    state: "Tamil Nadu",
    pincode: "639003",
    fullAddressTamil:
      "446/1C2 அத்தையம்பாரப்பு NH 44, மதுரை பை-பாஸ், எஸ்ஸார் பெட்ரோல் பங்க் அருகில், கரூர், தமிழ்நாடு 639003",
    googleMapsUrl:
      "https://www.google.com/maps/place/Aarathana+Mahaal+A%2FC/@10.9139767,78.0389935,916m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3baa255f4ba4a8e9:0xd920b5757ad7acd7!8m2!3d10.9139767!4d78.0415684!16s%2Fg%2F11j2wlq36c?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 10.9139767,
    longitude: 78.0415684,
  },
  placeholders: {
    groomParents: {
      en: "Son of Sengodan.P & Vasanthi.S",
      ta: "செங்கோடன்.P & வசந்தி.S அவர்களின் அன்பு மகன்",
      isConfirmed: true,
    },
    brideParents: {
      en: "Daughter of Nachimuthu.P & Sumathi.N",
      ta: "நாச்சிமுத்து.P & சுமதி.N அவர்களின் அன்பு மகள்",
      isConfirmed: true,
    },
    grandparentsBlessing: {
      en: "[With the divine blessings of Grandparents & Kuladeivam]",
      ta: "[முன்னோர்கள் மற்றும் குலதெய்வத்தின் அருளாசியுடன்]",
      isConfirmed: false,
    },
    rsvpContacts: {
      en: "[Contact Numbers & Best Compliments from Family & Friends]",
      ta: "[தொடர்பு எண்கள் & உறவினர்கள் நல்வாழ்த்துக்களுடன்]",
      isConfirmed: false,
    },
  },
  couplePhotoPath: "C:\\Users\\gowth\\OneDrive\\Desktop\\Engagement\\bride_and_groom.jpeg",
  coupleIllustratedFullBodyPath: "/images/illustrations/couple_full_body_transparent.png",
  coupleIllustratedPortraitPath: "/images/illustrations/couple_portrait.jpg",
  coupleIllustratedOriginalPath: "/images/illustrations/couple_full_body.jpg",
  audioTrackPath: "/audio/traditional_instrumental.mp3",
  scenes: [
    {
      id: "scene-1",
      sceneNumber: 1,
      title: "Grand South Indian Temple Opening",
      componentName: "Scene1TempleOpening",
      description:
        "Ceremonial opening with azure morning sky, traditional tiered temple gopuram, carved stone Yali pillars, and hanging brass kuthu vilakku oil lamps.",
    },
    {
      id: "scene-2",
      sceneNumber: 2,
      title: "Ornamental Magenta & Gold Tapestry",
      componentName: "Scene2MagentaIntro",
      description:
        "Rolling perspective tapestry in royal South Indian magenta with golden Lord Ganesha emblem and divine blessing invocation.",
    },
    {
      id: "scene-3",
      sceneNumber: 3,
      title: "Couple Names & Traditional Framing",
      componentName: "Scene3CoupleFraming",
      description:
        "Rich magenta ornamental frame accented with fresh mango leaves, red flowers, and vibrant orange/yellow marigold garlands.",
    },
    {
      id: "scene-4",
      sceneNumber: 4,
      title: "Golden Groom & Bride Introduction",
      componentName: "Scene5GroomBrideIntro",
      description:
        "Warm celebratory yellow-gold background featuring ornate filigree swirls and glowing brass lamps introducing the couple.",
    },
    {
      id: "scene-5",
      sceneNumber: 5,
      title: "Hand-Painted Engagement Portrait",
      componentName: "Scene6PhotoCollage",
      description:
        "Showcases the hand-painted couple portrait framed with South Indian traditional gold arch motifs.",
    },
    {
      id: "scene-6",
      sceneNumber: 6,
      title: "Dusty-Pink Save the Date & Vintage Car",
      componentName: "Scene7SaveTheDate",
      description:
        "Dusty-pink backdrop with gold mandala watermark, vintage mint vehicle illustration, Subamuhurtham date and auspicious morning timing.",
    },
    {
      id: "scene-7",
      sceneNumber: 7,
      title: "Engagement Event & Venue Details",
      componentName: "Scene8EventVenue",
      description:
        "Aarathana Mahaal in Karur with address, one-tap Google Maps directions, and Add to Calendar action.",
    },
    {
      id: "scene-8",
      sceneNumber: 8,
      title: "Final Illustrated Couple Blessing",
      componentName: "Scene9FinalCouple",
      description:
        "Illustrated traditional South Indian couple facing each other beneath hanging marigold garlands, accompanied by heartfelt blessings and audio controls.",
    },
  ],
};
