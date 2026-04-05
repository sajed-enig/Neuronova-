export type NovaState =
    | "IDLE"
    | "ACTIVE"
    | "STRUGGLING"
    | "OVERWHELMED"
    | "SUCCESS"
    | "RECOVERY"
    | "FOCUSING"
    | "ERROR";

export interface NovaMetrics {
    wrongAnswers: number;
    stressLevel: "low" | "medium" | "high";
    inactiveTime: number;
    correctAnswer: boolean;
    isReading?: boolean;
}

export interface NovaDialogue {
    state: NovaState;
    messages: string[];
}
