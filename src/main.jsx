import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// ✅ Global Content Protection Logic
document.addEventListener("contextmenu", (e) => e.preventDefault()); // Disable right-click
document.addEventListener("selectstart", (e) => e.preventDefault()); // Disable text selection
document.addEventListener("dragstart", (e) => e.preventDefault()); // Disable drag
document.addEventListener("keydown", (e) => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
    (e.ctrlKey && e.key === "u")
  ) {
    e.preventDefault(); // Disable DevTools & View Source
  }
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
