import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import AnimatedBackground from "./AnimatedBackground";

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="section-container flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  // HAR BAAR LOGIN CHAHiye - No localStorage persistence
  return isLoggedIn ? children : <Navigate to="/admin-login" replace />;
}
