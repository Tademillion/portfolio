import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaTelegram } from "react-icons/fa";
import my_image from "../../src/images/my_image.png"; // Adjust the path as necessary

const Hero = () => {
  return (
    <div id="home" className="w-full min-h-screen bg-primary text-textPrimary">
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-3 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 col-span-2"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm <span className="text-secondary">Tade Million</span>
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
                href="https://github.com/Tademillion"
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
                href="https://t.me/AsresuM"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-textPrimary hover:text-secondary transition-colors duration-300"
              >
                <FaTelegram />
              </a>
            </div>

            {/* New World Map Section */}
            <div className="relative w-full h-[400px] mt-8">
              {/* Circular World Map Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-secondary/80"
                >
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                    alt="World Map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />

                  {/* Build World Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="text-center"
                    >
                      <motion.h3
                        className="text-5xl font-extrabold mb-2"
                        initial={{ opacity: 1 }}
                        style={{
                          background:
                            "linear-gradient(45deg, #00c6ff, #0072ff)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          filter: "drop-shadow(0 0 2px rgba(0,198,255,0.5))",
                        }}
                        animate={{
                          textShadow: [
                            "0 0 7px #00c6ff",
                            "0 0 10px #00c6ff",
                            "0 0 21px #00c6ff",
                            "0 0 42px #00c6ff",
                            "0 0 82px #00c6ff",
                            "0 0 92px #00c6ff",
                            "0 0 102px #00c6ff",
                            "0 0 151px #00c6ff",
                          ],
                          scale: [1, 1.05, 1],
                          rotate: [0, 1, 0, -1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          repeatDelay: 4,
                        }}
                      >
                        Build
                      </motion.h3>
                      <motion.p
                        className="text-3xl font-bold mb-2"
                        initial={{ opacity: 1 }}
                        style={{
                          background:
                            "linear-gradient(45deg, #ffd700, #ffa500)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                        animate={{
                          rotate: [0, 5, 0, -5, 0],
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        &&
                      </motion.p>
                      <motion.i
                        className="text-4xl font-bold block mb-2"
                        initial={{ opacity: 1 }}
                        style={{
                          background:
                            "linear-gradient(45deg, #00ff87, #60efff)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          filter: "drop-shadow(0 0 2px rgba(0,255,135,0.5))",
                        }}
                        animate={{
                          textShadow: [
                            "0 0 7px #00ff87",
                            "0 0 10px #00ff87",
                            "0 0 21px #00ff87",
                            "0 0 42px #00ff87",
                            "0 0 82px #00ff87",
                            "0 0 92px #00ff87",
                            "0 0 102px #00ff87",
                            "0 0 151px #00ff87",
                          ],
                          y: [0, -5, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          repeatDelay: 4,
                          delay: 2,
                        }}
                      >
                        Connect
                      </motion.i>
                      <motion.h3
                        className="text-6xl font-black"
                        initial={{ opacity: 1 }}
                        style={{
                          background:
                            "linear-gradient(45deg, #FF3CAC, #784BA0, #2B86C5)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          filter: "drop-shadow(0 0 2px rgba(255,60,172,0.5))",
                        }}
                        animate={{
                          textShadow: [
                            "0 0 7px #FF3CAC",
                            "0 0 10px #FF3CAC",
                            "0 0 21px #FF3CAC",
                            "0 0 42px #FF3CAC",
                            "0 0 82px #FF3CAC",
                            "0 0 92px #FF3CAC",
                            "0 0 102px #FF3CAC",
                            "0 0 151px #FF3CAC",
                          ],
                          scale: [1, 1.1, 1],
                          rotate: [0, 2, 0, -2, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          repeatDelay: 4,
                          delay: 4,
                        }}
                      >
                        World
                      </motion.h3>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Animated Programming Language Icons */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-[500px] h-[500px]"
                >
                  {/* React */}
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 bg-tertiary p-3 rounded-lg shadow-lg"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      alt="React"
                      className="w-8 h-8"
                    />
                  </motion.div>

                  {/* Node.js */}
                  <motion.div
                    animate={{
                      y: [0, 20, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-tertiary p-3 rounded-lg shadow-lg"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                      alt="Node.js"
                      className="w-8 h-8"
                    />
                  </motion.div>

                  {/* TypeScript */}
                  <motion.div
                    animate={{
                      x: [0, 20, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                    className="absolute top-1/2 right-0 -translate-y-1/2 bg-tertiary p-3 rounded-lg shadow-lg"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                      alt="TypeScript"
                      className="w-8 h-8"
                    />
                  </motion.div>

                  {/* SQL */}
                  <motion.div
                    animate={{
                      x: [0, -20, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.7,
                    }}
                    className="absolute top-1/2 left-0 -translate-y-1/2 bg-tertiary p-3 rounded-lg shadow-lg"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
                      alt="SQL"
                      className="w-8 h-8"
                    />
                  </motion.div>

                  {/* .NET Core */}
                  <motion.div
                    animate={{
                      x: [0, 15, 0],
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                    className="absolute top-[15%] right-[15%] bg-tertiary p-3 rounded-lg shadow-lg"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
                      alt=".NET Core"
                      className="w-8 h-8"
                    />
                  </motion.div>

                  {/* MongoDB */}
                  <motion.div
                    animate={{
                      x: [0, -15, 0],
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4,
                    }}
                    className="absolute top-[15%] left-[15%] bg-tertiary p-3 rounded-lg shadow-lg"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                      alt="MongoDB"
                      className="w-8 h-8"
                    />
                  </motion.div>

                  {/* JavaScript */}
                  <motion.div
                    animate={{
                      x: [0, 15, 0],
                      y: [0, 15, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.6,
                    }}
                    className="absolute bottom-[15%] right-[15%] bg-tertiary p-3 rounded-lg shadow-lg"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      alt="JavaScript"
                      className="w-8 h-8"
                    />
                  </motion.div>

                  {/* HTML5 */}
                  <motion.div
                    animate={{
                      x: [0, -15, 0],
                      y: [0, 15, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8,
                    }}
                    className="absolute bottom-[15%] left-[15%] bg-tertiary p-3 rounded-lg shadow-lg"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                      alt="HTML5"
                      className="w-8 h-8"
                    />
                  </motion.div>

                  {/* CSS3 */}
                  <motion.div
                    animate={{
                      x: [0, 10, 0],
                      y: [0, 10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.9,
                    }}
                    className="absolute bottom-[30%] right-[30%] bg-tertiary p-3 rounded-lg shadow-lg"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                      alt="CSS3"
                      className="w-8 h-8"
                    />
                  </motion.div>

                  {/* Docker */}
                  <motion.div
                    animate={{
                      x: [0, -10, 0],
                      y: [0, 10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.0,
                    }}
                    className="absolute bottom-[30%] left-[30%] bg-tertiary p-3 rounded-lg shadow-lg"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                      alt="Docker"
                      className="w-8 h-8"
                    />
                  </motion.div>

                  {/* GitHub */}
                  <motion.div
                    animate={{
                      x: [0, 10, 0],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.1,
                    }}
                    className="absolute top-[30%] right-[30%] bg-tertiary p-3 rounded-lg shadow-lg"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                      alt="GitHub"
                      className="w-8 h-8"
                      style={{ filter: "invert(1)" }}
                    />
                  </motion.div>

                  {/* Express.js */}
                  <motion.div
                    animate={{
                      x: [0, -10, 0],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.2,
                    }}
                    className="absolute top-[30%] left-[30%] bg-tertiary p-3 rounded-lg shadow-lg"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                      alt="Express.js"
                      className="w-8 h-8"
                      style={{ filter: "invert(1)" }}
                    />
                  </motion.div>

                  {/* Connecting Lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    style={{ transform: "rotate(-90deg)" }}
                  >
                    <motion.circle
                      cx="250"
                      cy="250"
                      r="230"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#4F46E5" />
                        <stop offset="100%" stopColor="#7C3AED" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: -50 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
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
              className="absolute top-10 -left-4 bg-tertiary p-3 rounded-lg shadow-lg 1"
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
              className="absolute bottom-10  -right-4 bg-tertiary p-3 rounded-lg shadow-lg"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                className="w-8 h-8"
              />
            </motion.div>

            <motion.div
              animate={{
                x: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-10 -left-4 bg-tertiary p-3 rounded-lg shadow-lg"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
                alt="SQL"
                className="w-8 h-8"
              />
            </motion.div>

            <motion.div
              animate={{
                x: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-10 -right-4 bg-tertiary p-3 rounded-lg shadow-lg"
            >
              <div className="bg-blue-500 rounded-md">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
                  alt="DotNet"
                  className="w-8 h-8"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
