const HeroGradient = () => {
  return (
    <div className="relative">
      {/* SpringGreen Shadows */}
      <div className="absolute top-0 right-[400px] -z-10 w-[500px] h-[500px] bg-[#00ff7f] blur-[150px] opacity-25 animate-pulse" />
      <div className="absolute top-[5%] left-0 -z-10 w-[400px] h-[400px] bg-[#00ff7f] blur-[150px] opacity-15 animate-pulse delay-75" />

      {/* Gold Shadows */}
      <div className="absolute top-[10%] right-0 -z-10 w-[450px] h-[450px] bg-[#ffd700] blur-[150px] opacity-25 animate-pulse delay-150" />
      <div className="absolute top-[15%] left-[20%] -z-10 w-[350px] h-[350px] bg-[#ffd700] blur-[150px] opacity-15 animate-pulse delay-200" />

      {/* Pink & Magenta Shadows */}
      <div className="absolute top-[20%] right-[20%] -z-10 w-[600px] h-[600px] bg-[#ff69b4] blur-[150px] opacity-20 animate-pulse delay-300" />
      <div className="absolute top-[25%] left-[40%] -z-10 w-[550px] h-[550px] bg-[#ff00ff] blur-[150px] opacity-15 animate-pulse delay-400" />

      {/* Cyan Shadows */}
      <div className="absolute top-[30%] right-[30%] -z-10 w-[500px] h-[500px] bg-[#00ffff] blur-[150px] opacity-20 animate-pulse delay-500" />
      
      {/* Enhanced Gradient Orbs */}
      <div className="absolute inset-0 -z-10">
        {/* SpringGreen to Gold Orb */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#00ff7f] via-[#98fb98] to-[#ffd700] rounded-full blur-3xl opacity-15 animate-float-ne" />
        
        {/* Pink to Magenta Orb */}
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#ff69b4] via-[#ff1493] to-[#ff00ff] rounded-full blur-3xl opacity-15 animate-float-sw" />
        
        {/* Cyan to SpringGreen Orb */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-[#00ffff] via-[#00fa9a] to-[#00ff7f] rounded-full blur-3xl opacity-15 animate-float-se" />
      </div>

      {/* Additional Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-[#00ff7f]/10 via-transparent to-[#ffd700]/10 animate-pulse delay-200" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff69b4]/10 via-[#ff00ff]/10 to-[#00ffff]/10 animate-pulse delay-400" />
      </div>
    </div>
  );
};

export default HeroGradient;
