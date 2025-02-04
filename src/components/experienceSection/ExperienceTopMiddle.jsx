import { motion } from "framer-motion";
import { useState } from "react";

const ExperienceTopMiddle = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="lg:w-[35%] md:w-[50%] sm:w-[80%] relative group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <motion.div
        className="relative rounded-2xl overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Main Image */}
        <motion.img
          src="../../public/images/experience-image.png"
          alt="my experience"
          className="w-full h-full object-cover relative z-10"
          animate={isHovered ? {
            scale: 1.1,
            filter: "brightness(1.2)",
          } : {
            scale: 1,
            filter: "brightness(1)",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-orange/20 z-20"
          animate={{
            opacity: isHovered ? 0.8 : 0.4,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 z-30"
          animate={isHovered ? {
            opacity: [0, 0.3, 0],
            x: [-200, 400, -200],
          } : {}}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        />
      </motion.div>

      {/* Decorative Border */}
      <motion.div
        className="absolute -inset-2 border-2 border-dashed border-orange/50 rounded-2xl -z-10"
        animate={isHovered ? {
          scale: 1.1,
          rotate: [0, 5, -5, 0],
        } : {
          scale: 1,
          rotate: 0,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Corner Decorations */}
      <motion.div
        className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyan"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-orange"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />

      {/* Floating Particles */}
      {isHovered && (
        <>
          {[...Array(6)].map((_, i) => (
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

      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-orange/20 rounded-2xl blur-xl -z-20"
        animate={{
          opacity: isHovered ? 0.5 : 0,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ExperienceTopMiddle;
