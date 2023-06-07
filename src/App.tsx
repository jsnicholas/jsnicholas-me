// import { useState } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Writing from "./components/writing";
import Storytelling from "./components/storytelling";
import Art from "./components/art";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="max-w-5xl mx-auto">
        <Projects />
        <Writing />
        <Storytelling />
        <Art />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
