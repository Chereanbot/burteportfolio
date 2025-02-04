import { useEffect } from "react";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import TestimonialsMain from "./components/testimonialsSection/TestimonialsMain";
import { LoadingProvider } from "./components/loading/LoadingContext";
import BruteTransition from "./components/loading/BruteTransition";
import SectionTransition from "./components/loading/SectionTransition";
import { HelmetProvider } from 'react-helmet-async';
import SEO from "./components/seo/SEO";
import { preloadImages } from "./utils/imageLoader";

// Critical images to preload
const criticalImages = [
  '/images/HexaPic.png',
  '/images/about-me.jpg',
  '/images/skills.avif',
  '/images/subSkills.jpg',
  '/images/experience-image.png',
  '/images/website-img-1.jpg',
  '/images/website-img-2.webp',
  '/images/website-img-3.jpg',
  '/images/website-img-4.jpg',
];

function App() {
  useEffect(() => {
    // Preload critical images
    preloadImages(criticalImages);
  }, []);

  return (
    <HelmetProvider>
      <LoadingProvider>
        <SEO />
        <main className="font-body text-white relative overflow-hidden">
          <NavbarMain />
          <HeroMain />
          <HeroGradient />
          <SectionTransition direction="down">
            <SubHeroMain />
          </SectionTransition>
          <SectionTransition direction="up">
            <AboutMeMain />
          </SectionTransition>
          <SectionTransition direction="down">
            <SkillsMain />
          </SectionTransition>
          <SectionTransition direction="up">
            <SubSkills />
          </SectionTransition>
          <SectionTransition direction="down">
            <ExperienceMain />
          </SectionTransition>
          <SectionTransition direction="up">
            <ProjectsMain />
          </SectionTransition>
          <SectionTransition direction="down">
            <TestimonialsMain />
          </SectionTransition>
          <SectionTransition direction="up">
            <ContactMeMain />
          </SectionTransition>
          <FooterMain />
          <BruteTransition />
        </main>
      </LoadingProvider>
    </HelmetProvider>
  );
}

export default App;
