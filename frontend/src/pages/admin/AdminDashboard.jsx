import React, { useState, useEffect } from 'react';
import { LogOut } from 'lucide-react';
import { getDashboard } from '../../services/api';

export default function AdminDashboard({ onLogout }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('dashboard');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await getDashboard();
      setData(response);
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

  if (loading) return <div className="p-8 text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="bg-slate-800 p-4 flex justify-between">
        <h1 className="text-2xl font-bold">ServiceFlow Admin</h1>
        <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded">
          Log Out
        </button>
      </div>

      <div className="p-8">
        <h2 className="text-xl mb-6">Dashboard</h2>
        {data && (
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-slate-800 p-6 rounded">
              <p className="text-slate-400">Total Calls</p>
              <p className="text-3xl font-bold">{data.totalCalls}</p>
            </div>
            <div className="bg-slate-800 p-6 rounded">
              <p className="text-slate-400">Total Leads</p>
              <p className="text-3xl font-bold">{data.totalLeads}</p>
            </div>
            <div className="bg-slate-800 p-6 rounded">
              <p className="text-slate-400">Appointments</p>
              <p className="text-3xl font-bold">{data.confirmedAppointments}</p>
            </div>
            <div className="bg-slate-800 p-6 rounded">
              <p className="text-slate-400">Revenue</p>
              <p className="text-3xl font-bold">${data.totalRevenue}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
