
export interface Program {
  title: string;
  zuluTitle: string;
  description: string;
  icon: string;
  impactMetric?: string;
}

export interface Value {
  title: string;
  zuluTitle: string;
  description: string;
}

export interface PastEvent {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  images: string[];
  category: 'Tournament' | 'Dialogue' | 'Workshop';
}

export interface VideoAsset {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
}

export interface PraisePoem {
  title: string;
  zulu: string;
  english: string;
}
