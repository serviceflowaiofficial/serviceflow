import React, { useState, useEffect } from 'react';
import { getCalls } from '../../services/api';
import { Phone } from 'lucide-react';

export default function CallsPage() {
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCalls();
  }, []);

  const loadCalls = async () => {
    try {
      const response = await getCalls();
      setCalls(response);
    } catch (error) {
      console.error('Failed to load calls', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-slate-400">Loading calls...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Calls</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-800 border-b border-slate-700">
            <tr>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">D
