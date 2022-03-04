import React from 'react';
import Header from './sections/Header';
import Works from './sections/Works';
import About from './sections/About';
import Contact from './sections/Contact';
import SingleWorks from './sections/SingleWorks';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import FrontPage from './sections/FrontPage';

function App() {
  return (
    <div>
      <Header/>
      <FrontPage/>
      <Works/>
      <ImageSlider slides={SliderData}/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
