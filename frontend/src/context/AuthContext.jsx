import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  // Check if user was already logged in from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("adminLoggedIn") === "true";
  });

  const login = (email, password) => {
    // Email: thanos568@gmail.com | Password: ironman928
    if (email === "thanos568@gmail.com" && password === "ironman928") {
      setIsLoggedIn(true);
      localStorage.setItem("adminLoggedIn", "true"); // Save session
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("adminLoggedIn"); // Clear session
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
