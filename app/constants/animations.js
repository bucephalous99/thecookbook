export const ANIMATIONS = {
  bounceOnHover: {
    scale: 1.1,
    duration: 300,
    ease: 'ease-out'
  },
  fadeIn: {
    opacity: { from: 0, to: 1 },
    duration: 300
  },
  fadeOut: {
    opacity: { from: 1, to: 0 },
    duration: 200
  },
  slideFromLeft: {
    transform: 'translateX(-100%)',
    duration: 500,
    ease: 'ease-in-out'
  }
};
