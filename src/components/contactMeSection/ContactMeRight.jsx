import ContactInfo from "./ContactInfo";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactMeRight = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.1)}
      className="flex flex-col items-start justify-start gap-12 w-full"
    >
      <motion.div
        variants={fadeIn("down", 0.15)}
        className="w-full flex justify-center"
      >
        <motion.img
          src="/images/email-image.png"
          alt="Contact illustration"
          className="max-w-[250px] rounded-lg opacity-80"
          whileHover={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      <ContactInfo />
    </motion.div>
  );
};

export default ContactMeRight;
