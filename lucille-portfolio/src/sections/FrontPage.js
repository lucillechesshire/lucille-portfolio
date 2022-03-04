import React from 'react';
import background from '../assets/images/home-hero.jpg';
import IMAGES from '../assets/images/images.js';

function FrontPage() {
  return (
    <div>
    <section className='home-background'>
      <section className='title-container'>
      <p className='name-title'>Lucille Chesshire<p className='dot'>.</p></p>
      </section>
      <div class="arrow bounce">
      <svg><a class="fa fa-arrow-down fa-2x" href="#" color="black"></a></svg>
      </div>
    </section>
    </div>
  )
}

export default FrontPage;