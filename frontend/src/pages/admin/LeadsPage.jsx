import React, { useState, useEffect } from 'react';

export default function LeadsPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    try {
      const response = await fetch('https://serviceflow-api-cba952ea54b7.herokuapp.com/api/leads');
      const data = await response.json();
      setLeads(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-slate-400">Loading leads...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Leads</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-800 border-b border-slate-700">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Score</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 ? (
              <tr><td colSpan="6" className="px-4 py-8 text-center text-slate-400">No leads yet</td></tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id} className="border-b border-slate-700 hover:bg-slate-800">
                  <td className="px-4 py-3">{lead.name}</td>
                  <td className="px-4 py-3">{lead.phone || 'N/A'}</td>
                  <td className="px-4 py-3">{lead.service}</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">{lead.status}</span></td>
                  <td className="px-4 py-3">{lead.score}%</td>
                  <td className="px-4 py-3 text-slate-400">{new Date(lead.date).toLocaleDateString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
