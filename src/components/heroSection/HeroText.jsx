import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AnimatedText = ({ children, delay, className }) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.span>
);

const Signature = ({ text, className }) => (
  <div className={`relative ${className}`}>
    <div className="absolute -top-6 -right-4 w-12 h-12 bg-amber-500/10 rounded-full blur-xl animate-ink-splash" />
    <span className="font-signature relative">
      {text}
      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
    </span>
    <div className="absolute -bottom-2 right-0 w-8 h-8 bg-gradient-to-br from-amber-500/20 to-orange-500/10 rounded-full blur-lg animate-pulse" />
  </div>
);

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center relative">
      {/* Enhanced Ink Splash Effect */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-amber-500/10 rounded-full blur-3xl animate-ink-splash" />
      
      {/* Role Title with Enhanced Colors */}
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase font-modern tracking-wider"
      >
        <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 text-transparent bg-clip-text animate-text-shimmer bg-[size:200%_auto] hover:from-orange-500 hover:via-amber-400 hover:to-orange-500 transition-all duration-500">
          Front-End Web Developer & Creative Designer
        </span>
      </motion.h2>

      {/* Main Name with Enhanced Colors */}
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="relative"
      >
        <h1 className="md:text-[4rem] lg:text-7xl sm:text-5xl font-elegant font-bold uppercase tracking-tight">
          <AnimatedText 
            delay={0.2} 
            className="bg-gradient-to-br from-[#00ff7f] via-[#98fb98] to-[#90ee90] text-transparent bg-clip-text drop-shadow-2xl"
          >
            birtukan
          </AnimatedText>
          <br className="sm:hidden md:block tx" />
          <AnimatedText 
            delay={0.4} 
            className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-300 text-transparent bg-clip-text hover:from-amber-400 hover:via-orange-500 hover:to-amber-300 transition-all duration-500 drop-shadow-2xl"
          >
            w/mikael
          </AnimatedText>
        </h1>
        
        {/* Multiple Signatures */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute -bottom-20 right-0 transform"
        >
          {/* Main Signature */}
          <Signature 
            text="birtukan w/mikael" 
            className="text-4xl text-amber-500/70 transform -rotate-[5deg] animate-signature-appear"
          />
          
          {/* Secondary Signature */}
          <Signature 
            text="BM" 
            className="text-3xl text-orange-500/50 absolute -top-4 right-4 transform rotate-[10deg]"
          />
        </motion.div>
      </motion.div>

      {/* Description with Enhanced Paper Effect */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-16 relative paper-texture max-w-3xl"
      >
        <div className="relative z-10 p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-amber-500/5 to-orange-500/5">
          <p className="md:text-2xl sm:text-xl font-handwriting leading-relaxed">
            <AnimatedText 
              delay={0.6} 
              className="bg-gradient-to-br from-amber-100 via-white to-orange-100 text-transparent bg-clip-text"
            >
              Crafting digital experiences that blend creativity with precision. 
              With 1+ years of passionate development, 
              I transform ideas into elegant, user-centric solutions.
            </AnimatedText>
          </p>
          
          {/* Quote Marks */}
          <span className="absolute top-0 left-0 text-6xl font-signature text-amber-500/20 -translate-x-4 -translate-y-6">"</span>
          <span className="absolute bottom-0 right-0 text-6xl font-signature text-amber-500/20 translate-x-4 translate-y-6">"</span>
        </div>
        
        {/* Enhanced Paper Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent pointer-events-none rounded-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent)] pointer-events-none rounded-2xl" />
      </motion.div>

      {/* Enhanced Experience Badge */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
        className="absolute top-0 right-0 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-amber-500/20 p-4 rounded-full backdrop-blur-sm border border-amber-500/30 transform -rotate-12 hover:rotate-0 transition-all duration-500"
      >
        <span className="font-modern text-sm bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">
          1+ Years
          <br />
          Experience
        </span>
      </motion.div>
    </div>
  );
};

export default HeroText;
