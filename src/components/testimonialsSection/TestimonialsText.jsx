import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const TestimonialsText = () => {
  return (
    <div className="w-full flex flex-col items-center gap-6 text-center px-4">
      {/* Top Decorative Elements */}
      <motion.div 
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex items-center gap-4 mb-2"
      >
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent"></div>
        <span className="text-cyan text-2xl animate-pulse">✦</span>
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent"></div>
      </motion.div>

      {/* Main Title with Enhanced Animation */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="space-y-3"
      >
        <div className="flex items-center justify-center gap-2 text-cyan/60 text-sm mb-2">
          <span>⭐</span>
          <span>TESTIMONIALS</span>
          <span>⭐</span>
        </div>
        <h2 className="text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-blue-400 to-cyan animate-gradient">
            Client Success
          </span>{" "}
          <span className="text-white">Stories</span>
        </h2>
        <p className="text-xl bg-gradient-to-r from-cyan/80 via-blue-400/80 to-cyan/80 text-transparent bg-clip-text font-medium">
          Real People, Real Impact, Real Results
        </p>
      </motion.div>

      {/* Enhanced Description */}
      <motion.p 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-gray-400 max-w-2xl font-body text-base leading-relaxed"
      >
        Discover how we've transformed businesses across Ethiopia with innovative digital solutions. 
        From <span className="text-cyan/80">startups to enterprises</span>, our work has created 
        <span className="text-cyan/80"> lasting impact</span> and driven 
        <span className="text-cyan/80"> remarkable success</span> for our clients.
      </motion.p>

      {/* Enhanced Stats with Icons */}
      <motion.div 
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-wrap justify-center gap-12 mt-4"
      >
        <div className="text-center group">
          <div className="mb-2 text-2xl group-hover:scale-110 transition-all duration-300">🎯</div>
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400 group-hover:scale-110 transition-all duration-300">97%</h3>
          <p className="text-gray-400 text-sm mt-1">Client Satisfaction</p>
        </div>
        <div className="text-center group">
          <div className="mb-2 text-2xl group-hover:scale-110 transition-all duration-300">🚀</div>
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan group-hover:scale-110 transition-all duration-300">10+</h3>
          <p className="text-gray-400 text-sm mt-1">Projects Completed</p>
        </div>
        <div className="text-center group">
          <div className="mb-2 text-2xl group-hover:scale-110 transition-all duration-300">💫</div>
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400 group-hover:scale-110 transition-all duration-300">58+</h3>
          <p className="text-gray-400 text-sm mt-1">Happy Clients</p>
        </div>
      </motion.div>

      {/* Enhanced Bottom Decoration */}
      <motion.div 
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex items-center gap-4 mt-4"
      >
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent"></div>
        <span className="text-cyan/50 animate-pulse">●</span>
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default TestimonialsText; 