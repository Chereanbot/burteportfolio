import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const AboutMeImage = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"],
      transition: { duration: 10, repeat: Infinity, ease: "linear" }
    });
  }, [controls]);

  return (
    <motion.div 
      className="h-[500px] w-[300px] relative group"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      {/* 3D Tilt Effect Container */}
      <motion.div 
        className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden perspective-1000"
        whileHover={{ 
          scale: 1.05,
          rotateX: 5,
          rotateY: 5,
          transition: { duration: 0.5 }
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.img
          src="../../public/images/HexaPic.png"
          alt="About Me Image"
          className="h-full w-auto object-cover"
          style={{ filter: "brightness(1.1) contrast(1.1)" }}
          whileHover={{ 
            scale: 1.1,
            filter: "brightness(1.2) contrast(1.2)"
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0"
          initial={{ x: "-100%", y: "-100%" }}
          animate={{ x: "100%", y: "100%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 3
          }}
        />
      </motion.div>

      {/* Animated Background Shape */}
      <motion.div 
        className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"
        animate={{
          rotate: [0, 2, -2, 0],
          scale: [1, 1.02, 0.98, 1],
          filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange/50 via-cyan/30 to-orange/50"
          animate={{
            opacity: [0, 0.5, 0],
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Particle Effects */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Interactive Decorative Elements */}
      <motion.div
        className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-cyan cursor-pointer"
        whileHover={{ scale: 1.5, boxShadow: "0 0 20px rgba(21, 209, 233, 0.5)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-4 -right-4 w-4 h-4 rounded-full bg-orange cursor-pointer"
        whileHover={{ scale: 1.5, boxShadow: "0 0 20px rgba(251, 151, 24, 0.5)" }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 2,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Glowing Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-[100px] pointer-events-none"
        animate={{
          boxShadow: [
            "0 0 0 rgba(21, 209, 233, 0)",
            "0 0 20px rgba(21, 209, 233, 0.3)",
            "0 0 0 rgba(21, 209, 233, 0)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default AboutMeImage;
