import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      service_name: "City Ambulance",
      provider_name: "City Care",
      category_name: "Ambulance",
      lat: 23.8103,
      lng: 90.4125,
    },
    {
      id: 2,
      service_name: "Fire Rescue Unit",
      provider_name: "Fire Dept",
      category_name: "Fire",
      lat: 23.8135,
      lng: 90.4189,
    },
  ];

  useEffect(() => {
    const loadMap = () => {
      navigator.geolocation.getCurrentPosition((pos) => {
        const userLoc = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };

        const map = new window.google.maps.Map(
          document.getElementById("map"),
          {
            center: userLoc,
            zoom: 13,
          }
        );

        new window.google.maps.Marker({
          position: userLoc,
          map,
          title: "You are here",
          icon: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        });

        services.forEach((s) => {
          if (!s.lat || !s.lng) return;

          const marker = new window.google.maps.Marker({
            position: { lat: s.lat, lng: s.lng },
            map,
            title: s.service_name,
          });

          const info = new window.google.maps.InfoWindow({
            content: `
              <b>${s.service_name}</b><br/>
              Provider: ${s.provider_name}<br/>
              Category: ${s.category_name}<br/>
            `,
          });

          marker.addListener("click", () => info.open(map, marker));
        });
      });
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAP_KEY";
      script.async = true;
      script.onload = loadMap;
      document.body.appendChild(script);
    } else {
      loadMap();
    }
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold mb-6">Nearby Services</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT */}
        <section className="lg:col-span-1 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-orange-400 text-white">
              <h3 className="font-bold text-xl">Ambulance</h3>
              <p className="text-md">Emergency medical transport</p>
              <button
                onClick={() => navigate("/user/request/ambulance")}
                className="mt-5 px-2 py-1 bg-white text-black rounded-md"
              >
                Request Service
              </button>
            </div>

            <div className="p-5 rounded-xl bg-red-500 text-white">
              <h3 className="font-bold text-xl">Fire</h3>
              <p className="text-md">Fire rescue & suppression</p>
              <button
                onClick={() => navigate("/user/request/fire")}
                className="mt-5 px-2 py-1 bg-white text-black rounded"
              >
                Request Service
              </button>
            </div>

            <div className="p-5 rounded-xl bg-green-500 text-white">
              <h3 className="font-bold text-xl">Police</h3>
              <p className="text-md">Public safety services</p>
              <button
                onClick={() => navigate("/user/request/police")}
                className="mt-5 px-2 py-1 bg-white text-black rounded-md"
              >
                Request Service
              </button>
            </div>

            <div className="p-5 rounded-xl bg-blue-200 text-black">
              <h3 className="font-bold text-xl">Blood Donation</h3>
              <p className="text-md">Blood donation requests</p>
              <button
                onClick={() => navigate("/user/request/blood")}
                className="mt-5 px-2 py-1 bg-black text-white rounded"
              >
                Request Service
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Active Requests</h3>
            <table className="w-full text-sm border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Service</th>
                  <th className="p-2 border">Location</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Ambulance</td>
                  <td className="p-2 border">Main Road</td>
                  <td className="p-2 border">In Progress</td>
                </tr>
                <tr>
                  <td className="p-2 border">Fire</td>
                  <td className="p-2 border">Sector 10</td>
                  <td className="p-2 border">Assigned</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* RIGHT */}
        <section className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow p-3">
            <div
              id="map"
              className="w-full h-[520px] rounded-lg overflow-hidden"
            ></div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default UserDashboard;
