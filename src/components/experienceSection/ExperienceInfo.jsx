import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const ExperienceInfo = ({ number, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const [count, setCount] = useState(0);
  const finalNumber = parseInt(number.replace(/\D/g, ''));
  
  // Rotation animation
  const rotate = useMotionValue(0);
  const rotateY = useTransform(rotate, [0, 360], [0, 360]);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const currentCount = Math.floor(progress * finalNumber);
      
      setCount(currentCount);

      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(finalNumber);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [finalNumber]);

  // 3D flip animation on hover
  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start({
      rotateY: 360,
      transition: { duration: 0.8, ease: "easeInOut" }
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeInOut" }
    });
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center relative perspective-1000"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      animate={controls}
      style={{ rotateY }}
    >
      {/* Number with enhanced animations */}
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <motion.p 
          className="font-bold text-6xl text-cyan relative z-10"
          animate={isHovered ? {
            color: "#fb9718",
            textShadow: "0 0 20px rgba(251, 151, 24, 0.3)",
          } : {}}
        >
          {number.startsWith('$') ? '$' : ''}{count}{number.includes('+') ? '+' : ''}
          
          {/* Animated ring */}
          <motion.div
            className="absolute -inset-4 border-2 border-dashed rounded-full border-cyan/30"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.p>

        {/* Pulsing background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan/10 to-orange/10 rounded-full blur-xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: isHovered ? [0.3, 0.6, 0.3] : [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Text with enhanced animations */}
      <motion.div className="relative">
        <motion.p 
          className="font-bold text-xl text-lightGrey uppercase -mt-4"
          animate={isHovered ? {
            y: 5,
            color: "#fb9718",
          } : {}}
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.p>
        
        {/* Animated underline */}
        <motion.div
          className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-cyan via-orange to-cyan"
          initial={{ width: 0 }}
          animate={{ 
            width: isHovered ? "100%" : "0%",
            opacity: isHovered ? [0.5, 1, 0.5] : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Floating particles */}
      {isHovered && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: i % 2 === 0 ? "#15d1e9" : "#fb9718",
                boxShadow: `0 0 8px ${i % 2 === 0 ? "#15d1e9" : "#fb9718"}`,
              }}
              initial={{ 
                opacity: 0,
                scale: 0,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0],
                x: [0, (Math.random() - 0.5) * 80],
                y: [0, (Math.random() - 0.5) * 80],
                rotate: [0, Math.random() * 360],
              }}
              transition={{
                duration: 1 + Math.random(),
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </>
      )}

      {/* Ripple effect on hover */}
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

export default ExperienceInfo;
