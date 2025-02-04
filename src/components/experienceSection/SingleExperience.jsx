import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useState } from "react";

const SingleExperience = ({ experience }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="md:h-[350px] md:w-[240px] sm:h-auto sm:w-full relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <motion.div
        className="h-full w-full border-2 border-orange border-dashed rounded-2xl p-6 bg-darkGrey/30 backdrop-blur-sm relative z-10 overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {/* Job Title */}
        <motion.p 
          className="font-bold text-cyan text-xl relative inline-block"
          animate={isHovered ? {
            color: "#fb9718",
            textShadow: "0 0 10px rgba(251, 151, 24, 0.3)",
          } : {}}
        >
          {experience.job}
          <motion.div
            className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-cyan to-orange"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "100%" : "0%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.p>

        {/* Company */}
        <motion.p 
          className="text-orange mt-2 font-medium"
          animate={isHovered ? { scale: 1.05 } : {}}
        >
          {experience.company}
        </motion.p>

        {/* Date */}
        <motion.div 
          className="flex items-center gap-2 mt-1"
          animate={isHovered ? { x: 10 } : {}}
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-lightGrey"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <p className="text-lightGrey text-sm">{experience.date}</p>
        </motion.div>

        {/* Responsibilities */}
        <motion.ul className="list-none mt-6 space-y-3">
          {experience.responsibilities.map((resp, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-2 text-sm relative pl-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <motion.div
                className="absolute left-0 top-2 w-2 h-2 bg-orange rounded-full"
                animate={{
                  scale: isHovered ? [1, 1.5, 1] : 1,
                  opacity: isHovered ? [0.3, 1, 0.3] : 1,
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              {resp}
            </motion.li>
          ))}
        </motion.ul>

        {/* Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-orange/5 rounded-2xl -z-10"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-orange/20 rounded-2xl blur-xl"
        animate={{
          opacity: isHovered ? 0.5 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Floating Particles */}
      {isHovered && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: i % 2 === 0 ? "#15d1e9" : "#fb9718",
                boxShadow: `0 0 10px ${i % 2 === 0 ? "#15d1e9" : "#fb9718"}`,
              }}
              initial={{ 
                opacity: 0,
                scale: 0,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
              }}
              transition={{
                duration: 1 + Math.random(),
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
};

export default SingleExperience;
