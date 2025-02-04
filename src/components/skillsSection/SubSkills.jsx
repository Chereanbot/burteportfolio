import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const subSkills = [
  {
    category: "Development",
    icon: "🚀",
    description: "Core development skills that power modern web applications",
    skills: [
      { name: "Git & Version Control", progress: 90, description: "Advanced version control and collaboration" },
      { name: "Responsive Design", progress: 95, description: "Creating fluid layouts for all devices" },
      { name: "API Integration", progress: 88, description: "RESTful and GraphQL API implementation" },
      { name: "Performance Optimization", progress: 85, description: "Speed and efficiency improvements" }
    ]
  },
  {
    category: "Design",
    icon: "🎨",
    description: "Creative skills for building beautiful user interfaces",
    skills: [
      { name: "UI/UX Principles", progress: 85, description: "User-centered design approach" },
      { name: "Figma", progress: 80, description: "Modern design tool proficiency" },
      { name: "CSS Animations", progress: 92, description: "Creating engaging motion effects" },
      { name: "Design Systems", progress: 85, description: "Building scalable design frameworks" }
    ]
  }
];

const SubSkills = () => {
  const containerRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <motion.div
      ref={containerRef}
      className="relative py-20 overflow-hidden"
      style={{ opacity, scale, y }}
    >
      {/* Dynamic Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-orange/5 to-cyan/5"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(251, 151, 24, 0.05) 0%, rgba(21, 209, 233, 0.05) 100%)",
            "linear-gradient(45deg, rgba(21, 209, 233, 0.05) 0%, rgba(251, 151, 24, 0.05) 100%)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated Grid */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)]">
        {[...Array(400)].map((_, i) => (
          <motion.div
            key={i}
            className="border-[0.5px] border-white/5"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 3,
              delay: i * 0.01,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.h3
          className="text-4xl text-center mb-16 text-cyan relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Additional Skills
          <motion.div
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-orange via-cyan to-orange"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-12">
          {subSkills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-darkGrey/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 relative overflow-hidden group"
              initial={{ opacity: 0, x: categoryIndex === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Category Header */}
              <motion.div className="flex items-center gap-4 mb-8">
                <motion.span
                  className="text-4xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {category.icon}
                </motion.span>
                <div>
                  <motion.h4
                    className="text-2xl text-orange mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {category.category}
                  </motion.h4>
                  <motion.p
                    className="text-sm text-white/70"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {category.description}
                  </motion.p>
                </div>
              </motion.div>

              {/* Skills List */}
              <div className="space-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + skillIndex * 0.1 }}
                    onHoverStart={() => setHoveredSkill(skill)}
                    onHoverEnd={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between mb-2">
                      <motion.span
                        className="font-medium relative"
                        whileHover={{ scale: 1.05, color: "#15d1e9" }}
                      >
                        {skill.name}
                        
                        {/* Skill Description Tooltip */}
                        <motion.div
                          className="absolute top-full left-0 mt-2 p-2 bg-darkGrey/90 rounded text-sm w-48 pointer-events-none"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ 
                            opacity: hoveredSkill === skill ? 1 : 0,
                            y: hoveredSkill === skill ? 0 : -10
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill.description}
                        </motion.div>
                      </motion.span>
                      <motion.span 
                        className="text-cyan"
                        animate={{
                          scale: hoveredSkill === skill ? [1, 1.2, 1] : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {skill.progress}%
                      </motion.span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden relative">
                      {/* Background Pulse */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange/20 to-cyan/20"
                        animate={{
                          opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      {/* Progress Bar */}
                      <motion.div
                        className="h-full bg-gradient-to-r from-orange to-cyan relative"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                      >
                        {/* Shine Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 1,
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Category Decoration */}
              <motion.div
                className="absolute top-4 right-4 w-16 h-16 rounded-full border-2"
                style={{
                  borderColor: categoryIndex === 0 ? "#15d1e9" : "#fb9718",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange/5 to-cyan/5 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
    </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 2 === 0 ? "#15d1e9" : "#fb9718",
            boxShadow: `0 0 10px ${i % 2 === 0 ? "#15d1e9" : "#fb9718"}`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 50 - 25, 0],
            scale: [0, 1.5, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </motion.div>
  );
};

export default SubSkills;
