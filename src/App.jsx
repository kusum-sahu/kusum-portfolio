import About from "./components/About";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import Skills from "./components/Skills";

function App() {
  return (
    <>
    {/* <div className=" bg-white  text-black bg-[#050816] text-white"> */}
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <ProjectSection/>
      <ExperienceSection/>
      <Footer/>
    {/* </div> */}
    </>
  );
}

export default App;