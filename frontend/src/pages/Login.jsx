import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  FaLock,
  FaUserShield,
  FaArrowLeft,
  FaExclamationTriangle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import AnimatedBackground from "../components/AnimatedBackground";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = { email: "", password: "" };
    if (!formData.email) newErrors.email = "Access ID required";
    else if (formData.email !== "thanos568@gmail.com")
      newErrors.email = "Unauthorized Identity";

    if (!formData.password) newErrors.password = "Security Key required";
    else if (formData.password !== "ironman928")
      newErrors.password = "Access Denied";

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const success = login(formData.email, formData.password);
    setTimeout(() => {
      setLoading(false);
      if (success) navigate("/admin");
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  return (
    <div className="section-container relative min-h-screen bg-[#030712] text-white overflow-hidden flex items-center justify-center px-4">
      <AnimatedBackground />

      {/* --- TOP NAV --- */}
      <div className="fixed top-8 left-8 z-50">
        <motion.button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-cyan-400 font-bold hover:text-white transition-all group"
          whileHover={{ x: -5 }}
        >
          <FaArrowLeft /> Exit to Public
        </motion.button>
      </div>

      <motion.div
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* --- LOGIN CARD --- */}
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
          {/* Subtle Scanline Animation */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-full w-full -translate-y-full group-hover:animate-scan" />

          <div className="text-center mb-10">
            <motion.div
              className="inline-flex p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 text-3xl mb-4 border border-cyan-500/20"
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <FaUserShield />
            </motion.div>
            <h2 className="text-4xl font-black tracking-tighter">
              ADMIN <span className="text-cyan-500">PORTAL</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2 font-mono tracking-widest uppercase opacity-60">
              Authentication Required
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-xs font-black tracking-[0.2em] text-white/40 ml-1">
                ENCRYPTED ID
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-white/5 border-b-2 py-4 px-4 text-white focus:outline-none transition-all ${
                    errors.email
                      ? "border-red-500 bg-red-500/5"
                      : "border-white/10 focus:border-cyan-500"
                  }`}
                  placeholder="Enter email"
                  disabled={loading}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-400 text-[10px] font-bold mt-1 flex items-center gap-1"
                    >
                      <FaExclamationTriangle /> {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                // Look yahan same rahega, bas 'type' toggle hoga
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full bg-white/5 border-b-2 py-4 px-4 pr-12 text-white focus:outline-none transition-all ${
                  errors.password
                    ? "border-red-500 bg-red-500/5"
                    : "border-white/10 focus:border-cyan-500"
                }`}
                placeholder="Enter password"
                disabled={loading}
              />

              {/* --- YE HAI NAYA EYE BUTTON (Design vesa hi rahega) --- */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-cyan-500 transition-colors z-20"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>

              <AnimatePresence>
                {errors.password && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-[10px] font-bold mt-1 flex items-center gap-1"
                  >
                    <FaExclamationTriangle /> {errors.password}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className={`w-full py-5 rounded-2xl font-black text-lg tracking-widest flex items-center justify-center gap-3 transition-all relative overflow-hidden ${
                loading
                  ? "bg-white/10 text-white/50"
                  : "bg-cyan-500 text-black hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  DECRYPTING...
                </span>
              ) : (
                <>
                  INITIALIZE ACCESS <FaLock className="text-sm" />
                </>
              )}
            </motion.button>
          </form>

          <div className="text-[10px] text-gray-500 text-center mt-8 font-mono tracking-widest uppercase">
            Protocol v3.0 // Secured by SHAKTI-NET
          </div>
        </div>
      </motion.div>
    </div>
  );
}
