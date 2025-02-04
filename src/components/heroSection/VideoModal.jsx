import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPlay, FaPause, FaExpand } from "react-icons/fa";
import { useState, useRef } from "react";

const VideoModal = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl"
          >
            {/* Video Player */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay={isPlaying}
              loop
              playsInline
            >
              <source src="/vedio/hero-bg.mp4" type="video/mp4" />
            </video>

            {/* Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                {/* Play/Pause Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePlayPause}
                  className="text-white hover:text-cyan transition-colors duration-300"
                >
                  {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                </motion.button>

                {/* Fullscreen Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleFullscreen}
                  className="text-white hover:text-cyan transition-colors duration-300"
                >
                  <FaExpand size={20} />
                </motion.button>
              </div>
            </div>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-orange transition-colors duration-300"
            >
              <FaTimes size={24} />
            </motion.button>

            {/* Video Title */}
            <div className="absolute top-4 left-4">
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-xl font-medium"
              >
                Background Video
              </motion.h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal; 