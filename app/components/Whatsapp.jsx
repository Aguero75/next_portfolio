import React from "react";

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/2349031258330?text=Hi%20Tony,%20I%20would%20like%20to%20connect%20with%20you"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-bounce"
      title="Chat with us on WhatsApp"
      aria-label="WhatsApp chat"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  );
};

export default Whatsapp;
