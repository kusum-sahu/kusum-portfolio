import Projects from "./Projects";
import Experience from "./Experience";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-[#08111f]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Projects />
      </div>
    </section>
  );
};

export default ProjectSection;