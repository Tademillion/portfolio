import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaServer, FaDatabase, FaCode, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with real-time inventory management, user authentication, and payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: {
        frontend: ['React', 'Redux', 'Tailwind CSS', 'Material-UI'],
        backend: ['Node.js', 'Express.js', 'RESTful APIs'],
        database: ['MongoDB', 'Mongoose'],
        features: ['User Authentication', 'Payment Integration', 'Real-time Updates', 'Admin Dashboard']
      },
      github: 'https://github.com/yourusername/project1',
      live: 'https://project1.com',
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: {
        frontend: ['React', 'Context API', 'Styled Components'],
        backend: ['.NET Core', 'SignalR'],
        database: ['SQL Server', 'Entity Framework'],
        features: ['Real-time Collaboration', 'Task Assignment', 'Progress Tracking', 'Team Management']
      },
      github: 'https://github.com/yourusername/project2',
      live: 'https://project2.com',
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media analytics dashboard with data visualization and reporting features.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80',
      technologies: {
        frontend: ['React', 'Chart.js', 'Tailwind CSS'],
        backend: ['Node.js', 'Express.js'],
        database: ['MongoDB', 'Redis'],
        features: ['Data Visualization', 'Real-time Analytics', 'Custom Reports', 'API Integration']
      },
      github: 'https://github.com/yourusername/project3',
      live: 'https://project3.com',
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProject = () => {
    setDirection(1);
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div id='projects' className='w-full min-h-screen bg-primary text-textPrimary'>
      <div className='max-w-[1200px] mx-auto px-8 py-16'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className='text-center'
        >
          <h2 className='text-4xl font-bold text-secondary mb-8'>Featured Projects</h2>
          
          <div className='relative'>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentProject}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className='bg-tertiary rounded-lg p-6 shadow-xl'
              >
                <div className='grid md:grid-cols-2 gap-8'>
                  <div className='relative h-64 rounded-lg overflow-hidden group'>
                    <img
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                      className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  </div>
                  <div className='space-y-4'>
                    <h3 className='text-2xl font-bold text-secondary'>{projects[currentProject].title}</h3>
                    <p className='text-textSecondary'>{projects[currentProject].description}</p>
                    
                    <div className='space-y-4'>
                      <div>
                        <h4 className='text-lg font-semibold text-secondary flex items-center gap-2'>
                          <FaCode /> Frontend
                        </h4>
                        <div className='flex flex-wrap gap-2 mt-2'>
                          {projects[currentProject].technologies.frontend.map((tech) => (
                            <span key={tech} className='px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm hover:bg-secondary/30 transition-colors duration-300'>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className='text-lg font-semibold text-secondary flex items-center gap-2'>
                          <FaServer /> Backend
                        </h4>
                        <div className='flex flex-wrap gap-2 mt-2'>
                          {projects[currentProject].technologies.backend.map((tech) => (
                            <span key={tech} className='px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm hover:bg-secondary/30 transition-colors duration-300'>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className='text-lg font-semibold text-secondary flex items-center gap-2'>
                          <FaDatabase /> Database
                        </h4>
                        <div className='flex flex-wrap gap-2 mt-2'>
                          {projects[currentProject].technologies.database.map((tech) => (
                            <span key={tech} className='px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm hover:bg-secondary/30 transition-colors duration-300'>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className='text-lg font-semibold text-secondary'>Key Features</h4>
                        <ul className='list-disc list-inside text-textSecondary mt-2 space-y-1'>
                          {projects[currentProject].technologies.features.map((feature) => (
                            <li key={feature} className='hover:text-secondary transition-colors duration-300'>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className='flex gap-4 pt-4'>
                      <a
                        href={projects[currentProject].github}
                        target='_blank'
                        rel='noreferrer'
                        className='flex items-center gap-2 text-textPrimary hover:text-secondary transition-colors duration-300'
                      >
                        <FaGithub /> View Code
                      </a>
                      <a
                        href={projects[currentProject].live}
                        target='_blank'
                        rel='noreferrer'
                        className='flex items-center gap-2 text-textPrimary hover:text-secondary transition-colors duration-300'
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className='flex justify-center gap-4 mt-8'>
              <button
                onClick={prevProject}
                className='p-3 bg-tertiary text-textPrimary rounded-full hover:bg-secondary/20 transition-colors duration-300'
                aria-label="Previous project"
              >
                <FaChevronLeft />
              </button>
              <div className='flex items-center gap-2'>
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentProject ? 1 : -1);
                      setCurrentProject(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentProject ? 'bg-secondary' : 'bg-secondary/30'
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextProject}
                className='p-3 bg-tertiary text-textPrimary rounded-full hover:bg-secondary/20 transition-colors duration-300'
                aria-label="Next project"
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

export default Projects; 