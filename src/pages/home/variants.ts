import { type Variants } from 'framer-motion';

export const leftComponentVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: -100
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      transition: 'easeInOut',
      duration: 0.5
    }
  }
};

export const rightComponentVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: 100
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      transition: 'easeInOut',
      duration: 0.5
    }
  }
};

export const homeOneComponentVariants = (
  delay?: number | undefined
): Variants => ({
  offscreen: {
    opacity: 0,
    y: 100
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      transition: 'easeInOut',
      duration: 1,
      bounce: 0.5,
      delay
    }
  }
});
