import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  const slideRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      id: 1,
      name: 'Alica Walker',
      role: 'CEO, TechCorp',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'Working with this developer was an absolute pleasure. They delivered our project ahead of schedule and exceeded all our expectations. The attention to detail and thoughtful approach to UX made all the difference in our product launch.',
    },
    {
      id: 2,
      name: 'Michael Johnson',
      role: 'Product Manager, InnovateX',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'I was impressed by the technical expertise and problem-solving skills. Our complex web application was developed with clean code and intuitive design. Communication was clear throughout the project, making collaboration seamless.',
    },
    {
      id: 3,
      name: 'Sarah Chen',
      role: 'Founder, DesignLab',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'The redesign of our platform transformed our user engagement. The developer brought both technical skill and design sensibility to the project, resulting in a product that not only functions flawlessly but looks beautiful as well.',
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isInView) {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isInView, testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900 transition-colors overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-blue-600 dark:text-blue-400">Testimonials</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Don't just take my word for it — here's what friends and colleagues have to say about working with me.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            className={`transform transition-all duration-1000 delay-300 ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 text-blue-200 dark:text-blue-900 opacity-80">
              <Quote size={80} />
            </div>
            
            {/* Testimonials Slider */}
            <div 
              ref={slideRef}
              className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl p-8 md:p-12"
            >
              <div 
                className="transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                <div className="flex w-full">
                  {testimonials.map((testimonial) => (
                    <div 
                      key={testimonial.id} 
                      className="min-w-full px-4"
                    >
                      <div className="flex flex-col h-full">
                        <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-8">
                          "{testimonial.content}"
                        </blockquote>
                        
                        <div className="mt-auto flex items-center">
                          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg">{testimonial.name}</h4>
                            <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
              <button 
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 pointer-events-auto transition-all"
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 pointer-events-auto transition-all"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;