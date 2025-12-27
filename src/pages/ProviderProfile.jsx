import React, { useState } from "react";

const ProviderProfile = () => {
  const [profile, setProfile] = useState({
    full_name: "John Doe",
    phone: "0123456789",
    address: "Dhaka, Bangladesh",
    lat: 23.7809,
    lng: 90.2792
  });

  const handleChange = (e) => {
    setProfile({...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile saved:", profile);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-indigo-600">My Profile</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 space-y-4">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input name="full_name" value={profile.full_name} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input name="phone" value={profile.phone} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Address</label>
          <input name="address" value={profile.address} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div className="text-right">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">Save Profile</button>
        </div>
      </form>
    </div>
  );
};

export default ProviderProfile;
