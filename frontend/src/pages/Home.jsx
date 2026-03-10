import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaCode,
  FaRocket,
  FaTimes,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import axios from "axios";
import AnimatedBackground from "../components/AnimatedBackground";

export default function Home() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // --- UNIQUE VISITOR TRACKING (HOME ONLY) ---
  useEffect(() => {
    const trackVisitor = async () => {
      const isTracked = sessionStorage.getItem("portfolio_session_v2");
      if (!isTracked) {
        try {
          // Local testing ke liye: http://localhost:5001/api/track
          // Live ke liye niche wali link use karein
          await axios.get(
            "https://shakti-sahu-portfolio.onrender.com/api/track",
            {
              headers: { "x-new-session": "true" },
            },
          );
          sessionStorage.setItem("portfolio_session_v2", "true");
        } catch (err) {
          console.log("Tracking sync...");
        }
      }
    };
    trackVisitor();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const menuItems = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="section-container relative min-h-screen bg-[#030712] text-white overflow-hidden italic-none">
      <AnimatedBackground />

      {/* DYNAMIC CURSOR GLOW */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 opacity-50"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.15), transparent 80%)`,
        }}
      />

      {/* NAV MENU */}
      <nav className="fixed top-0 left-0 right-0 h-24 flex justify-between items-center px-8 md:px-12 z-[100]">
        <motion.button
          onClick={() => setIsMenuOpen(true)}
          className="p-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl hover:border-cyan-400/50 transition-all group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="flex flex-col gap-1.5">
            <span className="w-8 h-1 bg-cyan-400 rounded-full group-hover:w-10 transition-all"></span>
            <span className="w-10 h-1 bg-white rounded-full"></span>
            <span className="w-6 h-1 bg-cyan-400 rounded-full group-hover:w-10 transition-all"></span>
          </div>
        </motion.button>

        {/* INTERNSHIP BADGE */}
        <motion.div className="hidden md:flex items-center gap-3 px-6 py-2 bg-black/40 border border-cyan-500/20 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.1)]">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          <span className="text-[10px] font-black tracking-[0.2em] text-cyan-400 group-hover:text-white transition-colors">
            AVAILABLE FOR INTERNSHIPS 2026
          </span>
        </motion.div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[110]"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[350px] bg-gradient-to-b from-gray-900 to-black border-r border-white/10 z-[120] p-12 flex flex-col justify-center gap-12"
            >
              {" "}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-10 right-10 text-3xl text-white/50 hover:text-cyan-400 transition-colors"
              >
                <FaTimes />
              </button>
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className="group cursor-pointer"
                >
                  <h3 className="text-6xl font-black text-white group-hover:text-cyan-400 transition-all tracking-tighter uppercase italic">
                    {item.name}
                  </h3>
                  <div className="h-1 w-0 group-hover:w-full bg-cyan-400 transition-all duration-500 shadow-[0_0_10px_#22d3ee]"></div>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-32 pb-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-8xl md:text-[10rem] font-black leading-none mb-4 tracking-tighter">
            <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent uppercase">
              SHAKTI
            </span>
            <br />
            <span className="inline-block px-8 py-2 border-[6px] border-cyan-500 text-cyan-500 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
              SAHU
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-medium mt-6 max-w-3xl mx-auto">
            BCA Scholar & Frontend Engineer crafting{" "}
            <span className="text-white">high-performance</span> digital
            experiences.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 mt-12 px-4 w-full">
          <motion.a
            href="/resume-shakti.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Shakti-Sahu-Resume.pdf"
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 md:px-10 py-4 bg-cyan-500 text-black font-black text-lg md:text-xl rounded-2xl md:rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-cyan-500/60 transition-all flex items-center justify-center gap-3 active:bg-white"
          >
            Get Resume <FaRocket />
          </motion.a>

          <motion.button
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert("CV is not available, wait for some days")}
            className="w-full sm:w-auto px-8 md:px-10 py-4 bg-transparent border-2 border-white/20 hover:border-cyan-500 hover:text-cyan-500 text-white font-bold text-lg md:text-xl rounded-2xl md:rounded-full transition-all flex items-center justify-center shadow-lg"
          >
            Portfolio CV
          </motion.button>
        </div>
      </main>

      {/* SELECTED WORKS */}
      <section className="relative z-20 px-8 pb-20 mt-12">
        <div className="flex items-center justify-between mb-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-black tracking-tighter uppercase italic">
            Selected Works
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent mx-8 hidden md:block" />
          <button
            onClick={() => navigate("/projects")}
            className="text-cyan-400 font-bold flex items-center gap-2 group tracking-widest text-xs"
          >
            VIEW ALL{" "}
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              name: "TEDx UI RECREATION",
              color: "from-purple-600",
              glow: "group-hover:shadow-purple-500/40",
              link: "https://tedx-shakti.vercel.app",
            },
            {
              name: "AI ASSISTANT",
              color: "from-emerald-600",
              glow: "group-hover:shadow-emerald-500/40",
              link: "#",
            },
            {
              name: "RENTAL HUB",
              color: "from-blue-600",
              glow: "group-hover:shadow-blue-500/40",
              link: "https://tenant-home.vercel.app",
            },
          ].map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`group h-80 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${project.color} to-black p-8 flex flex-col justify-end border border-white/5 transition-all duration-700 hover:scale-[1.02] shadow-2xl ${project.glow}`}
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <FaArrowRight className="-rotate-45 text-xl text-white" />
              </div>
              <div className="relative z-10">
                <p className="text-white/40 text-[10px] font-black tracking-[0.3em] mb-2 uppercase group-hover:text-cyan-400 transition-colors">
                  Project_0{i + 1}
                </p>
                <h3 className="text-3xl font-black mb-2 leading-none tracking-tighter uppercase">
                  {project.name}
                </h3>
                <div className="w-0 group-hover:w-full h-1 bg-cyan-500 transition-all duration-700" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* SOCIAL LINKS */}
      <div className="fixed left-8 bottom-12 hidden lg:flex flex-col gap-8 z-50">
        {[
          { icon: FaGithub, url: "https://github.com/iron568" },
          {
            icon: FaLinkedin,
            url: "https://www.linkedin.com/in/shakti-sahu-507321374/",
          },
          {
            icon: FaInstagram,
            url: "https://www.instagram.com/shakti.sahu.581730/",
          },
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.url}
            target="_blank"
            whileHover={{ scale: 1.5, x: 10, color: "#22d3ee" }}
            className="text-xl text-white/20 transition-all"
          >
            <social.icon />
          </motion.a>
        ))}
        <div className="h-20 w-[1px] bg-white/10 mx-auto"></div>
      </div>
    </div>
  );
}

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import {
//   FaCode,
//   FaRocket,
//   FaTimes,
//   FaArrowRight,
//   FaGithub,
//   FaLinkedin,
//   FaInstagram,
// } from "react-icons/fa";
// import AnimatedBackground from "../components/AnimatedBackground";

// export default function Home() {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const menuItems = [
//     { name: "About", path: "/about" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <div className="section-container relative min-h-screen bg-[#030712] text-white overflow-hidden italic-none">
//       <AnimatedBackground />

//       {/* DYNAMIC CURSOR GLOW */}
//       <div
//         className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 opacity-50"
//         style={{
//           background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.15), transparent 80%)`,
//         }}
//       />

//       {/* NAV MENU */}
//       <nav className="fixed top-0 left-0 right-0 h-24 flex justify-between items-center px-8 md:px-12 z-[100]">
//         <motion.button
//           onClick={() => setIsMenuOpen(true)}
//           className="p-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl hover:border-cyan-400/50 transition-all group"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <div className="flex flex-col gap-1.5">
//             <span className="w-8 h-1 bg-cyan-400 rounded-full group-hover:w-10 transition-all"></span>
//             <span className="w-10 h-1 bg-white rounded-full"></span>
//             <span className="w-6 h-1 bg-cyan-400 rounded-full group-hover:w-10 transition-all"></span>
//           </div>
//         </motion.button>

//         {/* INTERNSHIP BADGE */}
//         <motion.div className="hidden md:flex items-center gap-3 px-6 py-2 bg-black/40 border border-cyan-500/20 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.1)]">
//           <span className="relative flex h-3 w-3">
//             <span className="animate-ping absolute h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
//             <span className="relative rounded-full h-3 w-3 bg-cyan-500"></span>
//           </span>
//           <span className="text-[10px] font-black tracking-[0.2em] text-cyan-400 group-hover:text-white transition-colors">
//             AVAILABLE FOR INTERNSHIPS 2026
//           </span>
//         </motion.div>
//       </nav>

//       <AnimatePresence>
//         {isMenuOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsMenuOpen(false)}
//               className="fixed inset-0 bg-black/80 backdrop-blur-md z-[110]"
//             />
//             <motion.div
//               initial={{ x: "-100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "-100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="fixed top-0 left-0 h-full w-[350px] bg-gradient-to-b from-gray-900 to-black border-r border-white/10 z-[120] p-12 flex flex-col justify-center gap-12"
//             >
//               {" "}
//               <button
//                 onClick={() => setIsMenuOpen(false)}
//                 className="absolute top-10 right-10 text-3xl text-white/50 hover:text-cyan-400 transition-colors"
//               >
//                 <FaTimes />
//               </button>
//               {menuItems.map((item, i) => (
//                 <motion.div
//                   key={item.name}
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.1 }}
//                   onClick={() => {
//                     navigate(item.path);
//                     setIsMenuOpen(false);
//                   }}
//                   className="group cursor-pointer"
//                 >
//                   <h3 className="text-6xl font-black text-white group-hover:text-cyan-400 transition-all tracking-tighter uppercase italic">
//                     {item.name}
//                   </h3>
//                   <div className="h-1 w-0 group-hover:w-full bg-cyan-400 transition-all duration-500 shadow-[0_0_10px_#22d3ee]"></div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* HERO SECTION */}
//       <main className="relative z-10 flex flex-col items-center justify-center pt-32 pb-12 px-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="text-center"
//         >
//           <h1 className="text-8xl md:text-[10rem] font-black leading-none mb-4 tracking-tighter">
//             <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent uppercase">
//               SHAKTI
//             </span>
//             <br />
//             <span className="inline-block px-8 py-2 border-[6px] border-cyan-500 text-cyan-500 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
//               SAHU
//             </span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-400 font-medium mt-6 max-w-3xl mx-auto">
//             BCA Scholar & Frontend Engineer crafting{" "}
//             <span className="text-white">high-performance</span> digital
//             experiences.
//           </p>
//         </motion.div>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 mt-12 px-4 w-full">
//           {/* --- 1. GET RESUME BUTTON (RE-ENGINEERED) --- */}
//           <motion.a
//             href="/resume-shakti.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             download="Shakti-Sahu-Resume.pdf"
//             whileHover={{ y: -5, scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-full sm:w-auto px-8 md:px-10 py-4 bg-cyan-500 text-black font-black text-lg md:text-xl rounded-2xl md:rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-cyan-500/60 transition-all flex items-center justify-center gap-3 active:bg-white"
//           >
//             Get Resume <FaRocket />
//           </motion.a>

//           {/* --- 2. PORTFOLIO CV BUTTON (MOBILE OPTIMIZED) --- */}
//           <motion.button
//             whileHover={{ y: -5, scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => alert("CV is not available, wait for some days")}
//             className="w-full sm:w-auto px-8 md:px-10 py-4 bg-transparent border-2 border-white/20 hover:border-cyan-500 hover:text-cyan-500 text-white font-bold text-lg md:text-xl rounded-2xl md:rounded-full transition-all flex items-center justify-center shadow-lg"
//           >
//             Portfolio CV
//           </motion.button>
//         </div>
//       </main>

//       {/* --- 2. KHATARNAAK PROJECTS SECTION --- */}
//       <section className="relative z-20 px-8 pb-20 mt-12">
//         <div className="flex items-center justify-between mb-12 max-w-7xl mx-auto">
//           <h2 className="text-3xl font-black tracking-tighter uppercase italic">
//             Selected Works
//           </h2>
//           <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent mx-8 hidden md:block" />
//           <button
//             onClick={() => navigate("/projects")}
//             className="text-cyan-400 font-bold flex items-center gap-2 group tracking-widest text-xs"
//           >
//             VIEW ALL{" "}
//             <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {[
//             {
//               name: "TEDx UI RECREATION",
//               color: "from-purple-600",
//               glow: "group-hover:shadow-purple-500/40",
//               link: "https://tedx-shakti.vercel.app",
//             },
//             {
//               name: "AI ASSISTANT",
//               color: "from-emerald-600",
//               glow: "group-hover:shadow-emerald-500/40",
//               link: "#",
//             },
//             {
//               name: "RENTAL HUB",
//               color: "from-blue-600",
//               glow: "group-hover:shadow-blue-500/40",
//               link: "https://tenant-home.vercel.app",
//             },
//           ].map((project, i) => (
//             <motion.a
//               key={i}
//               href={project.link}
//               target="_blank"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.2 }}
//               className={`group h-80 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${project.color} to-black p-8 flex flex-col justify-end border border-white/5 transition-all duration-700 hover:scale-[1.02] shadow-2xl ${project.glow}`}
//             >
//               {/* Overlay highlight on hover */}
//               <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//               <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
//                 <FaArrowRight className="-rotate-45 text-xl text-white" />
//               </div>

//               <div className="relative z-10">
//                 <p className="text-white/40 text-[10px] font-black tracking-[0.3em] mb-2 uppercase group-hover:text-cyan-400 transition-colors">
//                   Project_0{i + 1}
//                 </p>
//                 <h3 className="text-3xl font-black mb-2 leading-none tracking-tighter uppercase">
//                   {project.name}
//                 </h3>
//                 <div className="w-0 group-hover:w-full h-1 bg-cyan-500 transition-all duration-700" />
//               </div>
//             </motion.a>
//           ))}
//         </div>
//       </section>
//       <div className="fixed left-8 bottom-12 hidden lg:flex flex-col gap-8 z-50">
//         {[
//           { icon: FaGithub, url: "https://github.com/iron568" },
//           {
//             icon: FaLinkedin,
//             url: "https://www.linkedin.com/in/shakti-sahu-507321374/",
//           },
//           {
//             icon: FaInstagram,
//             url: "https://www.instagram.com/shakti.sahu.581730/",
//           },
//         ].map((social, i) => (
//           <motion.a
//             key={i}
//             href={social.url}
//             target="_blank"
//             whileHover={{ scale: 1.5, x: 10, color: "#22d3ee" }}
//             className="text-xl text-white/20 transition-all"
//           >
//             <social.icon />
//           </motion.a>
//         ))}
//         <div className="h-20 w-[1px] bg-white/10 mx-auto"></div>
//       </div>

//       {/* FLOATING TECH ICONS */}
//       <div className="fixed right-8 bottom-8 flex flex-col gap-6 z-50">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-xl uppercase"
//         >
//           <FaCode className="text-cyan-500 text-xl" />
//         </motion.div>
//       </div>
//     </div>
//   );
// }
