// API Service - connects to your backend
const API_BASE_URL = 'http://localhost:5000/api'; // Change to deployed URL later

export const apiCall = async (endpoint, method = 'GET', data = null) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('apiToken')}`
    }
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
};

// Auth endpoints
export const login = (email, password) => 
  apiCall('/auth/login', 'POST', { email, password });

export const register = (data) => 
  apiCall('/auth/register', 'POST', data);

// Calls endpoints
export const getCalls = () => apiCall('/calls');
export const createCall = (data) => apiCall('/calls', 'POST', data);

// Leads endpoints
export const getLeads = () => apiCall('/leads');
export const createLead = (data) => apiCall('/leads', 'POST', data);

// Appointments endpoints
export const getAppointments = () => apiCall('/appointments');
export const createAppointment = (data) => apiCall('/appointments/create', 'POST', data);

// Analytics endpoints
export const getDashboard = () => apiCall('/analytics/dashboard');
