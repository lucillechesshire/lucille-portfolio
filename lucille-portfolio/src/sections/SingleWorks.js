import React, { useEffect, useState } from 'react';
import {allProjects} from '../components/projectData';
import { useParams } from 'react-router-dom';
import { SliderData } from '../components/SliderData';


function SingleWorks() {
  const { slug } =  useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const data =SliderData.filter((item) => item.slug === slug);
    if (data !== null) {
        setProject(data[0]);
    }
  },[slug]);

  return (
    <main className='single-works' id='single-works'>
    {project !== null && (
    <div>
      <h2>{project.title}</h2>
      <img src={project.image}/>
      <h3>{project.summaryTitle}</h3>
      <p>{project.summary}</p>
      <div className='year-and-skills'>
        <h4>{project.yearTitle}</h4>
        <p>{project.year}</p>
        <h4>{project.skillsTitle}</h4>
        <div className='skills-list'>
          <ul><li>{project.skillsUsed}</li></ul>
        </div>
      </div>
      <h4>{project.componentsTitle}</h4>
      <div className='components-list'>
        <ul><li>{project.components}</li></ul>
      </div>
      <h3>{project.designTitle}</h3>
      <p>{project.design}</p>
      <h3>{project.devTitle}</h3>
      <p>{project.development}</p>
      <p>{project.colorPallete}</p>

    </div>
    )}
    
    </main>
  );
}

export default SingleWorks;