import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-gradient min-h-[85vh] flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl text-center animate-fade-in">
        <h5 className="px-4 py-1.5 mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse [text-shadow:0_0_12px_rgba(99,102,241,0.6),0_0_24px_rgba(99,102,241,0.4),0_0_40px_rgba(168,85,247,0.3)]">
          Crafting digital Solutions
        </h5>
        <h1 className="text-5xl md:text-7xl font-extrabold text-secondary dark:text-white tracking-tight">
          Hi, I'm Tony <span className="text-primary">Chikezie</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mt-4">
          React & Next.js Developer
        </p>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
          Building performant, scalable web applications with modern React
          patterns and Next.js full-stack capabilities.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <a
            href="#projects"
            className="bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-primary/80 transition flex items-center gap-2"
          >
            <i className="fas fa-briefcase"></i>View Work
          </a>
          <a
            href="#contact"
            className="border-2 border-primary text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary/10 transition flex items-center gap-2"
          >
            <i className="fas fa-envelope"></i>Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
