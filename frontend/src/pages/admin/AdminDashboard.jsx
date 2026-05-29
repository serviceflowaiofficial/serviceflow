import React, { useState, useEffect } from 'react';
import { BarChart3, Phone, Users, Calendar, DollarSign, LogOut } from 'lucide-react';
import { getDashboard } from '../../services/api';
import CallsPage from './CallsPage';
import LeadsPage from './LeadsPage';
import AppointmentsPage from './AppointmentsPage';

export default function AdminDashboard({ onLogout }) {
  const [activePage, setActivePage] = useState('dashboard');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const response = await getDashboard();
      setData(response);
    } catch (error) {
      console.error('Failed to load dashboard', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    onLogout();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="bg-slate-800 border-b border-blue-500/20 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ServiceFlow Admin</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
          >
            <LogOut className="w-4 h-4" />
            Lo
