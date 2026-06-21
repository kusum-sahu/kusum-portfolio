import { useEffect, useState } from "react";
import {
  HiOutlineDownload,
  HiMoon,
  HiSun,
  HiMenu,
  HiX,
} from "react-icons/hi";

const Navbar = () => {
  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  const [activeSection, setActiveSection] =
    useState("home");

  const [darkMode, setDarkMode] = useState(true);

  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  // Navbar Background On Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  // Active Section Highlight
  useEffect(() => {
    const sections =
      document.querySelectorAll("section[id]");

    const handleActiveSection = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop =
          section.offsetTop - 150;

        const sectionHeight =
          section.offsetHeight;

        const sectionId =
          section.getAttribute("id");

        if (
          scrollY >= sectionTop &&
          scrollY <
            sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleActiveSection
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleActiveSection
      );
  }, []);

  // Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add(
        "dark"
      );
    } else {
      document.documentElement.classList.remove(
        "dark"
      );
    }
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[#070B1A]/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="h-20 flex items-center justify-between">

            {/* Logo */}
            <h1 className="text-white text-3xl font-bold">
              Kusum
              <span className="text-purple-500">
                .
              </span>
            </h1>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`
                    relative
                    text-[17px]
                    tracking-wide
                    transition-all
                    duration-300
                    ${
                      activeSection ===
                      link.toLowerCase()
                        ? "text-purple-400"
                        : "text-gray-300 hover:text-purple-400"
                    }
                  `}
                  >
                    {link}

                    {activeSection ===
                      link.toLowerCase() && (
                      <span
                        className="
                        absolute
                        left-0
                        -bottom-3
                        w-full
                        h-[2px]
                        bg-purple-500
                        rounded-full
                      "
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Side */}
            <div className="flex items-center gap-4">

              {/* Theme Toggle */}
           {/*    <button
                onClick={() =>
                  setDarkMode(!darkMode)
                }
                className="
                hidden
                md:flex
                items-center
                justify-center
                w-11
                h-11
                rounded-full
                border
                border-white/10
                bg-white/5
                text-white
              "
              >
                {darkMode ? (
                  <HiSun size={20} />
                ) : (
                  <HiMoon size={20} />
                )}
              </button>
 */}
              {/* CV Button */}
<a
  href="/resume.pdf"
  download="Kusum-Sahu-Resume.pdf"
  className="
  hidden
  md:flex
  items-center
  gap-2
  bg-gradient-to-r
  from-purple-600
  to-violet-500
  px-5
  py-3
  rounded-xl
  text-white
  text-sm
  font-medium
  hover:scale-105
  transition
  "
>
  Download CV
  <HiOutlineDownload size={18} />
</a>

              {/* Mobile Menu Button */}
              <button
                onClick={() =>
                  setMenuOpen(!menuOpen)
                }
                className="
                lg:hidden
                text-white
                text-3xl
              "
              >
                {menuOpen ? (
                  <HiX />
                ) : (
                  <HiMenu />
                )}
              </button>

            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="
            lg:hidden
            bg-[#070B1A]/95
            backdrop-blur-md
            border-t
            border-white/10
          "
          >
            <ul
              className="
              flex
              flex-col
              items-center
              gap-6
              py-6
            "
            >
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className={`
                    text-lg
                    transition-all
                    ${
                      activeSection ===
                      link.toLowerCase()
                        ? "text-purple-400"
                        : "text-gray-300"
                    }
                  `}
                  >
                    {link}
                  </a>
                </li>
              ))}

              {/* Mobile CV Button */}
              <button
                className="
                flex
                items-center
                gap-2
                bg-gradient-to-r
                from-purple-600
                to-violet-500
                px-5
                py-3
                rounded-xl
                text-white
                text-sm
                font-medium
              "
              >
                Download CV
                <HiOutlineDownload
                  size={18}
                />
              </button>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;