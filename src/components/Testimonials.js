import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "John Smith",
      position: "Senior Developer at TechCorp",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "Working with Tade was an absolute pleasure. His attention to detail and problem-solving skills are exceptional. He consistently delivered high-quality code and was always willing to help team members.",
    },
    {
      name: "Sarah Johnson",
      position: "Project Manager at InnovateX",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "Tade's technical expertise and communication skills made him an invaluable asset to our team. He not only delivered excellent work but also helped improve our development processes.",
    },
    {
      name: "Michael Chen",
      position: "CTO at StartupHub",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "I was impressed by Tade's ability to quickly adapt to new technologies and his commitment to writing clean, maintainable code. He's a true professional who goes above and beyond.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div id="testimonials" className="w-full min-h-screen bg-primary text-textPrimary">
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-secondary mb-8">Client Testimonials</h2>
          
          <div className="relative max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-tertiary p-8 rounded-lg shadow-xl"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <FaQuoteLeft className="text-secondary text-4xl mb-4" />
                  <p className="text-lg text-textSecondary mb-6">
                    {testimonials[currentTestimonial].text}
                  </p>
                  <h3 className="text-xl font-bold text-secondary">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-textSecondary">
                    {testimonials[currentTestimonial].position}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 bg-tertiary text-textPrimary rounded-full hover:bg-secondary/20 transition-colors duration-300"
              >
                <FaChevronLeft />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentTestimonial ? 'bg-secondary' : 'bg-secondary/30'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 bg-tertiary text-textPrimary rounded-full hover:bg-secondary/20 transition-colors duration-300"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials; 