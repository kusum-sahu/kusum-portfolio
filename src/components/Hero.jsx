import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { MdOutlineEmail } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="
    absolute
    inset-0
    bg-[url('/hero-bgImg.png')]
    bg-cover
    bg-center
    bg-fixed
  "
      ></div>

      {/* Gradient Overlay */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#050816]/90
        via-[#050816]/20
        to-transparent
        "
      ></div>
      {/* Stars Background  */}
      <div

        className="
    absolute
    inset-0
    bg-[url('/stars.png')]
    bg-cover
    opacity-30
    z-[1]
  "
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="h-screen flex items-center">

            <div className="max-w-2xl text-center lg:text-left">

              {/* Hello Badge */}
              <div className="mb-6 flex justify-center lg:justify-start">

                <div
                  className="
                  inline-flex
                  items-center
                  gap-2
                  px-5
                  py-2.5
                  rounded-full
                  border
                  border-purple-500/20
                  bg-white/5
                  backdrop-blur-md
                  shadow-[0_0_20px_rgba(168,85,247,0.15)]
                  "
                >
                  <span className="text-yellow-400 text-lg">
                    👋
                  </span>

                  <span
                    className="
                    text-lg
                    font-medium
                    bg-gradient-to-r
                    from-yellow-300
                    to-orange-400
                    bg-clip-text
                    text-transparent
                    "
                  >
                    Hello, I'm
                  </span>

                </div>

              </div>

              {/* Name */}
              <h1
                className="
                text-2xl
                md:text-6xl
                font-bold
                text-white
                "
              >
                Kusum Sahu
              </h1>

              <div className="mt-4">

                <span className="text-xl md:text-2xl text-white">
                  And I'm a{" "}
                </span>

                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2000,
                    "Frontend Developer",
                    2000,
                    "Software Developer",
                    2000,
                    "MERN Stack Developer",
                    2000,
                    "Freelancer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="
    text-2xl
    md:text-4xl
    font-bold
    bg-gradient-to-r
    from-purple-400
    to-indigo-400
    bg-clip-text
    text-transparent
    "
                />

              </div>

              {/* Description */}
              <p
                className="
                mt-6
                text-gray-300
                text-lg
                leading-relaxed
                max-w-xl
                "
              >
                I build modern, responsive and scalable web
                applications with clean code and great user
                experiences.
              </p>

              {/* Buttons */}
              <div
                className="
                flex
                flex-wrap
                justify-center
                lg:justify-start
                gap-5
                mt-10
                "
              >

                <button
                  className="
                  px-8
                  py-4
                  rounded-xl
                  bg-gradient-to-r from-purple-600 to-violet-500
                  text-white
                  font-semibold
                  flex
                  items-center
                  gap-2
                  shadow-[0_0_15px_rgba(168,85,247,0.3)]
                  hover:scale-103
                  duration-300
                  cursor-pointer
                  "
                  onClick={() => {
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >
                  View My Work
                  <HiArrowRight />
                </button>

                <button
                  className="
                  px-8
                  py-4
                  rounded-xl
                  border
                  border-purple-500
                  text-white
                  font-semibold
                  hover:bg-purple-500/10
                  duration-300 cursor-pointer
                  "
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >
                  Hire Me
                </button>

              </div>
              {/* Social Icons */}
              <div
                className="
  flex
  justify-center
  lg:justify-start
  gap-4
  mt-10
  "
              >

                {/* GitHub */}
                <a
                  href="https://github.com/kusum-sahu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
    w-12
    h-12
    rounded-full
    border border-white/20
    flex items-center justify-center
    text-white
    hover:border-purple-500
    hover:text-purple-400
    transition
    "
                >
                  <FaGithub />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/kusumsahu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
    w-12
    h-12
    rounded-full
    border border-white/20
    flex items-center justify-center
    text-white
    hover:border-purple-500
    hover:text-purple-400
    transition
    "
                >
                  <FaLinkedinIn />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/itz_simransahu_143/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
    w-12
    h-12
    rounded-full
    border border-white/20
    flex items-center justify-center
    text-white
    hover:border-purple-500
    hover:text-purple-400
    transition
    "
                >
                  <FaInstagram />
                </a>

                {/* Email */}
                <a
                  href="mailto:kusumsahu1853@gmail.com"
                  className="
    w-12
    h-12
    rounded-full
    border border-white/20
    flex items-center justify-center
    text-white
    hover:border-purple-500
    hover:text-purple-400
    transition
    "
                >
                  <MdOutlineEmail />
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div
        className="
  absolute
  bottom-8
  left-1/2
  -translate-x-1/2
  flex
  flex-col
  items-center
  justify-center
  z-20
  "
      >
        <div
          className="
    w-7
    h-12
    border
    border-white/30
    rounded-full
    flex
    items-start
    justify-center
    "
        >
          <div
            className="
      w-1.5
      h-3
      bg-white
      rounded-full
      mt-2
      animate-bounce
      "
          ></div>
        </div>

        <p className="text-xs text-gray-300 mt-2 text-center">
          Scroll Down
        </p>
      </div>
    </section>
  );
};

export default Hero;