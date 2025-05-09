import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import croppedImage from '../images/cropped_image.jpeg';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transform transition-all duration-1000 ${
              isInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="relative">
            <div className="w-full h-[480px] rounded-2xl overflow-hidden relative">
              <img 
                src={croppedImage} // Use the imported image
                alt="Professional portrait" 
                className="w-full h-full object-cover object-center"
              />
            </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 md:w-64 md:h-64 bg-blue-50 dark:bg-blue-900/20 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-teal-50 dark:bg-teal-900/20 rounded-xl -z-10"></div>
            </div>
          </div>
          
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-blue-600 dark:text-blue-400">Me</span>
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate software developer with a knack for creating beautiful and functional web applications. With a background in computer and information science and a love for design, I strive to bridge the gap between technology and user experience. 
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I specialize in front-end development, with expertise in React, TypeScript, and modern CSS frameworks. I'm dedicated to writing clean, maintainable code and creating intuitive interfaces that solve real problems. When I'm not coding, you can find me exploring new design trends, contributing to open source, or enjoying outdoor photography.
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Education</h3>
                <ul className="space-y-2">
                  <li className="text-gray-700 dark:text-gray-300">B.E in Information Science, BMSIT&M</li>
                  <li className="text-gray-700 dark:text-gray-300">MERN Stack </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;