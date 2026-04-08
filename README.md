# NeuroNova Front‑End

A Vite + React + TypeScript front‑end for NeuroNova, a serious adaptive learning platform with an animated Nova mascot, a focused color system, and typography tailored for reading, quizzes, and dashboards.

## Features

- Nova Mascot System
  - State machine with friendly states (focusing, success, struggling, error, etc.).
  - Contextual dialogues and silent focus mode.
  - Celebration effects on correct answers.
- Lesson Experience
  - Reading, video (YouTube embeds supported), audio, quiz, and assignment formats.
  - Learner metrics flow into Nova to adapt animations/messages.
- Learner Dashboard
  - Left: course navigation.
  - Right: learner panel with streaks, goals, completions, and weekly watch time.
- Design System
  - Strict, role‑driven palette: Primary (cyan), Secondary (coral), Success (emerald), Neutrals.
  - Typography roles for UI, display/CTAs, reading, and dashboard/nav.

## Tech Stack

- React 18, TypeScript, Vite 6
- Tailwind CSS 4 (via @tailwindcss/vite)
- Motion (Framer Motion v5 API)
- Lucide React icons

## Getting Started

Prerequisites:
- Node.js 18+

Install dependencies (choose one):

```bash
# npm
npm install

# or pnpm (supported)
pnpm install
```

Run in development:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Typecheck:

```bash
npx tsc -p tsconfig.json --noEmit
```

## Project Structure

```
src/
  app/
    components/           # UI and page components
    pages/                # Route-level pages
    nova/                 # Nova mascot system (components, hooks, system)
    styles/               # Global theme and tokens
  assets/                 # Static assets (Nova SVGs)
```

Key files:
- Nova Mascot:
  - Component: [Nova.tsx](file:///c:/Users/DELL/OneDrive/Desktop/nuronova/Sans%20titre/Front-end/src/app/nova/components/Nova.tsx)
  - Hook: [useNova.ts](file:///c:/Users/DELL/OneDrive/Desktop/nuronova/Sans%20titre/Front-end/src/app/nova/hooks/useNova.ts)
  - State machine: [stateMachine.ts](file:///c:/Users/DELL/OneDrive/Desktop/nuronova/Sans%20titre/Front-end/src/app/nova/system/stateMachine.ts)
  - Dialogues: [dialogues.ts](file:///c:/Users/DELL/OneDrive/Desktop/nuronova/Sans%20titre/Front-end/src/app/nova/data/dialogues.ts)
  - Animations: [novaAnimations.ts](file:///c:/Users/DELL/OneDrive/Desktop/nuronova/Sans%20titre/Front-end/src/app/nova/animations/novaAnimations.ts)
- Lesson flow:
  - Viewer: [LessonViewer.tsx](file:///c:/Users/DELL/OneDrive/Desktop/nuronova/Sans%20titre/Front-end/src/app/pages/LessonViewer.tsx)
  - Sidebar: [LessonSidebar.tsx](file:///c:/Users/DELL/OneDrive/Desktop/nuronova/Sans%20titre/Front-end/src/app/components/LessonSidebar.tsx)
- Dashboard:
  - Learner: [Dashboard.tsx](file:///c:/Users/DELL/OneDrive/Desktop/nuronova/Sans%20titre/Front-end/src/app/pages/Dashboard.tsx)
  - Right panel: [LearnerSidebar.tsx](file:///c:/Users/DELL/OneDrive/Desktop/nuronova/Sans%20titre/Front-end/src/app/components/LearnerSidebar.tsx)
- Theme:
  - Tokens & fonts: [theme.css](file:///c:/Users/DELL/OneDrive/Desktop/nuronova/Sans%20titre/Front-end/src/styles/theme.css)

## Color System

Locked HEX values and usage roles:

- Primary `#06B6D4` (Cyan): CTAs, active navigation, focus rings, progress bars, AI badges.
- Secondary `#FF6B6B` (Coral): Motivation/reward highlights only (streaks, rank, “New Quest”).
- Success `#10B981` (Emerald): Completion (checkmarks, completion dots).
- Background `#F8FAFC` | Surface `#FFFFFF` | Text `#1E2937` | Muted `#64748B` | Border `#E2E8F0`.

Implementation:
- CSS variables in [theme.css](file:///c:/Users/DELL/OneDrive/Desktop/nuronova/Sans%20titre/Front-end/src/styles/theme.css) control Tailwind color tokens.
- No two‑color gradients are used for UI roles.

## Typography

- UI base: Inter
- Display/CTAs (buttons, big headlines): Poppins
- Reading sections: Merriweather
- Dashboard/Nav/Course Titles: Inter

Utility classes:
- `font-display` → Poppins
- `font-reading` → Merriweather
- `font-dashboard` / `font-nav` / `font-quiz` → Inter

Configured in [theme.css](file:///c:/Users/DELL/OneDrive/Desktop/nuronova/Sans%20titre/Front-end/src/styles/theme.css).

## Nova Mascot System

Data flow:
1. Metrics update in pages (e.g., wrongAnswers, correctAnswer, isReading).
2. State is computed by [getNovaState](file:///c:/Users/DELL/OneDrive/Desktop/nuronova/Sans%20titre/Front-end/src/app/nova/system/stateMachine.ts).
3. [useNova](file:///c:/Users/DELL/OneDrive/Desktop/nuronova/Sans%20titre/Front-end/src/app/nova/hooks/useNova.ts) selects messages and manages visibility/cooldowns.
4. [Nova](file:///c:/Users/DELL/OneDrive/Desktop/nuronova/Sans%20titre/Front-end/src/app/nova/components/Nova.tsx) renders the mascot, bubble, and success confetti.

Add dialogues:
- Update [dialogues.ts](file:///c:/Users/DELL/OneDrive/Desktop/nuronova/Sans%20titre/Front-end/src/app/nova/data/dialogues.ts) with new strings per state.

Assets:
- Mascot SVGs in `src/assets/nova/`.

## Lesson Video Embeds

- YouTube videos should use `type: 'youtube'` and `embedUrl` (not watch URLs).
- See the video block in [LessonViewer.tsx](file:///c:/Users/DELL/OneDrive/Desktop/nuronova/Sans%20titre/Front-end/src/app/pages/LessonViewer.tsx#L272-L285).

## Development Notes

- Styling: Tailwind utilities + CSS variables from `theme.css`.
- Buttons: primary (solid cyan), outline (cyan border/text), no secondary on buttons.
- Accessibility: High‑contrast text, role‑based color usage, minimal animations during focus.

## Build Output

The production build outputs to `dist/`. Deploy with any static file host (Vercel, Netlify, Nginx, etc.).

## Contributing

- Follow the color and typography roles strictly.
- Avoid introducing gradients that mix role colors.
- Keep Nova messages short and supportive.
- Run the typecheck before sharing changes:
  ```bash
  npx tsc -p tsconfig.json --noEmit
  ```

## License

This repository is private and all rights are reserved by the project owner.

