import { NovaDialogue, NovaState } from "../system/types";

export const NOVA_DIALOGUES: NovaDialogue[] = [
  {
    state: "IDLE",
    messages: [
      "I'm here when you need me.",
      "Take your time.",
      "Ready for more?"
    ]
  },
  {
    state: "ACTIVE",
    messages: [
      "You're in the flow!",
      "Great concentration.",
      "I like how you're working.",
      "Keep exploring."
    ]
  },
  {
    state: "STRUGGLING",
    messages: [
      "It's okay to take a pause.",
      "Need a different view?",
      "Deep breaths help me too.",
      "We can try this together."
    ]
  },
  {
    state: "OVERWHELMED",
    messages: [
      "Let's slow things down.",
      "Maybe a tiny break?",
      "It's a lot, and that's okay.",
      "I'm right here with you."
    ]
  },
  {
    state: "SUCCESS",
    messages: [
      "You've got this!",
      "That was great!",
      "Look at that progress!",
      "So proud of your focus!",
      "Spot on! Well done."
    ]
  },
  {
    state: "ERROR",
    messages: [
      "Almost there! Try again?",
      "Mistakes are just steps to learning.",
      "Don't give up, you're close!",
      "Let's try a different approach."
    ]
  },
  {
    state: "FOCUSING",
    messages: [] // Silent during focus
  },
  {
    state: "RECOVERY",
    messages: [
      "Welcome back.",
      "Ready to dive back in?",
      "Let's ease into the next part."
    ]
  }
];

export const getRandomDialogue = (state: NovaState): string => {
  const group = NOVA_DIALOGUES.find(d => d.state === state);
  if (!group) return "";
  const index = Math.floor(Math.random() * group.messages.length);
  return group.messages[index];
};
