import React, { useState } from 'react';
import BookingPage from '../BookingPage';
import CallsPage from './CallsPage';
import LeadsPage from './LeadsPage';
import AppointmentsPage from './AppointmentsPage';

export default function AdminDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="bg-slate-800 p-4 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">ServiceFlow Admin</h1>
          <button onClick={onLogout} className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded font-semibold">
            Log Out
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        <div className="flex gap-4 mb-8 border-b border-slate-700">
          <button onClick={() => setActiveTab('dashboard')} className={`px-4 py-2 font-semibold ${activeTab === 'dashboard' ? 'border-b-2 border-blue-500 text-blue-400' : 'text-slate-400'}`}>Dashboard</button>
          <button onClick={() => setActiveTab('book')} className={`px-4 py-2 font-semibold ${activeTab === 'book' ? 'border-b-2 border-blue-500 text-blue-400' : 'text-slate-400'}`}>Book Appointment</button>
          <button onClick={() => setActiveTab('calls')} className={`px-4 py-2 font-semibold ${activeTab === 'calls' ? 'border-b-2 border-blue-500 text-blue-400' : 'text-slate-400'}`}>Calls</button>
          <button onClick={() => setActiveTab('leads')} className={`px-4 py-2 font-semibold ${activeTab === 'leads' ? 'border-b-2 border-blue-500 text-blue-400' : 'text-slate-400'}`}>Leads</button>
          <button onClick={() => setActiveTab('appointments')} className={`px-4 py-2 font-semibold ${activeTab === 'appointments' ? 'border-b-2 border-blue-500 text-blue-400' : 'text-slate-400'}`}>Appointments</button>
        </div>

        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-slate-800 border border-blue-500/20 p-6 rounded-lg">
              <p className="text-slate-400 text-sm">Total Calls</p>
              <p className="text-4xl font-bold mt-2">1247</p>
            </div>
            <div className="bg-slate-800 border border-blue-500/20 p-6 rounded-lg">
              <p className="text-slate-400 text-sm">Total Leads</p>
              <p className="text-4xl font-bold mt-2">342</p>
            </div>
            <div className="bg-slate-800 border border-blue-500/20 p-6 rounded-lg">
              <p className="text-slate-400 text-sm">Appointments</p>
              <p className="text-4xl font-bold mt-2">156</p>
            </div>
            <div className="bg-slate-800 border border-blue-500/20 p-6 rounded-lg">
              <p className="text-slate-400 text-sm">Revenue</p>
              <p className="text-4xl font-bold mt-2">$47,200</p>
            </div>
          </div>
        )}

        {activeTab === 'book' && <BookingPage />}
        {activeTab === 'calls' && <CallsPage />}
        {activeTab === 'leads' && <LeadsPage />}
        {activeTab === 'appointments' && <AppointmentsPage />}
      </div>
    </div>
  );
}
