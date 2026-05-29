import React, { useState, useEffect } from 'react';
import { getAppointments } from '../../services/api';
import { Calendar } from 'lucide-react';

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      const response = await getAppointments();
      setAppointments(response);
    } catch (error) {
      console.error('Failed to load appointments', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-slate-400">Loading appointments...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Appointments</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-800 border-b border-slate-700">
            <tr>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Service</th>
              <th className="px-6 py-3">Date & Time</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((apt) => (
              <tr key={apt.id} className="border-b border-slate-700 hover:bg-slate-800">
                <td className="px-6 py-4">{apt.custo
