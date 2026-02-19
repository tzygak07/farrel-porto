import { useState } from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ProjectsSection from "../sections/ProjectsSection";
import GitHubSection from "../sections/GitHubSection";
import ContactSection from "../sections/ContactSection";
import ProjectModal from "../sections/ProjectModal";

const Divider = () => (
  <div className="max-w-7xl mx-auto px-8">
    <div className="h-px w-full bg-zinc-100 dark:bg-zinc-900" />
  </div>
);

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <ProjectsSection onSelectProject={setSelectedProject} />
      <Divider />
      <GitHubSection />
      <ContactSection />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Home;