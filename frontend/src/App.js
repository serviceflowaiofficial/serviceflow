import React, { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/admin/LoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import BookingPage from './pages/BookingPage';

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
      {page === 'landing' && <LandingPage />}
      {page === 'login' && <LoginPage onLogin={() => setPage('admin')} />}
      {page === 'admin' && <AdminDashboard onLogout={() => setPage('landing')} />}
      {page === 'book' && <BookingPage />}
    </>
  );
}

export default App;
