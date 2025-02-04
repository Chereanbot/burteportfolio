import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useRef, useEffect } from "react";

const FloatingParticle = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-1 h-1 bg-cyan/30 rounded-full"
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [0, 1, 0],
      opacity: [0, 0.5, 0],
      y: [-20, -40],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatType: "loop",
    }}
  />
);

const AboutMeMain = () => {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  
  const springConfig = { stiffness: 100, damping: 30 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      x.set(mouseX * 0.1);
      y.set(mouseY * 0.1);
      rotateX.set(mouseY * 0.01);
      rotateY.set(-mouseX * 0.01);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y, rotateX, rotateY]);

  return (
    <motion.div
      ref={containerRef}
      style={{ 
        opacity,
        scale,
        x,
        y,
        rotateX,
        rotateY,
        perspective: 1000
      }}
      id="about"
      className="relative flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          backgroundSize: ["100% 100%", "150% 150%", "100% 100%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated Grid */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(to right, cyan 1px, transparent 1px), linear-gradient(to bottom, cyan 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <FloatingParticle delay={i * 0.2} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="relative z-10"
      >
        <AboutMeText />
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="relative z-10"
      >
        <AboutMeImage />
      </motion.div>

      {/* Interactive Corner Decorations */}
      <motion.div
        className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan/30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-orange/30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />

      {/* Glowing Orbs */}
      <motion.div
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cyan/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-orange/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </motion.div>
  );
};

export default AboutMeMain;
