import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 flex items-center justify-center gap-3">
          <i className="fas fa-handshake text-primary"></i>Let's Connect
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 flex items-center justify-center gap-2">
          <i className="fas fa-clock text-primary"></i>Send a message and I'll
          reply within 24h.
        </p>
        <div className="bg-white dark:bg-darkSurface rounded-2xl shadow-lg p-8">
          <form id="contactForm" className="space-y-6">
            <div>
              <label className="text-sm font-semibold mb-2 flex items-center gap-2">
                <i className="fas fa-user text-primary"></i>Name *
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="john doe"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-base font-medium text-secondary dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>
            <div>
              <label className="text-sm font-semibold mb-2 flex items-center gap-2">
                <i className="fas fa-envelope text-primary"></i>Email *
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="john@doe.com"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-base font-medium text-secondary dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>
            <div>
              <label className="text-sm font-semibold mb-2 flex items-center gap-2">
                <i className="fas fa-message text-primary"></i>Message *
              </label>
              <textarea
                id="message"
                rows="4"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-base font-medium text-secondary dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-400 dark:placeholder-gray-500 resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/80 flex items-center justify-center gap-2"
            >
              <i className="fas fa-paper-plane"></i>Send Message
            </button>
            <p id="formStatus" className="text-center text-sm mt-3 hidden"></p>
          </form>
          <div className="text-center mt-6 text-sm flex items-center justify-center gap-2">
            <i className="fas fa-paper-plane text-primary"></i>
            Or email
            <a
              href="mailto:Tonychikezie75@gmail.com"
              className="text-primary font-medium"
            >
              Tonychikezie75@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
