import React from 'react';
import Background from './components/Background';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Background /> */}
      <Hero />
      <Skills />
      <Journey />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
