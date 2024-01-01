import React from 'react';

const About = () => {
  return (
    <section id="About" className="flex items-center w-full h-full bg-cover bg-center mt-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-gray-400 mb-2">Hello, I am</p>
          <h1 className="text-4xl md:text-6xl font-bold">Nischal Gautam</h1>
          <p className="text-sm text-gray-500">I am an aspiring software developer and currently a student.</p>
        </div>
        <div className="hidden md:block">
          {/* Add your image here */}
          <img src="/your-image.jpg" alt="Your Image" className="w-32 h-32 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default About;
