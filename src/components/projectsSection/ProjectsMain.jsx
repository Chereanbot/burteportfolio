import SingleProject from "./SingleProject";
import ProjectsText from "./ProjectsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { projects } from "./projectsData";
import { useState, useEffect } from "react";

const ProjectsMain = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Get unique categories
  const categories = ["All", ...new Set(projects.map(project => project.category))];

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <section className="min-h-screen" id="projects">
      {/* Projects Text Section */}
      <div className="w-full">
        <ProjectsText />
      </div>

      <div className="container mx-auto px-4 mt-16">
        {/* Category Filter */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan to-orange text-white shadow-lg"
                  : "bg-darkGrey/30 text-white/70 hover:bg-white/10 border border-white/10"
              }`}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(21, 209, 233, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8"
        >
          {filteredProjects.map((project, index) => (
            <SingleProject
              key={project.id}
              {...project}
              index={index}
            />
          ))}
        </motion.div>

        {/* No Projects Found Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center py-16"
          >
            <p className="text-xl text-white/70">No projects found in this category.</p>
            <motion.button
              onClick={() => setSelectedCategory("All")}
              className="mt-4 text-cyan hover:text-orange transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View all projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsMain;
