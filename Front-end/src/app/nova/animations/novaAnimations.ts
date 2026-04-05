import { Variants } from "motion/react";

export const novaVariants: Variants = {
  IDLE: {
    y: [0, -15, 0],
    rotate: [0, -2, 2, 0],
    scale: [1, 1.02, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  ACTIVE: {
    y: [0, -25, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  STRUGGLING: {
    x: [-2, 2, -2, 2, 0],
    y: [0, -4, 0],
    rotate: [0, -3, 3, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  OVERWHELMED: {
    scale: [1, 0.85, 0.9],
    opacity: 0.7,
    y: 20,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  },
  SUCCESS: {
    scale: [1, 1.2, 1],
    y: [0, -60, 0, -30, 0],
    transition: {
      duration: 1.2,
      times: [0, 0.3, 0.6, 0.8, 1],
      ease: "easeOut"
    }
  },
  FOCUSING: {
    y: [0, -5, 0],
    scale: [1, 0.98, 1],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  ERROR: {
    x: [-5, 5, -5, 5, 0],
    transition: {
      duration: 0.4
    }
  },
  RECOVERY: {
    opacity: [0.7, 1],
    scale: [0.9, 1],
    y: [20, 0],
    transition: {
      duration: 1.5,
      ease: "anticipate"
    }
  }
};

export const bubbleVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
};
