// src/components/Skills.js

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faBootstrap, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const skillsWithIcons = [
  { name: 'HTML-5', icon: faHtml5, level: 90 },
  { name: 'CSS', icon: faCss3, level: 85 },
  { name: 'JavaScript', icon: faJs, level: 80 },
  { name: 'React', icon: faReact, level: 75 },
  { name: 'SQL', icon: faDatabase, level: 70 },
  { name: 'Python', icon: faPython, level: 65 },
  { name: 'Django', level: 60 },
  { name: 'Bootstrap', icon: faBootstrap, level: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="text-white bg-red-700 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="mb-20 text-center">
          <ChipIcon className="inline-block w-10 mb-4" />
          <h1 className="mb-4 text-3xl font-medium text-white sm:text-4xl title-font">
            Skills I Have
          </h1>
          <p className="mx-auto text-base leading-relaxed text-white xl:w-2/4 lg:w-3/4">
            I bring a robust skill set to web development, encompassing proficiency in HTML, CSS, and JavaScript, along with expertise in React.js, Python, Bootstrap, and SQL. With a keen eye for design and a knack for creating dynamic, user-centric experiences, I am well-equipped to contribute to diverse aspects of web development.
          </p>
        </div>
        <div className="flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2">
          {skillsWithIcons.map(({ name, icon, level }) => (
            <div key={name} className="w-full p-2 sm:w-1/2">
              <div className="relative overflow-hidden transition duration-300 ease-in-out transform bg-white rounded-lg shadow-md hover:scale-105">
                <div className="flex items-center justify-center h-full p-4">
                  <BadgeCheckIcon className="flex-shrink-0 w-6 h-6 mr-4 text-red-700" />
                  <span className="font-medium text-black title-font">{name}</span>
                  {icon && <FontAwesomeIcon icon={icon} className="ml-4 text-red-700" />}
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-black" style={{ width: `${level}%`, height: '5px', transition: 'width 0.3s ease-in-out', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="text-center">
                    <p className="text-white">{name}</p>
                    <p className="text-white">{level}%</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
