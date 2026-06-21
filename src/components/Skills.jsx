import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const skills = [
    {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
        name: "Tailwind CSS",
        icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },

    {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
];

const Skills = () => {

    const [startIndex, setStartIndex] = useState(0);

    const cardsPerView = 8;

    const nextSlide = () => {
        setStartIndex((prev) => (prev + 1) % skills.length);
    };

    const prevSlide = () => {
        setStartIndex(
            (prev) => (prev - 1 + skills.length) % skills.length
        );
    };

    const visibleSkills = [];

    for (let i = 0; i < cardsPerView; i++) {
        visibleSkills.push(
            skills[(startIndex + i) % skills.length]
        );
    }

    return (
        <section
            id="skills"
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
                            💎
                        </span>

                        <span className="text-purple-300 font-medium">
                            My Skills
                        </span>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-bold leading-tight text-white">
  Technologies{" "}
  <span className="bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">
    I Work With
  </span>
</h2>
                </div>

                {/* Slider */}
                <div className="flex items-center gap-4">

                    {/* Prev Button */}
                    <button
                        onClick={prevSlide}
                        className="
            w-10
            h-10
            rounded-full
            bg-white/5
            border border-white/10
            flex items-center justify-center
            text-white
            hover:bg-purple-500/20
            transition
            "
                    >
                        <HiArrowLeft />
                    </button>

                    {/* Skills Cards */}
                    <div className="flex gap-4 flex-1 overflow-hidden">

                        {visibleSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="
                w-[120px]
                h-[120px]
                rounded-xl
                border
                border-white/10
                bg-[#0B1220]
                flex
                flex-col
                items-center
                justify-center
                gap-3
                shrink-0
                hover:border-purple-500/50
                hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]
                transition-all
                duration-300
                "
                            >
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-12 h-12"
                                />

                                <p className="text-gray-300 text-sm">
                                    {skill.name}
                                </p>
                            </div>
                        ))}

                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="
            w-10
            h-10
            rounded-full
            bg-white/5
            border border-white/10
            flex items-center justify-center
            text-white
            hover:bg-purple-500/20
            transition
            "
                    >
                        <HiArrowRight />
                    </button>

                </div>

            </div>
        </section>
    );
};

export default Skills;