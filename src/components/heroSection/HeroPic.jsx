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
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative h-full flex items-center justify-center"
    >
      {/* Technology Badges */}
      <div className="absolute inset-0 z-20">
        {techStack.map((tech, index) => (
          <TechBadge key={index} {...tech} />
        ))}
      </div>

      {/* Main Image Container with Tech Float */}
      <div className="relative z-10 p-4 animate-tech-float">
        <div className="relative group">
          <img
            src="../../public/images/HexaPic.png"
            alt="birtukan w/mikael"
            className="max-h-[450px] w-auto rounded-2xl shadow-2xl relative z-10"
          />
          {/* Tech Pulse Overlay */}
          <div className="absolute inset-0 rounded-2xl animate-tech-pulse" />
          
          {/* Scanning Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/20 via-amber-500/0 to-amber-500/20 animate-tech-scan" />
          
          {/* Tech Circuit Pattern */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,transparent_2px,rgba(245,158,11,0.2)_2px)] bg-[size:8px_8px] animate-tech-circuit" />
        </div>
      </div>

      {/* Tech Pattern Background */}
      <div className="absolute inset-0 -z-10">
        {/* Breathing Animation Container */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Animated Tech Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(245,158,11,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(245,158,11,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-tech-grid" />
          
          {/* Rotating Tech Wave */}
          <div className="absolute inset-0 border-4 border-amber-500/10 rounded-full animate-tech-wave" />
          
          {/* Stair Pattern 1 with Tech Glitch */}
          <div className="absolute inset-0 border-2 border-amber-500/20 rounded-tr-[100px] animate-breathe-1 before:content-[''] before:absolute before:inset-0 before:bg-amber-500/5 before:animate-tech-glitch" />
          
          {/* Stair Pattern 2 with Blinking */}
          <div className="absolute inset-4 border-2 border-amber-500/30 rounded-tr-[80px] animate-breathe-2">
            <div className="absolute inset-0 bg-amber-500/5 animate-tech-blink" />
          </div>
          
          {/* Stair Pattern 3 */}
          <div className="absolute inset-8 border-2 border-amber-500/40 rounded-tr-[60px] animate-breathe-3" />
          
          {/* Tech Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-amber-500/10 to-gray-900 rounded-3xl blur-xl animate-breathe-glow" />
        </div>
      </div>

      {/* Dynamic Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] animate-tech-grid" />
      
      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMSIgZmlsbD0iI2Y1OWUwYiIvPjwvc3ZnPg==')] bg-repeat animate-tech-circuit" />
    </motion.div>
  );
};

export default HeroPic;
