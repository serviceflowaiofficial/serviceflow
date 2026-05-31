import React, { useState } from 'react';

export default function EstimatePage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', serviceType: 'hvac' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://serviceflow-api-cba952ea54b7.herokuapp.com/api/estimate/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setMessage('Estimate sent! Check your email.');
      setFormData({ name: '', email: '', phone: '', serviceType: 'hvac' });
    } catch (error) {
      setMessage('Error sending estimate. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-slate-900 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Get Your Free Estimate</h1>
        
        <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-lg border border-blue-500/20 space-y-6">
          <div>
            <label className="block text-white mb-2">Full Name</label>
            <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white" required />
          </div>
          
          <div>
            <label className="block text-white mb-2">Email</label>
            <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white" required />
          </div>
          
          <div>
            <label className="block text-white mb-2">Phone</label>
            <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white" required />
          </div>
          
          <div>
            <label className="block text-white mb-2">Service Type</label>
            <select value={formData.serviceType} onChange={(e) => setFormData({...formData, serviceType: e.target.value})} className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white">
              <option value="hvac">HVAC</option>
              <option value="plumbing">Plumbing</option>
              <option value="electrical">Electrical</option>
              <option value="contracting">General Contracting</option>
            </select>
          </div>
          
          <button type="submit" disabled={loading} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded">
            {loading ? 'Sending...' : 'Get Free Estimate'}
          </button>
          
          {message && <p className="text-center text-green-400">{message}</p>}
        </form>
      </div>
    </div>
  );
}
