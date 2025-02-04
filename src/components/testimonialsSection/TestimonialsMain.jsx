import TestimonialsText from "./TestimonialsText";
import AllTestimonials from "./AllTestimonials";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const TestimonialsMain = () => {
  return (
    <div
      name="testimonials"
      className="w-full min-h-screen bg-gradient-to-b from-black to-darkGray py-32"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          variants={fadeIn("top", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <TestimonialsText />
        </motion.div>
        <AllTestimonials />
      </div>
    </div>
  );
};

export default TestimonialsMain; 