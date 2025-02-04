import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaPaintBrush, FaRocket, FaPlay } from "react-icons/fa";
import { useState } from "react";
import VideoModal from "./VideoModal";

const HeroText = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/chereanbot", color: "hover:text-cyan", label: "GitHub" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/cherine-tafework", color: "hover:text-orange", label: "LinkedIn" },
    { icon: FaTwitter, url: "https://twitter.com/cherean", color: "hover:text-cyan", label: "Twitter" }
  ];

  const skills = [
    { icon: FaCode, text: "Full Stack Development", color: "from-cyan to-blue-500" },
    { icon: FaPaintBrush, text: "UI/UX Design", color: "from-orange to-pink-500" },
    { icon: FaRocket, text: "Performance Optimization", color: "from-green-400 to-cyan" }
  ];

  return (
    <div className="relative">
      {/* Video Modal */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
      
      {/* Main Content */}
      <div className="flex flex-col gap-6">
        {/* Greeting */}
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-light"
        >
          <motion.span
            animate={{
              color: ["#15d1e9", "#fb9718", "#15d1e9"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="font-medium"
          >
            Hello, I'm
          </motion.span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl lg:text-7xl font-bold relative"
        >
          <motion.span
            className="bg-gradient-to-r from-cyan via-orange to-cyan bg-clip-text text-transparent bg-[length:200%_auto]"
            animate={{
              backgroundPosition: ["0%", "200%"],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            Birtukan W/Mikael
          </motion.span>
          {/* Decorative Elements */}
          <motion.div
            className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-cyan"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-orange"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </motion.h1>

        {/* Animated Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl lg:text-4xl font-semibold flex items-center gap-2"
        >
          <span className="text-white/80">I'm a</span>
          <div className="relative inline-block">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Web3 Developer",
                2000,
                "AI Enthusiast",
                2000
              ]}
              speed={50}
              className="text-gradient"
              wrapper="span"
              repeat={Infinity}
            />
            <motion.div
              className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-cyan to-orange"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap gap-4 mt-2"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <skill.icon className={`text-lg bg-gradient-to-r ${skill.color} text-transparent bg-clip-text`} />
              <span className="text-sm text-white/80">{skill.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-[600px] text-white/70 text-lg leading-relaxed relative"
        >
          <span className="relative">
            Crafting innovative digital solutions with a passion for clean code and exceptional user experiences. Specializing in modern web technologies and scalable applications.
            <motion.div
              className="absolute -bottom-2 left-0 h-[1px] bg-gradient-to-r from-cyan/50 to-orange/50"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1 }}
            />
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap gap-4 mt-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(21, 209, 233, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan to-orange rounded-full text-white font-medium relative overflow-hidden group"
          >
            <span className="relative z-10">Get in Touch</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange to-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(251, 151, 24, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-white/20 rounded-full text-white font-medium hover:border-orange transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan/10 to-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.a>
          <motion.button
            onClick={() => setIsVideoModalOpen(true)}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(21, 209, 233, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-white/20 rounded-full text-white font-medium hover:border-cyan transition-all duration-300 relative overflow-hidden group flex items-center gap-2"
          >
            <FaPlay className="text-sm" />
            <span className="relative z-10">View Background Video</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan/10 to-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>
      </motion.div>

        {/* Social Links */}
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex gap-6 mt-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`text-2xl text-white/70 ${social.color} transition-all duration-300 relative group`}
            >
              <social.icon />
              <motion.span
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {social.label}
              </motion.span>
            </motion.a>
          ))}
        </motion.div>
        </div>
        
      {/* Background Elements */}
      <motion.div
        className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 30% 30%, rgba(21, 209, 233, 0.1) 0%, transparent 70%)",
            "radial-gradient(circle at 70% 70%, rgba(251, 151, 24, 0.1) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Decorative Lines */}
      <div className="absolute -z-10 inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-cyan/20 via-orange/20 to-cyan/20"
            style={{ top: `${(i + 1) * 25}%` }}
            animate={{
              opacity: [0, 0.5, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroText;
