import React from 'react';
import Header from './sections/Header';
import About from './sections/About';
import Contact from './sections/Contact';
import SingleWorks from './sections/SingleWorks';
import Footer from './components/Footer';
import AllWorks from './components/AllWorks';
import FrontPage from './sections/FrontPage';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path ="/" element={<FrontPage/>}/>
          <Route path ="/:slug" element={<SingleWorks/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
