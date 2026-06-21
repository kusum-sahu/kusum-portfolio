
//  import { useState } from "react";
// import {
//   HiOutlineUserGroup,
//   HiOutlineBriefcase, HiArrowRight
// } from "react-icons/hi";

// const About = () => {
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <section
//       id="about"
//       className="relative py-20 overflow-hidden bg-[#08111f]"
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-10">

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT CONTENT */}
//           <div>

//             {/* Section Tag */}
//             <div
//               className="
//               inline-flex
//               items-center
//               gap-2
//               px-4
//               py-2
//               rounded-full
//               border border-purple-500/20
//               bg-white/5
//               backdrop-blur-md
//               mb-6
//               "
//             >
//               <span className="text-purple-400">💎</span>

//               <span className="text-purple-300 font-medium">
//                 About Me
//               </span>
//             </div>

//             {/* Heading */}
//             <h2 className="text-2xl md:text-4xl font-bold leading-tight text-white">
//               Passionate about
//               <br />
//               building{" "}
//               <span className="bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">
//                 digital solutions
//               </span>
//             </h2>

//             {/* Description */}
//             <p className="mt-5 text-gray-400 text-[16px] leading-relaxed">
//               I'm a passionate Software Developer with a strong
//               interest in creating modern, scalable and
//               user-friendly web applications.
//             </p>

//             <p className="mt-5 text-gray-400 text-[16px] leading-relaxed">
//               As a Frontend Developer, I enjoy crafting clean,
//               responsive and interactive user interfaces using
//               React, Tailwind CSS and modern JavaScript.
//             </p>

//             {showMore && (
//               <p className="mt-5 text-gray-400 text-[16px] leading-relaxed">
//                 As a Full Stack Developer, I work across both
//                 frontend and backend technologies, building complete
//                 web solutions using the MERN stack while focusing
//                 on performance, maintainability and great user
//                 experiences.
//               </p>
//             )}

//             {/* Button */}
//           <button
//   onClick={() => setShowMore(!showMore)}
//   className="
//   mt-10
//   px-8
//   py-4
//   rounded-xl
//   border
//   border-purple-500
//   text-white
//   font-medium
//   flex
//   items-center
//   gap-2
//   hover:bg-purple-500/10
//   transition-all
//   duration-300
//   "
// >
//   {showMore ? "Read Less" : "Read More"}

//   {!showMore && (
//     <HiArrowRight className="text-lg" />
//   )}
// </button>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="relative flex justify-center">

//             {/* TOP LEFT DOTS */}
//             <div
//               className="
//               absolute
//               top-2
//               -left-2
//               grid
//               grid-cols-3
//               gap-3
//               z-20
//               "
//             >
//               {[...Array(9)].map((_, i) => (
//                 <span
//                   key={i}
//                   className="
//                   w-1.5
//                   h-1.5
//                   rounded-full
//                   bg-purple-400/50
//                   "
//                 />
//               ))}
//             </div>

//             {/* IMAGE CARD */}
//             <div
//               className="
//               relative
//               rounded-2xl
//               overflow-hidden
//               border
//               border-white/10
//               shadow-[0_0_30px_rgba(168,85,247,0.12)]
//               "
//             >
//               <img
//                 src="/about.png"
//                 alt="About"
//                 className="
//                 w-full
//                 max-w-md
//                 object-cover
//                 "
//               />
//             </div>

//             {/* 2+ YEARS CARD */}
//             <div
//               className="
//               absolute
//               top-8
//               -right-12
//               w-64
//               p-6
//               rounded-2xl
//               bg-[#1A1F35]/95
//               border
//               border-purple-500/15
//               shadow-[0_0_20px_rgba(0,0,0,0.4)]
//               hover:scale-105
//               transition-all
//               duration-300
//               "
//             >
//               <div className="flex items-center gap-4">

//                 <div
//                   className="
//                   w-14
//                   h-14
//                   rounded-full
//                   bg-purple-500/20
//                   flex
//                   items-center
//                   justify-center
//                   text-purple-400
//                   text-2xl
//                   "
//                 >
//                   <HiOutlineUserGroup />
//                 </div>

//                 <div>
//                   <h3 className="text-3xl font-bold text-white">
//                     2+
//                   </h3>

//                   <p className="text-gray-400">
//                     Years of Learning
//                   </p>
//                 </div>

//               </div>
//             </div>

//             {/* 10+ PROJECT CARD */}
//             <div
//               className="
//               absolute
//               top-[160px]
//               -right-12
//               w-64
//               p-6
//               rounded-2xl
//               bg-[#1A1F35]/95
//               border
//               border-purple-500/15
//               shadow-[0_0_20px_rgba(0,0,0,0.4)]
//               hover:scale-105
//               transition-all
//               duration-300 
//               z-20
//               "
//             >
//               <div className="flex items-center gap-4">

//                 <div
//                   className="
//                   w-14
//                   h-14
//                   rounded-full
//                   bg-purple-500/20
//                   flex
//                   items-center
//                   justify-center
//                   text-purple-400
//                   text-2xl
//                   "
//                 >
//                   <HiOutlineBriefcase />
//                 </div>

//                 <div>
//                   <h3 className="text-3xl font-bold text-white">
//                     10+
//                   </h3>

//                   <p className="text-gray-400">
//                     Projects Complete
//                   </p>
//                 </div>

//               </div>

//               {/* BOTTOM RIGHT DOTS */}
//               <div
//                 className="
//               absolute
//               -bottom-8
//               -right-8
//               grid
//               grid-cols-6
//               gap-3
//               "
//               >
//                 {[...Array(18)].map((_, i) => (
//                   <span
//                     key={i}
//                     className="
//                   w-1.5
//                   h-1.5
//                   rounded-full
//                   bg-purple-400/50
//                   "
//                   />
//                 ))}
//               </div>
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default About; 



// import { useState } from "react";
// import {
//   HiOutlineUserGroup,
//   HiOutlineBriefcase, HiArrowRight
// } from "react-icons/hi";

// const About = () => {
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <section
//       id="about"
//       className="relative py-20 overflow-hidden bg-[#08111f]"
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-10">

//        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

//           {/* LEFT CONTENT */}
//           <div>

//             {/* Section Tag */}
//             <div
//               className="
//               inline-flex
//               items-center
//               gap-2
//               px-4
//               py-2
//               rounded-full
//               border border-purple-500/20
//               bg-white/5
//               backdrop-blur-md
//               mb-6
//               "
//             >
//               <span className="text-purple-400">💎</span>

//               <span className="text-purple-300 font-medium">
//                 About Me
//               </span>
//             </div>

//             {/* Heading */}
//             <h2 className="text-2xl md:text-4xl font-bold leading-tight text-white">
//               Passionate about
//               <br />
//               building{" "}
//               <span className="bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">
//                 digital solutions
//               </span>
//             </h2>

//             {/* Description */}
//             <p className="mt-5 text-gray-400 text-[16px] leading-relaxed">
//               I'm a passionate Software Developer with a strong
//               interest in creating modern, scalable and
//               user-friendly web applications.
//             </p>

//             <p className="mt-5 text-gray-400 text-[16px] leading-relaxed">
//               As a Frontend Developer, I enjoy crafting clean,
//               responsive and interactive user interfaces using
//               React, Tailwind CSS and modern JavaScript.
//             </p>

//             {showMore && (
//               <p className="mt-5 text-gray-400 text-[16px] leading-relaxed">
//                 As a Full Stack Developer, I work across both
//                 frontend and backend technologies, building complete
//                 web solutions using the MERN stack while focusing
//                 on performance, maintainability and great user
//                 experiences.
//               </p>
//             )}

//             {/* Button */}
//           <button
//   onClick={() => setShowMore(!showMore)}
//   className="
//   mt-10
//   px-8
//   py-4
//   rounded-xl
//   border
//   border-purple-500
//   text-white
//   font-medium
//   flex
//   items-center
//   gap-2
//   hover:bg-purple-500/10
//   transition-all
//   duration-300
//   "
// >
//   {showMore ? "Read Less" : "Read More"}

//   {!showMore && (
//     <HiArrowRight className="text-lg" />
//   )}
// </button>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="relative flex justify-center  mt-8 lg:mt-0">

//             {/* TOP LEFT DOTS */}
//             <div
//               className="
//               absolute
//               top-3
// left-0
// sm:left-0
//               grid
//               grid-cols-3
//               gap-2.5
//               z-20
//               "
//             >
//               {[...Array(9)].map((_, i) => (
//                 <span
//                   key={i}
//                   className="
//                   w-1.5
//                   h-1.5
//                   rounded-full
//                   bg-purple-400/50
//                   "
//                 />
//               ))}
//             </div>

//             {/* IMAGE CARD */}
//             <div
//               className="
//               relative
//               rounded-2xl
//               overflow-hidden
//               border
//               border-white/10
//               shadow-[0_0_30px_rgba(168,85,247,0.12)]
//               "
//             >

// <img
//   src="/about.png"
//   alt="About"
//   className="
//   w-[220px]
//   xs:w-[250px]
//   sm:w-[300px]
//   md:w-[380px]
//   lg:w-[520px]
//   rounded-2xl
//   object-cover
//   "
// />
//             </div>

//             {/* 2+ YEARS CARD */}
//             <div
// className="
// absolute
// top-3
// right-[-10px]

// sm:top-5
// sm:right-0

// md:top-6
// md:right-2

// lg:top-8
// lg:-right-12

// w-[145px]
// sm:w-[165px]
// md:w-[190px]
// lg:w-64

// h-[78px]
// sm:h-[88px]
// md:h-[95px]
// lg:h-auto

// px-3
// py-2

// rounded-2xl
// bg-[#1A1F35]/95
// border border-purple-500/15
// shadow-[0_0_20px_rgba(0,0,0,0.4)]
// "
//             >
//               <div className="flex items-center gap-4">

//                 <div
//   className="
//   w-8 h-8
//   sm:w-10 sm:h-10
//   lg:w-14 lg:h-14
//   rounded-full
//   bg-purple-500/20
//   flex
//   items-center
//   justify-center
//   text-purple-400
//   text-sm
//   sm:text-lg
//   lg:text-2xl
//   "
// >
//                   <HiOutlineUserGroup />
//                 </div>

//                 <div>
//                  <h3
//   className="
//   text-lg
//   sm:text-xl
//   md:text-2xl
//   lg:text-3xl
//   font-bold
//   text-white
//   "
// >
//                     2+
//                   </h3>

//                   <p className="text-gray-400 text-xs sm:text-sm">
//                     Years of Learning
//                   </p>
//                 </div>

//               </div>
//             </div>

//             {/* 10+ PROJECT CARD */}
//             <div
// className="
// absolute

// top-[100px]
// sm:top-[115px]
// md:top-[130px]
// lg:top-[150px]

// right-[-10px]
// sm:right-0
// md:right-2
// lg:-right-12

// w-[145px]
// sm:w-[165px]
// md:w-[190px]
// lg:w-64

// h-[78px]
// sm:h-[88px]
// md:h-[95px]
// lg:h-auto

// px-3
// py-2

// rounded-2xl
// bg-[#1A1F35]/95
// border border-purple-500/15
// shadow-[0_0_20px_rgba(0,0,0,0.4)]
// z-20
// "
//             >
//               <div className="flex items-center gap-4">

//                 <div
//   className="
//   w-8 h-8
//   sm:w-10 sm:h-10
//   lg:w-14 lg:h-14
//   rounded-full
//   bg-purple-500/20
//   flex
//   items-center
//   justify-center
//   text-purple-400
//   text-sm
//   sm:text-lg
//   lg:text-2xl
//   "
// >
//                   <HiOutlineBriefcase />
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-bold text-white">
//                     10+
//                   </h3>

//                  <p
//   className="
//   text-[10px]
//   sm:text-xs
//   md:text-sm
//   text-gray-400
//   "
// >
//                     Projects Complete
//                   </p>
//                 </div>

//               </div>

//               {/* BOTTOM RIGHT DOTS */}
//               <div
//                 className="
//               absolute
//               -bottom-8
//               -right-6
//              lg:-bottom-8
// lg:-right-8
//               grid
//               grid-cols-6
//               gap-2.5
//               "
//               >
//                 {[...Array(18)].map((_, i) => (
//                   <span
//                     key={i}
//                     className="
//                   w-1.5
//                   h-1.5
//                   rounded-full
//                   bg-purple-400/50
//                   "
//                   />
//                 ))}
//               </div>
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;



// import { useState } from "react";
// import {
//   HiOutlineUserGroup,
//   HiOutlineBriefcase, HiArrowRight
// } from "react-icons/hi";

// const About = () => {
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <section
//       id="about"
//       className="relative py-20 overflow-hidden bg-[#08111f]"
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-10">

//        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

//           {/* LEFT CONTENT */}
//           <div>

//             {/* Section Tag */}
//             <div
//               className="
//               inline-flex
//               items-center
//               gap-2
//               px-4
//               py-2
//               rounded-full
//               border border-purple-500/20
//               bg-white/5
//               backdrop-blur-md
//               mb-6
//               "
//             >
//               <span className="text-purple-400">💎</span>

//               <span className="text-purple-300 font-medium">
//                 About Me
//               </span>
//             </div>

//             {/* Heading */}
//             <h2 className="text-2xl md:text-4xl font-bold leading-tight text-white">
//               Passionate about
//               <br />
//               building{" "}
//               <span className="bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">
//                 digital solutions
//               </span>
//             </h2>

//             {/* Description */}
//             <p className="mt-5 text-gray-400 text-[16px] leading-relaxed">
//               I'm a passionate Software Developer with a strong
//               interest in creating modern, scalable and
//               user-friendly web applications.
//             </p>

//             <p className="mt-5 text-gray-400 text-[16px] leading-relaxed">
//               As a Frontend Developer, I enjoy crafting clean,
//               responsive and interactive user interfaces using
//               React, Tailwind CSS and modern JavaScript.
//             </p>

//             {showMore && (
//               <p className="mt-5 text-gray-400 text-[16px] leading-relaxed">
//                 As a Full Stack Developer, I work across both
//                 frontend and backend technologies, building complete
//                 web solutions using the MERN stack while focusing
//                 on performance, maintainability and great user
//                 experiences.
//               </p>
//             )}

//             {/* Button */}
//           <button
//   onClick={() => setShowMore(!showMore)}
//   className="
//   mt-10
//   px-8
//   py-4
//   rounded-xl
//   border
//   border-purple-500
//   text-white
//   font-medium
//   flex
//   items-center
//   gap-2
//   hover:bg-purple-500/10
//   transition-all
//   duration-300
//   "
// >
//   {showMore ? "Read Less" : "Read More"}

//   {!showMore && (
//     <HiArrowRight className="text-lg" />
//   )}
// </button>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="relative flex justify-center  mt-8 lg:mt-0">

//             {/* TOP LEFT DOTS */}
//             <div
//               className="
//               absolute
//               top-3
// left-0
// sm:left-0
//               grid
//               grid-cols-3
//               gap-2.5
//               z-20
//               "
//             >
//               {[...Array(9)].map((_, i) => (
//                 <span
//                   key={i}
//                   className="
//                   w-1.5
//                   h-1.5
//                   rounded-full
//                   bg-purple-400/50
//                   "
//                 />
//               ))}
//             </div>

//             {/* IMAGE CARD */}
//             <div
//               className="
//               relative
//               rounded-2xl
//               overflow-hidden
//               border
//               border-white/10
//               shadow-[0_0_30px_rgba(168,85,247,0.12)]
//               "
//             >

// <img
//   src="/about.png"
//   alt="About"
//   className="
//   w-[220px]
//   xs:w-[250px]
//   sm:w-[300px]
//   md:w-[380px]
//   lg:w-[520px]
//   rounded-2xl
//   object-cover
//   "
// />
//             </div>

//             {/* 2+ YEARS CARD */}
//             <div
// className="
// absolute

// top-2
// right-0

// sm:top-4
// sm:right-0

// md:top-6
// md:right-0

// lg:top-12
// lg:-right-12

// w-[150px]
// sm:w-[180px]
// md:w-[210px]
// lg:w-64

// h-[70px]
// sm:h-[80px]
// md:h-[90px]
// lg:h-auto

// px-2
// sm:px-3
// md:px-4
// lg:p-6

// rounded-2xl
// bg-[#1A1F35]/95
// border border-purple-500/15
// shadow-[0_0_20px_rgba(0,0,0,0.4)]
// "
//             >
//               <div className="flex items-center gap-4">

//                 <div
//   className="
// w-8 h-8
// sm:w-10 sm:h-10
// md:w-12 md:h-12
// lg:w-14 lg:h-14

// rounded-full
// bg-purple-500/20
// flex items-center justify-center

// text-xs
// sm:text-sm
// md:text-lg
// lg:text-2xl

// text-purple-400
// "
// >
//                   <HiOutlineUserGroup />
//                 </div>

//                 <div>
//                  <h3
//   className="
//   text-lg
//   sm:text-xl
//   md:text-2xl
//   lg:text-3xl
//   font-bold
//   text-white
//   "
// >
//                     2+
//                   </h3>

//                   <p className="text-gray-400 text-xs sm:text-sm">
//                     Years of Learning
//                   </p>
//                 </div>

//               </div>
//             </div>

//             {/* 10+ PROJECT CARD */}
//             <div
// className="
// absolute

// top-[82px]
// sm:top-[100px]
// md:top-[120px]

// lg:top-[190px]

// right-0
// sm:right-0
// md:right-0

// lg:-right-12

// w-[150px]
// sm:w-[180px]
// md:w-[210px]
// lg:w-64

// h-[70px]
// sm:h-[80px]
// md:h-[90px]
// lg:h-auto

// px-2
// sm:px-3
// md:px-4
// lg:p-6

// rounded-2xl
// bg-[#1A1F35]/95
// border border-purple-500/15
// shadow-[0_0_20px_rgba(0,0,0,0.4)]
// z-20
// "
//             >
//               <div className="flex items-center gap-4">

//                 <div
//   className="
// w-8 h-8
// sm:w-10 sm:h-10
// md:w-12 md:h-12
// lg:w-14 lg:h-14

// rounded-full
// bg-purple-500/20
// flex items-center justify-center

// text-xs
// sm:text-sm
// md:text-lg
// lg:text-2xl

// text-purple-400
// "
// >
//                   <HiOutlineBriefcase />
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-bold text-white">
//                     10+
//                   </h3>

//                  <p
//   className="
//   text-[10px]
//   sm:text-xs
//   md:text-sm
//   text-gray-400
//   "
// >
//                     Projects Complete
//                   </p>
//                 </div>

//               </div>

//               {/* BOTTOM RIGHT DOTS */}
//               <div
//                 className="
//               absolute
//              -bottom-4
// right-0

// sm:-bottom-5
// sm:right-0

// md:-bottom-6
// md:-right-2

// lg:-bottom-6
// lg:-right-8

//               grid
//               grid-cols-6
//               gap-3
//               "
//               >
//                 {[...Array(18)].map((_, i) => (
//                   <span
//                     key={i}
//                     className="
//                   w-1.5
//                   h-1.5
//                   rounded-full
//                   bg-purple-400/50
//                   "
//                   />
//                 ))}
//               </div>
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;


import { useState } from "react";
import {
  HiOutlineUserGroup,
  HiOutlineBriefcase, HiArrowRight
} from "react-icons/hi";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden bg-[#08111f]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

      <div
  className="
  grid
  lg:grid-cols-2
  gap-10
  md:gap-12
  lg:gap-16
  items-center
  "
>
          {/* LEFT CONTENT */}
          <div>

            {/* Section Tag */}
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
              <span className="text-purple-400">💎</span>

              <span className="text-purple-300 font-medium">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-4xl font-bold leading-tight text-white">
              Passionate about
              <br />
              building{" "}
              <span className="bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">
                digital solutions
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 text-gray-400 text-[16px] leading-relaxed">
              I'm a passionate Software Developer with a strong
              interest in creating modern, scalable and
              user-friendly web applications.
            </p>

            <p className="mt-5 text-gray-400 text-[16px] leading-relaxed">
              As a Frontend Developer, I enjoy crafting clean,
              responsive and interactive user interfaces using
              React, Tailwind CSS and modern JavaScript.
            </p>

            {showMore && (
              <p className="mt-5 text-gray-400 text-[16px] leading-relaxed">
                As a Full Stack Developer, I work across both
                frontend and backend technologies, building complete
                web solutions using the MERN stack while focusing
                on performance, maintainability and great user
                experiences.
              </p>
            )}

            {/* Button */}
          <button
  onClick={() => setShowMore(!showMore)}
  className="
  mt-10
  px-8
  py-4
  rounded-xl
  border
  border-purple-500
  text-white
  font-medium
  flex
  items-center
  gap-2
  hover:bg-purple-500/10
  transition-all
  duration-300
  "
>
  {showMore ? "Read Less" : "Read More"}

  {!showMore && (
    <HiArrowRight className="text-lg" />
  )}
</button>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center  mt-8 lg:mt-0">

            {/* TOP LEFT DOTS */}
            {/* md:left-22
lg:-left-2 */}
            <div
             className="
absolute
top-3
left-2
sm:left-4
md:left-4
lg:-left-12
xl:-left-2
grid
grid-cols-3
gap-2
lg:gap-3
z-20
"
            >
              {[...Array(9)].map((_, i) => (
                <span
                  key={i}
                  className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-purple-400/50
                  "
                />
              ))}
            </div>

            {/* IMAGE CARD */}
            <div
              className="
              relative
              rounded-2xl
              overflow-hidden
              border
              border-white/10
              shadow-[0_0_30px_rgba(168,85,247,0.12)]
              "
            >
<img
  src="/about.png"
  alt="About"
 className="
w-[250px]
sm:w-[320px]
md:w-[400px]
lg:w-[420px]
xl:max-w-md
object-cover
rounded-2xl
"
/>
            </div>

            {/* 2+ YEARS CARD */}
            <div
className="
absolute

top-2
right-0

sm:top-4
sm:right-2

md:top-6
md:right-4

lg:top-8
lg:-right-8

w-[150px]
sm:w-[180px]
md:w-[210px]
lg:w-64

p-3
sm:p-4
md:p-5
lg:p-6

rounded-2xl
bg-[#1A1F35]/95
border border-purple-500/15
shadow-[0_0_20px_rgba(0,0,0,0.4)]
"
            >
              <div className="flex items-center gap-4">

                <div
  className="
w-8 h-8
sm:w-10 sm:h-10
md:w-12 md:h-12
lg:w-14 lg:h-14

rounded-full
bg-purple-500/20
flex
items-center
justify-center

text-sm
sm:text-lg
md:text-xl
lg:text-2xl

text-purple-400
"
>
                  <HiOutlineUserGroup />
                </div>

                <div>
                 <h3
  className="
text-lg
sm:text-xl
md:text-2xl
lg:text-3xl
font-bold
text-white
"
>
                    2+
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm">
                    Years of Learning
                  </p>
                </div>

              </div>
            </div>

            {/* 10+ PROJECT CARD */}
            <div
className="
absolute

top-[95px]
sm:top-[120px]
md:top-[145px]

lg:top-[160px]

right-0
sm:right-2
md:right-4

lg:-right-8

w-[150px]
sm:w-[180px]
md:w-[210px]
lg:w-64

p-3
sm:p-4
md:p-5
lg:p-6

rounded-2xl
bg-[#1A1F35]/95
border border-purple-500/15
shadow-[0_0_20px_rgba(0,0,0,0.4)]
z-20
"
            >
              <div className="flex items-center gap-4">

                <div
  className="
w-8 h-8
sm:w-10 sm:h-10
md:w-12 md:h-12
lg:w-14 lg:h-14

rounded-full
bg-purple-500/20
flex
items-center
justify-center

text-sm
sm:text-lg
md:text-xl
lg:text-2xl

text-purple-400
"
>
                  <HiOutlineBriefcase />
                </div>

                <div>
                  <h3 className="
text-lg
sm:text-xl
md:text-2xl
lg:text-3xl
font-bold
text-white
">
                    10+
                  </h3>

                 <p
  className="
  text-[10px]
  sm:text-xs
  md:text-sm
  text-gray-400
  "
>
                    Projects Complete
                  </p>
                </div>

              </div>

              {/* BOTTOM RIGHT DOTS */}
              <div
               className="
absolute

-bottom-4
right-0

sm:-bottom-5
sm:-right-2

md:-bottom-6
md:-right-4

lg:-bottom-8
lg:-right-4

grid
grid-cols-6
gap-2
lg:gap-3
"
              >
                {[...Array(18)].map((_, i) => (
                  <span
                    key={i}
                    className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-purple-400/50
                  "
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
