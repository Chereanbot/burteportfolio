import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

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

const HighlightedText = ({ children, color = "cyan" }) => (
  <motion.span
    className={`relative inline-block text-${color}`}
    whileHover={{ scale: 1.05 }}
  >
    {children}
    <motion.div
      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-orange to-cyan"
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.8, delay: 0.2 }}
    />
  </motion.span>
);

const SkillsText = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      background: [
        "linear-gradient(45deg, #15d1e9 0%, #fb9718 100%)",
        "linear-gradient(45deg, #fb9718 0%, #15d1e9 100%)",
        "linear-gradient(45deg, #15d1e9 0%, #fb9718 100%)",
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });
  }, [controls]);

  return (
    <motion.div 
      className="flex flex-col items-center mt-[100px] relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Main Title */}
      <motion.div 
        className="text-6xl text-cyan mb-12 relative text-center"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.span
          className="relative inline-block"
          animate={isHovered ? {
            color: "#fb9718",
            textShadow: "0 0 20px rgba(251, 151, 24, 0.5)",
          } : {}}
        >
          <TypingText text="Professional Expertise" delay={0.2} />
        </motion.span>

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
      </motion.div>

      {/* Main Description */}
      <motion.div 
        className="text-lg text-center max-w-3xl relative space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* First Paragraph */}
        <motion.p className="leading-relaxed">
          <HighlightedText>Full-stack developer</HighlightedText> with a passion for creating{" "}
          <HighlightedText color="orange">exceptional digital experiences</HighlightedText>. 
          Specializing in modern web technologies and best practices to deliver{" "}
          <HighlightedText>high-performance</HighlightedText> solutions.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p className="leading-relaxed">
          Proficient in <HighlightedText color="orange">front-end excellence</HighlightedText>{" "}
          and <HighlightedText>back-end architecture</HighlightedText>, with expertise in{" "}
          <HighlightedText color="orange">responsive design</HighlightedText> and{" "}
          <HighlightedText>scalable solutions</HighlightedText>.
        </motion.p>

        {/* Third Paragraph */}
        <motion.p className="leading-relaxed">
          Committed to writing <HighlightedText>clean, maintainable code</HighlightedText>{" "}
          and implementing <HighlightedText color="orange">industry best practices</HighlightedText>{" "}
          to create robust and efficient applications.
        </motion.p>

        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-lg opacity-10"
          animate={controls}
        />
      </motion.div>

      {/* Background Effects */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(21, 209, 233, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(251, 151, 24, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Code Pattern Background */}
      <motion.div
        className="absolute inset-0 -z-20 opacity-5 text-xs overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="whitespace-nowrap"
            initial={{ x: -1000 }}
            animate={{ x: 1000 }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            {"{ const developer = { passion: true, innovation: true, excellence: true }; }".repeat(3)}
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan/30 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Experience Badge */}
      <motion.div
        className="absolute -right-4 top-0 bg-gradient-to-r from-orange to-cyan p-2 rounded-lg text-sm font-bold transform rotate-12"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [12, 8, 12],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        5+ Years Experience
      </motion.div>
    </motion.div>
  );
};

export default SkillsText;
