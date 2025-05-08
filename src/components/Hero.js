import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import my_image from "../../src/images/my_image.png"; // Adjust the path as necessary
const Hero = () => {
  return (
    <div id="home" className="w-full min-h-screen bg-primary text-textPrimary">
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm <span className="text-secondary">Your Name</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-textSecondary">
              Full Stack Developer
            </h2>
            <p className="text-textSecondary max-w-lg">
              I build exceptional digital experiences that make an impact.
              Specializing in creating beautiful, functional, and user-centered
              digital solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-textPrimary hover:text-secondary transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-textPrimary hover:text-secondary transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-textPrimary hover:text-secondary transition-colors duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-[400px] mx-auto rounded-lg overflow-hidden group">
              <img
                src={my_image}
                alt="Developer Portrait"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />

            {/* Tech stack floating icons */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 -left-4 bg-tertiary p-3 rounded-lg shadow-lg"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="w-8 h-8"
              />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-10 -right-4 bg-tertiary p-3 rounded-lg shadow-lg"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                className="w-8 h-8"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
