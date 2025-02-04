import { FaGithub, FaExternalLinkAlt, FaRegLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";

const SingleProject = ({ 
  name, 
  year, 
  align, 
  image, 
  link, 
  github, 
  description, 
  tech, 
  features,
  category,
  role,
  impact
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`flex w-full sm:flex-col-reverse items-start gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-between sm:flex-col`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Project Info */}
      <motion.div
        className="flex flex-col gap-6 md:w-1/2"
        initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Header */}
        <div className="space-y-2">
          <motion.div className="flex items-center gap-3">
            <motion.h2 
              className="md:text-3xl sm:text-2xl text-orange relative inline-block"
              whileHover={{ scale: 1.02 }}
            >
              {name}
            </motion.h2>
            <motion.span
              className="text-sm px-3 py-1 rounded-full bg-orange/20 text-orange"
              whileHover={{ scale: 1.05 }}
            >
              {category}
            </motion.span>
          </motion.div>

          <motion.div className="flex items-center gap-4 text-sm text-lightGrey">
            <span>{year}</span>
            <span>•</span>
            <span>{role}</span>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p 
          className="text-lightGrey leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Impact */}
        <motion.div 
          className="flex items-center gap-2 text-cyan"
          whileHover={{ x: 5 }}
        >
          <FaRegLightbulb />
          <span className="text-sm">{impact}</span>
        </motion.div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <h3 className="text-sm text-lightGrey">Technologies Used</h3>
          <motion.div 
            className="flex gap-3 flex-wrap"
          >
            {tech.map((item, index) => (
              <motion.span
                key={index}
                className="text-sm px-3 py-1 rounded-full bg-darkGrey/50 text-cyan"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(21, 209, 233, 0.2)" }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h3 className="text-sm text-lightGrey">Key Features</h3>
          <motion.ul className="grid grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-2 text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <IoMdCheckmarkCircleOutline className="text-orange flex-shrink-0" />
                <span className="text-lightGrey">{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Links */}
        <motion.div className="flex gap-6 mt-2">
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan hover:text-orange group"
            whileHover={{ x: 5 }}
          >
            <FaExternalLinkAlt className="text-sm" />
            <span className="text-sm">View Live</span>
            <BsArrowRightShort className="text-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan hover:text-orange group"
            whileHover={{ x: 5 }}
          >
            <FaGithub className="text-sm" />
            <span className="text-sm">Source Code</span>
            <BsArrowRightShort className="text-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Project Image */}
      <motion.div 
        className="md:w-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="relative rounded-xl overflow-hidden border border-white/10"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-darkGrey/80 to-transparent opacity-0 transition-opacity duration-300"
            whileHover={{ opacity: 1 }}
          >
            <div className="absolute bottom-4 left-4 right-4">
              <motion.div
                className="text-sm text-white/90"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-cyan">Role:</span> {role}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SingleProject;
