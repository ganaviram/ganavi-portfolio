// import { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/logo.png";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "About", path: "/about" },
//   { name: "Education", path: "/education" },
//   { name: "Experience", path: "/experience" },
//   { name: "Skills", path: "/skills" },
//   { name: "Projects", path: "/projects" },
//   { name: "Contact", path: "/contact" },
// ];

// export default function Navbar() {
//   const [time, setTime] = useState(new Date());
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const timer = setInterval(() => setTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <nav className="fixed top-0 z-50 w-full backdrop-blur-xl bg-black/60 border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//           {/* LEFT — LOGO + BRAND (UNCHANGED) */}
//           <Link to="/" className="flex items-center gap-3 group">
//             <img
//               src={logo}
//               alt="Abhinavi logo"
//               className="w-10 h-10 object-contain transition
//                          group-hover:drop-shadow-[0_0_18px_rgba(168,85,247,0.7)]"
//             />

//             <span
//               className="relative text-xl font-semibold tracking-wide
//                          bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
//                          bg-[length:200%_200%] bg-clip-text text-transparent
//                          animate-[gradient_8s_ease_infinite]
//                          group-hover:tracking-widest
//                          transition-all duration-500"
//             >
//               Abhinavi<span className="text-white/80">.</span>

//               <span className="absolute left-0 -bottom-1 w-full h-[2px]
//                                bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
//                                scale-x-0 group-hover:scale-x-100
//                                transition-transform origin-left duration-500" />
//             </span>
//           </Link>

//           {/* CENTER — NAV LINKS (DESKTOP) */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `relative text-sm font-medium transition-all duration-300
//                   ${
//                     isActive
//                       ? "text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.9)]"
//                       : "text-white/70 hover:text-white hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.6)]"
//                   }`
//                 }
//               >
//                 {item.name}

//                 {/* Glow underline */}
//                 <span
//                   className="absolute left-0 -bottom-1 w-full h-[2px]
//                              bg-indigo-400 scale-x-0 hover:scale-x-100
//                              transition-transform origin-left duration-300"
//                 />
//               </NavLink>
//             ))}
//           </div>

//           {/* RIGHT — DATE & TIME (DESKTOP) */}
//           <div
//             className="hidden md:flex flex-col items-end text-xs font-mono
//                        text-white/60 hover:text-indigo-400
//                        hover:drop-shadow-[0_0_14px_rgba(99,102,241,0.6)]
//                        transition-all duration-300"
//           >
//             <span>
//               {time.toLocaleDateString("en-IN", {
//                 weekday: "short",
//                 day: "2-digit",
//                 month: "short",
//               })}
//             </span>
//             <span className="tracking-wide">
//               {time.toLocaleTimeString([], {
//                 hour: "2-digit",
//                 minute: "2-digit",
//                 second: "2-digit",
//               })}
//             </span>
//           </div>

//           {/* MOBILE HAMBURGER */}
//           <button
//             onClick={() => setMenuOpen(true)}
//             className="md:hidden text-white hover:text-indigo-400
//                        hover:drop-shadow-[0_0_14px_rgba(99,102,241,0.7)]
//                        transition"
//             aria-label="Open menu"
//           >
//             <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M3 6h22M3 14h22M3 22h22" />
//             </svg>
//           </button>
//         </div>
//       </nav>

//       {/* ================= MOBILE MENU ================= */}
//       {menuOpen && (
//         <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl md:hidden">
//           <div className="absolute right-0 top-0 h-full w-72 bg-black border-l border-white/10 p-6">

//             <button
//               onClick={() => setMenuOpen(false)}
//               className="mb-10 text-white/70 hover:text-indigo-400 transition"
//             >
//               ✕ Close
//             </button>

//             <ul className="space-y-6">
//               {navLinks.map((item) => (
//                 <li key={item.name}>
//                   <NavLink
//                     to={item.path}
//                     onClick={() => setMenuOpen(false)}
//                     className={({ isActive }) =>
//                       `block text-lg font-medium transition-all duration-300
//                       ${
//                         isActive
//                           ? "text-indigo-400 drop-shadow-[0_0_14px_rgba(99,102,241,0.9)]"
//                           : "text-white/80 hover:text-white hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.7)]"
//                       }`
//                     }
//                   >
//                     {item.name}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}

//       {/* SPACER FOR FIXED NAV */}
//       <div className="h-20" />
//     </>
//   );
// }
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [time, setTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 z-[100] w-full backdrop-blur-xl bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LEFT — LOGO + BRAND (UNCHANGED) */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Abhinavi logo"
              className="w-10 h-10 object-contain transition
                         group-hover:drop-shadow-[0_0_18px_rgba(168,85,247,0.7)]"
            />

            <span
              className="relative text-xl font-semibold tracking-wide
                         bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                         bg-[length:200%_200%] bg-clip-text text-transparent
                         animate-[gradient_8s_ease_infinite]
                         group-hover:tracking-widest
                         transition-all duration-500"
            >
              Abhinavi<span className="text-white/80">.</span>

              <span className="absolute left-0 -bottom-1 w-full h-[2px]
                               bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                               scale-x-0 group-hover:scale-x-100
                               transition-transform origin-left duration-500" />
            </span>
          </Link>

          {/* CENTER — NAV LINKS (DESKTOP) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-all duration-300
                  ${
                    isActive
                      ? "text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.9)]"
                      : "text-white/70 hover:text-white hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.6)]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* RIGHT — DATE & TIME (DESKTOP) */}
          <div
            className="hidden md:flex flex-col items-end text-xs font-mono
                       text-white/60 hover:text-indigo-400
                       hover:drop-shadow-[0_0_14px_rgba(99,102,241,0.6)]
                       transition-all duration-300"
          >
            <span>
              {time.toLocaleDateString("en-IN", {
                weekday: "short",
                day: "2-digit",
                month: "short",
              })}
            </span>
            <span className="tracking-wide">
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </span>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white hover:text-indigo-400
                       hover:drop-shadow-[0_0_14px_rgba(99,102,241,0.7)]
                       transition"
            aria-label="Open menu"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h22M3 14h22M3 22h22" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-[120] md:hidden pointer-events-none">
          {/* BACKDROP (visual only) */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />

          {/* MENU PANEL (interactive) */}
          <div className="absolute right-0 top-0 h-full w-72 bg-black border-l border-white/10 p-6
                          pointer-events-auto">

            <button
              onClick={() => setMenuOpen(false)}
              className="mb-10 text-white/70 hover:text-indigo-400 transition"
            >
              ✕ Close
            </button>

            <ul className="space-y-6">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block text-lg font-medium transition-all duration-300
                      ${
                        isActive
                          ? "text-indigo-400 drop-shadow-[0_0_14px_rgba(99,102,241,0.9)]"
                          : "text-white/80 hover:text-white hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.7)]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* SPACER */}
      <div className="h-20" />
    </>
  );
}
