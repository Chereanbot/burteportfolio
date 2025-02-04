import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useRef, useState } from "react";

const SkillsMain = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <motion.div 
      id="skills"
      ref={containerRef}
      className="relative py-20 min-h-screen w-full overflow-hidden"
      style={{ opacity }}
      onViewportEnter={() => setIsVisible(true)}
      onViewportLeave={() => setIsVisible(false)}
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(21, 209, 233, 0.15) 0%, transparent 70%)",
            "radial-gradient(circle at 80% 80%, rgba(251, 151, 24, 0.15) 0%, transparent 70%)",
            "radial-gradient(circle at 50% 50%, rgba(21, 209, 233, 0.15) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-20">
        {[...Array(144)].map((_, i) => (
          <motion.div
            key={i}
            className="border-[0.5px] border-white/5"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 3,
              delay: i * 0.02,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1200px] px-4 mx-auto relative">
        <AnimatePresence>
          {isVisible && (
            <>
              {/* Skills Text Section */}
              <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                style={{ y }}
                className="mb-20"
              >
                <SkillsText />
              </motion.div>

              {/* Desktop Skills Grid */}
              <motion.div 
                className="relative mb-32 sm:hidden lg:flex lg:justify-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <AllSkills />
              </motion.div>

              {/* Mobile Skills Grid */}
              <motion.div 
                className="sm:block lg:hidden mb-32"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <AllSkillsSM />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 border-2 border-cyan/30 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 border-2 border-orange/30 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Enhanced Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 3 === 0 ? "#15d1e9" : 
                       i % 3 === 1 ? "#fb9718" : 
                       "rgba(255, 255, 255, 0.8)",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            boxShadow: `0 0 ${Math.random() * 10 + 5}px ${
              i % 3 === 0 ? "#15d1e9" : 
              i % 3 === 1 ? "#fb9718" : 
              "rgba(255, 255, 255, 0.8)"
            }`
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 40 - 20, 0],
            scale: [0, 1.5, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Enhanced Corner Decorations */}
      <div className="absolute top-0 left-0 w-40 h-40 overflow-hidden">
        <motion.div
          className="w-full h-full border-t-4 border-l-4 border-cyan rounded-tl-3xl"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.1, 1],
            borderColor: ["#15d1e9", "#fb9718", "#15d1e9"],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="absolute bottom-0 right-0 w-40 h-40 overflow-hidden">
        <motion.div
          className="w-full h-full border-b-4 border-r-4 border-orange rounded-br-3xl"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.1, 1],
            borderColor: ["#fb9718", "#15d1e9", "#fb9718"],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </div>
    </motion.div>
  );
};

export default SkillsMain;
