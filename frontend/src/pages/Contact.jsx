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
import emailjs from "@emailjs/browser"; // EmailJS import
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
      // 1. Local Database mein save karein
      const response = await axios.post(
        "https://shakti-sahu-portfolio.onrender.com/api/contact",
        formData,
      );

      if (response.data.success) {
        // 2. EmailJS se real-time alert bhein
        const templateParams = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        };

        await emailjs.send(
          "service_reznmed", // Notepad se apni Service ID yahan dalo
          "template_3fngmop", // Notepad se apni Template ID yahan dalo
          templateParams,
          "PNKlzJeehaL73Y7Xn", // Notepad se apni Public Key yahan dalo
        );

        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="section-container relative min-h-screen bg-[#030712] text-white py-20 px-4 overflow-hidden font-sans">
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
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter uppercase">
            LET'S <span className="text-cyan-500">TALK.</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed font-medium">
            Have a project in mind or just want to say hi? I'm always open to
            discussing new opportunities and{" "}
            <span className="text-white font-bold">ITEP 2026</span>{" "}
            collaborations.
          </p>

          {/* SOCIAL DOCK */}
          <div className="flex flex-wrap gap-4 pt-4">
            {[
              {
                icon: FaFacebook,
                link: "https://www.facebook.com/shakti.sahu.581730",
              },
              {
                icon: FaInstagram,
                link: "https://www.instagram.com/shakti.sahu.581730/",
              },
              {
                icon: FaLinkedin,
                link: "https://www.linkedin.com/in/shakti-sahu-507321374/",
              },
              { icon: FaGithub, link: "https://github.com/iron568" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-2xl transition-all hover:border-cyan-500/50 hover:text-cyan-500"
                whileHover={{ y: -10, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <motion.div
          className="bg-[#0f172a]/40 backdrop-blur-2xl border border-white/5 p-10 rounded-[2.5rem] shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="YOUR NAME"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/10 py-3 text-white font-bold tracking-widest focus:outline-none focus:border-cyan-500 transition-all placeholder:text-gray-600"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="YOUR EMAIL"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/10 py-3 text-white font-bold tracking-widest focus:outline-none focus:border-cyan-500 transition-all placeholder:text-gray-600"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="YOUR MOBILE NUMBER"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-white/10 py-3 text-white font-bold tracking-widest focus:outline-none focus:border-cyan-500 transition-all placeholder:text-gray-600"
            />

            <textarea
              name="message"
              placeholder="HOW CAN I HELP?"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/10 py-3 text-white font-bold tracking-widest focus:outline-none focus:border-cyan-500 transition-all placeholder:text-gray-600 min-h-[100px] resize-none"
              required
            />

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
            >
              {status === "sending"
                ? "TRANSMITTING..."
                : status === "success"
                  ? "TRANSMITTED ✅"
                  : status === "error"
                    ? "ERROR ❌"
                    : "SEND MESSAGE"}
              <FaPaperPlane className="text-sm" />
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
