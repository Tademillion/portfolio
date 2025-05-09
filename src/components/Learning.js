import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBook, FaCode, FaLaptopCode } from 'react-icons/fa';

const Learning = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const learningItems = [
    {
      title: "Advanced TypeScript",
      description: "Mastering advanced TypeScript concepts including generics, decorators, and type manipulation.",
      progress: 75,
      icon: <FaCode className="text-3xl" />,
    },
    {
      title: "Machine Learning with Python",
      description: "Learning ML fundamentals and implementing practical projects using TensorFlow and PyTorch.",
      progress: 60,
      icon: <FaLaptopCode className="text-3xl" />,
    },
    {
      title: "System Design",
      description: "Studying scalable architecture patterns and distributed systems design principles.",
      progress: 45,
      icon: <FaBook className="text-3xl" />,
    },
  ];

  return (
    <div id="learning" className="w-full min-h-screen bg-primary text-textPrimary">
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-secondary mb-8">Currently Learning</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-tertiary p-6 rounded-lg shadow-xl"
              >
                <div className="text-secondary mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {item.title}
                </h3>
                <p className="text-textSecondary mb-4">
                  {item.description}
                </p>
                <div className="w-full bg-secondary/20 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.progress}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="bg-secondary h-2.5 rounded-full"
                  />
                </div>
                <p className="text-secondary mt-2 text-right">
                  {item.progress}%
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12"
          >
            <p className="text-textSecondary mb-4">
              Always eager to learn new technologies and improve my skills
            </p>
            <button className="px-8 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/80 transition-colors duration-300">
              View Learning Goals
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Learning; 