import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React', level: '90%' },
    { name: 'JavaScript', level: '85%' },
    { name: 'Node.js', level: '80%' },
    { name: '.NET Core', level: '75%' },
    { name: 'SQL', level: '85%' },
    { name: 'MongoDB', level: '80%' },
  ];

  return (
    <div id='about' className='w-full min-h-screen bg-primary text-textPrimary'>
      <div className='max-w-[1200px] mx-auto px-8 py-16'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className='text-center'
        >
          <h2 className='text-4xl font-bold text-secondary mb-8'>About Me</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-4'>
              <p className='text-textSecondary'>
                I am a passionate Full Stack Developer with expertise in both front-end and back-end technologies.
                My journey in web development has equipped me with a strong foundation in modern frameworks and
                best practices.
              </p>
              <p className='text-textSecondary'>
                I specialize in creating responsive, user-friendly applications using React for the front-end,
                and Node.js and .NET Core for the back-end. My experience with various databases, including
                SQL and MongoDB, allows me to design efficient and scalable solutions.
              </p>
              <p className='text-textSecondary'>
                I am constantly learning and adapting to new technologies to deliver the best possible solutions
                for my clients and employers.
              </p>
            </div>
            <div className='space-y-4'>
              <h3 className='text-2xl font-bold text-secondary'>Skills</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className='flex justify-between mb-1'>
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className='w-full bg-tertiary rounded-full h-2.5'>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: skill.level } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className='bg-secondary h-2.5 rounded-full'
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 