import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaDatabase, FaServer, FaTools } from 'react-icons/fa';
import { SiDotnet, SiMongodb, SiMysql, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FaReact className="text-4xl text-secondary" />,
      skills: [
        { name: 'React', icon: <FaReact />, description: 'Building modern, responsive UIs with React and its ecosystem' },
        { name: 'JavaScript', icon: <SiJavascript />, description: 'Advanced JavaScript concepts and modern ES6+ features' },
        { name: 'HTML5', icon: <SiHtml5 />, description: 'Semantic HTML and accessibility best practices' },
        { name: 'CSS3', icon: <SiCss3 />, description: 'Modern CSS with Flexbox, Grid, and animations' },
      ]
    },
    {
      title: 'Backend Development',
      icon: <FaServer className="text-4xl text-secondary" />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, description: 'Building scalable server-side applications' },
        { name: '.NET Core', icon: <SiDotnet />, description: 'Enterprise-level applications with C# and .NET' },
        { name: 'Express.js', icon: <FaNodeJs />, description: 'RESTful APIs and middleware development' },
        { name: 'RESTful APIs', icon: <FaServer />, description: 'Designing and implementing RESTful services' },
      ]
    },
    {
      title: 'Database Management',
      icon: <FaDatabase className="text-4xl text-secondary" />,
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, description: 'NoSQL database design and optimization' },
        { name: 'SQL', icon: <SiMysql />, description: 'Relational database design and complex queries' },
        { name: 'Mongoose', icon: <SiMongodb />, description: 'MongoDB ODM and data modeling' },
        { name: 'Database Design', icon: <FaDatabase />, description: 'Database architecture and optimization' },
      ]
    },
    {
      title: 'Development Tools',
      icon: <FaTools className="text-4xl text-secondary" />,
      skills: [
        { name: 'Git & GitHub', icon: <FaTools />, description: 'Version control and collaborative development' },
        { name: 'Docker', icon: <FaTools />, description: 'Containerization and deployment' },
        { name: 'CI/CD', icon: <FaTools />, description: 'Continuous Integration and Deployment pipelines' },
        { name: 'Testing', icon: <FaTools />, description: 'Unit testing and integration testing' },
      ]
    }
  ];

  return (
    <div id='skills' className='w-full min-h-screen bg-primary text-textPrimary'>
      <div className='max-w-[1200px] mx-auto px-8 py-16'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className='text-center'
        >
          <h2 className='text-4xl font-bold text-secondary mb-8'>Technical Skills</h2>
          
          <div className='grid md:grid-cols-2 gap-8'>
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-tertiary p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300'
              >
                <div className='flex items-center gap-4 mb-6'>
                  {category.icon}
                  <h3 className='text-2xl font-bold text-secondary'>{category.title}</h3>
                </div>
                <div className='space-y-6'>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.1) }}
                      className='group hover:bg-secondary/10 p-4 rounded-lg transition-colors duration-300'
                    >
                      <div className='flex items-start gap-4'>
                        <div className='text-2xl text-secondary group-hover:scale-110 transition-transform duration-300'>
                          {skill.icon}
                        </div>
                        <div>
                          <h4 className='text-lg font-semibold text-secondary'>{skill.name}</h4>
                          <p className='text-textSecondary mt-1'>{skill.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 