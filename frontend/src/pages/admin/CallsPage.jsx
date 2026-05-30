import React, { useState, useEffect } from 'react';

export default function CallsPage() {
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCalls();
  }, []);

  const loadCalls = async () => {
    try {
      const response = await fetch('https://serviceflow-api-cba952ea54b7.herokuapp.com/api/calls');
      const data = await response.json();
      setCalls(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-slate-400">Loading calls...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Calls</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-800 border-b border-slate-700">
            <tr>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Duration</th>
              <th className="px-4 py-3">AI Handled</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {calls.length === 0 ? (
              <tr><td colSpan="5" className="px-4 py-8 text-center text-slate-400">No calls yet</td></tr>
            ) : (
              calls.map((call) => (
                <tr key={call.id} className="border-b border-slate-700 hover:bg-slate-800">
                  <td className="px-4 py-3">{call.customerName || 'Unknown'}</td>
                  <td className="px-4 py-3">{call.customerPhone}</td>
                  <td className="px-4 py-3">{call.duration_seconds}s</td>
                  <td className="px-4 py-3">{call.ai_handled ? 'Yes' : 'No'}</td>
                  <td className="px-4 py-3 text-slate-400">{new Date(call.created_at).toLocaleDateString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
