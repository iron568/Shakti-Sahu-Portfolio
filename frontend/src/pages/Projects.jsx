// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import {
//   SiReact,
//   SiTailwindcss,
//   SiFirebase,
//   SiGithub,
//   SiNpm,
//   SiPython,
//   SiVercel,
// } from "react-icons/si";
// import AnimatedBackground from "../components/AnimatedBackground";
// import SmartBackButton from "../components/SmartBackButton";

// export default function Projects() {
//   const navigate = useNavigate();

//   const projects = [
//     {
//       title: "TEDx UI Clone & Frontend Lab",
//       description:
//         "A pixel-perfect recreation of the official TEDx program page, built entirely from scratch to master complex layouts. Focused on capturing the exact typography and design system using React and Tailwind CSS.",
//       gradient: "from-purple-600 to-purple-900",
//       color: "text-red-500",
//       link: "https://tedx-shakti.vercel.app",
//       tech: [
//         {
//           name: "React",
//           icon: SiReact,
//           color: "#61DAFB",
//           link: "https://reactjs.org",
//         },
//         {
//           name: "Tailwind",
//           icon: SiTailwindcss,
//           color: "#06B6D4",
//           link: "https://tailwindcss.com",
//         },
//         {
//           name: "Vercel",
//           icon: SiVercel,
//           color: "#FFFFFF",
//           link: "https://vercel.com/",
//         },
//       ],
//       links: {
//         live: "https://tedx-shakti.vercel.app",
//         github: "https://github.com/shaktisahu/tedx-auth",
//       },
//     },
//     {
//       title: "AI Assistant Platform",
//       description:
//         "Advanced AI system with natural language processing and real-time responses.",
//       gradient: "from-teal-500 to-emerald-600",
//       color: "text-cyan-400",
//       tech: [
//         {
//           name: "React",
//           icon: SiReact,
//           color: "#61DAFB",
//           link: "https://reactjs.org",
//         },
//         {
//           name: "Node.js",
//           icon: SiNpm,
//           color: "#CB3837",
//           link: "https://nodejs.org",
//         },
//         {
//           name: "Python",
//           icon: SiPython,
//           color: "#3776AB",
//           link: "https://python.org",
//         },
//       ],
//       links: {
//         live: "https://ai-assistant.shaktisahu.com",
//         github: "https://github.com/shaktisahu/ai-assistant",
//       },
//     },
//     {
//       title: "Rental Management Hub",
//       description:
//         "A hand-coded, full-stack rental management system built with React and Node.js. It features a secure dashboard to manage tenant data, property updates, and real-time record tracking. Integrated with a structured database to ensure data integrity and a seamless user experience",
//       gradient: "from-blue-500 to-cyan-400",
//       color: "text-blue-400",
//       link: "https://tenant-home.vercel.app",
//       tech: [
//         {
//           name: "React",
//           icon: SiReact,
//           color: "#61DAFB",
//           link: "https://reactjs.org",
//         },
//         {
//           name: "Node.js",
//           icon: SiNpm,
//           color: "#CB3837",
//           link: "https://nodejs.org",
//         },
//         {
//           name: "MongoDB",
//           icon: SiFirebase,
//           color: "#47A248",
//           link: "https://mongodb.com",
//         },
//       ],
//       links: {
//         live: "https://tenant-home.vercel.app",
//         github: "https://github.com/shaktisahu/ecommerce",
//       },
//     },
//   ];

//   return (
//     <div className="section-container">
//       <AnimatedBackground />

//       <motion.div
//         className="w-full max-w-6xl z-10"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="text-center mb-16">
//           <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
//             My Projects
//           </h1>
//           <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//             A collection of pixel-perfect interfaces and functional web
//             applications, showcasing my journey from 3rd-year BCA to becoming a
//             Frontend Engineer.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               className="group relative overflow-hidden rounded-3xl min-h-[24rem] h-full shadow-2xl hover:shadow-glow-cyan-lg transition-all duration-500"
//               style={{
//                 background: `linear-gradient(to bottom right, ${project.gradient})`,
//                 backgroundSize: "200% 200%",
//               }}
//               initial={{ opacity: 0, scale: 0.9, y: 50 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               whileHover={{
//                 scale: 1.05,
//                 y: -10,
//                 rotateX: 2,
//                 rotateY: -2,
//                 transition: { duration: 0.3 },
//                 backgroundSize: "250% 250%",
//                 backgroundPosition: "100% 100%",
//               }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//               <div className="relative z-10 p-8 h-full flex flex-col justify-between">
//                 <h2
//                   className={`text-3xl font-black mb-4 drop-shadow-2xl ${project.color}`}
//                 >
//                   {project.title}
//                 </h2>
//                 <p className="text-white/90 mb-3 leading-relaxed text-lg line-clamp-3 hover:line-clamp-none transition-all duration-300">
//                   {project.description}
//                 </p>

//                 {/* TECH STACK - CLICKABLE LINKS ✅ */}
//                 {/* TECH STACK - SMALL ROUNDED BADGES (Screenshot Perfect) */}
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.tech.map((techItem, techIndex) => {
//                     const TechIcon = techItem.icon;
//                     return (
//                       <motion.a
//                         key={techItem.name}
//                         href={techItem.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-xs font-semibold border border-white/20 cursor-pointer group/tech flex items-center gap-1.5 h-8 transition-all duration-300"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ delay: techIndex * 0.1 }}
//                         whileHover={{
//                           scale: 1.1,
//                           boxShadow: `0 0 15px ${techItem.color}60`,
//                           backgroundColor: `${techItem.color}15`,
//                         }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <div
//                           className="text-sm transition-transform group-hover/tech:scale-110"
//                           style={{ color: techItem.color }}
//                         >
//                           <TechIcon />
//                         </div>
//                         <span className="text-white/90 group-hover/tech:text-primary transition-colors whitespace-nowrap">
//                           {techItem.name}
//                         </span>
//                       </motion.a>
//                     );
//                   })}
//                 </div>

//                 {/* ACTION BUTTONS */}
//                 <div className="flex gap-4">
//                   <motion.a
//                     href={project.links.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300 group/btn"
//                     whileHover={{ scale: 1.05, y: -2 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <span className="block group-hover/btn:hidden">
//                       🚀 Live Demo
//                     </span>
//                     <span className="hidden group-hover/btn:block">
//                       → Visit Site
//                     </span>
//                   </motion.a>

//                   <motion.a
//                     href={project.links.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center transition-all duration-300"
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <SiGithub className="text-xl" />
//                   </motion.a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       <SmartBackButton />
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiPython,
  SiVercel,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { FaArrowLeft, FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa";
import AnimatedBackground from "../components/AnimatedBackground";

export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "TEDx UI RECREATION",
      description:
        "A pixel-perfect recreation of the official TEDx program page, built entirely from scratch to master complex layouts. Focused on capturing the exact typography and design system.",
      gradient: "from-purple-600/20 via-purple-900/40 to-black",
      borderColor: "border-purple-500/30",
      accentColor: "text-purple-400",
      glowColor: "shadow-purple-500/20",
      tech: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      ],
      links: {
        live: "https://tedx-shakti.vercel.app",
        github: "https://github.com/shaktisahu/tedx-auth",
      },
    },
    {
      title: "AI ASSISTANT PLATFORM",
      description:
        "Advanced AI system with natural language processing and real-time responses. Designed for high-performance interactions and seamless user feedback.",
      gradient: "from-emerald-600/20 via-emerald-900/40 to-black",
      borderColor: "border-emerald-500/30",
      accentColor: "text-emerald-400",
      glowColor: "shadow-emerald-500/20",
      tech: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
      ],
      links: {
        live: "https://ai-assistant.shaktisahu.com",
        github: "https://github.com/shaktisahu/ai-assistant",
      },
    },
    {
      title: "RENTAL MANAGEMENT HUB",
      description:
        "A hand-coded, full-stack system with a secure dashboard to manage tenant data and property updates. Integrated with a structured database for real-time tracking.",
      gradient: "from-cyan-600/20 via-cyan-900/40 to-black",
      borderColor: "border-cyan-500/30",
      accentColor: "text-cyan-400",
      glowColor: "shadow-cyan-500/20",
      tech: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "SQL DB", icon: SiMongodb, color: "#47A248" },
      ],
      links: {
        live: "https://tenant-home.vercel.app",
        github: "https://github.com/shaktisahu/ecommerce",
      },
    },
  ];

  return (
    <div className="section-container relative min-h-screen bg-[#030712] text-white py-20 px-4 overflow-hidden">
      <AnimatedBackground />

      {/* --- BACK NAVIGATION --- */}
      <div className="max-w-7xl mx-auto mb-12 z-20 relative">
        <motion.button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-cyan-400 font-bold hover:text-white transition-all group"
          whileHover={{ x: -5 }}
        >
          <FaArrowLeft /> Exit to Dashboard
        </motion.button>
      </div>

      {/* --- HEADER --- */}
      <motion.div
        className="text-center mb-20 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
          SELECTED{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            WORKS
          </span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A collection of high-performance applications showcasing my journey
          from BCA to Frontend Engineering.
        </p>
      </motion.div>

      {/* --- PROJECTS GRID --- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className={`group relative rounded-[2.5rem] p-1 bg-gradient-to-br ${project.borderColor} overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,0,0,0.5)] ${project.glowColor}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            {/* INNER CARD */}
            <div
              className={`relative h-full w-full bg-gradient-to-br ${project.gradient} rounded-[2.4rem] p-8 flex flex-col justify-between backdrop-blur-3xl`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3
                    className={`text-3xl font-black leading-none tracking-tighter ${project.accentColor}`}
                  >
                    {project.title}
                  </h3>
                  <div className="text-white/20 group-hover:text-white transition-colors">
                    <FaExternalLinkAlt className="-rotate-45" />
                  </div>
                </div>

                <p className="text-gray-300 mb-8 leading-relaxed font-medium">
                  {project.description}
                </p>

                {/* TECH STACK BADGES */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t) => (
                    <span
                      key={t.name}
                      className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-widest text-white/70 group-hover:border-white/30 transition-all"
                    >
                      <t.icon style={{ color: t.color }} />{" "}
                      {t.name.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex gap-4">
                <motion.a
                  href={project.links.live}
                  target="_blank"
                  className="flex-1 py-4 bg-white text-black rounded-2xl font-black text-center flex items-center justify-center gap-2 group/btn relative overflow-hidden transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    LIVE PREVIEW
                  </span>
                </motion.a>

                <motion.a
                  href={project.links.github}
                  target="_blank"
                  className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-black transition-all"
                  whileHover={{ rotate: 12, scale: 1.1 }}
                >
                  <FaGithubAlt className="text-2xl" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
