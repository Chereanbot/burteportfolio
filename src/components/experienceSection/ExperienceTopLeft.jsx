import ExperienceInfo from "./ExperienceInfo";
import { motion } from "framer-motion";

const ExperienceTopLeft = () => {
  return (
    <motion.div 
      className="flex flex-col gap-6 w-[300px] relative"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Since Date */}
      <motion.p 
        className="text-orange font-bold uppercase text-3xl font-special text-center relative"
        whileHover={{ scale: 1.05 }}
      >
        Since 2022
        <motion.div
          className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-orange via-cyan to-orange opacity-50"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleX: [0.9, 1.1, 0.9],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.p>

      {/* Stats Container */}
      <motion.div 
        className="flex justify-center items-center gap-4 relative"
        whileHover={{ scale: 1.02 }}
      >
        <ExperienceInfo number="3" text="Years" />
        <motion.p 
          className="font-bold text-6xl text-lightBrown"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          -
        </motion.p>
        <ExperienceInfo number="23" text="Websites" />

        {/* Background Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan/5 to-orange/5 rounded-xl -z-10"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.98, 1.02, 0.98],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      {/* Description */}
      <motion.p 
        className="text-center relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        With <motion.span 
          className="text-cyan"
          animate={{
            color: ["#15d1e9", "#fb9718", "#15d1e9"],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >3 years</motion.span> of experience building dynamic and user-friendly web applications.
      </motion.p>

      {/* Budget Info */}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <ExperienceInfo number="$100k" text="Max Budget" />
        
        {/* Decorative Elements */}
        <motion.div
          className="absolute -top-2 -right-2 w-2 h-2 bg-orange rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-2 -left-2 w-2 h-2 bg-cyan rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </motion.div>

      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-[1px] bg-gradient-to-r from-cyan via-orange to-cyan"
            style={{
              top: `${i * 10}%`,
              left: 0,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scaleX: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ExperienceTopLeft;
