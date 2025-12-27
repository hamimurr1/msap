import React, { useState, useEffect } from "react";

const EditService = ({ serviceId }) => {
  const [service, setService] = useState(null);

  useEffect(() => {
    // Mock fetch
    setService({ id: serviceId, service_name: "Service A", description: "Fix plumbing", category: "Plumbing", lat: "23.7809", lng: "90.2792" });
  }, [serviceId]);

  const handleChange = (e) => {
    setService({...service, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Service updated:", service);
  };

  if (!service) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-indigo-600">Edit Service</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 space-y-4">
        <div>
          <label className="block mb-1 font-medium">Service Name</label>
          <input name="service_name" value={service.service_name} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea name="description" value={service.description} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input name="category" value={service.category} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Latitude</label>
            <input name="lat" value={service.lat} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Longitude</label>
            <input name="lng" value={service.lng} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
        </div>
        <div className="text-right">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">Update Service</button>
        </div>
      </form>
    </div>
  );
};

export default EditService;
