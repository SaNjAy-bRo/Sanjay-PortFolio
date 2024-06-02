// src/App.js

import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Education from "./Components/Education";


export default function App() {
  return (
    <main className="text-gray-900 bg-black body-font" >
      <Navbar />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}