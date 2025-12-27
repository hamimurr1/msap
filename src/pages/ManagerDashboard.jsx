import React, { useState, useEffect } from "react";

const ManagerDashboard = () => {
  const [pendingServices, setPendingServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    // TODO: Replace with axios call to backend API
    // axios.get('/api/pending_services.php').then(res => setPendingServices(res.data))
    setPendingServices([
      { id: 1, service_name: "Service A", provider: "John Doe", category_name: "Plumbing", description: "Fix leaking pipes", price_range: "$50-$100" },
      { id: 2, service_name: "Service B", provider: "Jane Smith", category_name: "Electric", description: "Electrical wiring", price_range: "$80-$150" },
    ]);
  }, []);

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  const handleAction = (action) => {
    if (!selectedService) return;
    console.log(`${action} service id:`, selectedService.id);
    // TODO: Call backend API to approve/reject service
    setSelectedService(null); // close detail view after action
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Manager Dashboard</h1>

      {selectedService && (
        <div className="bg-gray-50 p-6 rounded shadow mb-6">
          <h2 className="text-2xl font-bold mb-2">{selectedService.service_name}</h2>
          <p><strong>Provider:</strong> {selectedService.provider}</p>
          <p><strong>Category:</strong> {selectedService.category_name}</p>
          <p className="mt-2"><strong>Description:</strong> {selectedService.description}</p>
          <p className="mt-1"><strong>Price:</strong> {selectedService.price_range}</p>
          <div className="mt-4">
            <button
              className="px-4 py-2 bg-green-600 text-white rounded mr-2 hover:bg-green-700 transition"
              onClick={() => handleAction("approve")}
            >
              Approve
            </button>
            <button
              className="px-4 py-2 bg-red-600 text-white rounded mr-2 hover:bg-red-700 transition"
              onClick={() => handleAction("reject")}
            >
              Reject
            </button>
            <button
              className="px-4 py-2 border rounded hover:bg-gray-100 transition"
              onClick={() => setSelectedService(null)}
            >
              Back
            </button>
          </div>
        </div>
      )}

      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Service Name</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Provider</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Category</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pendingServices.map((s) => (
              <tr key={s.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{s.service_name}</td>
                <td className="px-6 py-4">{s.provider}</td>
                <td className="px-6 py-4">{s.category_name}</td>
                <td className="px-6 py-4 text-right">
                  <button
                    className="text-sky-600 hover:underline"
                    onClick={() => handleSelectService(s)}
                  >
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagerDashboard;
