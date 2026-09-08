import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-darkBg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          <i className="fas fa-briefcase text-primary"></i>Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="project-card bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md">
            <div className="h-40 bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center text-5xl">
              <img src="assets/vendor-buddy.png" alt="Vendor Buddy" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <i className="fas fa-store text-primary"></i>Vendor Buddy
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                Vendor Buddy is a simple storefront and sales workspace for
                small vendors.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-arrow-right text-xs"></i>Next.js
                </span>
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-palette text-xs"></i>Tailwind
                </span>
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-palette text-xs"></i>Clerk
                </span>
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-palette text-xs"></i>Neon with Prisma
                </span>
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-palette text-xs"></i> Recharts
                </span>
              </div>
              <a
                href="https://vendor-buddy.vercel.app"
                className="mt-4 text-primary font-medium hover:gap-1 transition flex items-center gap-1"
              >
                view project <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>
          <div className="project-card bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md">
            <div className="h-40 bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center text-5xl">
              <img src="assets/pitchfinder.png" alt="pitchfinder" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <i className="fas fa-bar-chart text-primary"></i>PitchFinder
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                Pickup football spots near you, added by the people who play on
                them , the easiest football pitch finder for you
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-react text-xs"></i>Next
                </span>
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-chart-line text-xs"></i>Leaflet Map
                </span>
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-chart-line text-xs"></i>Tailwind
                </span>
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-chart-line text-xs"></i>Zod
                </span>
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-chart-line text-xs"></i>Neon with prisma
                </span>
              </div>
              <a
                href="https://mypitchfinder.vercel.app"
                className="mt-4 text-primary font-medium hover:gap-1 transition flex items-center gap-1"
              >
                view project <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>
          <div className="project-card bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md">
            <div className="h-40 bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center text-5xl">
              <img src="assets/workshop.png" alt="workshop" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <i className="fas fa-pen-fancy text-primary"></i>Dev Data
                Workshop
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                Convert data and files between formats without leaving the tab.
                Every module below runs entirely in your browser
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-arrow-right text-xs"></i>React js
                </span>
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-code text-xs"></i> Tailwind CSS
                </span>
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-code text-xs"></i> Typescript
                </span>
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-code text-xs"></i> papaparse
                </span>
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-code text-xs"></i> Marked + turndown
                </span>
              </div>
              <a
                href="https://data-workshop-nine.vercel.app"
                className="mt-4 text-primary font-medium hover:gap-1 transition flex items-center gap-1"
              >
                view project <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>
          <div className="project-card bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md">
            <div className="h-40 bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center text-5xl">
              <img src="assets/scratch.png" alt="scratch" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <i className="fas fa-pen-fancy text-primary"></i>Scratch note
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                A note app with cool features that will make you want to keep
                writing including export as .txt feature
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-arrow-right text-xs"></i>Next.js
                </span>
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-code text-xs"></i>Local storage
                </span>
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-code text-xs"></i>CSS
                </span>
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-code text-xs"></i>light/dark mode
                </span>
              </div>
              <a
                href="https://scratch-note.vercel.app"
                className="mt-4 text-primary font-medium hover:gap-1 transition flex items-center gap-1"
              >
                view project <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>
          <div className="project-card bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md">
            <div className="h-40 bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center text-5xl">
              <img src="assets/Screenshot 2026-05-16 065847.png" alt="" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <i className="fas fa-pen-fancy text-primary"></i>HeroWiki
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                Hero details site built with Next.js and styled with Tailwind
                CSS with superhero api
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-arrow-right text-xs"></i>Next.js
                </span>
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-code text-xs"></i>API
                </span>
              </div>
              <a
                href="https://herowiki-liart.vercel.app/"
                className="mt-4 text-primary font-medium hover:gap-1 transition flex items-center gap-1"
              >
                view project <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>
          <div className="project-card bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md">
            <div className="h-40 bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center text-5xl">
              <img src="assets/Screenshot 2026-05-20 203325.png" alt="" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <i className="fas fa-pen-fancy text-primary"></i>Coffee House
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                Coffee house landing page built with Next.js and styled with CSS
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-arrow-right text-xs"></i>Next.js
                </span>
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                  <i className="fas fa-code text-xs"></i>CSS
                </span>
              </div>
              <a
                href="https://next-coffee-lyart.vercel.app/"
                className="mt-4 text-primary font-medium hover:gap-1 transition flex items-center gap-1"
              >
                view project <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
