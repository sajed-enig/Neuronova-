import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { bubbleVariants } from "../animations/novaAnimations";

interface NovaBubbleProps {
  message: string;
}

export const NovaBubble: React.FC<NovaBubbleProps> = ({ message }) => {
  return (
    <AnimatePresence mode="wait">
      {message && (
        <motion.div
          key={message} // Ensure key change for proper exit/enter on message update
          variants={bubbleVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute bottom-full right-0 mb-6 w-56 p-5 bg-white rounded-3xl shadow-2xl border-2 border-primary/10 text-sm font-semibold text-foreground z-50 pointer-events-auto"
        >
          {message}
          {/* Bubble tail */}
          <div className="absolute bottom-[-10px] right-10 w-5 h-5 bg-white border-r-2 border-b-2 border-primary/10 rotate-45" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
