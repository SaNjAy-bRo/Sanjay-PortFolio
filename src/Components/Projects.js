// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import './Navbar.css'; // Import the custom CSS file

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-white body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="inline-block w-10 mx-auto mb-4 text-black" />
          <h1 className="mb-4 text-3xl font-medium text-black sm:text-5xl title-font">
            Websites I've Built
          </h1>
          <p className="mx-auto text-lg leading-relaxed text-black lg:w-2/3">
  As a beginner web developer, I've crafted websites using HTML, CSS, and JavaScript, showcasing my commitment to mastering the essentials of web development. These projects highlight my evolving skills in creating responsive and visually appealing interfaces.
</p>

        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="w-full p-4 sm:w-1/2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative flex bg-red-900 border-2 border-gray-500 project-container">
                <img
                  alt={project.title}
                  className="absolute inset-0 object-cover object-center w-full h-full"
                  src={project.image}
                />
                <div className="relative z-10 w-full px-8 py-10 bg-red-700 border-0 border-gray-800 project-details">
                  <div className="project-details-content">
                    <h2 className="mb-1 text-sm font-medium tracking-widest text-green-400 title-font">
                      {project.subtitle}
                    </h2>
                    <h1 className="mb-3 text-lg font-medium text-white title-font">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
