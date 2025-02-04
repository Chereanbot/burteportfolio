import { motion } from "framer-motion";

const TypingText = ({ text, delay = 0 }) => {
  const letters = Array.from(text);
  
  return (
    <span className="inline-flex">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
            delay: delay + i * 0.05,
            type: "spring",
            stiffness: 100
          }}
          className="inline-block hover:text-orange hover:scale-110 transition-all duration-200"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
};

const ExperienceText = () => {
  return (
    <motion.div 
      className="flex flex-col items-center mt-[100px] relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="text-6xl text-cyan mb-10 relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <TypingText text="Professional Journey" delay={0.2} />
        
        {/* Animated underline */}
        <motion.div
          className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan via-orange to-cyan"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 1 }}
        />

        {/* Decorative elements */}
        <motion.div
          className="absolute -top-4 -right-4 w-2 h-2 bg-cyan rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-4 -left-4 w-2 h-2 bg-orange rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-lg text-center text-lightGrey max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        A timeline of professional growth and impactful contributions in web development
      </motion.p>

      {/* Background Effects */}
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
    </motion.div>
  );
};

export default ExperienceText;
