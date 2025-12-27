import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-[#41644A] shadow sticky top-0 z-50 w-full">
      <div className="h-14 px-6 flex justify-between items-center">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src="https://i.ibb.co.com/HTt3kXkZ/Gemini-Generated-Image-svl9rlsvl9rlsvl9.png"
            alt="MSAP Logo"
            className="h-12 w-12 rounded-full object-cover shadow-sm"
          />
          <span className="text-lg text-[#E9762B] font-extrabold">
            MSA<span className="text-[#EBE1D1]">P</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-2 text-sm font-semibold text-slate-200">
          <button
            onClick={() => navigate("/")}
            className="px-3 py-1 rounded-md hover:bg-white/10 hover:text-[#EBE1D1] transition"
          >
            Home
          </button>

          <button
            onClick={() => scrollTo("services")}
            className="px-3 py-1 rounded-md hover:bg-white/10 hover:text-[#EBE1D1] transition"
          >
            Services
          </button>

          <button
            onClick={() => scrollTo("about")}
            className="px-3 py-1 rounded-md hover:bg-white/10 hover:text-[#EBE1D1] transition"
          >
            About
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="px-3 py-1 rounded-md hover:bg-white/10 hover:text-[#EBE1D1] transition"
          >
            Contact
          </button>
        </nav>

        {/* Login Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => navigate("/login/user")}
            className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 text-xs font-semibold"
          >
            User
          </button>

          <button
            onClick={() => navigate("/login/provider")}
            className="px-3 py-1.5 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 text-xs font-semibold"
          >
            Provider
          </button>

          <button
            onClick={() => navigate("/login/manager")}
            className="px-3 py-1.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 text-xs font-semibold"
          >
            Manager
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
