import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactText = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      className="space-y-4"
    >
      <h2 className="text-3xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400">
          Get In Touch
        </span>
      </h2>
      <p className="text-gray-400 max-w-md leading-relaxed">
        Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        <span className="block mt-2 text-cyan/80">Your message is just a click away!</span>
      </p>
      
      {/* Features */}
      <div className="flex flex-wrap gap-4 mt-6">
        {["Fast Response", "Professional Support", "Creative Solutions"].map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", 0.05 * (index + 1))}
            className="px-4 py-2 rounded-full bg-cyan/5 border border-cyan/20 text-sm text-cyan/80"
          >
            {feature}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactText;
