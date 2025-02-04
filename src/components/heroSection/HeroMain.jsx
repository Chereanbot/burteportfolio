import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className="relative pt-40 pb-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 -z-20" />
      
      {/* Enhanced Animated Color Mesh */}
      <div className="absolute inset-0 opacity-40 mix-blend-soft-light -z-10">
        {/* SpringGreen Layer */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,#00ff7f_0%,transparent_50%)] animate-pulse" />
        {/* Gold Layer */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,#ffd700_0%,transparent_50%)] animate-pulse delay-100" />
        {/* Pink Layer */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_80%,#ff69b4_0%,transparent_50%)] animate-pulse delay-200" />
        {/* Magenta Layer */}
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,#ff00ff_0%,transparent_50%)] animate-pulse delay-300" />
        {/* Cyan Center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#00ffff_0%,transparent_60%)] animate-pulse delay-400" />
      </div>

      {/* Additional Gradient Effects */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-[#00ff7f]/20 via-transparent to-[#ffd700]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff69b4]/20 via-transparent to-[#00ffff]/20" />
      </div>

      {/* Content */}
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4 z-10">
        <HeroText />
        <HeroPic />
      </div>

      {/* Enhanced Overlay Texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-30 mix-blend-overlay pointer-events-none -z-10" />
      
      {/* Animated Glow Effects */}
      <div className="absolute inset-0 opacity-20 mix-blend-screen -z-10">
        <div className="absolute w-full h-1/3 top-0 bg-gradient-to-b from-[#00ff7f]/30 to-transparent animate-pulse delay-100" />
        <div className="absolute w-full h-1/3 bottom-0 bg-gradient-to-t from-[#ff00ff]/30 to-transparent animate-pulse delay-300" />
      </div>
    </div>
  );
};

export default HeroMain;
