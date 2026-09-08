import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-darkBg border-t py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2026 Tony Chikezie. Built with Tailwind CSS.
        </p>
        <div className="flex gap-5">
          <a
            href="https://github.com/Aguero75"
            className="text-gray-500 dark:text-gray-400 hover:text-primary transition text-xl"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tony-chikezie-454b4b336"
            className="text-gray-500 dark:text-gray-400 hover:text-primary transition text-xl"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://x.com/iamtony75"
            className="text-gray-500 dark:text-gray-400 hover:text-primary transition text-xl"
            title="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
