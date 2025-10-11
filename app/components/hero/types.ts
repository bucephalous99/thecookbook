export interface HeroImage {
  src: string;
  alt: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export interface HeroTemplate {
  id: number;
  mainText: string;
  subText: string;
  images: HeroImage[];
  animation: 'orbital' | 'pulse' | 'build' | 'heart' | 'network' | 'float';
  gradient: string;
  textGradient: string;
}