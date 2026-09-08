import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";
import RevealSection from "./components/RevealSection";

const page = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <RevealSection>
          <About />
        </RevealSection>
        <RevealSection>
          <Skills />
        </RevealSection>
        <RevealSection>
          <Projects />
        </RevealSection>
        <RevealSection>
          <Contact />
        </RevealSection>
        <Footer />
      </main>
      <Whatsapp />
    </>
  );
};

export default page;
