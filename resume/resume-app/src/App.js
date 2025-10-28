// src/App.js
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="resume">
      <Header />
      <Education />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
