import ExperienceInfo from "./ExperienceInfo";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const ExperienceTopRight = () => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Magnetic effect
  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    x.set(mouseX / 10);
    y.set(mouseY / 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      className="flex flex-col gap-6 w-[300px] relative perspective-1000"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        x: xSpring,
        y: ySpring,
        rotateX: useTransform(ySpring, [-100, 100], [10, -10]),
        rotateY: useTransform(xSpring, [-100, 100], [-10, 10]),
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Title with 3D effect */}
      <motion.p 
        className="text-orange font-bold uppercase text-3xl font-special text-center relative"
        whileHover={{ 
          scale: 1.05,
          textShadow: "0 0 8px rgba(251, 151, 24, 0.6)",
        }}
      >
        Achievements
        <motion.div
          className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-orange via-cyan to-orange opacity-50"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleX: [0.9, 1.1, 0.9],
            filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.p>

      {/* Stats Container with enhanced animations */}
      <motion.div 
        className="flex justify-center items-center gap-4 relative"
        whileHover={{ scale: 1.02 }}
      >
        <ExperienceInfo number="10+" text="Projects" />
        <motion.p 
          className="font-bold text-6xl text-lightBrown"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.95, 1.05, 0.95],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          -
        </motion.p>
        <ExperienceInfo number="127+" text="Clients" />

        {/* Enhanced Background Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan/5 via-orange/5 to-cyan/5 rounded-xl -z-10"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.98, 1.02, 0.98],
            background: [
              "linear-gradient(45deg, rgba(21,209,233,0.05) 0%, rgba(251,151,24,0.05) 100%)",
              "linear-gradient(225deg, rgba(21,209,233,0.05) 0%, rgba(251,151,24,0.05) 100%)",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </motion.div>

      {/* Enhanced Description */}
      <motion.p 
        className="text-center relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Delivering 
        <motion.span 
          className="text-cyan mx-1"
          animate={{
            color: ["#15d1e9", "#fb9718", "#15d1e9"],
            textShadow: [
              "0 0 8px rgba(21,209,233,0.4)",
              "0 0 8px rgba(251,151,24,0.4)",
              "0 0 8px rgba(21,209,233,0.4)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          exceptional
        </motion.span>
        solutions and exceeding client expectations.
      </motion.p>

      {/* Success Rate with enhanced animations */}
      <motion.div
        className="relative"
        whileHover={{ 
          scale: 1.05,
          filter: "brightness(1.2)",
        }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <ExperienceInfo number="95" text="Success Rate" />
        
        {/* Enhanced Decorative Elements */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? "#15d1e9" : "#fb9718",
              top: i < 2 ? "-0.5rem" : "auto",
              bottom: i >= 2 ? "-0.5rem" : "auto",
              left: i % 2 === 0 ? "-0.5rem" : "auto",
              right: i % 2 === 1 ? "-0.5rem" : "auto",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced Background Pattern */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-[1px] bg-gradient-to-r from-cyan via-orange to-cyan"
            style={{
              top: `${i * 8}%`,
              left: 0,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scaleX: [0.9, 1.1, 0.9],
              filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced Floating Particles */}
      {isHovered && (
        <>
          {[...Array(8)].map((_, i) => (
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
                scale: [0, 1.5, 0],
                x: [0, (Math.random() - 0.5) * 150],
                y: [0, (Math.random() - 0.5) * 150],
                rotate: [0, Math.random() * 360],
              }}
              transition={{
                duration: 1.5 + Math.random(),
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </>
      )}

      {/* Click Ripple Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={isHovered ? {
          background: [
            "radial-gradient(circle at center, rgba(21,209,233,0) 0%, rgba(21,209,233,0) 100%)",
            "radial-gradient(circle at center, rgba(21,209,233,0.1) 0%, rgba(21,209,233,0) 100%)",
            "radial-gradient(circle at center, rgba(21,209,233,0) 0%, rgba(21,209,233,0) 100%)",
          ],
        } : {}}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default ExperienceTopRight;
