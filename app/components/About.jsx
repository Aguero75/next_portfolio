import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-darkBg">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          <i className="fas fa-user text-primary"></i>About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Frontend architect with 3+ years building interfaces where design
              precision meets engineering rigor. My work centers on the React
              ecosystem : Next.js, TypeScript, and Tailwind CSS. Turning complex
              requirements into fast, maintainable products.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-center">
                <div className="text-2xl mb-2">
                  <i className="fas fa-project-diagram text-primary"></i>
                </div>
                <span className="text-2xl font-bold text-primary">10+</span>
                <p className="text-sm">Projects</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-center">
                <div className="text-2xl mb-2">
                  <i className="fas fa-calendar-days text-primary"></i>
                </div>
                <span className="text-2xl font-bold text-primary">3+</span>
                <p className="text-sm">Years</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg flex items-center gap-2">
              <i className="fas fa-rocket text-primary"></i>
              <span>10+ projects delivered</span>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg flex items-center gap-2">
              <i className="fas fa-mobile-screen text-primary"></i>
              <span>Responsive expert</span>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg flex items-center gap-2">
              <i className="fas fa-bolt text-primary"></i>
              <span>Performance</span>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg flex items-center gap-2">
              <i className="fas fa-palette text-primary"></i>
              <span>UI/UX collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
