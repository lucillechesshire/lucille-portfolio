import React from 'react';
import Header from './sections/Header';
import Works from './sections/Works';
import About from './sections/About';
import Contact from './sections/Contact';
import SingleWorks from './sections/SingleWorks';
import Footer from './sections/components/Footer';

function App() {
  return (
    <div>App
      <Header/>
      <Works/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
