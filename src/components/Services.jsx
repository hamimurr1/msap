import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "Hospital", icon: "🏥" },
    { id: 2, name: "Ambulance", icon: "🚑" },
    { id: 3, name: "Police", icon: "🚔" },
    { id: 4, name: "Fire Service", icon: "🔥" },
    { id: 5, name: "Blood Bank", icon: "🩸" },
    { id: 6, name: "Electrician", icon: "⚡" },
    { id: 7, name: "Plumber", icon: "🔧" },
    { id: 8, name: "Cleaning", icon: "🧹" },
    { id: 9, name: "Food Service", icon: "🍽️" },
    { id: 10, name: "Transport", icon: "🚗" },
  ];

  const recentServices = [
    {
      id: 1,
      service_name: "24/7 Ambulance Service",
      category: "Ambulance",
      provider: "City Care",
    },
    {
      id: 2,
      service_name: "Emergency Electrician",
      category: "Electrician",
      provider: "PowerFix",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  return (
    <main id="services">

      {/* ===== CATEGORY SECTION ===== */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Available Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {categories
              .slice(0, showAll ? categories.length : 8)
              .map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => navigate(`/services/category/${cat.id}`)}
                  className="bg-white p-6 rounded-2xl shadow hover:shadow-lg cursor-pointer"
                >
                  <div className="text-3xl mb-4 text-center">
                    {cat.icon}
                  </div>

                  <h3 className="text-center font-semibold mb-3">
                    {cat.name}
                  </h3>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/services/category/${cat.id}`);
                    }}
                    className="block mx-auto px-4 py-2 bg-[#41644A] text-white rounded-lg"
                  >
                    Request Service
                  </button>
                </div>
              ))}
          </div>

          {categories.length > 8 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md"
              >
                {showAll ? "See less" : "See more"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== RECENT SERVICES ===== */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">
            Recent Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentServices.map((s) => (
              <div key={s.id} className="bg-gray-50 p-4 rounded shadow">
                <h3 className="font-semibold mb-2">
                  {s.service_name}
                </h3>

                <p className="text-sm text-gray-600 mb-3">
                  {s.category} • {s.provider}
                </p>

                <button
                  onClick={() =>
                    navigate(`/services/details/${s.id}`)
                  }
                  className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                >
                  View
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <button
              onClick={() => navigate("/services")}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
