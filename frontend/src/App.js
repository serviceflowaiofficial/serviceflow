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

  const handleLogin = () => {
    setPage('admin');
  };

  const handleLogout = () => {
    setPage('landing');
  };

  return (
    <>
      {page === 'landing' && (
        <div>
          <LandingPage />
          <div className="text-center py-4 bg-slate-900 border-t border-slate-800">
            <button
              onClick={() => setPage('login')}
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              Admin Login
            </button>
          </div>
        </div>
      )}
      {page === 'login' && <LoginPage onLogin={handleLogin} />}
      {page === 'admin' && <AdminDashboard onLogout={handleLogout} />}
    </>
  );
}

export default App;
