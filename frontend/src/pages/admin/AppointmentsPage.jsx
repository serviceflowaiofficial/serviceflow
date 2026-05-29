import React, { useState, useEffect } from 'react';

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/appointments');
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-slate-400">Loading appointments...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Appointments</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-800 border-b border-slate-700">
            <tr>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Date & Time</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length === 0 ? (
              <tr><td colSpan="5" className="px-4 py-8 text-center text-slate-400">No appointments scheduled</td></tr>
            ) : (
              appointments.map((apt) => (
                <tr key={apt.id} className="border-b border-slate-700 hover:bg-slate-800">
                  <td className="px-4 py-3">{apt.customerName}</td>
                  <td className="px-4 py-3">{apt.customerPhone}</td>
                  <td className="px-4 py-3">{apt.service}</td>
                  <td className="px-4 py-3">{new Date(apt.date).toLocaleString()}</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">{apt.status}</span></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
