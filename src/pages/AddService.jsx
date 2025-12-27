import React, { useState } from "react";

const AddService = () => {
  const [service, setService] = useState({
    service_name: "",
    description: "",
    category: "",
    lat: "",
    lng: ""
  });

  const handleChange = (e) => {
    setService({...service, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Service added:", service);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-indigo-600">Add New Service</h1>
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
          <button className="px-4 py-2 bg-green-600 text-white rounded">Save Service</button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
