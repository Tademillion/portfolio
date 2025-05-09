import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = {
    'Frontend Development': [
      { name: 'React', level: 90 },
      { name: 'JavaScript/TypeScript', level: 85 },
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Redux/Context API', level: 85 },
    ],
    'Backend Development': [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'GraphQL', level: 75 },
      { name: '.NET Core', level: 80 },
    ],
    'Database & Cloud': [
      { name: 'MongoDB', level: 85 },
      { name: 'SQL/PostgreSQL', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Docker', level: 70 },
      { name: 'CI/CD', level: 75 },
    ],
    'Soft Skills': [
      { name: 'Problem Solving', level: 95 },
      { name: 'Team Collaboration', level: 90 },
      { name: 'Communication', level: 90 },
      { name: 'Time Management', level: 85 },
      { name: 'Agile/Scrum', level: 85 },
    ],
  };

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
          <h2 className="text-4xl font-bold text-secondary mb-8">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-tertiary p-6 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold text-secondary mb-6">{category}</h3>
                <div className="space-y-4">
                  {skillList.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-textPrimary">{skill.name}</span>
                        <span className="text-secondary">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-tertiary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-secondary to-purple-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-secondary mb-6">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Git/GitHub', 'Jest', 'React Testing Library', 'Webpack',
                'Next.js', 'Material-UI', 'Styled Components', 'SASS',
                'Mongoose', 'TypeORM', 'Redis', 'WebSocket',
                'JWT', 'OAuth', 'REST', 'GraphQL',
                'Responsive Design', 'Cross-browser Compatibility', 'Performance Optimization',
                'SEO', 'Accessibility', 'Security Best Practices'
              ].map((skill) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3 }}
                  className="px-4 py-2 bg-tertiary text-textPrimary rounded-full hover:bg-secondary/20 transition-colors duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 