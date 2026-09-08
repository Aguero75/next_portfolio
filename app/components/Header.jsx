// app/components/Header.tsx
"use client";

import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileSidebar = document.getElementById("mobileSidebar");
    const closeSidebarBtn = document.getElementById("closeSidebarBtn");
    const sidebarOverlay = document.getElementById("sidebarOverlay");
    const sidebarLinks = document.querySelectorAll(".sidebar-link");

    const handleDarkModeToggle = () => {
      document.documentElement.classList.toggle("dark");
      localStorage.theme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    };

    const openSidebar = () => {
      mobileSidebar?.classList.remove("-translate-x-full");
      sidebarOverlay?.classList.remove("hidden");
    };

    const closeSidebar = () => {
      mobileSidebar?.classList.add("-translate-x-full");
      sidebarOverlay?.classList.add("hidden");
    };

    darkModeToggle?.addEventListener("click", handleDarkModeToggle);
    mobileMenuBtn?.addEventListener("click", openSidebar);
    closeSidebarBtn?.addEventListener("click", closeSidebar);
    sidebarOverlay?.addEventListener("click", closeSidebar);
    sidebarLinks.forEach((link) =>
      link.addEventListener("click", closeSidebar),
    );

    return () => {
      darkModeToggle?.removeEventListener("click", handleDarkModeToggle);
      mobileMenuBtn?.removeEventListener("click", openSidebar);
      closeSidebarBtn?.removeEventListener("click", closeSidebar);
      sidebarOverlay?.removeEventListener("click", closeSidebar);
      sidebarLinks.forEach((link) =>
        link.removeEventListener("click", closeSidebar),
      );
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-darkBg/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="text-xl font-extrabold text-primary">
              <a href="/">
                Tony Chikezie
                <span className="text-secondary dark:text-gray-300">.dev</span>
              </a>
            </div>

            <nav className="hidden md:flex items-center gap-7">
              <a
                href="#hero"
                className="font-medium hover:text-primary transition flex items-center gap-2"
              >
                <i className="fas fa-house text-lg"></i>Home
              </a>
              <a
                href="#about"
                className="font-medium hover:text-primary transition flex items-center gap-2"
              >
                <i className="fas fa-user text-lg"></i>About
              </a>
              <a
                href="#skills"
                className="font-medium hover:text-primary transition flex items-center gap-2"
              >
                <i className="fas fa-code text-lg"></i>Skills
              </a>
              <a
                href="#projects"
                className="font-medium hover:text-primary transition flex items-center gap-2"
              >
                <i className="fas fa-folder-open text-lg"></i>Projects
              </a>
              <a
                href="#contact"
                className="font-medium hover:text-primary transition flex items-center gap-2"
              >
                <i className="fas fa-envelope text-lg"></i>Contact
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <button
                id="darkModeToggle"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-secondary dark:text-yellow-300 hover:scale-105 transition"
                aria-label="Dark mode"
              >
                <svg
                  id="darkIcon"
                  className="w-5 h-5 hidden dark:block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg
                  id="lightIcon"
                  className="w-5 h-5 block dark:hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <a
                id="desktopDownloadBtn"
                href="/Anthony.pdf"
                download="Anthony_Chikezie_Resume.pdf"
                className="hidden md:inline-flex bg-primary text-white font-semibold px-5 py-2 rounded-full hover:bg-primary/80 transition items-center gap-2"
              >
                <i className="fas fa-download"></i>Resume
              </a>

              <button
                id="mobileMenuBtn"
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                aria-label="Open sidebar"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        id="mobileSidebar"
        className="fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-darkSurface shadow-2xl transform -translate-x-full sidebar-transition"
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-bold text-primary">Menu</span>
            <button
              id="closeSidebarBtn"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="text-center mb-6">
            <div className="w-24 h-24 mx-auto rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
              TC
            </div>
            <h3 className="mt-3 font-bold text-lg">Tony Chikezie</h3>
            <p className="text-primary text-sm">React & Next.js Dev</p>
          </div>
          <nav className="flex flex-col gap-4">
            <a
              href="#hero"
              className="sidebar-link py-2 px-4 rounded-lg hover:bg-primary/10 font-medium flex items-center gap-3"
            >
              <i className="fas fa-house text-primary"></i>Home
            </a>
            <a
              href="#about"
              className="sidebar-link py-2 px-4 rounded-lg hover:bg-primary/10 font-medium flex items-center gap-3"
            >
              <i className="fas fa-user text-primary"></i>About
            </a>
            <a
              href="#skills"
              className="sidebar-link py-2 px-4 rounded-lg hover:bg-primary/10 font-medium flex items-center gap-3"
            >
              <i className="fas fa-code text-primary"></i>Skills
            </a>
            <a
              href="#projects"
              className="sidebar-link py-2 px-4 rounded-lg hover:bg-primary/10 font-medium flex items-center gap-3"
            >
              <i className="fas fa-folder-open text-primary"></i>Projects
            </a>
            <a
              href="#contact"
              className="sidebar-link py-2 px-4 rounded-lg hover:bg-primary/10 font-medium flex items-center gap-3"
            >
              <i className="fas fa-envelope text-primary"></i>Contact
            </a>
          </nav>
          <div className="mt-auto pt-6">
            <a
              id="mobileDownloadBtn"
              href="/Anthony.pdf"
              download="Anthony_Chikezie_Resume.pdf"
              className="w-full bg-primary text-white font-semibold py-2 rounded-full flex items-center justify-center gap-2"
            >
              <i className="fas fa-download"></i>Resume (PDF)
            </a>
            <div className="flex justify-center gap-5 mt-6">
              <a
                href="https://github.com/Aguero75"
                className="text-gray-500 dark:text-gray-400 text-xl hover:text-primary transition"
                title="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/tony-chikezie-454b4b336/"
                className="text-gray-500 dark:text-gray-400 text-xl hover:text-primary transition"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://x.com/iamtony75"
                className="text-gray-500 dark:text-gray-400 text-xl hover:text-primary transition"
                title="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="sidebarOverlay"
        className="fixed inset-0 bg-black/50 z-40 hidden"
      ></div>
    </>
  );
};

export default Header;
