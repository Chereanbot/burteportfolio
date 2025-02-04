import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ 
  title = "Birtukan W/Mikael | Full Stack Developer",
  description = "Welcome to Birtukan W/Mikael's (BRUTE) portfolio. A passionate Full Stack Developer who started coding at a young age, with 10+ successful projects under her belt. Specializing in MERN stack, cloud computing, and creating innovative digital solutions. Known for clean code, scalable architectures, and exceptional user experiences.",
  keywords = "Birtukan W/Mikael, BRUTE, Ethiopian developer, young programmer, full stack developer, MERN stack, React.js, Node.js, MongoDB, Express.js, JavaScript, TypeScript, web development, frontend development, backend development, cloud computing, API development, database design, responsive design, UI/UX, portfolio, innovative solutions, scalable architecture",
  image = "/og-image.jpg",
  url = "https://burtuportfolio.vercel.app/",
  type = "website"
}) => {
  const siteTitle = `${title} | BRUTE Portfolio`;
  const socialImages = {
    default: image,
    twitter: "/twitter-card.jpg",
    facebook: "/facebook-share.jpg",
    linkedin: "/linkedin-share.jpg",
    pinterest: "/pinterest-share.jpg",
    thumbnail: "/thumbnail.jpg",
    // Google optimized images
    hero: "/hero-image.jpg",
    profile: "/profile-image.jpg",
    portfolio: "/portfolio-showcase.jpg",
    projects: "/projects-collage.jpg"
  };

  const imageMetadata = {
    hero: {
      width: 1920,
      height: 1080,
      alt: "Birtukan W/Mikael - Full Stack Developer Hero Image",
      caption: "BRUTE - Innovative Full Stack Developer"
    },
    profile: {
      width: 800,
      height: 800,
      alt: "Birtukan W/Mikael Professional Profile",
      caption: "Birtukan W/Mikael (BRUTE) - Professional Portrait"
    },
    portfolio: {
      width: 1600,
      height: 900,
      alt: "Portfolio Project Showcase",
      caption: "Featured Projects and Development Work"
    },
    projects: {
      width: 1200,
      height: 800,
      alt: "Development Projects Collage",
      caption: "Collection of Successful Web Development Projects"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={socialImages.facebook} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="BRUTE Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@YourTwitterHandle" />
      <meta name="twitter:creator" content="@YourTwitterHandle" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImages.twitter} />
      <meta name="twitter:image:alt" content="Birtukan W/Mikael - Full Stack Developer Portfolio" />

      {/* LinkedIn */}
      <meta property="linkedin:card" content="summary_large_image" />
      <meta property="linkedin:title" content={title} />
      <meta property="linkedin:description" content={description} />
      <meta property="linkedin:image" content={socialImages.linkedin} />

      {/* Pinterest */}
      <meta name="pinterest:card" content="summary_large_image" />
      <meta name="pinterest:title" content={title} />
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={socialImages.pinterest} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Birtukan W/Mikael (BRUTE)" />
      <meta name="developer" content="Cherinet Afewerk" />
      
      {/* Google Images Optimization */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="image" content={socialImages.hero} />
      <meta name="image:alt" content={imageMetadata.hero.alt} />
      <meta name="thumbnail" content={socialImages.thumbnail} />
      
      {/* Image Optimization Tags */}
      <meta name="thumbnail" content={socialImages.thumbnail} />
      <link rel="image_src" href={socialImages.default} />
      <meta name="msapplication-TileImage" content={socialImages.default} />
      
      {/* Developer Attribution */}
      <meta name="developer-website" content="https://cherinetafewerk.vercel.app" />
      <meta name="developer-role" content="Lead Developer & Technical Architect" />
      <meta name="developer-expertise" content="Full Stack Development, System Architecture, UI/UX Design" />
      
      {/* Professional Skills */}
      <meta name="skills" content="Full Stack Development, MERN Stack, Frontend Development, Backend Development, Database Design, API Development, Cloud Computing, DevOps, UI/UX Design, Mobile-First Development, Progressive Web Apps, Performance Optimization" />
      
      {/* Technical Expertise */}
      <meta name="technologies" content="React.js, Node.js, Express.js, MongoDB, JavaScript, TypeScript, HTML5, CSS3, Git, REST APIs, GraphQL, AWS, Docker, Redux, Next.js, TailwindCSS, Framer Motion" />
      
      {/* Portfolio Highlights */}
      <meta name="project-count" content="10+" />
      <meta name="specialization" content="Modern Web Applications, Scalable Architecture, User Experience" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Birtukan W/Mikael",
            "alternateName": "BRUTE",
            "url": "${url}",
            "sameAs": [],
            "jobTitle": "Full Stack Developer",
            "description": "${description}",
            "image": {
              "@type": "ImageObject",
              "url": "${socialImages.profile}",
              "height": "${imageMetadata.profile.height}",
              "width": "${imageMetadata.profile.width}",
              "thumbnail": "${socialImages.thumbnail}",
              "alternateName": "${imageMetadata.profile.alt}",
              "caption": "${imageMetadata.profile.caption}",
              "representativeOfPage": true,
              "license": "https://creativecommons.org/licenses/by-sa/4.0/"
            },
            "alumniOf": "",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            },
            "mainEntity": {
              "@type": "WebSite",
              "name": "BRUTE Portfolio",
              "url": "${url}",
              "about": "Showcasing the work of a young, innovative full stack developer who started coding early and has developed multiple successful web applications.",
              "creator": {
                "@type": "Person",
                "name": "Cherinet Afewerk",
                "url": "https://cherinetafewerk.vercel.app",
                "jobTitle": "Lead Developer & Technical Architect",
                "description": "Experienced full stack developer and technical architect specializing in modern web technologies and scalable solutions.",
                "image": {
                  "@type": "ImageObject",
                  "url": "https://cherinetafewerk.vercel.app/profile.jpg",
                  "alternateName": "Cherinet Afewerk - Lead Developer"
                }
              },
              "primaryImageOfPage": {
                "@type": "ImageObject",
                "url": "${socialImages.hero}",
                "height": "${imageMetadata.hero.height}",
                "width": "${imageMetadata.hero.width}",
                "caption": "${imageMetadata.hero.caption}"
              },
              "associatedMedia": [
                {
                  "@type": "ImageObject",
                  "url": "${socialImages.portfolio}",
                  "height": "${imageMetadata.portfolio.height}",
                  "width": "${imageMetadata.portfolio.width}",
                  "caption": "${imageMetadata.portfolio.caption}",
                  "description": "Portfolio showcase featuring various web development projects"
                },
                {
                  "@type": "ImageObject",
                  "url": "${socialImages.projects}",
                  "height": "${imageMetadata.projects.height}",
                  "width": "${imageMetadata.projects.width}",
                  "caption": "${imageMetadata.projects.caption}",
                  "description": "Collection of successful web development projects and applications"
                }
              ]
            },
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Full Stack Developer",
              "skills": [
                "MERN Stack Development",
                "Cloud Computing",
                "API Design",
                "Database Architecture",
                "Frontend Development",
                "Backend Development",
                "DevOps"
              ],
              "description": "Started coding at a young age, specializing in full stack development with expertise in modern web technologies and innovative solutions."
            }
          }
        `}
      </script>

      {/* Image Gallery Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "ImageGallery",
            "name": "BRUTE Portfolio Project Gallery",
            "description": "Showcase of full stack development projects and professional work by Birtukan W/Mikael",
            "image": [
              {
                "@type": "ImageObject",
                "url": "${socialImages.portfolio}",
                "name": "Portfolio Projects",
                "description": "${imageMetadata.portfolio.caption}",
                "height": "${imageMetadata.portfolio.height}",
                "width": "${imageMetadata.portfolio.width}"
              },
              {
                "@type": "ImageObject",
                "url": "${socialImages.projects}",
                "name": "Development Work",
                "description": "${imageMetadata.projects.caption}",
                "height": "${imageMetadata.projects.height}",
                "width": "${imageMetadata.projects.width}"
              }
            ],
            "author": {
              "@type": "Person",
              "name": "Birtukan W/Mikael",
              "alternateName": "BRUTE"
            }
          }
        `}
      </script>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
};

export default SEO; 