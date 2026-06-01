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
      {page === 'landing' && <LandingPage onSignIn={() => setPage('login')} />}
      {page === 'login' && <LoginPage onLogin={() => setPage('admin')} />}
      {page === 'admin' && <AdminDashboard onLogout={() => setPage('landing')} />}
    </>
  );
}

export default App;
