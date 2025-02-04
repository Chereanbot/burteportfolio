import SingleSkill from "./SingleSkill";
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

const AllSkills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 0.5 }
    });
  }, [controls]);

  const getRelatedSkills = (skill) => {
    return skills.filter(s => s.category === skill.category && s.skill !== skill.skill);
  };

  return (
    <motion.div className="relative">
      <motion.div 
        className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto"
        initial={{ opacity: 0 }}
        animate={controls}
      >
        {/* Background Pattern */}
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{
            background: [
              "radial-gradient(circle at 30% 30%, rgba(21, 209, 233, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 70%, rgba(251, 151, 24, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Skills Grid */}
        {skills.map((item, index) => {
          const delay = index * 0.2;
          return (
            <motion.div
              key={index}
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              onHoverStart={() => setHoveredSkill(item)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="relative"
            >
              <SingleSkill
                text={item.skill}
                imgSvg={<item.icon />}
                level={item.level}
              />

              {/* Category Indicator */}
              <motion.div
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredSkill?.category === item.category ? 1 : 0 }}
                style={{
                  color: item.category === "frontend" ? "#15d1e9" :
                         item.category === "language" ? "#fb9718" :
                         "#9f7aea"
                }}
              >
                {item.category}
              </motion.div>

              {/* Connecting Lines */}
              {hoveredSkill === item && getRelatedSkills(item).map((related, rIndex) => {
                const relatedIndex = skills.findIndex(s => s.skill === related.skill);
                const startX = index * 120;
                const endX = relatedIndex * 120;
                const lineLength = Math.abs(endX - startX);
                
                return (
                  <motion.div
                    key={rIndex}
                    className="absolute top-1/2 h-[2px] origin-left"
                    style={{
                      left: startX < endX ? "100%" : "0",
                      width: lineLength,
                      background: `linear-gradient(90deg, 
                        ${item.category === "frontend" ? "#15d1e9" :
                          item.category === "language" ? "#fb9718" :
                          "#9f7aea"} 0%, 
                        rgba(255,255,255,0.2) 100%)`
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 0.5 }}
                    transition={{ duration: 0.3 }}
                  />
                );
              })}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 3 === 0 ? "#15d1e9" : 
                       i % 3 === 1 ? "#fb9718" : "#9f7aea",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </motion.div>
  );
};

export default AllSkills;
