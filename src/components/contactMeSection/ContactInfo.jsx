import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import SingleInfo from "./SingleInfo";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: HiOutlineMail,
      text: "birtukan.wmikael@gmail.com",
      link: "mailto:birtukan.wmikael@gmail.com",
      copyable: true
    },
    {
      icon: FiPhone,
      text: "+251900908060",
      link: "tel:+251900908060",
      copyable: true
    },
    {
      icon: IoLocationOutline,
      text: "Addis Ababa, Ethiopia",
      link: "https://maps.google.com/?q=Addis Ababa,Ethiopia",
      copyable: false
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      text: "GitHub Profile",
      link: "https://github.com/chereanbot"
    },
    {
      icon: FaLinkedin,
      text: "LinkedIn Profile",
      link: "https://linkedin.com/in/chereanbot"
    },
    {
      icon: FaInstagram,
      text: "Instagram Profile",
      link: "https://instagram.com/chereanbot"
    }
  ];

  return (
    <motion.div
      variants={fadeIn("left", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="flex flex-col gap-8"
    >
      {/* Contact Information */}
      <div className="space-y-6">
        <motion.h3 
          className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400"
          variants={fadeIn("left", 0.2)}
        >
          Contact Information
        </motion.h3>
        <div className="flex flex-col gap-4">
          {contactDetails.map((detail, index) => (
            <SingleInfo
              key={index}
              text={detail.text}
              Image={detail.icon}
              link={detail.link}
              copyable={detail.copyable}
            />
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-6">
        <motion.h3 
          className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400"
          variants={fadeIn("left", 0.2)}
        >
          Let's Connect
        </motion.h3>
        <div className="flex flex-col gap-4">
          {socialLinks.map((social, index) => (
            <SingleInfo
              key={index}
              text={social.text}
              Image={social.icon}
              link={social.link}
              isExternal={true}
            />
          ))}
        </div>
      </div>

      {/* Availability Status */}
      <motion.div
        variants={fadeIn("up", 0.4)}
        className="mt-4 p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-cyan/10 border border-green-500/20"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <p className="text-green-500">Available for new projects</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
