import React from 'react';
import {allProjects} from './components/projectData';

function Works() {
  return (
    <div>Works
      {allProjects.map((project) => (
        <div>
        <h2>{project.title}</h2>
        <img src={project.url} alt =""/>
        </div>
      ))}
    </div>
  )
}

export default Works