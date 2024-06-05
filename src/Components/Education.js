// src/components/Education.js

import React from "react";
import { ChipIcon, BookOpenIcon } from "@heroicons/react/solid";

const educationDetails = [
    {
        degree: "Bachelor's Degree in Computer Applications",
        university: "University of Your Mangalore University",
        graduationYear: "May 2023",
    },
    {
        degree: "High School 2nd PUC",
        school: "Udupi Government College",
        graduationYear: "May 2020",
    },
    {
        degree: "SSLC",
        school: "Anantheshwara English Medium School",
        graduationYear: "May 2018",
    },
    // Add more education details as needed
];

export default function Education() {
    return (
       
        <section  className="py-16 bg-black" id="education">
            <div className="container mx-auto" >
                <div className="mb-20 text-center">
                    <BookOpenIcon className="inline-block w-10 mb-4 text-white" />
                    <h1  className="mb-4 text-3xl font-medium text-white sm:text-4xl title-font">
                        Education
                    </h1>
                    <p className="mx-auto text-base leading-relaxed text-white xl:w-2/4 lg:w-3/4">
                        Explore my academic journey and accomplishments in the field of 
                        Computer Applications.
                    </p>
                </div>
                <div className="flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2">
                    {educationDetails.map((edu, index) => (
                        <div key={index} className="w-full p-2 sm:w-1/2">
                            <div className="flex items-center h-full p-4 bg-white rounded bg-gr b">
                                <ChipIcon className="flex-shrink-0 w-6 h-6 mr-4 text-black" />
                                <div>
                                    <h3 className="text-lg font-semibold text-black">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-red-700">{edu.university || edu.school}</p>
                                    <p className="text-red-700">Graduated: {edu.graduationYear}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
