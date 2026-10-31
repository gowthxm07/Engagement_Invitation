# Praveen S & Swathi N — Engagement Invitation Website

A mobile-first, cinematic South Indian animated engagement invitation website celebrating the auspicious union of **Praveen S** and **Swathi N**.

Designed and crafted with traditional South Indian ceremonial aesthetics inspired by Dravidian temple architecture, royal Kanchipuram silk tapestries, brass *kuthu vilakku* oil lamps, auspicious mango leaf *torans*, fragrant marigold garlands, and hand-painted digital art portraits of the couple.

---

## 💍 Event Information

- **Groom:** Praveen S
- **Bride:** Swathi N
- **Auspicious Occasion:** Engagement Ceremony (திருநிச்சயதார்த்த விழா)
- **Date:** Friday, 20 November 2026 (வெள்ளிக்கிழமை, 20 நவம்பர் 2026)
- **Subamuhurtham Time:** 6:00 AM – 7:00 AM IST (காலை 6:00 – 7:00 மணி)
- **Venue:** Aarathana Mahaal (A/C Marriage Hall)
- **Address:** 446/1C2 Attayamparappu NH 44, Madurai By-pass, near Essar Petrol Bunk, Karur, Tamil Nadu 639003
- **Google Maps:** [Aarathana Mahaal Location](https://www.google.com/maps/place/Aarathana+Mahaal+A%2FC/@10.9139767,78.0389935,916m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3baa255f4ba4a8e9:0xd920b5757ad7acd7!8m2!3d10.9139767!4d78.0415684!16s%2Fg%2F11j2wlq36c?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D)
- **Languages:** English and Tamil (தமிழ்) toggleable anytime

---

## 🏛️ Storytelling Scene Pipeline

The invitation follows a cinematic nine-scene journey inspired by traditional South Indian storytelling:

1. **Temple Opening (`Scene1TempleOpening`):** Azure morning sky, Dravidian Yali stone carved pillars, hanging brass oil lamps with flickering flame animations, and grand temple Gopuram architecture.
2. **Divine Blessings (`Scene2MagentaIntro`):** Rolling royal magenta-and-gold tapestry with pure gold Lord Ganesha motif and divine blessings invocation.
3. **Names Reveal (`Scene3CoupleFraming`):** Sacred floral toran featuring fresh mango leaves (*manga ilai*), red flowers, and vibrant orange/yellow marigold garlands framing the names of Praveen S & Swathi N.
4. **Family Blessings (`Scene4FamilyIntro`):** Traditional banana-leaf (*vazhai ilai*) and marigold framing honoring the groom's and bride's families with clearly structured editable placeholders.
5. **Couple Introduction (`Scene5GroomBrideIntro`):** Celebratory warm golden-yellow background with ornate filigree lace and glowing brass lamps introducing the couple.
6. **Couple Portraits (`Scene6PhotoCollage`):** Interactive dual-view showcase allowing guests to view both the authentic couple photograph and the hand-painted traditional portrait framed in a golden temple arch.
7. **Save the Date (`Scene7SaveTheDate`):** Dusty-pink background with gold mandala watermark, vintage mint car illustration, confirmed date, and morning Subamuhurtham timings.
8. **Venue & Directions (`Scene8EventVenue`):** Detailed venue information for Aarathana Mahaal in Karur, one-tap Google Maps directions, and Add-to-Calendar actions for both Google Calendar and Apple/Outlook iCalendar (.ics).
9. **Final Illustrated Couple Scene (`Scene9FinalCouple`):** Transparent hand-painted digital illustration of Praveen S and Swathi N in traditional silk wedding attire beneath hanging marigolds with a closing cordial invitation.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 & Custom South Indian Ceremonial Design Tokens
- **Typography:**
  - Headings & Names: Google Font `Cinzel` & `Cormorant Garamond` (Regal Serif)
  - Tamil Script: Google Font `Noto Serif Tamil`
  - Body & UI: Google Font `Montserrat`
- **Audio:** User-initiated audio player with Web Audio API classical Tanpura drone fallback
- **Version Control:** Git & GitHub (`https://github.com/gowthxm07/Engagement_Invitation`)
- **Deployment Target:** Vercel

---

## 📁 Asset Organization

```text
public/
├── images/
│   ├── couple/
│   │   └── praveen_and_swathi.jpeg          # Authentic original couple photograph
│   ├── decorations/
│   │   └── vintage_car.svg                  # Vintage mint car vector
│   └── illustrations/
│       ├── couple_full_body_transparent.png # 32-bit alpha transparent couple illustration
│       ├── couple_full_body.jpg             # Full-body couple digital art (cream backdrop)
│       └── couple_portrait.jpg              # Framed couple portrait in golden arch
└── audio/                                   # Optional custom audio track destination
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ or 20+ (Node.js 22 supported)
- npm 9+ or 10+

### Installation & Local Development

```bash
# Clone the repository
git clone https://github.com/gowthxm07/Engagement_Invitation.git

# Navigate to project directory
cd Engagement_Invitation

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Use mobile device emulation (320px–440px) in DevTools to preview the mobile portrait experience.

### Building for Production

```bash
# Run production build with Next.js Turbopack
npm run build

# Start production server locally
npm run start
```

---

## ☁️ Vercel Deployment Instructions

1. **Push to GitHub:** Ensure your latest commits are pushed to `https://github.com/gowthxm07/Engagement_Invitation` on the `main` branch.
2. **Import Project into Vercel:**
   - Log in to your [Vercel Dashboard](https://vercel.com/).
   - Click **Add New...** → **Project**.
   - Select the GitHub repository `gowthxm07/Engagement_Invitation`.
3. **Configure Project:**
   - **Framework Preset:** `Next.js` (automatically detected).
   - **Root Directory:** `./`
   - **Build Command:** `next build` (default).
   - **Output Directory:** `.next` (default).
   - **Environment Variables:** None required (the invitation runs purely on client-side static rendering).
4. **Deploy:** Click **Deploy**. Vercel will build and assign a production URL (e.g. `praveen-swathi-engagement.vercel.app`).

---

## 📄 License & Credits

All rights reserved for Praveen S & Swathi N Engagement Ceremony 2026. Hand-painted couple artwork is custom-illustrated for this celebratory website.
