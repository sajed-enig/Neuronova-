import { useState, useEffect, useRef } from "react";
import { NovaMetrics, NovaState } from "../system/types";
import { getNovaState } from "../system/stateMachine";
import { getRandomDialogue } from "../data/dialogues";

const MESSAGE_COOLDOWN = 10000; // 10 seconds between messages
const MESSAGE_DURATION = 5000;  // Stay visible for 5 seconds

export const useNova = (metrics: NovaMetrics) => {
  const [state, setState] = useState<NovaState>("IDLE");
  const [message, setMessage] = useState<string>("");
  const isIntroduced = useRef<boolean>(false);
  const lastMessageTime = useRef<number>(0);
  const messageTimeout = useRef<any>(null);
  const greetingUntil = useRef<number>(0);

  useEffect(() => {
    if (!isIntroduced.current) {
      setMessage("Hi there! I'm Nova, your learning companion.");
      isIntroduced.current = true;
      lastMessageTime.current = Date.now();
      messageTimeout.current = setTimeout(() => setMessage(""), MESSAGE_DURATION);
      greetingUntil.current = Date.now() + MESSAGE_DURATION;
      return;
    }

    const newState = getNovaState(metrics);
    const now = Date.now();
    const greetingActive = now < greetingUntil.current;

    if (greetingActive) {
      setState("IDLE");
      return;
    }

    setState(newState);

    if (newState === "FOCUSING") {
      if (messageTimeout.current) clearTimeout(messageTimeout.current);
      setMessage("");
      return;
    }

    const canShowMessage = now - lastMessageTime.current > MESSAGE_COOLDOWN;

    const isFeedback = newState === "SUCCESS" || newState === "ERROR";

    if (canShowMessage || isFeedback) {
      const newMessage = getRandomDialogue(newState);
      if (newMessage) {
        setMessage(newMessage);
        lastMessageTime.current = now;

        if (messageTimeout.current) clearTimeout(messageTimeout.current);
        messageTimeout.current = setTimeout(() => setMessage(""), MESSAGE_DURATION);
      }
    }
  }, [
    metrics.wrongAnswers,
    metrics.stressLevel,
    metrics.inactiveTime,
    metrics.correctAnswer,
    metrics.isReading
  ]);

  useEffect(() => {
    return () => {
      if (messageTimeout.current) clearTimeout(messageTimeout.current);
    };
  }, []);

  return {
    state,
    message
  };
};
