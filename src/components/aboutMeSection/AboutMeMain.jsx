import { motion } from "framer-motion";
import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";

const AboutMeMain = () => {
  return (
    <section id="about" className="relative min-h-screen w-full py-20 overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          background: [
            "radial-gradient(circle at 20% 20%, rgba(21, 209, 233, 0.15) 0%, transparent 70%)",
            "radial-gradient(circle at 80% 80%, rgba(251, 151, 24, 0.15) 0%, transparent 70%)",
            "radial-gradient(circle at 20% 20%, rgba(21, 209, 233, 0.15) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Tech Icons Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 bg-gradient-to-br from-cyan/10 to-orange/10 rounded-lg"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 360,
              opacity: 0.1,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan via-orange to-cyan bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% auto",
            }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan to-orange mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <AboutMeImage />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AboutMeText />
          </motion.div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute inset-0 -z-10">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-cyan/20 via-orange/20 to-cyan/20"
            style={{ top: `${(i + 1) * 25}%` }}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{
              scaleX: 1,
              opacity: [0, 0.5, 0],
              transition: {
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              },
            }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutMeMain;
