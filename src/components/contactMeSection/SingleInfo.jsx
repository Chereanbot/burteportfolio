import { motion } from "framer-motion";
import { useState } from "react";

const SingleInfo = ({ text, Image, link, copyable, isExternal }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    if (copyable) {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy text:", err);
      }
    } else if (link) {
      window.open(link, isExternal ? "_blank" : "_self");
    }
  };

  return (
    <motion.div
      className="flex gap-4 items-center justify-start p-4 rounded-lg relative group cursor-pointer"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      onClick={handleClick}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan/10 via-blue-400/10 to-cyan/10 rounded-lg opacity-0 group-hover:opacity-100"
        initial={{ scale: 0.95 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon Container */}
      <motion.div
        className="relative"
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.3 }}
      >
        <Image className="text-2xl text-cyan group-hover:text-blue-400 transition-colors duration-300" />
        
        {/* Icon Glow */}
        <motion.div
          className="absolute inset-0 bg-cyan/20 rounded-full filter blur-md opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Text Container */}
      <div className="flex-1 relative">
        <motion.p
          className="text-gray-300 group-hover:text-white transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {text}
        </motion.p>

        {/* Underline Effect */}
        <motion.div
          className="absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-cyan via-blue-400 to-cyan"
          initial={{ width: "0%" }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Copy/Link Indicator */}
      {(copyable || link) && (
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {copied && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-green-500 text-sm"
            >
              ✓
            </motion.span>
          )}
          <span className={`text-xs ${copied ? "text-green-500" : "text-cyan/60"}`}>
            {copied ? "Copied!" : copyable ? "Copy" : "Visit"}
          </span>
        </motion.div>
      )}

      {/* Single Particle Effect */}
      <motion.div
        className="absolute right-2 top-2 w-1 h-1 rounded-full bg-cyan/50"
        initial={{ scale: 0 }}
        whileHover={{
          scale: [0, 1, 0],
          x: [0, 5, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
};

export default SingleInfo;
