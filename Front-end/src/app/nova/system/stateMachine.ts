import { NovaMetrics, NovaState } from "./types";

export const getNovaState = (metrics: NovaMetrics): NovaState => {
  const { wrongAnswers, stressLevel, inactiveTime, correctAnswer, isReading } = metrics;

  if (correctAnswer) return "SUCCESS";
  if (stressLevel === "high") return "OVERWHELMED";
  if (wrongAnswers >= 2 || inactiveTime > 15) return "STRUGGLING";
  if (wrongAnswers > 0) return "ERROR";
  if (isReading) return "FOCUSING";

  return "ACTIVE";
};
