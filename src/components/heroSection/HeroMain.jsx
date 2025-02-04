import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroVideo from "./HeroVideo";
import { motion } from "framer-motion";

const HeroMain = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center py-16 overflow-hidden" id="home">
      {/* Video Background */}
      <HeroVideo />

      {/* Content Container */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <HeroText />
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center items-center z-10"
          >
            <HeroPic />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <div className="w-[2px] h-[50px] bg-gradient-to-b from-cyan to-orange" />
          <span className="text-white/50 text-sm mt-2">Scroll Down</span>
        </motion.div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-[1]" />
    </section>
  );
};

export default HeroMain;
