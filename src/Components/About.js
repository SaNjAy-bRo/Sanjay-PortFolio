import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import hack from "./Images/sanjoker-outline-1.png";
import "./About.css";


export default function About() {
    const [name, setName] = useState('');
    const actualName = "$@NJ@Y"; // Your actual name
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < actualName.length) {
                const randomName = actualName
                    .slice(0, currentIndex + 1)
                    .padEnd(actualName.length, () =>
                        String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33))
                    );
                setName(randomName);
                setCurrentIndex(prevIndex => prevIndex + 1);
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setName('');
                    setCurrentIndex(0);
                }, 2000); // Reset the animation after 2 seconds
            }
        }, 200); // Adjust the speed of the animation as needed

        return () => clearInterval(interval);
    }, [currentIndex, actualName]);

    return (
        <section id="about">
            <div className="container flex flex-col items-center px-10 py-20 mx-auto md:flex-row">
                <div className="mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
                    <h1 className="mb-4 text-3xl font-medium text-red-500 title-font sm:text-4xl">
                        Welcome to my Portfolio
                    </h1>
                    <h1 className="mb-4 text-3xl font-medium text-white title-font sm:text-4xl">
                        Hi, I'm <span className="animate-name">{name}</span>...
                    </h1>
                    <p className="mb-8 leading-relaxed text-white">
                        Passionate about web development, I thrive on crafting innovative, user-centric digital experiences. Committed to staying on the cutting edge of technology and design, I bring a keen eye for detail to ensure a seamless and captivating online journey. With a love for problem-solving, I'm dedicated to pushing the boundaries of what's possible in the ever-evolving world of web development.
                    </p>
                    <div className="flex flex-col items-center justify-center md:flex-row md:items-start">
                        <Link
                            to="contact" spy={true} smooth={true} duration={500}
                            className="inline-flex px-6 py-2 mb-4 text-lg text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-green-600 md:mb-0 md:mr-4"
                        >
                            Contact Me
                        </Link>
                        <button
                            className="relative inline-flex items-center px-6 py-2 overflow-hidden text-lg text-black bg-white border-0 rounded focus:outline-none group"
                            onClick={() => {
                                const link = document.createElement('a');
                                
                                link.href = '../SANJAY-KUMAR-Resume.pdf' // Replace with the path to your CV file
                                link.download = 'SANJYAY-KUMAR-Resume'; // Set the file name
                                link.click();
                            }}
                        >
                            <span className="z-10 text-black hover:text-white ">Download CV</span>
                            <span className="absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-in-out transform translate-x-full bg-red-700 group-hover:translate-x-0"></span>
                        </button>
                    </div>
                </div>
                <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
                    <div className="relative overflow-hidden rounded-lg">
                        <img
                            className="object-cover object-center w-full h-full"
                            alt="hero"
                            src={hack}
                        />
                        <div className="absolute inset-0 shadow-orange"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
