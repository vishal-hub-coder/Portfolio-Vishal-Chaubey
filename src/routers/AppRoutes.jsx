import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const AppRoutes = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <HeroSection />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AppRoutes;
