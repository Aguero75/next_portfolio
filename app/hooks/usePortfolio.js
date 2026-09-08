"use client";

import { useState, useEffect } from "react";

const CONTACT_EMAIL = "tonychikezie75@gmail.com";

export function usePortfolio() {
  // Dark mode
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    localStorage.theme = isDark ? "light" : "dark";
  };

  // Mobile menu
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  // Form validation + mail client handoff
  const [status, setStatus] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name?.value.trim();
    const email = e.target.email?.value.trim();
    const msg = e.target.message?.value.trim();

    if (!name || !email || !msg) {
      setStatus("❌ All fields required.");
      return;
    }

    if (!/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(email)) {
      setStatus("❌ Valid email needed.");
      return;
    }

    // Build a mailto link so the user's own mail app/client sends the message
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`;

    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    const mailAnchor = document.createElement("a");
    mailAnchor.href = mailtoLink;
    mailAnchor.style.display = "none";
    document.body.appendChild(mailAnchor);
    mailAnchor.click();
    document.body.removeChild(mailAnchor);

    setStatus("✨ Opening your mail app... I'll reply soon!");
    e.target.reset();
    setTimeout(() => setStatus(""), 4000);
  };

  return {
    // Dark mode
    isDark,
    toggleDarkMode,
    // Mobile menu
    isOpen,
    openSidebar,
    closeSidebar,
    // Form
    status,
    handleFormSubmit,
  };
}
