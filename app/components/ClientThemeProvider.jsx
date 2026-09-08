// app/components/ClientThemeProvider.tsx
"use client";

import { useEffect } from "react";

export default function ClientThemeProvider({ children }) {
  useEffect(() => {
    // Keeps localStorage in sync if system theme changes while site is open
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      if (!("theme" in localStorage)) {
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return <>{children}</>;
}
