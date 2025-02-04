import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { IoArrowUp } from "react-icons/io5";

const FooterMain = () => {
  const footerLinks = [
    { name: "About Me", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Experience", section: "experience" },
    { name: "Projects", section: "projects" },
    { name: "Contact", section: "contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-2xl" />,
      url: "https://github.com/chereanbot",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-2xl" />,
      url: "https://linkedin.com/in/chereanbot",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-2xl" />,
      url: "https://twitter.com/chereanbot",
    },
    {
      name: "Email",
      icon: <MdEmail className="text-2xl" />,
      url: "mailto:birtukan.wmikael@gmail.com",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-24">
      {/* Mountains and Waves Animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        {/* First Wave - Back Mountain */}
        <svg
          className="relative block w-full h-[150px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.15 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-cyan/20 stroke-cyan/30"
            strokeWidth="1"
          />
        </svg>

        {/* Second Wave - Middle Mountain */}
        <svg
          className="relative block w-full h-[150px] -mt-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-green-400/10 stroke-green-400/20"
            strokeWidth="1"
          />
        </svg>

        {/* Third Wave - Front Mountain */}
        <svg
          className="relative block w-full h-[150px] -mt-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.4 }}
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-black/40 stroke-cyan/20"
            strokeWidth="2"
          />
        </svg>

        {/* Animated Wave Overlay */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-[50px] opacity-20"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 800 88.7\'%3E%3Cpath d=\'M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z\' fill=\'%23ffffff\'/%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat-x',
            backgroundSize: '800px 100px',
            backgroundPosition: 'center bottom',
          }}
          animate={{
            backgroundPositionX: ['-800px', '0px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative bg-black/40 backdrop-blur-md border-t border-cyan/10 z-10">
        <div className="max-w-[1200px] mx-auto px-4 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan via-blue-400 to-cyan bg-clip-text text-transparent">
                  Birtukan W/Mikael
                </h2>
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-cyan via-blue-400 to-cyan"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </motion.div>
              <motion.p 
                className="text-lightGrey"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Transforming ideas into exceptional digital experiences
              </motion.p>
              {/* Social Links */}
              <div className="flex gap-4 mt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-black/20 text-lightGrey hover:text-cyan hover:bg-black/40 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <motion.h3 
                className="text-xl font-semibold text-white flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Quick Links
              </motion.h3>
              <ul className="space-y-2">
                {footerLinks.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-120}
                      to={item.section}
                      className="text-lightGrey hover:text-cyan transition-all duration-300 cursor-pointer block hover:translate-x-2"
                    >
                      → {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <motion.h3 
                className="text-xl font-semibold text-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Let's Connect
              </motion.h3>
              <div className="space-y-3 text-lightGrey">
                <motion.div 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <MdEmail className="text-cyan" />
                  <p>birtukan.wmikael@gmail.com</p>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <MdLocationOn className="text-cyan" />
                  <p>Addis Ababa, Ethiopia</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="inline-block"
                >
                  <p className="px-4 py-1 rounded-full bg-gradient-to-r from-cyan/20 via-blue-400/20 to-cyan/20 text-cyan border border-cyan/30 hover:from-cyan/30 hover:via-blue-400/30 hover:to-cyan/30 transition-all duration-300 cursor-pointer">
                    ✨ Available for Work
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <motion.div 
            className="text-center pt-8 border-t border-cyan/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lightGrey text-sm flex items-center justify-center gap-2">
              © {new Date().getFullYear()} Birtukan W/Mikael | Made with 
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                <FaHeart className="text-cyan" />
              </motion.span>
              | All Rights Reserved
            </p>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="absolute bottom-4 right-4 p-3 bg-gradient-to-r from-cyan via-blue-400 to-cyan rounded-full text-white shadow-lg hover:shadow-cyan/20"
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <IoArrowUp className="text-xl" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
