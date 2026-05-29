import React, { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/admin/LoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  const [page, setPage] = useState('landing');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('apiToken');
    if (token) {
      setPage('admin');
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setPage('admin');
  };

  const handleLogout = () => {
    setUser(null);
    setPage('landing');
  };

  return (
    <>
      {page === 'landing' && (
        <div>
          <LandingPage />
          <div className="text-center py-4 bg-slate-900 text-slate-400">
            <button
              onClick={() => setPage('login')}
              className="text-blue-400 hover:underline"
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
