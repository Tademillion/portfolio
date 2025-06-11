import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaTrophy, FaLightbulb, FaHeart } from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // const skills = [
  //   { name: "HTML & CSS", level: "90%" },
  //   { name: "JavaScript", level: "80%" },
  //   { name: "TypeScript", level: "70%" },

  //   { name: "React", level: "85%" },
  //   { name: "Node.js", level: "60%" },
  //   { name: "Express.js", level: "60%" },
  //   { name: ".NET Core and Web Frameworks", level: "75%" },
  //   { name: "SQL", level: "70%" },
  //   { name: "MongoDB", level: "50%" },
  //   { name: "Git & GitHub", level: "80%" },
  // ];

  const achievements = [
    {
      icon: <FaTrophy className="text-3xl" />,
      title: "Awards & Recognition",
      items: [
        "lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Innovation & Impact",
      items: [
        "lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Community & Leadership",
      items: [
        "lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
  ];

  return (
    <div id="about" className="w-full min-h-screen bg-primary text-textPrimary">
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-secondary mb-8">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-left"
            >
              <p className="text-textSecondary mb-4">
                I'm a passionate Full Stack Developer with a keen eye for
                creating elegant solutions to complex problems. With over 1.5
                years of experience in web development, I've worked on projects
                ranging from small business websites to large-scale enterprise
                applications.
              </p>
              <p className="text-textSecondary mb-4">
                My journey in tech started with a curiosity about how things
                work on the web, which led me to dive deep into both frontend
                and backend development. I believe in writing clean,
                maintainable code and staying up-to-date with the latest
                technologies and best practices.
              </p>
              <p className="text-textSecondary">
                When I'm not coding, you can find me exploring new technologies.
                I'm always excited to take on new challenges and learn from
                every experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-tertiary p-8 rounded-lg shadow-xl"
            >
              <h3 className="text-2xl font-bold text-secondary mb-6">
                Quick Facts
              </h3>
              <ul className="space-y-4 text-left">
                <li className="flex items-center gap-3">
                  <span className="text-secondary">📍</span>
                  <span>Based in Addis Ababa, Ethiopia</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary">🎓</span>
                  <span>Bacelor degree in Computer Science</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary">💼</span>
                  <span>1.5+ Years of Experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary">🌐</span>
                  <span>Worked with many Clients</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary">🚀</span>
                  <span>Launched many Projects</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-tertiary p-6 rounded-lg shadow-xl"
              >
                <div className="text-secondary mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-4">
                  {achievement.title}
                </h3>
                <ul className="space-y-2 text-left">
                  {achievement.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-textSecondary flex items-start gap-2"
                    >
                      <span className="text-secondary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
