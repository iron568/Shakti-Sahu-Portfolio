// import SmartBackButton from "../components/SmartBackButton";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
// import axios from "axios";
// import AnimatedBackground from "../components/AnimatedBackground";

// export default function Contact() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");

//     try {
//       const response = await axios.post(
//         "http://localhost:5001/api/contact",
//         formData,
//       );
//       if (response.data.success) {
//         setStatus("success");
//         setFormData({ name: "", email: "", message: "" });
//         setTimeout(() => setStatus(""), 3000);
//       }
//     } catch (error) {
//       setStatus("error");
//       setTimeout(() => setStatus(""), 3000);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="section-container">
//       <AnimatedBackground />

//       <motion.div
//         className="glass-card p-12 w-full max-w-lg shadow-2xl z-10"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-4xl font-bold text-white mb-8 text-center">
//           Contact
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5 mb-8">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="input-field"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="input-field"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Message"
//             value={formData.message}
//             onChange={handleChange}
//             className="input-field resize-none"
//             rows="4"
//             required
//           />

//           <motion.button
//             type="submit"
//             className={`w-full btn-primary ${
//               status === "success"
//                 ? "!bg-green-500"
//                 : status === "error"
//                   ? "!bg-red-500"
//                   : ""
//             }`}
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             disabled={status === "sending"}
//           >
//             {status === "sending"
//               ? "Sending..."
//               : status === "success"
//                 ? "Sent Successfully!"
//                 : status === "error"
//                   ? "Error! Try Again"
//                   : "Send Message"}
//           </motion.button>
//         </form>

//         {/* SOCIAL LINKS - Facebook → Instagram → LinkedIn → GitHub */}
//         <div className="social-links flex justify-center items-center gap-6 mt-8">
//           {/* FACEBOOK - Official Blue #1877F2 */}
//           <motion.a
//             href="https://www.facebook.com/shakti.sahu.581730"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-icon w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 backdrop-blur-sm rounded-xl flex items-center justify-center border border-blue-400/30 transition-all duration-300"
//             style={{ backgroundColor: "#1877F2" }}
//             whileHover={{
//               scale: 1.2,
//               y: -5,
//               boxShadow: "0 10px 25px rgba(24,119,242,0.5)",
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <FaFacebook className="text-xl text-white" />
//           </motion.a>

//           {/* INSTAGRAM - Pink-Purple Gradient */}
//           <motion.a
//             href="https://www.instagram.com/shakti.sahu.581730/?next="
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-icon w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300"
//             whileHover={{
//               scale: 1.2,
//               y: -5,
//               boxShadow: "0 10px 25px rgba(236,72,153,0.5)",
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <FaInstagram className="text-xl text-white" />
//           </motion.a>

//           {/* LINKEDIN - Official Blue */}
//           <motion.a
//             href="[www.linkedin.com/in/shakti-sahu-507321374](https://www.linkedin.com/in/shakti-sahu-507321374/)"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-icon w-12 h-12 bg-blue-700 hover:bg-blue-800 backdrop-blur-sm rounded-xl flex items-center justify-center border border-blue-400/30 transition-all duration-300"
//             whileHover={{
//               scale: 1.2,
//               y: -5,
//               boxShadow: "0 10px 25px rgba(59,130,246,0.5)",
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <FaLinkedin className="text-xl text-white" />
//           </motion.a>

//           {/* GITHUB - Official Black */}
//           <motion.a
//             href="[github.com/iron568](https://github.com/iron568)"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-icon w-12 h-12 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-500/30 transition-all duration-300"
//             style={{ backgroundColor: "#161B22" }}
//             whileHover={{
//               scale: 1.2,
//               y: -5,
//               boxShadow: "0 10px 25px rgba(22,27,34,0.6)",
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <FaGithub className="text-xl text-white" />
//           </motion.a>
//         </div>
//       </motion.div>

//       <SmartBackButton />
//     </div>
//   );
// }

import SmartBackButton from "../components/SmartBackButton";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaArrowLeft,
} from "react-icons/fa";
import axios from "axios";
import AnimatedBackground from "../components/AnimatedBackground";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await axios.post(
        "https://shakti-sahu-portfolio.onrender.com/api/contact", // Path (/api/contact) add kar diya hai
        formData,
      );
      if (response.status === 201 || response.data.success) {
        // Status 201 check karna safer hai
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      }
    } catch (error) {
      console.error("Submission Error:", error); // Error check karne ke liye console log
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="section-container relative min-h-screen bg-[#030712] text-white py-20 px-4 overflow-hidden">
      <AnimatedBackground />

      {/* --- BACK NAVIGATION --- */}
      <div className="max-w-4xl mx-auto mb-12 z-20 relative">
        <motion.button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-cyan-400 font-bold hover:text-white transition-all group"
          whileHover={{ x: -5 }}
        >
          <FaArrowLeft /> Return to Main
        </motion.button>
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* LEFT: TEXT CONTENT */}
        <div className="space-y-8">
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter">
            LET'S <span className="text-cyan-500">TALK.</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed font-medium">
            Have a project in mind or just want to say hi? I'm always open to
            discussing new opportunities and{" "}
            <span className="text-white">ITEP 2026</span> collaborations.
          </p>

          {/* SOCIAL DOCK */}
          <div className="flex flex-wrap gap-4 pt-4">
            {[
              {
                icon: FaFacebook,
                link: "https://www.facebook.com/shakti.sahu.581730",
                color: "#1877F2",
              },
              {
                icon: FaInstagram,
                link: "https://www.instagram.com/shakti.sahu.581730/",
                color: "#E4405F",
              },
              {
                icon: FaLinkedin,
                link: "https://www.linkedin.com/in/shakti-sahu-507321374/",
                color: "#0A66C2",
              },
              {
                icon: FaGithub,
                link: "https://github.com/iron568",
                color: "#FFFFFF",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-2xl transition-all hover:border-white/40"
                whileHover={{
                  y: -18,
                  scale: 1.2,
                  backgroundColor: `${social.color}50`,
                  color: social.color,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <motion.div
          className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl shadow-cyan-500/5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group relative">
              <input
                type="text"
                name="name"
                placeholder="YOUR NAME"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-bold tracking-widest focus:outline-none focus:border-cyan-500 transition-all placeholder:text-white/20"
                required
              />
            </div>

            <div className="group relative">
              <input
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-bold tracking-widest focus:outline-none focus:border-cyan-500 transition-all placeholder:text-white/20"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="YOUR MOBILE NUMBER"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-bold tracking-widest focus:outline-none  focus:border-cyan-500 transition-all placeholder:text-white/20"
              />
            </div>

            <div className="group relative">
              <textarea
                name="message"
                placeholder="HOW CAN I HELP?"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-bold tracking-widest focus:outline-none focus:border-cyan-500 transition-all placeholder:text-white/20 min-h-[120px] resize-none"
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              className={`w-full py-5 rounded-2xl font-black text-lg tracking-widest flex items-center justify-center gap-3 transition-all ${
                status === "success"
                  ? "bg-green-500 text-white"
                  : status === "error"
                    ? "bg-red-500 text-white"
                    : "bg-cyan-500 text-black hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === "sending" ? (
                "TRANSMITTING..."
              ) : status === "success" ? (
                "TRANSMITTED ✅"
              ) : status === "error" ? (
                "ERROR ❌"
              ) : (
                <>
                  SEND MESSAGE <FaPaperPlane className="text-sm" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
