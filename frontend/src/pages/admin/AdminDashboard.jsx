import React, { useState, useEffect } from 'react';

export default function AdminDashboard({ onLogout }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/analytics/dashboard');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    onLogout();
  };

  if (loading) {
    return <div className="p-8 text-white text-center">Loading dashboard...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="bg-slate-800 p-4 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">ServiceFlow Admin</h1>
          <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded font-semibold">
            Log Out
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        
        {data && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-800 border border-blue-500/20 p-6 rounded-lg">
              <p className="text-slate-400 text-sm">Total Calls</p>
              <p className="text-4xl font-bold mt-2">{data.totalCalls}</p>
            </div>
            <div className="bg-slate-800 border border-blue-500/20 p-6 rounded-lg">
              <p className="text-slate-400 text-sm">Total Leads</p>
              <p className="text-4xl font-bold mt-2">{data.totalLeads}</p>
            </div>
            <div className="bg-slate-800 border border-blue-500/20 p-6 rounded-lg">
              <p className="text-slate-400 text-sm">Appointments</p>
              <p className="text-4xl font-bold mt-2">{data.confirmedAppointments}</p>
            </div>
            <div className="bg-slate-800 border border-blue-500/20 p-6 rounded-lg">
              <p className="text-slate-400 text-sm">Revenue</p>
              <p className="text-4xl font-bold mt-2">${data.totalRevenue}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
