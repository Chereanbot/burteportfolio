import { motion, useAnimationControls } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket, FaBrain, FaTools, FaUserGraduate, FaPause, FaPlay } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BiCodeAlt } from "react-icons/bi";
import { MdDeveloperMode, MdArchitecture } from "react-icons/md";
import { SiFreelancer } from "react-icons/si";
import { useState, useEffect, useCallback } from "react";

const JourneyStep = ({ icon: Icon, title, subtitle, skills, delay, gradient, isLast, index }) => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    whileHover={{ 
      scale: 1.05, 
      rotateY: 5,
      z: 50 
    }}
    transition={{ 
      duration: 1.5,
      delay: delay,
      type: "spring",
      stiffness: 50
    }}
    className="relative group min-w-[300px] max-w-[300px] transform perspective-1000"
  >
    {/* Step Container */}
    <div className={`relative p-4 rounded-xl backdrop-blur-sm border border-transparent 
      hover:border-amber-500/20 transition-all duration-500 ${gradient} h-full
      shadow-lg hover:shadow-amber-500/20 hover:shadow-2xl`}
    >
      {/* Step Number */}
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center
        animate-pulse">
        <span className="text-amber-500 text-sm font-bold">{index + 1}</span>
      </div>

      {/* Icon and Title Container */}
      <div className="flex flex-col items-center gap-4 text-center transform transition-transform duration-500">
        {/* Icon Circle */}
        <div className="p-4 rounded-full bg-gradient-to-br from-amber-500/10 to-orange-500/10 
          group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all duration-500
          hover:rotate-12 transform"
        >
          <Icon className="text-3xl text-amber-500/70 group-hover:text-amber-500 transition-all duration-500" />
        </div>
        
        {/* Text Content */}
        <div className="flex flex-col items-center">
          <h3 className="font-modern text-xl text-amber-500/90 group-hover:text-amber-500 transition-all duration-500
            hover:scale-105">
            {title}
          </h3>
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-all duration-500 mt-1">
            {subtitle}
          </p>
          {/* Skills List */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-500/70
                  group-hover:bg-amber-500/20 group-hover:text-amber-500 transition-all duration-500
                  hover:scale-110 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute inset-0 border border-amber-500/0 group-hover:border-amber-500/20 transition-all duration-500" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/40 transition-all duration-500 animate-borderFlow" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/40 transition-all duration-500 animate-borderFlowReverse" />
      </div>
    </div>

    {/* Arrow Connection */}
    {!isLast && (
      <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 group-hover:scale-110 transition-all duration-500">
        <HiArrowNarrowRight className="text-2xl text-amber-500/50 group-hover:text-amber-500 animate-pulse" />
      </div>
    )}
  </motion.div>
);

const SubHeroMain = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();

  // Double the journey steps for infinite scroll effect
  const journeySteps = [
    {
      icon: BiCodeAlt,
      title: "Learning Basics",
      subtitle: "First Steps in Coding",
      skills: ["HTML", "CSS", "JavaScript Basics"],
      delay: 0.2,
      gradient: "hover:bg-gradient-to-r hover:from-[#00ff7f]/5 hover:to-[#ffd700]/5"
    },
    {
      icon: FaBrain,
      title: "Core Concepts",
      subtitle: "Understanding Fundamentals",
      skills: ["Programming Logic", "Data Structures", "Algorithms"],
      delay: 0.4,
      gradient: "hover:bg-gradient-to-r hover:from-[#ffd700]/5 hover:to-[#ff69b4]/5"
    },
    {
      icon: FaCode,
      title: "Framework Mastery",
      subtitle: "Learning Modern Tools",
      skills: ["React", "Node.js", "Git"],
      delay: 0.6,
      gradient: "hover:bg-gradient-to-r hover:from-[#ff69b4]/5 hover:to-[#ff00ff]/5"
    },
    {
      icon: FaLaptopCode,
      title: "Project Building",
      subtitle: "Creating Applications",
      skills: ["Full Stack Dev", "APIs", "Databases"],
      delay: 0.8,
      gradient: "hover:bg-gradient-to-r hover:from-[#ff00ff]/5 hover:to-[#00ffff]/5"
    },
    {
      icon: FaTools,
      title: "Advanced Tech",
      subtitle: "Specialized Skills",
      skills: ["TypeScript", "Testing", "DevOps"],
      delay: 1.0,
      gradient: "hover:bg-gradient-to-r hover:from-[#00ffff]/5 hover:to-[#00ff7f]/5"
    },
    {
      icon: MdDeveloperMode,
      title: "Professional Dev",
      subtitle: "Real Projects",
      skills: ["Team Work", "Code Review", "Agile"],
      delay: 1.2,
      gradient: "hover:bg-gradient-to-r hover:from-[#00ff7f]/5 hover:to-[#ffd700]/5"
    },
    {
      icon: MdArchitecture,
      title: "Architecture",
      subtitle: "System Design",
      skills: ["Scalability", "Best Practices", "Performance"],
      delay: 1.4,
      gradient: "hover:bg-gradient-to-r hover:from-[#ffd700]/5 hover:to-[#ff69b4]/5"
    },
    {
      icon: FaUserGraduate,
      title: "Tech Leadership",
      subtitle: "Guiding Teams",
      skills: ["Mentoring", "Architecture", "Innovation"],
      delay: 1.6,
      gradient: "hover:bg-gradient-to-r hover:from-[#ff69b4]/5 hover:to-[#ff00ff]/5"
    },
    {
      icon: FaRocket,
      title: "Senior Developer",
      subtitle: "Mastery & Leadership",
      skills: ["System Design", "Team Leading", "Strategic Planning"],
      delay: 1.8,
      gradient: "hover:bg-gradient-to-r hover:from-[#ff00ff]/5 hover:to-[#00ffff]/5"
    }
  ];

  const doubledSteps = [...journeySteps, ...journeySteps];

  const slideAnimation = {
    animate: {
      x: [0, -100 * journeySteps.length + "%"],
      transition: {
        x: {
          duration: 300,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }
      }
    },
    paused: {
      x: ["0%"],
      transition: {
        duration: 2,
        ease: "easeOut"
      }
    }
  };

  // Enhanced animation state handler with smooth transitions
  const handleAnimationState = useCallback((shouldPause) => {
    setIsPaused(shouldPause);
    if (shouldPause) {
      controls.start({
        x: controls.get("x"),
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      });
    } else {
      controls.start("animate");
    }
  }, [controls]);

  // Auto-pause when scrolling out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          handleAnimationState(true);
        } else {
          handleAnimationState(false);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("journey-slider");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [handleAnimationState]);

  // Initial animation start with delay
  useEffect(() => {
    const timer = setTimeout(() => {
      handleAnimationState(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [handleAnimationState]);

  return (
    <div className="relative w-full py-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent)]" />
      
      {/* Content */}
      <div className="relative px-4">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-3xl font-modern text-amber-500/90 mb-12"
        >
          My Development Journey
        </motion.h2>
        
        {/* Enhanced Controls */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => handleAnimationState(!isPaused)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 
              hover:bg-amber-500/20 text-amber-500 transition-all duration-300"
          >
            {isPaused ? <FaPlay className="animate-pulse" /> : <FaPause />}
            <span>{isPaused ? "Resume" : "Pause"}</span>
          </button>
        </div>

        {/* Scrollable Container with ID for intersection observer */}
        <div className="relative" id="journey-slider">
          <motion.div
            className="flex gap-16 px-8"
            variants={slideAnimation}
            animate={controls}
            initial="paused"
            onMouseEnter={() => handleAnimationState(true)}
            onMouseLeave={() => handleAnimationState(false)}
          >
            {doubledSteps.map((step, index) => (
              <JourneyStep 
                key={index} 
                {...step} 
                index={index % journeySteps.length}
                isLast={index === doubledSteps.length - 1}
              />
            ))}
          </motion.div>
          
          {/* Fade Edges with increased width for better readability */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
        </div>
      </div>
      
      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] animate-tech-grid opacity-30" />
    </div>
  );
};

export default SubHeroMain;

// Add these animations to your global CSS or tailwind.config.js
/*
@keyframes borderFlow {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes borderFlowReverse {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

.animate-borderFlow {
  animation: borderFlow 3s linear infinite;
}

.animate-borderFlowReverse {
  animation: borderFlowReverse 3s linear infinite;
}
*/
