import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      {/* COMMON NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <About />
              <Contact />
            </>
          }
        />

        {/* LOGIN (USER / PROVIDER / MANAGER) */}
        <Route path="/login/:role" element={<Login />} />

        {/* FUTURE: CATEGORY SERVICES */}
        <Route
          path="/services/category/:id"
          element={
            <div className="min-h-screen flex items-center justify-center">
              Category Services Page
            </div>
          }
        />

        {/* FUTURE: SERVICE DETAILS */}
        <Route
          path="/services/details/:id"
          element={
            <div className="min-h-screen flex items-center justify-center">
              Service Details Page
            </div>
          }
        />
      </Routes>

      {/* COMMON FOOTER */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
