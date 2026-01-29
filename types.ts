
export interface Program {
  title: string;
  zuluTitle: string;
  description: string;
  icon: string;
}

export interface Value {
  title: string;
  zuluTitle: string;
  description: string;
}

export interface WisdomResponse {
  advice: string;
  zuluProverb: string;
  meaning: string;
}

export interface PastEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  images: string[]; // Made mandatory for the archive logic
  category: 'Tournament' | 'Dialogue' | 'Workshop';
}

export interface VideoAsset {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
}
