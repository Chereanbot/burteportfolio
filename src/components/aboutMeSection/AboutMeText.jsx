import { Link } from "react-scroll";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaReact, FaCode, FaYoutube, FaGraduationCap, FaLaptopCode, FaBrain, FaRocket } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

const GlowingText = ({ children, color = "cyan" }) => (
  <motion.span
    className={`relative inline-block text-${color}`}
    whileHover={{
      scale: 1.1,
      textShadow: `0 0 8px rgba(var(--${color}-rgb), 0.5)`,
    }}
  >
    {children}
  </motion.span>
);

const TypingText = ({ text, delay = 0 }) => {
  const letters = Array.from(text);
  
  return (
    <div className="inline-flex">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            duration: 0.3,
            delay: delay + i * 0.05,
            type: "spring",
            stiffness: 100,
          }}
          className="inline-block hover:text-orange hover:scale-110 transition-all duration-200"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

const AboutMeText = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [selectedHighlight, setSelectedHighlight] = useState(null);
  const controls = useAnimation();

  const skills = [
    { icon: FaReact, text: "React Development", color: "cyan", description: "Building modern web applications" },
    { icon: FaCode, text: "Frontend Mastery", color: "orange", description: "Creating beautiful user interfaces" },
    { icon: FaYoutube, text: "Content Creation", color: "red-500", description: "Sharing knowledge through videos" },
    { icon: FaGraduationCap, text: "Teaching", color: "green-500", description: "Guiding future developers" },
    { icon: FaLaptopCode, text: "Full Stack", color: "purple-500", description: "End-to-end development" },
    { icon: FaBrain, text: "Problem Solving", color: "yellow-500", description: "Analytical thinking" },
    { icon: FaRocket, text: "Innovation", color: "blue-500", description: "Pushing boundaries" },
    { icon: BiCodeAlt, text: "Clean Code", color: "pink-500", description: "Writing maintainable code" }
  ];

  const highlights = [
    { text: "React", color: "cyan" },
    { text: "front-end development", color: "orange" },
    { text: "YouTube", color: "red-500" },
    { text: "CodeNest", color: "green-500" },
    { text: "tutorials", color: "yellow-500" },
    { text: "successful careers", color: "purple-500" }
  ];

  useEffect(() => {
    controls.start({
      background: [
        "linear-gradient(45deg, #15d1e9 0%, #fb9718 100%)",
        "linear-gradient(45deg, #fb9718 0%, #15d1e9 100%)",
        "linear-gradient(45deg, #15d1e9 0%, #fb9718 100%)",
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });
  }, [controls]);

  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <motion.h2 
        className="text-6xl text-cyan mb-10 relative group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.span
          className="inline-block cursor-pointer relative"
          whileHover={{
            scale: 1.1,
            color: "#fb9718",
            textShadow: "0 0 12px rgba(251, 151, 24, 0.6)",
          }}
        >
          <TypingText text="About Me" delay={0.5} />
          <motion.div
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan via-orange to-cyan"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.span>
        
        {/* Floating particles around title */}
        <motion.div
          className="absolute -top-4 -right-4 w-2 h-2 bg-cyan rounded-full"
          animate={{
            y: [-10, 10],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-4 -left-4 w-2 h-2 bg-orange rounded-full"
          animate={{
            y: [10, -10],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </motion.h2>

      {/* Skills Grid */}
      <motion.div 
        className="grid grid-cols-4 gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative group"
            onHoverStart={() => setActiveSkill(index)}
            onHoverEnd={() => setActiveSkill(null)}
            whileHover={{ scale: 1.1, zIndex: 10 }}
          >
            <motion.div
              className={`p-4 rounded-xl bg-${skill.color}/10 backdrop-blur-sm relative overflow-hidden
                border border-transparent hover:border-${skill.color}/20 transition-all duration-300`}
              animate={activeSkill === index ? {
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              } : {}}
              transition={{ duration: 1 }}
            >
              <div className="flex flex-col items-center gap-2">
                <skill.icon className={`text-2xl text-${skill.color}`} />
                <span className={`text-sm text-${skill.color}/90 font-medium`}>
                  {skill.text}
                </span>
              </div>

              <AnimatePresence>
                {activeSkill === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`absolute inset-0 p-4 bg-${skill.color}/90 text-white
                      flex items-center justify-center text-center text-sm`}
                  >
                    {skill.description}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Text Content */}
      <div className="relative space-y-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="relative z-10 leading-relaxed"
        >
          {highlights.map((highlight, index) => (
            <span key={index}>
              {index > 0 && " "}
              <motion.span
                className={`cursor-pointer inline-block text-${highlight.color} hover:scale-110
                  transition-transform duration-200 hover:font-medium`}
                whileHover={{
                  textShadow: `0 0 8px rgba(var(--${highlight.color}-rgb), 0.5)`,
                }}
                onClick={() => setSelectedHighlight(highlight)}
              >
                {highlight.text}
              </motion.span>
            </span>
          ))} and helping students build real-world projects. I create engaging content and guide aspiring developers toward their dreams.
        </motion.p>

        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 -z-10 opacity-5 rounded-lg"
          animate={controls}
        />
      </div>

      {/* Call to Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="mt-10 relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.button 
          className="group relative overflow-hidden rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan via-orange to-cyan opacity-75"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
            className="relative z-10 px-8 py-3 text-lg font-medium text-white block
              hover:text-cyan transition-all duration-300"
        >
            Discover My Work
        </Link>

          {/* Particle effects */}
          {isHovered && (
            <motion.div className="absolute inset-0">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  initial={{ x: "50%", y: "50%" }}
                  animate={{
                    x: `${50 + (Math.random() - 0.5) * 100}%`,
                    y: `${50 + (Math.random() - 0.5) * 100}%`,
                    opacity: [1, 0],
                    scale: [0, 2],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>
          )}
        </motion.button>
      </motion.div>

      {/* Skill Info Modal */}
      <AnimatePresence>
        {selectedHighlight && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedHighlight(null)}
          >
            <motion.div
              className="bg-gray-900/90 p-6 rounded-2xl border border-cyan/20 max-w-md"
              onClick={e => e.stopPropagation()}
              layoutId={`highlight-${selectedHighlight.text}`}
            >
              <h3 className={`text-2xl font-bold text-${selectedHighlight.color} mb-4`}>
                {selectedHighlight.text}
              </h3>
              <p className="text-gray-300">
                Detailed information about {selectedHighlight.text} and how it contributes to my development journey.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutMeText;
