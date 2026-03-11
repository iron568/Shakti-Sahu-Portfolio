import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  FaTrash,
  FaSyncAlt,
  FaSignOutAlt,
  FaSearch,
  FaUndo,
  FaTrashAlt,
  FaHistory,
  FaUsers,
  FaMobileAlt,
  FaDesktop,
} from "react-icons/fa";
import axios from "axios";
import AnimatedBackground from "../components/AnimatedBackground";

export default function Admin() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [contacts, setContacts] = useState([]);
  const [trash, setTrash] = useState([]);
  const [view, setView] = useState("active");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [stats, setStats] = useState({
    totalVisitors: 0,
    deviceStats: { mobileUsers: 0, desktopUsers: 0 },
  });

  // Level 0: Page load hote hi contacts aur analytics dono fetch honge
  useEffect(() => {
    fetchContacts();
    fetchAnalytics();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://shakti-sahu-portfolio.onrender.com/api/contact",
      );

      const data = Array.isArray(response.data)
        ? response.data
        : response.data.data || [];
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setTimeout(() => setLoading(false), 800);
    }
  };

  const fetchAnalytics = async () => {
    try {
      const response = await axios.get(
        "https://shakti-sahu-portfolio.onrender.com/api/contact/analytics",
      );
      if (response.data.success) {
        setStats(response.data);
      }
    } catch (error) {
      console.error("Error fetching analytics:", error);
    }
  };

  const moveToTrash = (contact) => {
    setTrash([...trash, contact]);
    setContacts(contacts.filter((c) => c._id !== contact._id));
  };

  const restoreFromTrash = (contact) => {
    setContacts([...contacts, contact]);
    setTrash(trash.filter((c) => c._id !== contact._id));
  };

  const permanentDelete = async (id) => {
    if (
      window.confirm("CRITICAL: Permanently erase this record from database?")
    ) {
      try {
        await axios.delete(
          `https://shakti-sahu-portfolio.onrender.com/api/contact/${id}`,
        );
        setTrash(trash.filter((c) => c._id !== id));
      } catch (error) {
        alert("Error in database protocol");
      }
    }
  };

  const currentList = view === "active" ? contacts : trash;
  const filteredContacts = currentList.filter(
    (contact) =>
      contact.name?.toLowerCase().includes(search.toLowerCase()) ||
      contact.email?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="section-container relative min-h-screen bg-[#030712] text-white py-16 px-4 md:px-10 overflow-hidden">
      <AnimatedBackground />

      {/* --- COMMAND BAR --- */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-12 z-20 relative gap-6">
        <div>
          <h1 className="text-5xl font-black tracking-tighter uppercase">
            {view === "active" ? "Live" : "Trash"}{" "}
            <span className="text-cyan-500">Console</span>
          </h1>
          <p className="text-gray-500 font-mono text-xs tracking-[0.3em] mt-2 italic">
            STATUS: {view.toUpperCase()} // RECORDS: {currentList.length}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setView(view === "active" ? "trash" : "active")}
            className={`px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all border ${
              view === "active"
                ? "bg-white/5 border-white/10"
                : "bg-cyan-500 text-black border-cyan-400"
            }`}
          >
            {view === "active" ? (
              <>
                <FaHistory /> VIEW TRASH
              </>
            ) : (
              <>
                <FaSyncAlt /> VIEW ACTIVE
              </>
            )}
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="px-6 py-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl hover:bg-red-500 hover:text-white transition-all font-bold flex items-center gap-2"
          >
            <FaSignOutAlt /> LOGOUT
          </motion.button>
        </div>
      </div>

      {/* --- ANALYTICS TILES (Phase 2) --- */}
      <div className="max-w-7xl mx-auto mb-12 z-20 relative grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] group hover:border-cyan-500/50 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
              Total Traffic
            </span>
            <FaUsers className="text-cyan-500/50 group-hover:text-cyan-500 transition-colors" />
          </div>
          <h3 className="text-4xl font-black text-white mt-1">
            {stats.totalVisitors}
          </h3>
          <div className="h-1 w-12 bg-cyan-500 mt-4 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] group hover:border-cyan-500/50 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
              Mobile Access
            </span>
            <FaMobileAlt className="text-cyan-400/50 group-hover:text-cyan-400 transition-colors" />
          </div>
          <h3 className="text-4xl font-black text-cyan-400 mt-1">
            {stats.deviceStats.mobileUsers}
          </h3>
          <p className="text-[10px] text-gray-500 mt-2 font-mono tracking-tighter italic">
            PROTO: SMARTPHONE_DETECTED
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] group hover:border-cyan-500/50 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
              Desktop Access
            </span>
            <FaDesktop className="text-cyan-400/50 group-hover:text-cyan-400 transition-colors" />
          </div>
          <h3 className="text-4xl font-black text-cyan-400 ">
            {stats.deviceStats.desktopUsers}
          </h3>
          <p className="text-[10px] text-gray-500 mt-2 font-mono tracking-tighter italic">
            PROTO: WORKSTATION_IDENTIFIED
          </p>
        </motion.div>
      </div>

      {/* --- SEARCH --- */}
      <div className="max-w-7xl mx-auto mb-8 z-20 relative flex gap-4">
        <div className="relative group flex-1 max-w-md">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-cyan-500 transition-colors" />
          <input
            type="text"
            placeholder="FILTER BY IDENTITY..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 rounded-2xl focus:outline-none focus:border-cyan-500/50 transition-all font-mono text-xs tracking-widest"
          />
        </div>
      </div>

      {/* --- DATA VIEW --- */}
      <motion.div className="relative z-10 max-w-7xl mx-auto" layout>
        {loading ? (
          <div className="py-40 text-center animate-pulse font-mono text-cyan-500">
            SYNCHRONIZING MATRIX...
          </div>
        ) : (
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredContacts.map((contact, i) => (
                <motion.div
                  key={contact._id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, x: view === "active" ? 50 : -50 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] grid md:grid-cols-[1fr_1.2fr_1.2fr_1.5fr_0.8fr] items-center gap-6 group hover:border-white/30 transition-all"
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-white/30 uppercase">
                      User
                    </span>
                    <span className="font-bold uppercase">{contact.name}</span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-white/30 uppercase">
                      Email
                    </span>
                    <span className="text-cyan-400 font-mono text-xs truncate">
                      {contact.email}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-white/30 uppercase">
                      Mobile
                    </span>
                    <span className="text-cyan-400 font-mono text-xs">
                      {contact.phone}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-white/30 uppercase">
                      Message
                    </span>
                    <span className="text-gray-400 text-sm truncate">
                      {contact.message}
                    </span>
                  </div>

                  <div className="flex justify-end gap-3">
                    {view === "active" ? (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={() => moveToTrash(contact)}
                        className="w-12 h-12 flex items-center justify-center bg-white/5 text-white/40 hover:bg-yellow-500/20 hover:text-yellow-500 rounded-xl transition-all"
                        title="Move to Trash"
                      >
                        <FaTrash />
                      </motion.button>
                    ) : (
                      <>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          onClick={() => restoreFromTrash(contact)}
                          className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500 hover:text-black rounded-xl transition-all"
                          title="Restore"
                        >
                          <FaUndo />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          onClick={() => permanentDelete(contact._id)}
                          className="w-12 h-12 flex items-center justify-center bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-all"
                          title="Delete Permanently"
                        >
                          <FaTrashAlt />
                        </motion.button>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </motion.div>
    </div>
  );
}
