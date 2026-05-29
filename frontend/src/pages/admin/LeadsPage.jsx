import React, { useState, useEffect } from 'react';
import { getLeads } from '../../services/api';
import { Users } from 'lucide-react';

export default function LeadsPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    try {
      const response = await getLeads();
      setLeads(response);
    } catch (error) {
      console.error('Failed to load leads', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-slate-400">Loading leads...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Leads</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-800 border-b border-slate-700">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Service</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Score</th>
              <th className="px-6 py-3">Date</th>
            </tr>
