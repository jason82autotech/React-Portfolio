import React from "react";
import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'weather-app',
      description: 'A weather app that allows you to search for a city and get the current weather and 5 day forecast.',
      link: "https://github.com/jason82autotech/weather-app",
      repo: "https://jason82autotech.github.io/weather-app/"
    },
    {
      name: 'Oh-Ive-Seen-That',
      description: 'A movie search engine where you can keep track of your favorite movies!',
      link: "https://jcwarwick.github.io/Group2-Project/",
      repo: "https://github.com/jcwarwick/Group2-Project"
    },
    
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
