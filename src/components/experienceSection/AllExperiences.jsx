import SingleExperience from "./SingleExperience";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";

// Arrow component with animation
const AnimatedArrow = () => (
  <motion.div
    className="flex items-center justify-center w-16 relative"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {/* Main Arrow */}
    <motion.div
      className="relative"
      animate={{
        x: [0, 10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <FaArrowRight className="text-3xl text-orange" />
      
      {/* Glowing effect */}
      <motion.div
        className="absolute inset-0 bg-orange rounded-full filter blur-md"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>

    {/* Trailing particles */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-orange"
        animate={{
          x: [-20, 0],
          opacity: [0.8, 0],
          scale: [1, 0],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          delay: i * 0.2,
          ease: "easeOut",
        }}
      />
    ))}
  </motion.div>
);

const experiences = [
  {
    job: "Frontend Developer",
    company: "Dilla University",
    date: "2022 - Present",
    responsibilities: [

      "Leading frontend development team of 5 developers",
      "Implementing modern UI/UX with React and TailwindCSS",
      "Optimizing application performance and load times",
      "Mentoring junior developers and conducting code reviews",
    ],
  },
  {
    job: "Technical Lead project",
    company: "Dilla University",
    date: "2023 - Present",
    responsibilities: [
      "Leading web development bootcamp sessions",
      "Creating comprehensive curriculum for React and Node.js",
      "Mentoring 50+ students through their coding journey",
      "Maintaining 95% student satisfaction rate",
    ],
  },
  {
    job: "Senior code trainer",
    company: "Dilla University",
    date: "2024 - Present",
    responsibilities: [
      "Developing advanced JavaScript and React curriculum",
      "Leading workshops on modern web development practices",
      "Creating hands-on projects for real-world experience",
      "Achieving 90% student placement rate",
    ],
  },
  {
    job: "Freelance Developer",
    company: "Dilla University",
    date: "2022 - Present",

    responsibilities: [
      "Completed 10+ successful web applications",
      "Maintained 100% client satisfaction rate",
      "Specialized in e-commerce and SaaS platforms",
      "Implemented responsive designs for all devices",
    ],
  },
  {
    job: "Technical Consultant",
    company: "Dilla University",
    date: "2023 - Present",

    responsibilities: [
      "Providing expert guidance on web architecture",
      "Conducting technical audits and optimizations",
      "Implementing best practices for scalability",
      "Reducing loading times by 60% on average",
    ],
  },
  {
    job: "Open Source Contributor",
    company: "Dilla University",
    date: "2022 - Present",

    responsibilities: [
      "Contributing to major React libraries",
      "Developing custom components for community use",
      "Collaborating with global developer teams",
      "Maintaining documentation and examples",
    ],
  },
];

const AllExperiences = () => {
  const containerRef = useRef(null);
  const controls = useAnimationControls();

  // Calculate total width for sliding animation
  useEffect(() => {
    const animate = async () => {
      const containerWidth = containerRef.current?.scrollWidth || 0;
      const viewportWidth = containerRef.current?.offsetWidth || 0;
      const distance = containerWidth - viewportWidth;

      await controls.start({
        x: [-distance, 0],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    animate();
  }, [controls]);

  return (
    <div className="w-full overflow-hidden relative">
      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-darkGrey to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-darkGrey to-transparent z-10" />

      <motion.div
        ref={containerRef}
        className="flex items-center gap-4 py-8"
        animate={controls}
        style={{ cursor: "grab" }}
        whileTap={{ cursor: "grabbing" }}
      >
        {/* Double the experiences for seamless loop */}
        {[...experiences, ...experiences].map((experience, index) => (
          <motion.div
            key={index}
            className="flex items-center"
          >
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
            >
              <SingleExperience experience={experience} />
            </motion.div>
            
            {/* Add arrow between cards except for the last one */}
            {index < experiences.length * 2 - 1 && (
              <AnimatedArrow />
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Interactive pause on hover container */}
      <motion.div
        className="absolute inset-0 z-20 opacity-0"
        whileHover={{
          opacity: 1,
          transition: { duration: 0.2 },
        }}
        onHoverStart={() => {
          controls.stop();
        }}
        onHoverEnd={() => {
          controls.start({
            x: [-containerRef.current?.scrollWidth || 0, 0],
            transition: {
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            },
          });
        }}
      />
    </div>
  );
};

export default AllExperiences;
