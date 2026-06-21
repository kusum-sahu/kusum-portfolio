import { HiArrowRight } from "react-icons/hi";

const projects = [
  {
    title: "Hospital Management System",
    image: "/projects/project1.png",
    desc: "Manage hospital records, appointments and doctors.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/hospital-management",
  },

  {
    title: "Event Management App",
    image: "/projects/project2.png",
    desc: "Manage events, bookings and users.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/event-management",
  },

  {
    title: "AI Fashion Model Generator",
    image: "/projects/project1.png",
    desc: "Generate fashion model images using AI.",
    tech: ["React", "API", "Tailwind"],
    link: "https://github.com/yourusername/ai-fashion",
  },

  // {
  //   title: "Blog System",
  //   image: "/projects/project4.png",
  //   desc: "Create, edit and manage blog posts.",
  //   tech: ["PHP", "MySQL"],
  //   link: "https://github.com/yourusername/blog-system",
  // },
];

// Badge Colors
const getTechColor = (tech) => {
  switch (tech) {
    case "React":
      return "bg-cyan-500/20 text-cyan-300 border border-cyan-500/20";

    case "Node.js":
      return "bg-green-500/20 text-green-300 border border-green-500/20";

    case "MongoDB":
      return "bg-emerald-500/20 text-emerald-300 border border-emerald-500/20";

    case "PHP":
      return "bg-purple-500/20 text-purple-300 border border-purple-500/20";

    case "MySQL":
      return "bg-orange-500/20 text-orange-300 border border-orange-500/20";

    case "Tailwind":
      return "bg-sky-500/20 text-sky-300 border border-sky-500/20";

    case "API":
      return "bg-gray-500/20 text-gray-300 border border-gray-500/20";

    default:
      return "bg-white/10 text-gray-300 border border-white/10";
  }
};

const Projects = () => {
  return (
    <div>
      {/* Tag */}
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
        mb-4
      "
      >
        <span className="text-purple-400">💎</span>

        <span className="text-purple-300 font-medium">
          My Projects
        </span>
      </div>

      {/* Heading */}
      <div className="flex justify-between items-center mb-8">
    <h2 className="text-2xl md:text-4xl font-bold leading-tight text-white">
  Featured{" "}
  <span className="bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">
    Work
  </span>
</h2>

        <button
          className="
          flex
          items-center
          gap-2
          text-white
          hover:text-purple-400
          transition
        "
        >
          View All Projects
          <HiArrowRight />
        </button>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
            group
            rounded-2xl
            overflow-hidden
            border
            border-white/10
            bg-[#0B1220]
            hover:border-purple-500/40
            hover:-translate-y-2
            transition-all
            duration-300
          "
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="
                w-full
                h-48
                object-cover
                transition-transform
                duration-500
                group-hover:scale-110
              "
              />
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Title */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                text-lg
                font-semibold
                text-white
                hover:text-purple-400
                transition
              "
              >
                {project.title}
              </a>

              {/* Description */}
              <p
                className="
                text-gray-400
                text-sm
                mt-3
                leading-relaxed
                min-h-[60px]
              "
              >
                {project.desc}
              </p>

              {/* Bottom */}
              <div className="flex justify-between items-end mt-0">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className={`
                        px-3
                        py-1
                        rounded-md
                        text-xs
                        font-medium
                        ${getTechColor(item)}
                      `}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  w-10
                  h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-white
                  bg-gradient-to-r
                  from-purple-600
                  to-violet-500
                  shadow-[0_0_15px_rgba(168,85,247,0.3)]
                  hover:scale-110
                  transition-all
                  duration-300
                  flex-shrink-0
                "
                >
                  <HiArrowRight />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;