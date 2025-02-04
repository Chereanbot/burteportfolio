import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

const SingleSkill = ({ imgSvg, text, level = 85 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    controls.start({
      background: [
        "radial-gradient(circle at 50% 50%, rgba(21, 209, 233, 0.2) 0%, transparent 50%)",
        "radial-gradient(circle at 50% 50%, rgba(251, 151, 24, 0.2) 0%, transparent 50%)",
      ],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    });
  }, [controls]);

  return (
    <motion.div
      className="relative perspective-1000"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      animate={{
        rotateX: isHovered ? mousePosition.y * 0.1 : 0,
        rotateY: isHovered ? mousePosition.x * 0.1 : 0,
        y: isHovered ? -20 : 0
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <motion.div 
        className="flex flex-col items-center gap-2 relative transform-gpu"
        animate={isHovered ? { scale: 1.1, z: 20 } : { scale: 1, z: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full 
            relative overflow-hidden border-4 border-orange group transform-gpu"
          whileHover={{ 
            boxShadow: [
              "0 0 20px rgba(21, 209, 233, 0.5)",
              "0 0 30px rgba(251, 151, 24, 0.5)",
              "0 0 20px rgba(21, 209, 233, 0.5)"
            ],
          }}
          transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
        >
          {/* Skill Icon */}
          <motion.div
            className="text-6xl relative z-10 group-hover:text-darkGrey transition-colors duration-300"
            animate={isHovered ? {
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.2, 1.2, 1.2, 1],
              z: 30
            } : {}}
            transition={{ duration: 0.5 }}
          >
            {imgSvg}
          </motion.div>

          {/* Progress Circle */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 100 100"
          >
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(21, 209, 233, 0.2)"
              strokeWidth="8"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#15d1e9"
              strokeWidth="8"
              strokeDasharray={`${level * 2.83} ${283 - level * 2.83}`}
              initial={{ pathLength: 0 }}
              animate={isHovered ? { 
                pathLength: 1,
                stroke: ["#15d1e9", "#fb9718", "#15d1e9"]
              } : { pathLength: 0 }}
              transition={{ duration: 1, ease: "easeInOut", stroke: { duration: 2, repeat: Infinity } }}
            />
          </svg>

          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-orange/20 blur-lg"
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          />
        </motion.div>

        {/* Skill Name */}
        <motion.p 
          className="text-white font-bold relative"
          animate={isHovered ? {
            scale: 1.1,
            color: "#15d1e9",
            textShadow: [
              "0 0 10px rgba(21, 209, 233, 0.5)",
              "0 0 20px rgba(251, 151, 24, 0.5)",
              "0 0 10px rgba(21, 209, 233, 0.5)"
            ]
          } : {}}
          transition={{ textShadow: { duration: 2, repeat: Infinity } }}
        >
          {text}
          
          {/* Skill Level */}
          <motion.span
            className="absolute -right-12 text-sm"
            initial={{ opacity: 0, x: -10 }}
            animate={isHovered ? { 
              opacity: 1, 
              x: 0,
              color: ["#15d1e9", "#fb9718", "#15d1e9"]
            } : { opacity: 0, x: -10 }}
            transition={{ color: { duration: 2, repeat: Infinity } }}
          >
            Mastery: {level}%
          </motion.span>
        </motion.p>

        {/* Particle Effects */}
        {isHovered && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: i % 2 === 0 ? "#15d1e9" : "#fb9718",
                  boxShadow: `0 0 10px ${i % 2 === 0 ? "#15d1e9" : "#fb9718"}`
                }}
                initial={{ 
                  x: 0, 
                  y: 0, 
                  scale: 0,
                  opacity: 1 
                }}
                animate={{
                  x: (Math.random() - 0.5) * 150,
                  y: (Math.random() - 0.5) * 150,
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 1 + Math.random(),
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </>
        )}
      </motion.div>

      {/* Background Pillar */}
      <motion.div 
        className="w-[100px] h-[200px] absolute top-[50px] -z-10 overflow-hidden"
        animate={isHovered ? {
          height: 220,
          background: ["#fb9718", "#15d1e9", "#fb9718"],
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* Animated Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-0"
          animate={isHovered ? {
            opacity: [0, 0.3, 0],
            y: [0, 200, 0],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Grid Pattern */}
        <motion.div
          className="absolute inset-0 grid grid-cols-4 grid-rows-8 gap-1"
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 0.2 } : { opacity: 0 }}
        >
          {[...Array(32)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-white"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SingleSkill;
