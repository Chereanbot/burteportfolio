import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion, useAnimation } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useState, useEffect } from "react";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
    category: "frontend",
    level: 90
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
    category: "frontend",
    level: 85
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
    category: "language",
    level: 88
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
    category: "language",
    level: 82
  },
  {
    skill: "ReactJS",
    icon: FaReact,
    category: "framework",
    level: 92
  },
  {
    skill: "Redux",
    icon: SiRedux,
    category: "framework",
    level: 85
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
    category: "framework",
    level: 80
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
    category: "frontend",
    level: 95
  },
];

const AllSkillsSM = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 0.5 }
    });
  }, [controls]);

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.8
    },
    visible: (i) => ({ 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }),
    selected: {
      scale: 1.1,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <motion.div 
      className="relative px-4"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-50"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(21, 209, 233, 0.15) 0%, transparent 70%)",
            "radial-gradient(circle at 80% 80%, rgba(251, 151, 24, 0.15) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 my-12">
      {skills.map((item, index) => {
          const isSelected = selectedSkill === item.skill;
        return (
          <motion.div
              key={index}
              variants={cardVariants}
              custom={index}
            initial="hidden"
              whileInView="visible"
              animate={isSelected ? "selected" : "visible"}
              viewport={{ once: false, amount: 0.3 }}
              onClick={() => setSelectedSkill(isSelected ? null : item.skill)}
              className="relative cursor-pointer"
            >
              <motion.div 
                className="flex flex-col items-center p-6 rounded-xl bg-darkGrey/30 backdrop-blur-sm
                  border border-white/10 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Icon Container */}
                <motion.div
                  className="relative"
                  animate={isSelected ? {
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.2, 1.2, 1.2, 1],
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className={`text-5xl ${
                    item.category === "frontend" ? "text-cyan" :
                    item.category === "language" ? "text-orange" :
                    "text-purple-400"
                  }`} />
                  
                  {/* Progress Ring */}
                  {isSelected && (
                    <motion.div
                      className="absolute -inset-4 border-2 rounded-full"
                      style={{
                        borderColor: item.category === "frontend" ? "#15d1e9" :
                                   item.category === "language" ? "#fb9718" :
                                   "#9f7aea"
                      }}
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </motion.div>

                {/* Skill Name and Level */}
                <motion.p 
                  className="text-center mt-4 font-medium relative"
                  animate={isSelected ? {
                    color: item.category === "frontend" ? "#15d1e9" :
                           item.category === "language" ? "#fb9718" :
                           "#9f7aea"
                  } : {}}
                >
                  {item.skill}
                  
                  {/* Level Indicator */}
                  <motion.span
                    className="absolute -right-6 -top-1 text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isSelected ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.level}%
                  </motion.span>
                </motion.p>

                {/* Category Tag */}
                <motion.div
                  className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full bg-white/10"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: isSelected ? 1 : 0,
                    scale: isSelected ? 1 : 0
                  }}
                  style={{
                    color: item.category === "frontend" ? "#15d1e9" :
                           item.category === "language" ? "#fb9718" :
                           "#9f7aea"
                  }}
                >
                  {item.category}
                </motion.div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0"
                  animate={{
                    opacity: isSelected ? [0, 0.2, 0] : 0,
                    background: item.category === "frontend" ? 
                      "radial-gradient(circle at center, rgba(21, 209, 233, 0.3) 0%, transparent 70%)" :
                      item.category === "language" ?
                      "radial-gradient(circle at center, rgba(251, 151, 24, 0.3) 0%, transparent 70%)" :
                      "radial-gradient(circle at center, rgba(159, 122, 234, 0.3) 0%, transparent 70%)"
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Particles */}
              {isSelected && (
                <>
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        background: item.category === "frontend" ? "#15d1e9" :
                                  item.category === "language" ? "#fb9718" :
                                  "#9f7aea"
                      }}
                      initial={{ 
                        x: 0,
                        y: 0,
                        scale: 0,
                        opacity: 0
                      }}
                      animate={{
                        x: (Math.random() - 0.5) * 100,
                        y: (Math.random() - 0.5) * 100,
                        scale: [0, 1.5, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1 + Math.random(),
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                    />
                  ))}
                </>
              )}
          </motion.div>
        );
      })}
    </div>
    </motion.div>
  );
};

export default AllSkillsSM;
