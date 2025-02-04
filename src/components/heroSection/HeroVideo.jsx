import { motion } from "framer-motion";

const HeroVideo = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        style={{ filter: "brightness(0.4)" }}
      >
        <source src="/vedio/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80"
      />

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan"
            initial={{
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: [null, Math.random() * -500],
              x: [null, (Math.random() - 0.5) * 200],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              boxShadow: "0 0 10px #15d1e9",
            }}
          />
        ))}
      </div>

      {/* Additional Gradient Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-cyan/20 opacity-20" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-orange/20 opacity-20" />
      </div>
    </div>
  );
};

export default HeroVideo; 