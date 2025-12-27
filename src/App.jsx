import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";

import UserDashboard from "./pages/UserDashboard";
import ProviderDashboard from "./pages/ProviderDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";

function App() {
  return (
    <BrowserRouter>
      {/* ALWAYS SHOW NAVBAR */}
      <Navbar />

      <Routes>
        {/* HOME */}
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

        {/* LOGIN */}
        <Route path="/login/:role" element={<Login />} />

        {/* DASHBOARDS */}
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/provider/dashboard" element={<ProviderDashboard />} />
        <Route path="/manager/dashboard" element={<ManagerDashboard />} />

        {/* SERVICES */}
        <Route
          path="/services/category/:id"
          element={
            <div className="min-h-screen flex items-center justify-center">
              Category Services Page
            </div>
          }
        />

        <Route
          path="/services/details/:id"
          element={
            <div className="min-h-screen flex items-center justify-center">
              Service Details Page
            </div>
          }
        />
      </Routes>

      {/* ALWAYS SHOW FOOTER */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
