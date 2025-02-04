import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

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
  const techStack = [
    // North-South Pair (bir)
    { 
      name: "React", 
      direction: "n top-0 left-1/2 -translate-x-1/2 -translate-y-16", 
      pair: { lineStyle: "h-32 left-1/2 top-full" },
      letter: "bir",
      delay: "0s" 
    },
    { 
      name: "Node.js", 
      direction: "s bottom-0 left-1/2 -translate-x-1/2 translate-y-16", 
      pair: { lineStyle: "h-32 left-1/2 bottom-full" },
      letter: "bir",
      delay: "0s" 
    },
    // East-West Pair (tukan)
    { 
      name: "JavaScript", 
      direction: "e right-0 top-1/2 translate-x-16 -translate-y-1/2", 
      pair: { lineStyle: "w-32 right-full top-1/2" },
      letter: "tukan",
      delay: "0.4s" 
    },
    { 
      name: "TypeScript", 
      direction: "w left-0 top-1/2 -translate-x-16 -translate-y-1/2", 
      pair: { lineStyle: "w-32 left-full top-1/2" },
      letter: "tukan",
      delay: "0.4s" 
    },
    // Northeast-Southwest Pair (w/)
    { 
      name: "Next.js", 
      direction: "ne top-8 right-8 translate-x-8 -translate-y-8", 
      pair: { lineStyle: "h-[200%] rotate-[135deg] origin-bottom-left left-1/2 top-full" },
      letter: "w/",
      delay: "0.8s" 
    },
    { 
      name: "MongoDB", 
      direction: "sw bottom-8 left-8 -translate-x-8 translate-y-8", 
      pair: { lineStyle: "h-[200%] rotate-[135deg] origin-top-right right-1/2 bottom-full" },
      letter: "w/",
      delay: "0.8s" 
    },
    // Northwest-Southeast Pair (mikael)
    { 
      name: "TailwindCSS", 
      direction: "nw top-8 left-8 -translate-x-8 -translate-y-8", 
      pair: { lineStyle: "h-[200%] rotate-[45deg] origin-bottom-right right-1/2 top-full" },
      letter: "mikael",
      delay: "1.2s" 
    },
    { 
      name: "Redux", 
      direction: "se bottom-8 right-8 translate-x-8 translate-y-8", 
      pair: { lineStyle: "h-[200%] rotate-[45deg] origin-top-left left-1/2 bottom-full" },
      letter: "mikael",
      delay: "1.2s" 
    }
  ];

  return (
    <motion.div
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto"
    >
      <img
        src="/images/me.png"
        alt="Hero"
        className="w-full h-full object-contain"
        loading="eager"
        onError={(e) => {
          console.error('Image failed to load:', e);
          e.target.src = '/images/fallback-image.png';
        }}
      />
    </motion.div>
  );
};

export default HeroPic;
