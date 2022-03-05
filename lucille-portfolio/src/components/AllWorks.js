import React, {useState} from 'react';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllWorks = ({ slides }) => {
const [current, setCurrent] = useState(0)
const length = slides.length;

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
}

console.log(current)

if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
}
  return (
    <section className='slider'>
    <div id='works'>
      <h2>My Projects</h2>
    <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}  />
    {SliderData.map((slide, index) =>  {
        return (
              <div className={index === current ? 'slide active' : 'slide'} key={index}>
                <Link to={`/${slide.slug}`}>{index === current && (<img key={index} className="project-img" src={slide.image} alt="" />)}</Link>
                <Link to={`/${slide.slug}`}>{index === current && (<h3 className='project-title'>{slide.title}</h3>)}</Link>
                <div className='proj-deco'>
                  <div className='proj-underline1'></div>
                  <div className='proj-circle'></div>
                  <div className='proj-underline2'></div>
                </div>
              </div>

        )
    })}
    <div className='line-deco'></div>
    </div>
    
    </section>
  )
};

export default AllWorks;