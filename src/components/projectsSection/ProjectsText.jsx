import { motion } from "framer-motion";
import { useState } from "react";
import { FaRocket, FaLightbulb, FaCode, FaChartLine } from "react-icons/fa";

const ProjectsText = () => {
  const [isHovered, setIsHovered] = useState(false);

  const mainTitle = "Featured Projects";
  const letters = Array.from(mainTitle);

  const highlights = [
    {
      icon: FaRocket,
      title: "Innovation Driven",
      description: "Pushing boundaries with cutting-edge technologies",
      gradient: "from-cyan to-blue-500"
    },
    {
      icon: FaLightbulb,
      title: "Problem Solving",
      description: "Transforming challenges into elegant solutions",
      gradient: "from-orange to-yellow-500"
    },
    {
      icon: FaCode,
      title: "Clean Code",
      description: "Building scalable and maintainable applications",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: FaChartLine,
      title: "Performance Focused",
      description: "Optimizing for speed and efficiency",
      gradient: "from-green-500 to-cyan"
    }
  ];

  return (
    <div className="flex flex-col items-center mt-[100px] relative">
      {/* Main Title Animation */}
      <motion.h2 
        className="text-6xl mb-6 relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block text-cyan"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{
              scale: 1.2,
              color: "#fb9718",
              transition: { duration: 0.2 }
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}

        {/* Animated underline */}
        <motion.div
          className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan via-orange to-cyan"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Corner Decorations */}
        <motion.div
          className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-cyan"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-orange"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </motion.h2>

      {/* Subtitle */}
      <motion.p 
        className="text-2xl text-orange font-light mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Crafting Digital Excellence
      </motion.p>

      {/* Main Description */}
      <motion.p 
        className="text-lg text-center max-w-2xl relative leading-relaxed mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Welcome to my portfolio of 
        <motion.span 
          className="text-cyan mx-2 font-medium"
          animate={{
            color: ["#15d1e9", "#fb9718", "#15d1e9"],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          innovative digital solutions
        </motion.span>
        . Each project represents a unique challenge tackled with creativity, technical expertise, and a passion for excellence.
      </motion.p>

      {/* Highlight Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-4 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            className="bg-darkGrey/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(21, 209, 233, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={`text-3xl bg-gradient-to-r ${highlight.gradient} text-transparent bg-clip-text mb-4`}
              animate={{
                rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <highlight.icon />
            </motion.div>
            <h3 className="text-xl text-cyan mb-2">{highlight.title}</h3>
            <p className="text-sm text-lightGrey">{highlight.description}</p>

            {/* Card Decoration */}
            <motion.div
              className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 rounded-br-xl opacity-0 group-hover:opacity-100"
              style={{
                borderImage: `linear-gradient(to right, ${index % 2 === 0 ? '#15d1e9, #fb9718' : '#fb9718, #15d1e9'}) 1`
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Stats section */}
      <motion.div 
        className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        {[
          { number: "15+", label: "Projects Completed", color: "cyan" },
          { number: "99%", label: "Client Satisfaction", color: "orange" },
          { number: "5+", label: "Years Experience", color: "cyan" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="text-center relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.p 
              className={`text-4xl font-bold text-${stat.color}`}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            >
              {stat.number}
            </motion.p>
            <p className="text-sm text-lightGrey mt-2">{stat.label}</p>

            {/* Stat Decoration */}
            <motion.div
              className="absolute -z-10 inset-0 rounded-lg"
              animate={{
                boxShadow: [
                  `0 0 20px rgba(${stat.color === 'cyan' ? '21, 209, 233' : '251, 151, 24'}, 0)`,
                  `0 0 20px rgba(${stat.color === 'cyan' ? '21, 209, 233' : '251, 151, 24'}, 0.2)`,
                  `0 0 20px rgba(${stat.color === 'cyan' ? '21, 209, 233' : '251, 151, 24'}, 0)`,
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Background Elements */}
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

      {/* Floating particles */}
      {isHovered && (
        <>
          {[...Array(12)].map((_, i) => (
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
                x: [0, (Math.random() - 0.5) * 200],
                y: [0, (Math.random() - 0.5) * 200],
                rotate: [0, Math.random() * 360],
              }}
              transition={{
                duration: 1.5 + Math.random(),
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ProjectsText;
