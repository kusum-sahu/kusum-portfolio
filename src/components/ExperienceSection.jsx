import Experience from "./Experience";
import Testimonials from "./Testimonials";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-12">

          <div
            className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            border border-purple-500/20
            bg-white/5
            backdrop-blur-md
            mb-6
            "
          >
            <span className="text-purple-400">
            🚀
            </span>

            <span className="text-purple-300 font-medium">
              My Journey
            </span>
          </div>

<h2 className="text-2xl md:text-4xl font-bold leading-tight text-white">
  Experience &{" "}
  <span className="bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">
    Testimonials
  </span>
</h2>

          <p className="text-gray-400 mt-4 max-w-2xl">
            My professional journey, internships, and feedback
            from mentors and industry professionals.
          </p>

        </div>

        {/* Experience + Testimonials */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Experience />
          <Testimonials />
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;

