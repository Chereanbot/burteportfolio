import { FaGithub, FaExternalLinkAlt, FaRegLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ 
  name, 
  image, 
  description, 
  link, 
  index = 0 
}) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2 * index)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="group relative overflow-hidden border-2 border-white/50 rounded-xl h-[300px] md:h-[400px]"
    >
      {/* overlay */}
      <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
      {/* img */}
      <img
        className="group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
        src={image}
        alt={name}
        loading="lazy"
        onError={(e) => {
          console.error('Project image failed to load:', e);
          e.target.src = '/images/fallback-project.jpg';
        }}
      />
      {/* pretitle */}
      <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
        <span className="text-gradient text-[20px] lg:text-[26px]">{name}</span>
      </div>
      {/* title */}
      <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
        <span className="text-white text-[16px] lg:text-[20px]">{description}</span>
      </div>
      {/* Link */}
      {link && (
        <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gradient hover:underline text-[16px] lg:text-[20px]"
          >
            View Project →
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default SingleProject;
