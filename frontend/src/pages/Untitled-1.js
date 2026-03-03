// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { FaCode, FaRocket, FaShieldAlt, FaBars, FaTimes } from "react-icons/fa";
// import AnimatedBackground from "../components/AnimatedBackground";

// export default function Home() {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const menuItems = [
//     { name: "About", path: "/about" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <div className="section-container relative overflow-hidden">
//       <AnimatedBackground />

//       {/* --- MODERN MENU SYMBOL (TOP LEFT) --- */}
//       <div className="fixed top-8 left-8 z-[100]">
//         <motion.button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl hover:bg-white/20 transition-all duration-300 group"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           {isMenuOpen ? (
//             <FaTimes className="text-2xl text-cyan-400" />
//           ) : (
//             <div className="flex flex-col gap-1.5">
//               <span className="w-6 h-0.5 bg-cyan-400 rounded-full group-hover:w-8 transition-all"></span>
//               <span className="w-8 h-0.5 bg-white rounded-full"></span>
//               <span className="w-5 h-0.5 bg-cyan-400 rounded-full group-hover:w-8 transition-all"></span>
//             </div>
//           )}
//         </motion.button>
//       </div>

//       {/* --- SIDEBAR OVERLAY --- */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <>
//             {/* Dark Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsMenuOpen(false)}
//               className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80]"
//             />

//             {/* Sidebar Content */}
//             <motion.div
//               initial={{ x: "-100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "-100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="fixed top-0 left-0 h-full w-[300px] bg-gradient-to-b from-gray-900/90 to-black/95 backdrop-blur-2xl border-r border-white/10 z-[90] p-12 flex flex-col justify-center gap-8"
//             >
//               {menuItems.map((item, index) => (
//                 <motion.button
//                   key={item.name}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 + 0.3 }}
//                   onClick={() => {
//                     navigate(item.path);
//                     setIsMenuOpen(false);
//                   }}
//                   className="text-left text-4xl font-black text-white hover:text-cyan-400 transition-colors duration-300 tracking-tighter"
//                 >
//                   {item.name}
//                 </motion.button>
//               ))}
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Hero Section */}
//       <motion.div
//         className="text-center mb-2 z-10"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="text-7xl md:text-8xl font-black mb-2 tracking-tight">
//           <span className="glow-text-cyan">SHAKTI</span>{" "}
//           <span className="inline-block border-4 border-white px-6 glow-text-white">
//             SAHU
//           </span>
//         </h1>
//         <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
//           Frontend Artilleris | SiCA Scholar specializing in high-performance
//           React applications.
//         </p>
//       </motion.div>

//       {/* RESUME + CV BUTTONS */}
//       <div className="z-30">
//         <motion.div
//           className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 mt-4 px-4"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8, duration: 0.7 }}
//         >
//           <motion.a
//             href="/resume-shakti.pdf"
//             download="Shakti-Sahu-Resume.pdf"
//             className="group relative px-12 py-5 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20
//                        backdrop-blur-xl border border-cyan-400/40 hover:border-cyan-300/60
//                        text-cyan-100 font-bold text-xl rounded-3xl shadow-2xl transition-all duration-500"
//             whileHover={{ scale: 1.02, y: -5 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <span className="relative flex items-center gap-3 ">📄 Resume</span>
//           </motion.a>

//           <motion.button
//             onClick={() => {
//               const toast = document.createElement("div");
//               toast.innerHTML = `<span class="font-bold text-lg">CV is not available, wait for some days</span>`;
//               toast.className = `fixed top-24 right-6 z-[9999] bg-red-600/95 backdrop-blur-2xl shadow-2xl rounded-3xl px-6 py-4 text-white font-bold`;
//               document.body.appendChild(toast);
//               setTimeout(() => toast.remove(), 2000);
//             }}
//             className="group relative px-12 py-5 bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/60
//                        backdrop-blur-xl border border-white/20 hover:border-red-400/50
//                        text-gray-200 font-bold text-xl rounded-3xl transition-all duration-500"
//             whileHover={{ scale: 1.02, y: -5 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <span className="relative flex items-center gap-3">📋 CV</span>
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* PROJECTS SECTION */}
//       <div className="projects-section flex-1 flex flex-col justify-end pb-4 z-20 px-4">
//         <motion.h2
//           className="section-title text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent text-center mb-9 drop-shadow-2xl"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.1 }}
//         >
//           Featured Projects
//         </motion.h2>

//         <div className="projects-grid grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
//           {/* TEDx Card */}
//           <motion.a
//             href="https://tedx-shakti.vercel.app"
//             target="_blank"
//             className="h-48 md:h-56 rounded-3xl bg-gradient-to-br from-purple-600/95 to-purple-800/95 border border-purple-400/60 p-6 flex flex-col justify-end group transition-all duration-500"
//             whileHover={{ scale: 1.05, y: -5 }}
//           >
//             <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
//               TEDx UI Recreation
//             </h3>
//             <p className="text-white/80 text-sm">
//               Hand-Coded Frontend Interface
//             </p>
//           </motion.a>

//           {/* AI Assistant Card */}
//           <motion.div
//             className="h-48 md:h-56 rounded-3xl bg-gradient-to-br from-emerald-600/95 to-emerald-800/95 border border-emerald-400/60 p-6 flex flex-col justify-end transition-all duration-500"
//             whileHover={{ scale: 1.05, y: -5 }}
//           >
//             <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
//               AI Assistant
//             </h3>
//             <p className="text-white/80 text-sm">Advanced System</p>
//           </motion.div>

//           {/* Rental Management Card */}
//           <motion.a
//             href="https://tenant-home.vercel.app"
//             target="_blank"
//             className="h-48 md:h-56 rounded-3xl bg-gradient-to-br from-cyan-600/95 to-cyan-800/95 border border-cyan-400/60 p-6 flex flex-col justify-end transition-all duration-500"
//             whileHover={{ scale: 1.05, y: -5 }}
//           >
//             <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
//               Rental Management Hub
//             </h3>
//             <p className="text-white/80 text-sm">
//               Smart Rental Data & Property Management
//             </p>
//           </motion.a>
//         </div>
//       </div>

//       {/* Floating Icons (Right Side) */}
//       <div className="fixed right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-12 z-5">
//         <motion.div
//           animate={{ y: [0, -20, 0] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         >
//           <FaCode className="text-5xl text-cyan-400/40 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
//         </motion.div>
//         <motion.div
//           animate={{ y: [0, 20, 0] }}
//           transition={{ duration: 3, repeat: Infinity, delay: 1 }}
//         >
//           <FaRocket className="text-5xl text-blue-400/40 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
//         </motion.div>
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//         >
//           <FaShieldAlt className="text-5xl text-purple-400/40 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import {
//   FaCode,
//   FaRocket,
//   FaShieldAlt,
//   FaBars,
//   FaTimes,
//   FaArrowRight,
// } from "react-icons/fa";
// import AnimatedBackground from "../components/AnimatedBackground";

// export default function Home() {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   // Mouse Tracker for Hero Glow
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const menuItems = [
//     { name: "About", path: "/about", desc: "Know my journey" },
//     { name: "Projects", path: "/projects", desc: "View my work" },
//     { name: "Contact", path: "/contact", desc: "Let's build together" },
//   ];

//   return (
//     <div className="section-container relative min-h-screen bg-[#030712] text-white overflow-hidden">
//       <AnimatedBackground />

//       {/* --- 1. DYNAMIC CURSOR GLOW --- */}
//       <div
//         className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 opacity-50"
//         style={{
//           background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.15), transparent 80%)`,
//         }}
//       />

//       {/* --- 2. PREMIUM NAV MENU --- */}
//       <nav className="fixed top-8 left-8 right-8 flex justify-between items-center z-[100]">
//         <motion.button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all group"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           {isMenuOpen ? (
//             <FaTimes className="text-xl text-cyan-400" />
//           ) : (
//             <FaBars className="text-xl text-white" />
//           )}
//         </motion.button>

//         {/* Subtle Badge */}
//         <div className="hidden md:block px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium tracking-widest text-cyan-400">
//           AVAILABLE FOR INTERNSHIPS 2026
//         </div>
//       </nav>

//       {/* --- 3. FULL SCREEN OVERLAY MENU --- */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-[90] flex items-center justify-center"
//           >
//             <div className="flex flex-col gap-10">
//               {menuItems.map((item, i) => (
//                 <motion.div
//                   key={item.name}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.1 }}
//                   onClick={() => {
//                     navigate(item.path);
//                     setIsMenuOpen(false);
//                   }}
//                   className="group cursor-pointer text-center"
//                 >
//                   <h3 className="text-6xl md:text-8xl font-black text-white/20 group-hover:text-cyan-400 transition-all duration-500 tracking-tighter group-hover:scale-110">
//                     {item.name}
//                   </h3>
//                   <p className="text-cyan-500/0 group-hover:text-cyan-500/100 transition-all text-lg font-medium mt-2">
//                     {item.desc}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* --- 4. HERO SECTION --- */}
//       <main className="relative z-10 flex flex-col items-center justify-center pt-32 pb-12 px-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="text-center"
//         >
//           <h1 className="text-8xl md:text-[10rem] font-black leading-none mb-4 tracking-tighter">
//             <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
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

//         {/* --- 5. MAGNETIC ACTIONS --- */}
//         <div className="flex flex-wrap gap-8 justify-center mt-12">
//           <motion.a
//             href="/Shakti_Sahu_Resume.pdf"
//             download
//             whileHover={{ y: -5, scale: 1.05 }}
//             className="px-10 py-4 bg-cyan-500 text-black font-black text-xl rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-cyan-500/60 transition-all flex items-center gap-3"
//           >
//             Get Resume <FaRocket />
//           </motion.a>

//           <motion.button
//             whileHover={{ y: -5, scale: 1.05 }}
//             className="px-10 py-4 bg-transparent border-2 border-white/20 hover:border-white text-white font-bold text-xl rounded-full transition-all"
//             onClick={() => alert("CV coming soon!")}
//           >
//             Portfolio CV
//           </motion.button>
//         </div>
//       </main>

//       {/* --- 6. FEATURED PROJECTS (HORIZONTAL SCROLL FEEL) --- */}
//       <section className="relative z-20 px-8 pb-20 mt-12">
//         <div className="flex items-center justify-between mb-12 max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold tracking-tighter">
//             SELECTED WORKS
//           </h2>
//           <div className="h-[1px] flex-1 bg-white/10 mx-8 hidden md:block" />
//           <button
//             onClick={() => navigate("/projects")}
//             className="text-cyan-400 font-bold flex items-center gap-2 group"
//           >
//             All Projects{" "}
//             <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {/* Project Card Template */}
//           {[
//             {
//               name: "TEDx UI RECREATION",
//               color: "from-purple-600",
//               link: "https://tedx-shakti.vercel.app",
//             },
//             { name: "AI ASSISTANT", color: "from-emerald-600", link: "#" },
//             {
//               name: "RENTAL HUB",
//               color: "from-blue-600",
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
//               className={`group h-80 relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${project.color} to-black p-8 flex flex-col justify-end border border-white/10 hover:border-white/30 transition-all`}
//             >
//               <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <FaArrowRight className="-rotate-45 text-2xl" />
//               </div>
//               <h3 className="text-3xl font-black mb-2 leading-none">
//                 {project.name}
//               </h3>
//               <p className="text-white/60 text-sm font-medium">
//                 EXPLORE PROJECT
//               </p>
//             </motion.a>
//           ))}
//         </div>
//       </section>

//       {/* --- 7. FLOATING TECH ICONS --- */}
//       <div className="fixed right-8 bottom-8 flex flex-col gap-6 z-50">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-xl"
//         >
//           <FaCode className="text-cyan-400 text-xl" />
//         </motion.div>
//       </div>
//     </div>
//   );
// }
