import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Vacation of Africa",
    year: "Mar2022",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "https://cherinetafewerk.vercel.app",
    github: "https://buymeacoffee.com/cherean",
    description: "A comprehensive travel platform showcasing African destinations, featuring interactive maps, local guides, and real-time booking capabilities.",
    tech: ["React", "Node.js", "MongoDB", "Mapbox API"],
    features: [
      "Interactive destination maps",
      "Real-time booking system",
      "Local guide profiles",
      "Cultural event calendar"
    ],
    category: "Full Stack",
    role: "Lead Developer",
    impact: "Increased tourism bookings by 45%"
  },
  {
    name: "Moola App",
    year: "Sept2022",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "https://cherinetafewerk.vercel.app",
    github: "https://buymeacoffee.com/cherean",
    description: "A modern financial management application helping users track expenses, set budgets, and achieve financial goals with AI-powered insights.",
    tech: ["React Native", "Firebase", "TensorFlow.js", "Stripe"],

    features: [
      "AI-powered expense tracking",
      "Custom budget planning",
      "Investment portfolio tracking",
      "Bill payment reminders"
    ],
    category: "Mobile App",
    role: "Full Stack Developer",
    impact: "100,000+ active users"
  },
  {
    name: "Tourzania",
    year: "Jan2023",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "https://cherinetafewerk.vercel.app",
    github: "https://buymeacoffee.com/cherean",
    description: "A virtual tour platform enabling users to explore historical sites and museums from home, featuring VR support and interactive storytelling.",
    tech: ["Next.js", "Three.js", "WebGL", "Prisma"],

    features: [
      "VR-enabled virtual tours",
      "Interactive 3D models",
      "Historical timelines",
      "Audio guide integration"
    ],
    category: "Web App",
    role: "Frontend Specialist",
    impact: "Featured in Tech Monthly"
  },
  {
    name: "Bank of Luck",
    year: "May2024",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "https://cherinetafewerk.vercel.app",
    github: "https://buymeacoffee.com/cherean",
    description: "A gamified savings platform that makes financial education fun and accessible for young adults through challenges and rewards.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],

    features: [
      "Daily savings challenges",
      "Achievement system",
      "Social saving groups",
      "Financial education quizzes"
    ],
    category: "Full Stack",
    role: "Technical Lead",
    impact: "90% user engagement rate"
  },
];

const ProjectsMain = () => {
  return (
    <section className="min-h-screen flex items-center" id="projects">
      <div className="container mx-auto">
        <div className="flex flex-col gap-24">
          {/* Text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="h2 text-center"
          >
            My Projects
          </motion.h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <SingleProject key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsMain;
