// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import {
//   FaReact,
//   FaNodeJs,
//   FaPython,
//   FaDocker,
//   FaGithub,
//   FaAws,
//   FaDatabase,
// } from "react-icons/fa";
// import AnimatedBackground from "../components/AnimatedBackground";
// import SmartBackButton from "../components/SmartBackButton";

// export default function About() {
//   const navigate = useNavigate();

//   const skills = [
//     {
//       icon: FaReact,
//       name: "React",
//       color: "#61DAFB",
//       link: "https://reactjs.org",
//     },
//     {
//       icon: FaNodeJs,
//       name: "Node.js",
//       color: "#339933",
//       link: "https://nodejs.org",
//     },
//     {
//       icon: FaPython,
//       name: "Python",
//       color: "#3776AB",
//       link: "https://python.org",
//     },
//     {
//       icon: FaDocker,
//       name: "Docker",
//       color: "#2496ED",
//       link: "https://docker.com",
//     },
//     {
//       icon: FaGithub,
//       name: "GitHub",
//       color: "#181717",
//       link: "https://github.com",
//     },
//     {
//       icon: FaAws,
//       name: "AWS",
//       color: "#FF9900",
//       link: "https://aws.amazon.com",
//     },
//     {
//       icon: FaDatabase,
//       name: "MongoDB",
//       color: "#47A248",
//       link: "https://mongodb.com",
//     },
//     {
//       icon: FaReact,
//       name: "JavaScript",
//       color: "#F7DF1E",
//       link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
//     },
//   ];

//   return (
//     <div className="section-container">
//       <AnimatedBackground />

//       <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 max-w-6xl w-full z-10">
//         {/* LEFT SECTION - PHOTO + PROJECTS */}
//         <motion.div
//           className="space-y-8"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* PROFESSIONAL PHOTO */}
//           <div className="profile-image-wrapper">
//             <motion.div
//               className="profile-image w-72 h-96 rounded-3xl border-4 border-primary/30 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black/30 relative overflow-hidden"
//               animate={{
//                 boxShadow: [
//                   "0 0 20px rgba(99, 102, 241, 0.5)",
//                   "0 0 40px rgba(139, 92, 246, 0.8)",
//                   "0 0 60px rgba(59, 130, 246, 0.4)",
//                 ],
//               }}
//               transition={{ duration: 4, repeat: Infinity }}
//             >
//               <img
//                 src="/shakti-profile.png"
//                 alt="Shakti Sahu - Professional Developer"
//                 className="w-full h-full object-cover rounded-2xl"
//               />
//             </motion.div>
//           </div>

//           {/* LATEST PROJECTS MINI */}
//           <div className="glass-card p-6">
//             <h3 className="text-xl font-semibold text-primary mb-4">
//               Latest Projects
//             </h3>
//             <div className="space-y-3">
//               {["TEDx", "AI Platform", "E-Commerce"].map((project, idx) => (
//                 <div
//                   key={idx}
//                   className="bg-primary/10 px-4 py-3 rounded-lg border-l-4 border-primary"
//                 >
//                   {project}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* RIGHT SECTION - ABOUT + SKILLS */}
//         <motion.div
//           className="space-y-8"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           {/* ABOUT ME TEXT */}
//           <div>
//             <h2 className="text-5xl font-bold text-white mb-6">About Me</h2>
//             <p className="text-lg leading-relaxed text-gray-400 max-w-2xl">
//               I am Shakti Sahu, a 3rd-year BCA student (2026 Batch) and a
//               passionate Frontend Developer based in Indore. I love turning
//               complex designs into pixel-perfect reality—whether it's
//               hand-coding official site clones or building automated workflows
//               with n8n. With a strong foundation in React.js and Tailwind CSS, I
//               focus on writing clean, efficient code that balances logic with
//               aesthetics. Currently exploring the intersection of modern web
//               tech and automation.
//             </p>
//           </div>

//           {/* SKILLS GRID - CLICKABLE */}
//           <div>
//             <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
//               {skills.map((skill, index) => {
//                 const IconComponent = skill.icon;
//                 return (
//                   <motion.a
//                     key={skill.name}
//                     href={skill.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="glass-card p-5 flex flex-col items-center gap-3 cursor-pointer group hover:bg-primary/10 transition-all duration-300"
//                     initial={{ opacity: 0, scale: 0 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: index * 0.1, duration: 0.3 }}
//                     whileHover={{
//                       scale: 1.15,
//                       rotate: 5,
//                       boxShadow: `0 0 25px ${skill.color}80`,
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <div
//                       className="text-5xl transition-all group-hover:scale-110"
//                       style={{ color: skill.color }}
//                     >
//                       <IconComponent />
//                     </div>
//                     <span className="text-sm font-medium text-white text-center">
//                       {skill.name}
//                     </span>
//                   </motion.a>
//                 );
//               })}
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       <SmartBackButton />
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGithub,
  FaAws,
  FaDatabase,
  FaJs,
  FaArrowLeft,
  FaTerminal,
} from "react-icons/fa";
import { SiTailwindcss, SiVite, SiVercel } from "react-icons/si";
import AnimatedBackground from "../components/AnimatedBackground";
import SmartBackButton from "../components/SmartBackButton";

export default function About() {
  const navigate = useNavigate();

  const skills = [
    {
      icon: FaReact,
      name: "React",
      color: "#61DAFB",
      link: "https://reactjs.org",
    },
    {
      icon: FaNodeJs,
      name: "Node.js",
      color: "#339933",
      link: "https://nodejs.org",
    },
    {
      icon: FaPython,
      name: "Python",
      color: "#3776AB",
      link: "https://python.org",
    },
    {
      icon: FaDatabase,
      name: "MongoDB",
      color: "#47A248",
      link: "https://mongodb.com",
    },
    {
      icon: FaJs,
      name: "JavaScript",
      color: "#F7DF1E",
      link: "https://developer.mozilla.org",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind",
      color: "#06B6D4",
      link: "https://tailwindcss.com",
    },
    {
      icon: SiVite,
      name: "Vite",
      color: "#646CFF",
      link: "https://vitejs.dev",
    },
    {
      icon: FaGithub,
      name: "GitHub",
      color: "#FFFFFF",
      link: "https://github.com",
    },
  ];

  return (
    <div className="section-container relative min-h-screen bg-[#030712] text-white py-20 px-4 overflow-hidden">
      <AnimatedBackground />

      {/* --- TOP HEADER --- */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-16 z-20 relative">
        <motion.button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-cyan-400 font-bold hover:text-white transition-colors group"
          whileHover={{ x: -5 }}
        >
          <FaArrowLeft /> Back Home
        </motion.button>
        <div className="text-right">
          <p className="text-cyan-500 font-mono text-sm tracking-widest">
            BCA // CLASS OF 2026
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 max-w-6xl mx-auto w-full z-10 relative">
        {/* LEFT SECTION - THE PROFILE HUB */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* PROFESSIONAL PHOTO WITH NEON FRAME */}
          <div className="relative group">
            <motion.div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-[2.5rem] blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></motion.div>
            <div className="relative w-full aspect-[3/4] rounded-[2.2rem] bg-black border border-white/10 overflow-hidden">
              <img
                src="/shakti-profile.png"
                alt="Shakti Sahu"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>
          </div>

          {/* PROJECT TERMINAL CARD */}
          <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs font-mono text-white/40 uppercase tracking-widest">
                latest_logs.exe
              </span>
            </div>
            <div className="space-y-4 font-mono text-sm">
              {[
                {
                  name: "TEDx Clone",
                  status: "Completed",
                  color: "text-purple-400",
                },
                {
                  name: "Tenant Home",
                  status: "Active",
                  color: "text-cyan-400",
                },
                {
                  name: "n8n Automation",
                  status: "Research",
                  color: "text-emerald-400",
                },
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center group/item cursor-default"
                >
                  <span className="text-white/70 group-hover/item:text-white transition-colors">
                    {">"} {project.name}
                  </span>
                  <span
                    className={`${project.color} text-[10px] font-bold px-2 py-0.5 border border-current rounded`}
                  >
                    {project.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT SECTION - THE STORY & TECH */}
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* ABOUT ME STORY */}
          <div>
            <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-tighter italic">
              MY <span className="text-cyan-500">STORY</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-400 leading-relaxed font-medium">
              <p>
                I am <span className="text-white">Shakti Sahu</span>, a 3rd-year
                BCA student and a Frontend Engineer based in{" "}
                <span className="text-white">Indore</span>.
              </p>
              <p>
                My philosophy is simple:{" "}
                <span className="text-cyan-400 italic">
                  "Logic meets Aesthetics."
                </span>{" "}
                Whether I am hand-coding a complex UI recreation or architecting
                a rental management backend, I focus on pixel-perfect precision.
              </p>
              <p>
                Currently, I am deep-diving into{" "}
                <span className="text-white">Automation with n8n</span> and
                prepping for{" "}
                <span className="text-white underline decoration-cyan-500">
                  Infobeans ITEP 2026
                </span>
                .
              </p>
            </div>
          </div>

          {/* TECH STACK GRID */}
          <div>
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3 tracking-widest text-white/50">
              <FaTerminal className="text-cyan-500" /> TECH_STACK_2.0
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.a
                    key={skill.name}
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex flex-col items-center gap-4 transition-all overflow-hidden"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      style={{ backgroundColor: skill.color }}
                    />
                    <div
                      className="text-4xl transition-transform duration-500 group-hover:scale-125"
                      style={{ color: skill.color }}
                    >
                      <IconComponent />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-white/60 group-hover:text-white uppercase">
                      {skill.name}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
