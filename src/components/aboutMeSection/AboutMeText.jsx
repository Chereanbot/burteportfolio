import { Link } from "react-scroll";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaReact, FaCode, FaYoutube, FaGraduationCap, FaLaptopCode, FaBrain, FaRocket, FaBriefcase, FaAward } from "react-icons/fa";
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
  const [activeTab, setActiveTab] = useState("skills");
  const controls = useAnimation();

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "Dilla University",
      year: "Current",
      description: "Focusing on software engineering and modern programming technologies",
    }
  ];

  const skills = [
    { name: "Python Programming", level: 75 },
    { name: "Web Development", level: 80 },
    { name: "Java", level: 70 },
    { name: "Data Structures", level: 75 },
    { name: "Algorithms", level: 70 },
    { name: "Database Management", level: 65 },
  ];

  const experience = [
    {
      role: "Student Developer",
      company: "University Projects",
      year: "Present",
      description: "Leading development teams in various academic projects, focusing on innovative solutions",
    },
    {
      role: "Programming Enthusiast",
      company: "Self-Learning & Open Source",
      year: "2022-Present",
      description: "Contributing to open-source projects and building personal development portfolio",
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      year: "2023",
      description: "Consistently maintaining top academic performance in programming courses",
    },
    {
      title: "Project Leadership",
      year: "2023",
      description: "Successfully led multiple team projects in software development courses",
    }
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

  const renderContent = () => {
    switch (activeTab) {
      case "skills":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white/90">{skill.name}</span>
                  <span className="text-cyan">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan to-orange"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        );

      case "education":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-6 pb-6 border-l-2 border-cyan/20 last:pb-0"
              >
                <motion.div
                  className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-dark-2 border-2 border-cyan"
                  whileHover={{ scale: 1.2 }}
                />
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                <p className="text-orange">{edu.school}</p>
                <p className="text-white/60">{edu.year}</p>
                <p className="text-white/80 mt-2">{edu.description}</p>
              </motion.div>
            ))}
          </motion.div>
        );

      case "experience":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-6 pb-6 border-l-2 border-orange/20 last:pb-0"
              >
                <motion.div
                  className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-dark-2 border-2 border-orange"
                  whileHover={{ scale: 1.2 }}
                />
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <p className="text-cyan">{exp.company}</p>
                <p className="text-white/60">{exp.year}</p>
                <p className="text-white/80 mt-2">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        );

      case "achievements":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                  <span className="text-cyan text-sm">{achievement.year}</span>
                </div>
                <p className="text-white/80 mt-2">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold bg-gradient-to-r from-cyan to-orange bg-clip-text text-transparent"
        >
          Aspiring Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 leading-relaxed"
        >
          A passionate Computer Science student at Dilla University with a strong foundation in programming and software development. Combining academic excellence with practical project experience to build innovative solutions.
        </motion.p>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: "Course Projects", value: "10+" },
          { label: "Programming Languages", value: "5+" },
          { label: "Team Projects", value: "8+" },
          { label: "GitHub Repositories", value: "15+" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-4 rounded-xl bg-white/5 text-center"
          >
            <motion.h3
              className="text-2xl font-bold bg-gradient-to-r from-cyan to-orange bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              {stat.value}
            </motion.h3>
            <p className="text-white/60 text-sm mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Tabs */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex space-x-4 overflow-x-auto pb-2"
        >
          {["skills", "education", "experience", "achievements"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-cyan to-orange text-white"
                  : "bg-white/5 text-white/60 hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab === "skills" && <FaCode className="text-lg" />}
              {tab === "education" && <FaGraduationCap className="text-lg" />}
              {tab === "experience" && <FaBriefcase className="text-lg" />}
              {tab === "achievements" && <FaAward className="text-lg" />}
              <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="min-h-[300px]"
        >
          {renderContent()}
        </motion.div>
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
              layoutId={`highlight-${selectedHighlight.name}`}
            >
              <h3 className={`text-2xl font-bold text-${selectedHighlight.color} mb-4`}>
                {selectedHighlight.name}
              </h3>
              <p className="text-gray-300">
                Detailed information about {selectedHighlight.name} and how it contributes to my development journey.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutMeText;

