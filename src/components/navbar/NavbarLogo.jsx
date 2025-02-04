import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavbarLogo = () => {
  return (
    <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer">
      {/* Desktop Logo */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:block text-3xl font-bold"
      >
        <motion.span
          className="bg-gradient-to-r from-cyan to-orange bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% auto",
          }}
        >
          BURTE. W/M
        </motion.span>
      </motion.h1>

      {/* Mobile Logo */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:hidden text-2xl font-bold"
      >
        <motion.span
          className="bg-gradient-to-r from-cyan to-orange bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% auto",
          }}
        >
          BURTE. W/M
        </motion.span>
      </motion.h1>
    </Link>
  );
};

export default NavbarLogo;
