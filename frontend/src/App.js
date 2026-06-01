import React, { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/admin/LoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  const [page, setPage] = useState('landing');

  useEffect(() => {
    const token = localStorage.getItem('apiToken');
    if (token) {
      setPage('admin');
    }
  }, []);

  return (
    <>
      {page === 'landing' && (
        <div>
          <LandingPage />
          <div className="text-center py-4 bg-slate-900 border-t border-slate-800">
            <button onClick={() => setPage('login')} className="text-blue-400 hover:text-blue-300 font-semibold">
              Admin Login
            </button>
          </div>
        </div>
      )}
      {page === 'login' && <LoginPage onLogin={() => setPage('admin')} />}
      {page === 'admin' && <AdminDashboard onLogout={() => setPage('landing')} />}
    </>
  );
}

export default App;
