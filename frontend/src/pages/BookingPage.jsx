import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState({ name: '', phone: searchParams.get('phone') || '', date: '', time: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://serviceflow-api-cba952ea54b7.herokuapp.com/api/appointment/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      setMessage('Appointment booked! Check your email and text for confirmation.');
      setForm({ name: '', phone: '', date: '', time: '' });
    } catch (error) {
      setMessage('Error booking appointment. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-slate-900 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Book Your Appointment</h1>
        
        <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-lg border border-blue-500/20 space-y-6">
          <div>
            <label className="block text-white mb-2">Full Name</label>
            <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white" required />
          </div>
          
          <div>
            <label className="block text-white mb-2">Phone Number</label>
            <input type="tel" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white" required />
          </div>
          
          <div>
            <label className="block text-white mb-2">Preferred Date</label>
            <input type="date" value={form.date} onChange={(e) => setForm({...form, date: e.target.value})} className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white" required />
          </div>
          
          <div>
            <label className="block text-white mb-2">Preferred Time</label>
            <input type="time" value={form.time} onChange={(e) => setForm({...form, time: e.target.value})} className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white" required />
          </div>
          
          <button type="submit" disabled={loading} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded">
            {loading ? 'Booking...' : 'Book Appointment'}
          </button>
          
          {message && <p className="text-center text-green-400">{message}</p>}
        </form>
      </div>
    </div>
  );
}
