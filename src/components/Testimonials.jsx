import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const testimonials = [
  {
    image: "/mentor1.jpg",
    name: "Mentor",
    company: "Naval Solution",
    review:
      "Kusum is a dedicated developer with strong problem-solving skills and a great attitude towards learning. She consistently delivered quality work.",
  },

  {
    image: "/mentor2.jpg",
    name: "Team Lead",
    company: "Aurovisglobal Pvt Ltd",
    review:
      "Kusum demonstrated excellent frontend and full-stack development skills. She quickly adapted to project requirements and delivered quality results.",
  },

  {
    image: "/mentor3.jpg",
    name: "Project Manager",
    company: "Internship Program",
    review:
      "She showed strong commitment, teamwork and consistently completed tasks on time while maintaining excellent quality.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevReview = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + testimonials.length) %
        testimonials.length
    );
  };

  return (
    <div
      className="
      rounded-2xl
      border
      border-white/10
      bg-[#0B1220]
      p-6
      "
    >
      {/* Heading */}
      <h3 className="text-2xl font-bold text-white mb-6">
        What People Say
      </h3>

      <div className="flex items-center justify-between gap-6">

        {/* Review Card */}
        <div
          className="
          w-[80%]
          rounded-2xl
          bg-white/5
          border
          border-white/10
          p-5
          "
        >
          {/* Quote */}
          <FaQuoteLeft
            className="
            text-purple-500
            text-4xl
            mb-4
            "
          />

          {/* Review */}
          <p
            className="
            text-gray-300
            leading-relaxed
            min-h-[90px]
            text-sm
            "
          >
            {testimonials[current].review}
          </p>

          {/* User */}
          <div className="flex items-center gap-3 mt-0">

            <img
              src={testimonials[current].image}
              alt=""
              className="
              w-12
              h-12
              rounded-full
              object-cover
              border
              border-purple-500/30
              "
            />

            <div>
              <h4 className="text-white font-medium">
                {testimonials[current].name}
              </h4>

              <p className="text-gray-400 text-sm">
                {testimonials[current].company}
              </p>
            </div>

          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">

            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${
                    current === index
                      ? "w-6 bg-purple-500"
                      : "w-3 bg-gray-500"
                  }
                `}
              />
            ))}

          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3">

          {/* Prev */}
          <button
            onClick={prevReview}
            className="
            w-10
            h-10
            rounded-full
            bg-white/5
            border
            border-white/10
            text-white
            flex
            items-center
            justify-center
            hover:bg-purple-500
            transition-all
            duration-300
            "
          >
            <HiArrowLeft />
          </button>

          {/* Next */}
          <button
            onClick={nextReview}
            className="
            w-10
            h-10
            rounded-full
            bg-white/5
            border
            border-white/10
            text-white
            flex
            items-center
            justify-center
            hover:bg-purple-500
            transition-all
            duration-300
            "
          >
            <HiArrowRight />
          </button>

        </div>

      </div>
    </div>
  );
};

export default Testimonials;