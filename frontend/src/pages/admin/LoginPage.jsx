import React, { useState } from 'react';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem('apiToken', 'demo-token');
      onLogin({ success: true });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center">
      <div className="bg-slate-800 p-8 rounded-lg w-full max-w-md border border-blue-500/30">
        <h2 className="text-3xl font-bold text-white mb-6">ServiceFlow Admin</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white" placeholder="Email" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white" placeholder="Password" required />
          <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600">
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
}
