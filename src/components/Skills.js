import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaServer, FaMobile } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiPython, SiDocker, SiAws } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaReact className="text-3xl" />,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Redux", level: 85 },
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-3xl" />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "REST APIs", level: 95 },
        { name: "GraphQL", level: 80 },
        { name: "Microservices", level: 85 },
      ]
    },
    {
      title: "Database & Storage",
      icon: <FaDatabase className="text-3xl" />,
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Redis", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "AWS S3", level: 80 },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <FaTools className="text-3xl" />,
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "CI/CD", level: 85 },
        { name: "Git", level: 90 },
        { name: "Linux", level: 85 },
      ]
    },
    {
      title: "Mobile Development",
      icon: <FaMobile className="text-3xl" />,
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 75 },
        { name: "Mobile UI/UX", level: 80 },
        { name: "App Store", level: 75 },
        { name: "Play Store", level: 75 },
      ]
    },
    {
      title: "Additional Skills",
      icon: <FaNodeJs className="text-3xl" />,
      skills: [
        { name: "Testing", level: 85 },
        { name: "Security", level: 80 },
        { name: "Performance", level: 85 },
        { name: "Agile", level: 90 },
        { name: "Documentation", level: 85 },
      ]
    }
  ];

  return (
    <div id="skills" className="w-full min-h-screen bg-primary text-textPrimary">
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-secondary mb-8">Technical Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-tertiary p-6 rounded-lg shadow-xl"
              >
                <div className="text-secondary mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-6">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-textSecondary">{skill.name}</span>
                        <span className="text-secondary">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary/20 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="bg-secondary h-2 rounded-full"
                        />
                      </div>
                    </div>
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