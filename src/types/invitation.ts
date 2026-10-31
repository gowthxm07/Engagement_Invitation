export type Language = 'en' | 'ta';

export interface PersonDetails {
  name: string;
  nameTamil: string;
  title: string;
  titleTamil: string;
  parentsLineage: string;
  parentsLineageTamil: string;
  familyNote?: string;
  familyNoteTamil?: string;
}

export interface VenueDetails {
  name: string;
  nameTamil: string;
  subTitle?: string;
  subTitleTamil?: string;
  addressLine1: string;
  addressLine2: string;
  landmark: string;
  landmarkTamil: string;
  city: string;
  state: string;
  pincode: string;
  fullAddressTamil: string;
  googleMapsUrl: string;
  latitude: number;
  longitude: number;
}

export interface EventDetails {
  type: string;
  typeTamil: string;
  dateFull: string;
  dateFullTamil: string;
  dayOfWeek: string;
  dayOfWeekTamil: string;
  calendarDate: string; // "2026-11-20"
  timeFormatted: string; // "6:00 AM – 7:00 AM"
  timeFormattedTamil: string; // "காலை 6:00 – 7:00 மணி"
  subamuhurthamLabel: string;
  subamuhurthamLabelTamil: string;
  greetingsMessage: string;
  greetingsMessageTamil: string;
  formalInvitationNote: string;
  formalInvitationNoteTamil: string;
}

export interface PlaceholdersConfig {
  groomParents: {
    en: string;
    ta: string;
    isConfirmed: boolean;
  };
  brideParents: {
    en: string;
    ta: string;
    isConfirmed: boolean;
  };
  grandparentsBlessing: {
    en: string;
    ta: string;
    isConfirmed: boolean;
  };
  rsvpContacts: {
    en: string;
    ta: string;
    isConfirmed: boolean;
  };
}

export interface SceneConfig {
  id: string;
  sceneNumber: number;
  title: string;
  componentName: string;
  description: string;
}

export interface InvitationContent {
  groom: PersonDetails;
  bride: PersonDetails;
  event: EventDetails;
  venue: VenueDetails;
  placeholders: PlaceholdersConfig;
  couplePhotoPath: string;
  scenes: SceneConfig[];
}
