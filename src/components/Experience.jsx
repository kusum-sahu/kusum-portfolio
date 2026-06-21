import { HiBriefcase } from "react-icons/hi";

const Experience = () => {
  return (
    <div
      className="
      rounded-2xl
      border
      border-white/10
      bg-[#0B1220]
      p-8
      "
    >
      <h3 className="text-3xl font-bold text-white mb-8">
        Experience
      </h3>

      {/* Experience 1 */}
      <div className="relative flex gap-6">

        {/* Timeline */}
        <div className="relative flex flex-col items-center">

          {/* Circle */}
          <div
            className="
            w-12
            h-12
            rounded-full
            bg-purple-500/20
            flex
            items-center
            justify-center
            text-white
            z-10
            "
          >
            <HiBriefcase size={22} />
          </div>

          {/* Connecting Line */}
          <div
            className="
            w-[2px]
            h-10
            bg-gradient-to-b
            from-purple-500
            to-purple-300
            mt-2
            "
          />
        </div>

        {/* Content */}
        <div className="flex-1">

          <div className="flex justify-between items-start">

            <div>
              <h4 className="text-white text-xl font-semibold">
                Frontend Developer Intern
              </h4>

              <p className="text-purple-400 mt-1">
                Naval Solution
              </p>
            </div>

            <span className="text-gray-400 text-sm">
              Oct 2024 - Apr 2025
            </span>

          </div>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Developed responsive and interactive web applications.
          </p>

        </div>

      </div>

      {/* Experience 2 */}
      <div className="relative flex gap-6 mt-2">

        {/* Timeline Icon */}
        <div
          className="
          w-12
          h-12
          rounded-full
          bg-purple-500/20
          flex
          items-center
          justify-center
          text-white
          "
        >
          <HiBriefcase size={22} />
        </div>

        {/* Content */}
        <div className="flex-1">

          <div className="flex justify-between items-start">

            <div>
              <h4 className="text-white text-xl font-semibold">
                Software Developer Intern
              </h4>

              <p className="text-purple-400 mt-1">
                Aurovisglobal Pvt Ltd
              </p>
            </div>

            <span className="text-gray-400 text-sm">
              Oct 2025 - Feb 2026
            </span>

          </div>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Built scalable full-stack web applications using MERN.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Experience;