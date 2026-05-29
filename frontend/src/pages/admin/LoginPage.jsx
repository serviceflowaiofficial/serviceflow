import React, { useState } from 'react';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      localStorage.setItem('apiToken', data.apiToken || 'demo-token');
      onLogin(data);
    } catch (err) {
      setError('Login failed');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center">
      <div className="bg-slate-800 p-8 rounded-lg w-full max-w-md border border-blue-500/30">
        <h2 className="text-3xl font-bold text-white mb-6">ServiceFlow Admin</h2>
        {error && <div className="bg-red-500 text-white p-3 rounded mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white" placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white" placeholder="Password" />
          <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 disabled:opacity-50">
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
        <p className="text-slate-400 text-sm mt-6 text-center">Demo: Any email/password works</p>
      </div>
    </div>
  );
}
