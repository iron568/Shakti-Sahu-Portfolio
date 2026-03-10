// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider, useAuth } from "./context/AuthContext";
// import { useEffect } from "react";
// import axios from "axios";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Admin from "./pages/Admin";
// import Login from "./pages/Login";
// import ProtectedRoute from "./components/ProtectedRoute";

// function AppContent() {
//   useEffect(() => {
//     const trackVisitor = async () => {
//       // Check karo ki kya is session mein pehle hi track ho chuka hai?
//       const isTracked = sessionStorage.getItem("portfolio_session");

//       if (!isTracked) {
//         try {
//           // Backend ko hit karo lekin ek special header ke saath
//           await axios.get("https://shakti-sahu-portfolio.onrender.com/", {
//             headers: { "x-new-session": "true" },
//           });
//           // Session storage mein mark kar do taaki refresh par dubara na chale
//           sessionStorage.setItem("portfolio_session", "true");
//         } catch (err) {
//           console.log("Tracking paused...");
//         }
//       }
//     };

//     trackVisitor();
//   }, []);
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/admin-login" element={<Login />} />
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute>
//               <Admin />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// function App() {
//   return (
//     <AuthProvider>
//       <AppContent />
//     </AuthProvider>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function AppContent() {
  // Level 0: Yahan se tracking hata di hai taaki login/admin par count na badhe
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/admin-login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
