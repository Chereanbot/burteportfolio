import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaCode, FaDatabase, FaReact, FaPython, FaJava, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

const AboutMeImage = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  const techIcons = [
    { Icon: FaReact, color: "text-cyan" },
    { Icon: FaPython, color: "text-yellow-500" },
    { Icon: SiJavascript, color: "text-yellow-400" },
    { Icon: FaJava, color: "text-orange" },
    { Icon: FaDatabase, color: "text-green-500" },
    { Icon: SiTailwindcss, color: "text-blue-400" },
  ];

  return (
    <div className="relative group">
      {/* Code-themed Border */}
      <motion.div
        animate={controls}
        className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan via-orange to-cyan opacity-75 blur-sm group-hover:opacity-100 transition duration-500"
      />

      {/* Main Image Container */}
      <motion.div
        className="relative aspect-square rounded-xl overflow-hidden bg-dark-2 p-1"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          {/* Code Background Overlay */}
          <motion.div
            className="absolute inset-0 bg-dark-2/90 z-10"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 0.85 }}
          >
            {/* Animated Code Lines */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="h-6 my-2 bg-gradient-to-r from-cyan/20 to-orange/20 rounded"
                style={{ width: `${Math.random() * 60 + 40}%`, marginLeft: `${Math.random() * 20}%` }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ 
                  opacity: [0.1, 0.3, 0.1],
                  x: 0,
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </motion.div>

          {/* Profile Image */}
          <motion.img
            src="/images/HexaPic.png"
            alt="Computer Science Student"
            className="w-full h-full object-cover relative z-20 opacity-90 mix-blend-luminosity"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Student Badge */}
          <motion.div
            className="absolute top-4 right-4 z-30 bg-gradient-to-r from-cyan to-orange px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            CS Student @ Dilla University
          </motion.div>

          {/* Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </motion.div>

      {/* Floating Tech Stack */}
      {techIcons.map((tech, i) => (
        <motion.div
          key={i}
          className="absolute w-12 h-12 rounded-xl bg-dark-2/90 backdrop-blur-sm flex items-center justify-center z-30"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
          initial={{ scale: 0, rotate: 0 }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 360],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          <tech.Icon className={`text-2xl ${tech.color}`} />
        </motion.div>
      ))}

      {/* Code Corner Decorations */}
      <motion.div
        className="absolute -top-4 -left-4 w-8 h-8"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-full border-t-2 border-l-2 border-cyan flex items-center justify-center">
          <FaCode className="text-cyan text-sm" />
        </div>
      </motion.div>
      <motion.div
        className="absolute -bottom-4 -right-4 w-8 h-8"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-full h-full border-b-2 border-r-2 border-orange flex items-center justify-center">
          <FaGithub className="text-orange text-sm" />
        </div>
      </motion.div>

      {/* Code-themed Glowing Effects */}
      <motion.div
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cyan/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-orange/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};

export default AboutMeImage;
