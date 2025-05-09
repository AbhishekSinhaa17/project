import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const roles = ['Full Stack Developer', 'Software Developer'];
  const [index, setIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setIsFlipping(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();

      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;

      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el) => {
        const speed = Number((el as HTMLElement).dataset.speed || 1);
        (el as HTMLElement).style.transform = `translate(${x * 20 * speed}px, ${y * 20 * speed}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen relative flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="parallax absolute -top-10 -left-10 w-64 h-64 rounded-full bg-blue-100 dark:bg-blue-900/20 opacity-50 dark:opacity-30 blur-3xl"
          data-speed="0.5"
        ></div>
        <div
          className="parallax absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-teal-100 dark:bg-teal-900/20 opacity-50 dark:opacity-30 blur-3xl"
          data-speed="0.8"
        ></div>
        <div
          className="parallax absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-amber-100 dark:bg-amber-900/20 opacity-50 dark:opacity-30 blur-3xl"
          data-speed="0.6"
        ></div>
      </div>

      <div className="container mx-auto z-10 mt-20 md:mt-0">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="animate-fade-in-up text-4xl md:text-6xl lg:text-7xl font-cursive mb-2 tracking-tight italic uppercase whitespace-nowrap">
            <span className="text-blue-600 dark:text-blue-400">Abhishek</span>
            <span className="text-gray-600 dark:text-gray-400"> Kumar</span>
            <span className="text-teal-600 dark:text-teal-400"> Sinha</span>
          </h1>

          {/* Animated Role with flip effect */}
          <div className="animate-fade-in-up animation-delay-150 text-base md:text-lg text-red-500 dark:text-red-400 font-semibold uppercase tracking-wider mb-6 h-10 flex items-center">
            <span>I’m a&nbsp;</span>
            <span
              className={`inline-block transition-transform duration-500 ${
                isFlipping ? 'rotateX-180' : ''
              }`}
              style={{
                display: 'inline-block',
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                transform: isFlipping ? 'rotateX(180deg)' : 'rotateX(0deg)',
              }}
            >
              {roles[index]}
            </span>
          </div>

          <p className="animate-fade-in-up animation-delay-200 text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
            “Crafting powerful full stack solutions with modern technologies, turning complex challenges into intuitive, high-performing products.”
          </p>

          <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-100"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 dark:border-blue-500 hover:bg-blue-600/10 text-blue-600 dark:text-blue-400 font-medium rounded-full transition-all"
            >
              Get in Touch
            </a>
          </div>

          <div className="animate-fade-in-up animation-delay-600 flex space-x-6 mb-16">
            <a
              href="https://github.com/AbhishekSinhaa17"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhisheksinha17"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/Abhishe85338077"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="animate-bounce absolute bottom-8 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
