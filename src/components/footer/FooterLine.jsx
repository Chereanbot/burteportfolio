import { motion } from "framer-motion";

const FooterLine = () => {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="relative w-full h-[3px] overflow-hidden"
    >
      {/* First Wave */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan to-transparent"
        animate={{
          x: ["100%", "-100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
      />
      {/* Second Wave */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-30"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "linear",
        }}
      />
      {/* Third Wave */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"
        animate={{
          x: ["0%", "200%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};

export default FooterLine;
