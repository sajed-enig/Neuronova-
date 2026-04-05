import React, { useEffect } from "react";
import { motion } from "motion/react";
import { NovaBubble } from "./NovaBubble";
import { useNova } from "../hooks/useNova";
import { NovaMetrics } from "../system/types";
import { novaVariants } from "../animations/novaAnimations";
import novaSvg from "../../../assets/nova/nova.svg";
import novaCelebrating from "../../../assets/nova/nova_celebrating.svg";
import novaFocusing from "../../../assets/nova/nova_focusing.svg";
import novaEncourage from "../../../assets/nova/nova_encourage.svg";
import { NovaState } from "../system/types";
import confetti from "canvas-confetti";

interface NovaProps {
  metrics: NovaMetrics;
  onAction?: (action: string) => void;
}

const getNovaAsset = (state: NovaState) => {
  switch (state) {
    case "SUCCESS":
      return novaCelebrating;
    case "FOCUSING":
      return novaFocusing;
    case "ERROR":
    case "STRUGGLING":
      return novaEncourage;
    default:
      return novaSvg;
  }
};

export const Nova: React.FC<NovaProps> = ({ metrics }) => {
  const { state, message } = useNova(metrics);

  useEffect(() => {
    if (state === "SUCCESS") {
      confetti({
        particleCount: 80,
        startVelocity: 30,
        spread: 80,
        origin: { x: 0.92, y: 0.85 },
        ticks: 200
      });
    }
  }, [state]);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end pointer-events-none">
      <NovaBubble message={message} />

      {state === "FOCUSING" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="absolute -top-12 right-12 bg-white p-3 rounded-full shadow-lg flex gap-1 items-center"
        >
          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      )}

      <motion.div
        variants={novaVariants}
        animate={state}
        key={state}
        className="relative group pointer-events-auto"
      >
        <div className="w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl">
          <img
            src={getNovaAsset(state)}
            alt="Nova Mascot"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </motion.div>
    </div>
  );
};
