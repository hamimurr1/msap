import React, { useState, useEffect } from "react";

const ProviderDashboard = () => {
  const [services, setServices] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [acceptedRequests, setAcceptedRequests] = useState([]);

  useEffect(() => {
    // Mock Data, replace with axios later
    setServices([
      { id: 1, service_name: "Plumbing Fix", category_name: "Plumbing", status: "approved" },
      { id: 2, service_name: "Electric Wiring", category_name: "Electric", status: "pending" },
    ]);

    setPendingRequests([
      { id: 1, service_name: "Plumbing Fix", requester_name: "Alice", requested_at: "2025-12-25" },
      { id: 2, service_name: "Electric Wiring", requester_name: "Bob", requested_at: "2025-12-26" },
    ]);

    setAcceptedRequests([
      { id: 3, service_name: "Plumbing Fix", requester_name: "Charlie", requested_at: "2025-12-20" },
    ]);
  }, []);

  const handleRequestAction = (requestId, action) => {
    console.log(action, "request id:", requestId);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">Provider Dashboard</h1>

      {/* Pending Requests */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Pending Requests</h2>
        {pendingRequests.length === 0 ? (
          <p>No pending requests</p>
        ) : (
          pendingRequests.map((r) => (
            <div key={r.id} className="bg-gray-50 p-4 rounded shadow mb-2 flex justify-between items-center">
              <div>
                <p><strong>{r.requester_name}</strong> requested <strong>{r.service_name}</strong></p>
                <p className="text-sm text-gray-500">Requested at: {r.requested_at}</p>
              </div>
              <div>
                <button className="px-3 py-1 bg-green-600 text-white rounded mr-2" onClick={() => handleRequestAction(r.id, "accept")}>Accept</button>
                <button className="px-3 py-1 bg-red-600 text-white rounded" onClick={() => handleRequestAction(r.id, "cancel")}>Cancel</button>
              </div>
            </div>
          ))
        )}
      </section>

      {/* Accepted Requests */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Accepted Requests</h2>
        {acceptedRequests.length === 0 ? (
          <p>No accepted requests</p>
        ) : (
          acceptedRequests.map((r) => (
            <div key={r.id} className="bg-gray-50 p-4 rounded shadow mb-2 flex justify-between items-center">
              <div>
                <p><strong>{r.requester_name}</strong> requested <strong>{r.service_name}</strong></p>
                <p className="text-sm text-gray-500">Requested at: {r.requested_at}</p>
              </div>
              <div>
                <button className="px-3 py-1 bg-sky-600 text-white rounded" onClick={() => handleRequestAction(r.id, "complete")}>Mark Complete</button>
              </div>
            </div>
          ))
        )}
      </section>

      {/* My Services */}
      <section>
        <h2 className="text-xl font-semibold mb-2">My Services</h2>
        <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase">Service Name</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase">Category</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {services.map((s) => (
              <tr key={s.id}>
                <td className="px-6 py-4">{s.service_name}</td>
                <td className="px-6 py-4">{s.category_name}</td>
                <td className="px-6 py-4">{s.status}</td>
                <td className="px-6 py-4">
                  <button className="text-sky-600 hover:underline">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ProviderDashboard;
