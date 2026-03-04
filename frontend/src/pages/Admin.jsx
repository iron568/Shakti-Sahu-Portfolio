// import SmartBackButton from "../components/SmartBackButton";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext"; // ← YE ADD
// import axios from "axios";
// import AnimatedBackground from "../components/AnimatedBackground";

// export default function Admin() {
//   const navigate = useNavigate();
//   const { logout } = useAuth(); // ← YE HOOK ADD
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   const fetchContacts = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get("http://localhost:5001/api/contact");
//       setContacts(response.data.data || []);
//     } catch (error) {
//       console.error("Error fetching contacts:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteContact = async (id) => {
//     if (confirm("Delete this message?")) {
//       try {
//         await axios.delete(`http://localhost:5001/api/contact/${id}`);
//         fetchContacts(); // Refresh
//       } catch (error) {
//         alert("Error deleting message");
//       }
//     }
//   };

//   const filteredContacts = contacts.filter(
//     (contact) =>
//       contact.name?.toLowerCase().includes(search.toLowerCase()) ||
//       contact.email?.toLowerCase().includes(search.toLowerCase()),
//   );

//   if (loading) return <div className="section-container">Loading...</div>;

//   return (
//     <div className="section-container">
//       <AnimatedBackground />
//       <motion.div
//         className="glass-card max-w-6xl w-full p-8 z-10"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-4xl font-bold">Messages ({contacts.length})</h1>
//           <button onClick={fetchContacts} className="btn-primary px-6 py-2">
//             Refresh
//           </button>
//         </div>

//         <input
//           type="text"
//           placeholder="Search by name or email..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="input-field w-full max-w-md mb-6"
//         />

//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b border-white/10">
//                 <th className="p-4 text-left text-sm font-semibold">Name</th>
//                 <th className="p-4 text-left text-sm font-semibold">Email</th>
//                 <th className="p-4 text-left text-sm font-semibold">Message</th>
//                 <th className="p-4 text-left text-sm font-semibold">Date</th>
//                 <th className="p-4 text-right text-sm font-semibold">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredContacts.map((contact) => (
//                 <tr
//                   key={contact._id}
//                   className="border-b border-white/5 hover:bg-white/5"
//                 >
//                   <td className="p-4 font-medium">{contact.name}</td>
//                   <td className="p-4 text-primary font-mono text-sm">
//                     {contact.email}
//                   </td>
//                   <td className="p-4 text-gray-400 max-w-xs truncate">
//                     {contact.message?.substring(0, 50)}...
//                   </td>
//                   <td className="p-4 text-sm text-gray-500">
//                     {new Date(contact.createdAt).toLocaleDateString()}
//                   </td>
//                   <td className="p-4">
//                     <button
//                       onClick={() => deleteContact(contact._id)}
//                       className="text-red-400 hover:text-red-300 text-sm px-3 py-1 rounded"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {filteredContacts.length === 0 && (
//           <div className="text-center py-16 text-gray-500">
//             <p className="text-2xl mb-4">No messages found</p>
//             <p>Try adjusting your search</p>
//           </div>
//         )}
//       </motion.div>

//       <div className="flex gap-4 mt-8 mb-8">
//         <motion.button
//           onClick={() => {
//             logout(); // ← Direct logout call
//             navigate("/"); // ← Home page
//           }}
//           className="px-8 py-3 bg-red-600/90 hover:bg-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-glow-purple transition-all duration-300"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           🚪 Logout
//         </motion.button>

//         <motion.button
//           onClick={fetchContacts}
//           className="px-6 py-3 btn-primary"
//           whileHover={{ scale: 1.02 }}
//         >
//           🔄 Refresh
//         </motion.button>
//       </div>

//       <SmartBackButton />
//     </div>
//   );
// }

import SmartBackButton from "../components/SmartBackButton";
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
} from "react-icons/fa";
import axios from "axios";
import AnimatedBackground from "../components/AnimatedBackground";

export default function Admin() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [contacts, setContacts] = useState([]);
  const [trash, setTrash] = useState([]); // Temporary Trash State
  const [view, setView] = useState("active"); // "active" or "trash"
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://shakti-sahu-portfolio.onrender.com/api/contact",
      );

      // Agar backend direct array bhej raha hai toh 'response.data' use karein
      // Agar backend { data: [] } bhej raha hai toh niche wala sahi hai
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
  // 1. SOFT DELETE (Move to Trash)
  const moveToTrash = (contact) => {
    setTrash([...trash, contact]);
    setContacts(contacts.filter((c) => c._id !== contact._id));
  };

  // 2. RESTORE (Move back to Active)
  const restoreFromTrash = (contact) => {
    setContacts([...contacts, contact]);
    setTrash(trash.filter((c) => c._id !== contact._id));
  };

  // 3. PERMANENT DELETE (From Database)
  const permanentDelete = async (id) => {
    if (
      window.confirm("CRITICAL: Permanently erase this record from database?")
    ) {
      try {
        await axios.delete(`http://localhost:5001/api/contact/${id}`);
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
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] grid md:grid-cols-[1fr_1.5fr_2fr_1fr] items-center gap-6 group hover:border-white/30 transition-all"
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
