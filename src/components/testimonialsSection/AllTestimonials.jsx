import SingleTestimonial from "./SingleTestimonial";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    text: "✨ Absolutely brilliant work on our e-commerce platform! The integration of local payment systems and the stunning UI design transformed our online presence completely.",
    author: "Cherinet A.",
    position: "CEO, Ethiopian E-Commerce Solutions",
    image: "/images/testimonial1.jpg"

  },
  {
    text: "🚀 Revolutionary inventory system implementation! The seamless integration with our existing processes and the powerful analytics dashboard exceeded expectations.",
    author: "Beity G.",
    position: "Operations Director, BT Enterprises",
    image: "/images/testimonial2.jpg"
  },
  {
    text: "🍽️ Game-changing restaurant management platform! The real-time order tracking and smart inventory management have made our operations incredibly efficient.",
    author: "Abinet T.",
    position: "Owner, Digital Restaurant Solutions",
    image: "/images/testimonial-2.jpg"
  },
  {
    text: "📱 Phenomenal delivery app development! The intuitive interface and lightning-fast performance have made our service the talk of the town.",
    author: "Dinex G.",
    position: "Founder, FastTrack Delivery",
    image: "/images/testimonial4.jpg"

  },
  {
    text: "💫 Masterful digital transformation of our business! The modern solutions perfectly blend innovation with user-friendly design.",
    author: "Bisrat A.",
    position: "Director, Modern Trade Solutions",
    image: "/images/about-me.jpg"

  },
  {
    text: "📚 Outstanding educational platform development! The interactive learning features and seamless virtual classroom integration are revolutionary.",
    author: "Efi",
    position: "Principal, Digital Education Institute",
    image: "/images/testimonial6.jpg"
  },
  {
    text: "⚕️ Incredible healthcare system implementation! The patient management features and appointment scheduling have revolutionized our clinic operations.",
    author: "Abdiro",
    position: "Medical Director, Health Tech Solutions",
    image: "/images/testimonial7.jpg"
  },
  {
    text: "💼 Exceptional CRM solution delivery! The automated workflows and intuitive interface have transformed our customer relationship management.",
    author: "Endale ",
    position: "Sales Director, Business Solutions Ltd",
    image: "/images/testimonial8.jpg"
  }
];

const AllTestimonials = () => {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: [0, -3200],
        transition: {
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  return (
    <div 
      className="mt-16 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="flex gap-8"
        animate={controls}
      >
        {/* First set of testimonials */}
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0"
            style={{ width: "400px" }}
          >
            <SingleTestimonial testimonial={testimonial} />
          </motion.div>
        ))}
        {/* Duplicate set for seamless loop */}
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={`duplicate-${index}`}
            className="flex-shrink-0"
            style={{ width: "400px" }}
          >
            <SingleTestimonial testimonial={testimonial} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AllTestimonials; 