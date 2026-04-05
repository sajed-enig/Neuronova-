
import React from "react";
import { createRoot } from "react-dom/client";
import App from "@app/App.tsx";
// @ts-expect-error CSS import is handled by bundler
import "@styles/index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
