import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

export default function SmartBackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  // Smart logic: Admin se Login pe, baaki se Home pe
  const handleBack = () => {
    if (location.pathname === "/admin") {
      navigate("/admin-login"); // Admin → Login
    } else {
      navigate("/"); // Baaki → Home
    }
  };

  return (
    <motion.button
      onClick={handleBack}
      className="fixed top-20 left-6 z-[999] w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full shadow-2xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.1, rotate: 360 }}
      whileTap={{ scale: 0.95 }}
      title={location.pathname === "/admin" ? "Back to Login" : "Back to Home"}
    >
      <svg
        className="w-6 h-6 text-white group-hover:text-primary transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </motion.button>
  );
}
