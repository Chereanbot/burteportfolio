import { FaGithub, FaExternalLinkAlt, FaChartLine, FaRocket, FaCode, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ 
  name,
  shortDescription,
  fullDescription,
  image,
  link,
  github,
  category,
  year,
  techStack = [],
  features = [],
  metrics = {},
  index = 0 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    console.error('Project image failed to load:', image);
  };

  return (
    <motion.div
      variants={fadeIn("up", 0.2 * index)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="group relative overflow-hidden border-2 border-white/50 rounded-xl h-[300px] md:h-[400px] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
      style={{ 
        transform: isExpanded ? 'scale(1.02)' : 'scale(1)',
        transition: 'all 0.5s ease-in-out'
      }}
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Loading Skeleton */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gray-900 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Background Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>

      {/* Overlay */}
      <div className={`w-full h-full absolute z-40 transition-all duration-500 ${
        isExpanded ? 'bg-black/90' : 'group-hover:bg-black/70'
      } backdrop-blur-sm`}></div>
      
      {/* Image */}
      <motion.img
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full h-full object-cover ${
          !imageLoaded ? 'opacity-0' : 'opacity-100'
        } transition-all duration-500`}
        src={imageError ? '/images/fallback-project.jpg' : image}
        alt={name}
        loading="lazy"
        onLoad={handleImageLoad}
        onError={handleImageError}
      />

      {/* Content */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 flex flex-col justify-end p-8 z-50`}
        >
          {/* Category Badge */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full shadow-lg flex items-center gap-2">
              <FaCode className="text-xs" />
              {category} • {year}
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4"
          >
            <h3 className="text-gradient text-[20px] lg:text-[26px] font-bold">
              {name}
            </h3>
          </motion.div>
          
          {/* Description */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-2"
          >
            <p className="text-white/90 text-[16px] lg:text-[18px]">
              {isExpanded ? fullDescription : shortDescription}
            </p>
          </motion.div>

          {/* Tech Stack */}
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 flex flex-wrap gap-2"
            >
              {techStack.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-md text-sm text-white/80 flex items-center gap-2"
                >
                  <FaStar className="text-xs text-yellow-500" />
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          )}

          {/* Metrics */}
          {isExpanded && metrics && Object.keys(metrics).length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-4 grid grid-cols-2 gap-4"
            >
              {Object.entries(metrics).map(([key, value], i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  className="flex items-center gap-2 bg-white/5 rounded-lg p-2"
                >
                  <FaChartLine className="text-gradient" />
                  <span className="text-white/80 text-sm capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}: <span className="text-gradient font-semibold">{value}</span>
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Features */}
          {isExpanded && features && features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-4 grid grid-cols-2 gap-2"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  className="flex items-center gap-2 bg-white/5 rounded-lg p-2"
                >
                  <FaRocket className="text-gradient text-sm" />
                  <span className="text-white/80 text-sm">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-6 flex gap-4"
          >
            {link && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.a>
            )}
            {github && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-black text-white px-4 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub /> Code
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default SingleProject;
