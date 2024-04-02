"use client"
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 4 && window.pageYOffset < sectionTop + sectionHeight - sectionHeight / 3) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="bg-white border-gray-200 dark:bg-black  w-screen top-0 px-5 z-[1000]  opacity-80 fixed">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nischal Gautam</span>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta ">
          <ul className="flex flex-col  font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
            <li>
              <a
                href="#about"
                className={`block py-2 px-3 md:p-0 text-white  rounded md:bg-transparent  ${activeLink === 'about' ? 'active' : ''}`}
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Skills"
                className={`block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${activeLink === 'Skills' ? 'active' : ''}`}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#project-section"
                className={`block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${activeLink === 'project-section' ? 'active' : ''}`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#Contact-section"
                className={`block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${activeLink === 'Contact-section' ? 'active' : ''}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
