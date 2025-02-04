import { motion } from "framer-motion";
import { useLoading } from "./LoadingContext";

const BruteTransition = () => {
  const { isTransitioning, direction } = useLoading();

  const variants = {
    initial: {
      clipPath: direction === "down" 
        ? "polygon(0 0, 100% 0, 100% 0, 0 0)"
        : "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      backgroundColor: "#000",
    },
    animate: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        duration: 0.8,
        ease: [0.7, 0, 0.3, 1],
      },
    },
    exit: {
      clipPath: direction === "down"
        ? "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
        : "polygon(0 0, 100% 0, 100% 0, 0 0)",
      transition: {
        duration: 0.8,
        ease: [0.7, 0, 0.3, 1],
      },
    },
  };

  const textVariants = {
    initial: { 
      scale: 0.5, 
      opacity: 0,
      rotateX: 90
    },
    animate: { 
      scale: [1, 1.2, 1], 
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        scale: {
          times: [0, 0.5, 1],
          duration: 0.8
        }
      }
    }
  };

  const glitchAnim = {
    initial: { x: 0 },
    animate: {
      x: [-2, 2, -2, 2, 0],
      y: [2, -2, 2, -2, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const backgroundVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return isTransitioning ? (
    <motion.div
      className="fixed inset-0 z-50 bg-black overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {/* Background Effects */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-red-900"
        variants={backgroundVariants}
      />
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,#000_80%)]"
        variants={backgroundVariants}
      />
      
      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent)] bg-[length:60px_60px]" />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="relative"
          variants={textVariants}
        >
          {/* Main Text */}
          <motion.div 
            className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 text-9xl font-black transform rotate-[-15deg] skew-x-12 tracking-[0.2em]"
            variants={glitchAnim}
          >
            BRUTE W/M
          </motion.div>


          {/* Glitch Layers */}
          <motion.div 
            className="text-red-500 text-9xl font-black transform rotate-[-15deg] skew-x-12 tracking-[0.2em] absolute top-0 left-1 opacity-50 mix-blend-screen"
            animate={{
              x: [-3, 3, -3, 3, 0],
              transition: { duration: 0.5, repeat: Infinity }
            }}
          >
            BRUTE W/M
          </motion.div>
          <motion.div 
            className="text-blue-500 text-9xl font-black transform rotate-[-15deg] skew-x-12 tracking-[0.2em] absolute top-0 -left-1 opacity-50 mix-blend-screen"

            animate={{
              x: [3, -3, 3, -3, 0],
              transition: { duration: 0.5, repeat: Infinity }
            }}
          >
            BRUTE W/M
          </motion.div>
          <motion.div 

            className="text-green-500 text-9xl font-black transform rotate-[-15deg] skew-x-12 tracking-[0.2em] absolute -top-1 left-0 opacity-30 mix-blend-screen"
            animate={{
              y: [3, -3, 3, -3, 0],
              transition: { duration: 0.5, repeat: Infinity }
            }}
          >
            BRUTE W/M
          </motion.div>


          {/* Scanline Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none" />
        </motion.div>
      </div>
    </motion.div>
  ) : null;
};

export default BruteTransition; 