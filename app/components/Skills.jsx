import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          <i className="fas fa-code text-primary"></i>Tech Stack
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-darkSurface p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <i className="fas fa-browser"></i>Frontend
            </h3>
            <div className="flex flex-wrap gap-8 justify-center">
              <div className="skill-icon group flex flex-col items-center gap-3 transition-all duration-200 hover:scale-110">
                <img
                  src="assets/react-javascript-js-framework-facebook-svgrepo-com.svg"
                  alt=""
                  className="w-10 h-10"
                />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  React
                </span>
              </div>

              <div className="skill-icon group flex flex-col items-center gap-3 transition-all duration-200 hover:scale-110">
                <img
                  src="assets/nextjs-svgrepo-com.svg"
                  alt=""
                  className="w-10 h-10 dark:invert"
                />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Next.js
                </span>
              </div>

              <div className="skill-icon group flex flex-col items-center gap-3 transition-all duration-200 hover:scale-110">
                <img
                  src="assets/typescript-official-svgrepo-com.svg"
                  alt=""
                  className="w-10 h-10"
                />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  TypeScript
                </span>
              </div>

              <div className="skill-icon group flex flex-col items-center gap-3 transition-all duration-200 hover:scale-110">
                <img
                  src="assets/tailwind-svgrepo-com.svg"
                  alt=""
                  className="w-10 h-10"
                />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Tailwind
                </span>
              </div>

              <div className="skill-icon group flex flex-col items-center gap-3 transition-all duration-200 hover:scale-110">
                <img
                  src="assets/scss2-svgrepo-com.svg"
                  alt=""
                  className="w-10 h-10"
                />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  SCSS
                </span>
              </div>

              <div className="skill-icon group flex flex-col items-center gap-3 transition-all duration-200 hover:scale-110">
                <img
                  src="assets/api-interface-svgrepo-com.svg"
                  alt=""
                  className="w-10 h-10"
                />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  API
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-darkSurface p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <i className="fas fa-server"></i>Backend / Tools
            </h3>
            <div className="flex flex-wrap gap-8 justify-center">
              <div className="skill-icon group flex flex-col items-center gap-3 transition-all duration-200 hover:scale-110">
                <img
                  src="assets/node-js-svgrepo-com.svg"
                  alt=""
                  className="w-10 h-10"
                />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Node.js
                </span>
              </div>

              <div className="skill-icon group flex flex-col items-center gap-3 transition-all duration-200 hover:scale-110">
                <img
                  src="assets/express-svgrepo-com.svg"
                  alt=""
                  className="w-10 h-10 dark:invert"
                />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Express
                </span>
              </div>

              <div className="skill-icon group flex flex-col items-center gap-3 transition-all duration-200 hover:scale-110">
                <img
                  src="assets/prisma-svgrepo-com.svg"
                  alt=""
                  className="w-10 h-10 dark:invert"
                />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Prisma
                </span>
              </div>

              <div className="skill-icon group flex flex-col items-center gap-3 transition-all duration-200 hover:scale-110">
                <img
                  src="assets/vercel-svgrepo-com.svg"
                  alt="Vercel"
                  className="w-10 h-10 dark:invert"
                />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Vercel
                </span>
              </div>

              <div className="skill-icon group flex flex-col items-center gap-3 transition-all duration-200 hover:scale-110">
                <img
                  src="assets/git-svgrepo-com.svg"
                  alt="Git"
                  className="w-10 h-10"
                />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Git
                </span>
              </div>

              <div className="skill-icon group flex flex-col items-center gap-3 transition-all duration-200 hover:scale-110">
                <img
                  src="assets/github-svgrepo-com.svg"
                  alt="Github"
                  className="w-10 h-10 dark:invert"
                />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Github
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
