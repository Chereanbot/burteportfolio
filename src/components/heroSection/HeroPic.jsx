import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCode } from "react-icons/fa";

const TechBadge = ({ name, direction, pair, letter, delay = "0s" }) => (
  <div 
    className={`absolute ${direction} animate-float-${direction.split(' ')[0]} group`} 
    style={{ animationDelay: delay }}
  >
    <div className="relative">
      <div className="absolute inset-0 bg-amber-500/20 rounded-full animate-tech-shell-spin blur-sm group-hover:bg-amber-500/40 transition-all duration-300" />
      <div className="relative bg-gray-900/80 text-amber-500 px-3 py-1 rounded-full border border-amber-500/30 backdrop-blur-sm font-mono text-sm group-hover:border-amber-500 transition-all duration-300">
        <span className="group-hover:opacity-0 transition-opacity duration-300">{name}</span>
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">{letter}</span>
      </div>
    </div>
    {/* Enhanced Connecting Line Container */}
    <div className={`absolute ${pair.lineStyle} transition-all duration-500 overflow-hidden`}>
      {/* Main Bold Line */}
      <div className="absolute inset-0 border-l-4 border-amber-500/0 group-hover:border-amber-500/70 transition-all duration-500 animate-line-pulse" />
      
      {/* Outer Glow */}
      <div className="absolute inset-0 border-l-8 border-amber-500/0 group-hover:border-amber-500/20 blur-lg transition-all duration-500 animate-line-glow" />
      
      {/* Inner Glow */}
      <div className="absolute inset-0 border-l-6 border-amber-500/0 group-hover:border-amber-500/30 blur-md transition-all duration-500 animate-line-glow" style={{ animationDelay: '0.5s' }} />
      
      {/* Animated Dash Pattern */}
      <div className="absolute inset-0 border-l-2 border-dashed border-amber-500/0 group-hover:border-amber-500/40 animate-tech-circuit transition-all duration-500" />
      
      {/* Flowing Light Effect */}
      <div className="absolute inset-0 w-2 bg-gradient-to-b from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/40 transition-all duration-500 animate-line-flow" />
      
      {/* Secondary Flowing Light */}
      <div className="absolute inset-0 w-2 bg-gradient-to-b from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/20 transition-all duration-500 animate-line-flow" style={{ animationDelay: '1.5s' }} />
    </div>
  </div>
);

const HeroPic = () => {
  const techIcons = [
    { Icon: FaReact, color: "text-cyan", delay: 0 },
    { Icon: FaNodeJs, color: "text-green-500", delay: 0.2 },
    { Icon: FaDatabase, color: "text-orange", delay: 0.4 },
    { Icon: FaCode, color: "text-purple-500", delay: 0.6 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }}
      className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] group"
    >
      {/* Orbital Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border-2 border-dashed border-white/10"
        style={{ transform: "rotate(45deg)" }}
      />

      {/* Tech Icons Orbit */}
      {techIcons.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color} text-2xl`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 1, duration: 0.5 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", delay }}
            style={{
              transformOrigin: "150px 150px",
              transform: `rotate(${index * 90}deg) translateX(150px)`
            }}
          >
            <Icon />
          </motion.div>
        </motion.div>
      ))}

      {/* Background Glow */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 40px rgba(21, 209, 233, 0.3)",
            "0 0 80px rgba(251, 151, 24, 0.3)",
            "0 0 40px rgba(21, 209, 233, 0.3)"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan/20 to-orange/20 blur-xl"
      />

      {/* Profile Picture Container */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 p-2 backdrop-blur-sm"
      >
        {/* Rotating Border */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, #15d1e9, #fb9718, #15d1e9)",
            opacity: 0.3
          }}
        />

        {/* Image Container */}
        <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-cyan/10 to-orange/10">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/images/HexaPic.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          {/* Interactive Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ opacity: 1 }}
          >
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-white/90 text-sm font-medium"
              >
                Full Stack Developer
              </motion.span>
          </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className={`w-full h-full rounded-full ${
            i % 2 === 0 ? 'bg-cyan' : 'bg-orange'
          } blur-sm opacity-50`} />
        </motion.div>
      ))}

      {/* Tech Circuit Lines */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full"
            style={{ transform: `rotate(${i * 45}deg)` }}
          >
            <motion.div
              className="absolute top-0 left-1/2 w-[1px] h-1/4 bg-gradient-to-b from-cyan/50 to-transparent"
              animate={{
                scaleY: [0, 1, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.5,
                repeat: Infinity
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroPic;
