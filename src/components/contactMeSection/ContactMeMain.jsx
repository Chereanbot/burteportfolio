import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-darkGray py-32"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent"></div>
            <span className="text-cyan text-2xl">✦</span>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent"></div>
          </div>
          
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-blue-400 to-cyan">
              Let's Work
            </span>{" "}
            <span className="text-white">Together</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together. 
            I'm just a message away from turning your ideas into reality.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-16 bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-cyan/10"
        >
          <ContactMeLeft />
          <ContactMeRight />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactMeMain;
