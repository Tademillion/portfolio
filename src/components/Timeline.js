import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBriefcase, FaGraduationCap, FaAward } from "react-icons/fa";

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineItems = [
    // {
    //   type: 'work',
    //   title: 'Senior Full Stack Developer',
    //   company: 'TechCorp Solutions',
    //   period: '2023 - Present',
    //   description: 'Leading the development of enterprise-level applications using React, Node.js, and MongoDB. Implemented CI/CD pipelines and improved application performance by 40%.',
    //   icon: <FaBriefcase />,
    // },
    // {
    //   type: 'education',
    //   title: 'Master of Computer Science',
    //   institution: 'lo',
    //   period: '2021 - 2023',
    //   description: 'Specialized in Software Engineering and Artificial Intelligence. Graduated with honors and completed a thesis on Machine Learning applications in Web Development.',
    //   icon: <FaGraduationCap />,
    // },
    {
      type: "work",
      title: "Full Stack Developer",
      company: "Amhara Bank",
      period: "2020 - 2023",
      description:
        "ERP System Focused on Problem Solvoing System Like Human Resource Management System and Stock Management System",
      icon: <FaBriefcase />,
    },
    {
      type: "award",
      title: "Award",
      institution: "Comapany X",
      period: "2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      icon: <FaAward />,
    },
    {
      type: "education",
      title: "Bachelor of Computer Science",
      institution: "Mekdela Amba University",
      period: "2019 - 2023",
      description:
        "Focused on Software Development and Database Management. Participated in multiple hackathons and coding competitions.",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <div
      id="timeline"
      className="w-full min-h-screen bg-primary text-textPrimary"
    >
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-secondary mb-8">
            Professional Journey
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-secondary/30" />

            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center z-10">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-12 text-right" : "pl-12"
                    }`}
                  >
                    <div className="bg-tertiary p-6 rounded-lg shadow-xl">
                      <h3 className="text-xl font-bold text-secondary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-textSecondary mb-2">
                        {item.company || item.institution}
                      </p>
                      <p className="text-secondary mb-4">{item.period}</p>
                      <p className="text-textSecondary">{item.description}</p>
                    </div>
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

export default Timeline;
