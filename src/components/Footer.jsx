// import {
//   HiMail,
//   HiPhone,
//   HiLocationMarker,
// } from "react-icons/hi";

// import { FaPaperPlane } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <section
//       id="contact"
//       className="py-10 bg-[#08111f]"
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-10">

//         {/* Header */}
//         <div className="mb-4">

//           <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white">
//             Let's Build{" "}
//             <span className="bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">
//               Something Amazing...
//             </span>
//           </h2>

//           <p className="text-sm text-gray-400 mt-2 max-w-2xl">
//             Have a project in mind or want to collaborate?
//             Feel free to reach out and let's create something impactful together.
//           </p>

//         </div>

//         {/* Contact Card */}
//         <div
//           className="
//           border
//           border-white/10
//           rounded-2xl
//           bg-[#0B1220]
//           p-4 md:p-5
//           "
//         >
//           <div className="grid lg:grid-cols-[280px_auto_1fr] gap-10 items-center">

//             {/* Left Side */}
//             <div>

//               <p className="text-purple-400 text-sm font-medium mb-1">
//                 Get In Touch
//               </p>

//               <h3 className="text-lg font-bold text-white mb-4">
//                 Let's Work Together!
//               </h3>

//               <div className="space-y-3">

//                 <div className="flex items-center gap-3">
//                   <HiMail className="text-purple-400 text-lg" />
//                   <span className="text-gray-400 text-sm">
//                     kusumsahu@gmail.com
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <HiPhone className="text-purple-400 text-lg" />
//                   <span className="text-gray-400 text-sm">
//                     +91 7847867110
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <HiLocationMarker className="text-purple-400 text-lg" />
//                   <span className="text-gray-400 text-sm">
//                     Odisha, India
//                   </span>
//                 </div>

//               </div>

//             </div>
//             {/* Divider */}

//             <div className="hidden lg:flex justify-center">
//               <div
//                 className="
//                  w-px
//                  h-40
//                  bg-white/10
//                  "
//               ></div>
//             </div>

//             {/* Right Side Form */}
//             <div>

//               <div className="grid md:grid-cols-2 gap-3">

//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="
//                   px-4
//                   py-2
//                   rounded-xl
//                   bg-[#111827]
//                   border
//                   border-white/10
//                   text-white
//                   outline-none
//                   focus:border-purple-500
//                   "
//                 />

//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="
//                   px-4
//                   py-2
//                   rounded-xl
//                   bg-[#111827]
//                   border
//                   border-white/10
//                   text-white
//                   outline-none
//                   focus:border-purple-500
//                   "
//                 />

//               </div>

//               <textarea
//                 rows="2"
//                 placeholder="Your Message"
//                 className="
//                 mt-3
//                 w-full
//                 px-4
//                 py-2
//                 rounded-xl
//                 bg-[#111827]
//                 border
//                 border-white/10
//                 text-white
//                 outline-none
//                 resize-none
//                 focus:border-purple-500
//                 "
//               />

//               <button
//                 className="
//                 mt-3
//                 px-5
//                 py-2
//                 rounded-xl
//                 bg-gradient-to-r
//                 from-purple-600
//                 to-violet-500
//                 text-white
//                 flex
//                 items-center
//                 gap-2
//                 font-medium
//                 hover:scale-105
//                 transition-all
//                 duration-300
//                 shadow-[0_0_15px_rgba(168,85,247,0.25)]
//                 "
//               >
//                 Send Message
//                 <FaPaperPlane />
//               </button>

//             </div>

//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div
//           className="
//           mt-4
//           pt-3
//           border-t
//           border-white/10
//           flex
//           flex-col
//           md:flex-row
//           justify-between
//           items-center
//           gap-2
//           "
//         >

//           <p className="text-gray-500 text-sm">
//             © 2026 Kusum Sahu. All rights reserved.
//           </p>

//           <p className="text-gray-500 text-sm">
//             Made with ❤️ & Code
//           </p>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Footer;


import {
  HiMail,
  HiPhone,
  HiLocationMarker,
} from "react-icons/hi";

import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <section
      id="contact"
      className="py-10 bg-[#08111f]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-4">

          <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white">
            Let's Build{" "}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">
              Something Amazing...
            </span>
          </h2>

          <p className="text-sm text-gray-400 mt-2 max-w-2xl">
            Have a project in mind or want to collaborate?
            Feel free to reach out and let's create something impactful together.
          </p>

        </div>

        {/* Contact Card */}
        <div
        
        >
          <div className="grid lg:grid-cols-[280px_auto_1fr] gap-10 items-center">

            {/* Left Side */}
            <div>

              <p className="text-purple-400 text-sm font-medium mb-1">
                Get In Touch
              </p>

              <h3 className="text-lg font-bold text-white mb-4">
                Let's Work Together!
              </h3>

              <div className="space-y-3">

                <div className="flex items-center gap-3">
                  <HiMail className="text-purple-400 text-lg" />
                  <span className="text-gray-400 text-sm">
                    kusumsahu@gmail.com
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <HiPhone className="text-purple-400 text-lg" />
                  <span className="text-gray-400 text-sm">
                    +91 7847867110
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <HiLocationMarker className="text-purple-400 text-lg" />
                  <span className="text-gray-400 text-sm">
                    Odisha, India
                  </span>
                </div>

              </div>

            </div>
            {/* Divider */}

            <div className="hidden lg:flex justify-center">
              <div
                className="
                 w-px
                 h-40
                 bg-white/20
                 "
              ></div>
            </div>

            {/* Right Side Form */}
            <div className="
          border
          border-white/10
          rounded-2xl
          bg-[#0B1220]
          p-4 md:p-5
          ">

              <div className="grid md:grid-cols-2 gap-3">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                  px-4
                  py-2
                  rounded-xl
                  bg-[#111827]
                  border
                  border-white/10
                  text-white
                  outline-none
                  focus:border-purple-500
                  "
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="
                  px-4
                  py-2
                  rounded-xl
                  bg-[#111827]
                  border
                  border-white/10
                  text-white
                  outline-none
                  focus:border-purple-500
                  "
                />

              </div>

              <textarea
                rows="2"
                placeholder="Your Message"
                className="
                mt-3
                w-full
                px-4
                py-2
                rounded-xl
                bg-[#111827]
                border
                border-white/10
                text-white
                outline-none
                resize-none
                focus:border-purple-500
                "
              />

              <button
                className="
                mt-3
                px-5
                py-2
                rounded-xl
                bg-gradient-to-r
                from-purple-600
                to-violet-500
                text-white
                flex
                items-center
                gap-2
                font-medium
                hover:scale-105
                transition-all
                duration-300
                shadow-[0_0_15px_rgba(168,85,247,0.25)]
                "
              >
                Send Message
                <FaPaperPlane />
              </button>

            </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className="
          mt-4
          pt-3
          border-t
          border-white/10
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-2
          "
        >

          <p className="text-gray-500 text-sm">
            © 2026 Kusum Sahu. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Made with ❤️ & Code
          </p>

        </div>

      </div>
    </section>
  );
};

export default Footer;