import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { throttle } from "lodash";

export default function Navbar() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [reachedProjectSection, setReachedProjectSection] = useState(false);
    const [isTilted, setIsTilted] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu

    useEffect(() => {
        const handleScroll = throttle(() => {
            const position = window.scrollY;
            setScrollPosition(position);

            const projectSection = document.getElementById("projects");
            if (projectSection) {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const offsetTop = projectSection.offsetTop;
                setReachedProjectSection(scrollTop >= offsetTop);
            }

            setIsTilted(position === 0);
        }, 100);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getIconColor = () => {
        return scrollPosition > 0 ? 'white' : 'black';
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`fixed top-0 z-50 w-full ${reachedProjectSection ? 'bg-black' : scrollPosition > 0 ? 'bg-orange-500' : 'bg-gray-200'} text-white backdrop-filter backdrop-blur-lg transition-all duration-500`}>
            <div className="container flex flex-wrap items-center justify-between p-5 mx-auto md:flex-row">
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`font-bold italic ${reachedProjectSection || scrollPosition > 0 ? 'text-white' : 'text-black'} md:mb-0`}
                    style={{ transform: isTilted ? 'rotate(-9deg)' : 'rotate(0deg)', transition: 'transform 0.5s ease' }}
                    role="button"
                    tabIndex={0}
                >
                    SANJAY KUMAR
                </Link>
                <div className="block md:hidden">
                    <button onClick={toggleMobileMenu} className="flex items-center px-3 py-2 text-black border rounded hover:text-white hover:border-white">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <nav className={`w-full ${isMobileMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:w-auto`}>
                    <div className="text-base md:flex-grow">
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={`block mt-4 md:inline-block md:mt-0 mr-5 cursor-pointer hover:text-green-500 ${reachedProjectSection || scrollPosition > 0 ? 'text-white' : 'text-black'}`}
                            role="button"
                            tabIndex={0}
                        >
                            Projects
                        </Link>
                        <Link
                            to="skills"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={`block mt-4 md:inline-block md:mt-0 mr-5 cursor-pointer hover:text-green-500 ${reachedProjectSection || scrollPosition > 0 ? 'text-white' : 'text-black'}`}
                            role="button"
                            tabIndex={0}
                        >
                            Skills
                        </Link>
                        <Link
                            to="education"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={`block mt-4 md:inline-block md:mt-0 mr-5 cursor-pointer hover:text-green-500 ${reachedProjectSection || scrollPosition > 0 ? 'text-white' : 'text-black'}`}
                            role="button"
                            tabIndex={0}
                        >
                            Education
                        </Link>
                    </div>
                    <div className="flex items-center mt-4 md:mt-0">
                        <a
                            href="https://www.instagram.com/Sanjay.o_0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative mr-8 icon-wrapper"
                            aria-label="Instagram"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 16 16"
                                fill={getIconColor()}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M8.00269 3.8916C5.73406 3.8916 3.89743 5.73024 3.89743 7.99686C3.89743 10.2655 5.73606 12.1021 8.00269 12.1021C10.2713 12.1021 12.108 10.2635 12.108 7.99686C12.108 5.72824 10.2693 3.8916 8.00269 3.8916V3.8916ZM8.00269 10.6615C6.53005 10.6615 5.33807 9.46884 5.33807 7.99686C5.33807 6.52489 6.53072 5.33224 8.00269 5.33224C9.47467 5.33224 10.6673 6.52489 10.6673 7.99686C10.668 9.46884 9.47533 10.6615 8.00269 10.6615V10.6615Z" />
                                <path d="M11.2986 0.0502569C9.82665 -0.0184086 6.18071 -0.0150753 4.7074 0.0502569C3.41276 0.110922 2.27078 0.423584 1.35013 1.34423C-0.188512 2.88287 0.00815137 4.95617 0.00815137 7.99678C0.00815137 11.1087 -0.165179 13.134 1.35013 14.6493C2.89477 16.1933 4.99806 15.9913 8.00268 15.9913C11.0853 15.9913 12.1493 15.9933 13.2393 15.5713C14.7212 14.996 15.8399 13.6714 15.9492 11.2921C16.0185 9.81942 16.0145 6.17415 15.9492 4.70084C15.8172 1.89222 14.3099 0.188921 11.2986 0.0502569V0.0502569ZM13.6286 13.6314C12.6199 14.64 11.2206 14.55 7.98335 14.55C4.65007 14.55 3.31343 14.5993 2.33811 13.6214C1.2148 12.5034 1.41813 10.7081 1.41813 7.98612C1.41813 4.30285 1.04013 1.65023 4.73674 1.4609C5.58605 1.4309 5.83605 1.4209 7.97401 1.4209L8.00401 1.4409C11.5566 1.4409 14.3439 1.06891 14.5112 4.76484C14.5492 5.60816 14.5579 5.86149 14.5579 7.99612C14.5572 11.2907 14.6199 12.6354 13.6286 13.6314V13.6314Z" />
                                <path d="M12.2706 4.6889C12.8004 4.6889 13.2299 4.2594 13.2299 3.72958C13.2299 3.19976 12.8004 2.77026 12.2706 2.77026C11.7408 2.77026 11.3113 3.19976 11.3113 3.72958C11.3113 4.2594 11.7408 4.6889 12.2706 4.6889Z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sanjay-kumar-9639a6257"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative mr-8 icon-wrapper"
                            aria-label="LinkedIn"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 16 16"
                                fill={getIconColor()}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M15.996 16V15.9993H16V10.1313C16 7.26065 15.382 5.04932 12.026 5.04932C10.4127 5.04932 9.33 5.93465 8.888 6.77398H8.84133V5.31732H5.65933V15.9993H8.97267V10.6106C8.97267 9.24798 9.22533 7.92465 10.9327 7.92465C12.6173 7.92465 12.6433 9.43998 12.6433 10.6946V16H15.996Z" />
                                <path d="M0.266666 5.31732H3.58667V15.9993H0.266666V5.31732Z" />
                                <path d="M1.92667 0C0.864002 0 0 0.864 0 1.92667C0 2.98933 0.864002 3.85333 1.92667 3.85333C2.98933 3.85333 3.85333 2.98933 3.85333 1.92667C3.85333 0.864 2.98933 0 1.92667 0V0Z" />
                            </svg>
                        </a>
                    </div>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className={`block mt-4 md:mt-0 inline-flex items-center px-3 py-1 text-base border-0 rounded cursor-pointer focus:outline-none ${reachedProjectSection || scrollPosition > 0 ? 'text-black bg-white hover:bg-gray-300' : 'text-white bg-red-700 hover:bg-red-500'}`}
                        role="button"
                        tabIndex={0}
                    >
                        Hire Me
                    </Link>
                </nav>
            </div>
        </header>
    );
}
