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
    <main>
    {project !== null && (
    <div>
      <h2>{project.title}</h2>
    </div>
    )}
    
    </main>
  );
}

export default SingleWorks;