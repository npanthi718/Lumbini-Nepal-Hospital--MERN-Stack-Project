import axios from 'axios';
import { useSnackbar } from 'notistack';

// Create axios instance with default config
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api', // Ensure the base URL is correct
  headers: {
    'Content-Type': 'application/json',
  },
<<<<<<< HEAD
  withCredentials: true // Enable sending cookies with requests
=======
  withCredentials: true, // Include credentials if needed
>>>>>>> 2ff22c9 (Making Ready for Deployment)
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Ensure the token is stored in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add the token to the Authorization header
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    
    // Handle different error scenarios
    if (response) {
      switch (response.status) {
        case 401:
          // Unauthorized - clear token and redirect to login
          localStorage.removeItem('token');
          window.location.href = '/login';
          break;
        case 403:
          // Forbidden - redirect to unauthorized page
          window.location.href = '/unauthorized';
          break;
        case 404:
          // Not found - show error message
          console.error('Resource not found:', response.data.message);
          break;
        case 500:
          // Server error - show error message
          console.error('Server error:', response.data.message);
          break;
        default:
          // Other errors - show error message
          console.error('Error:', response.data.message);
      }
    } else if (error.request) {
      // Network error
      console.error('Network error:', error.message);
    } else {
      // Other errors
      console.error('Error:', error.message);
    }

    return Promise.reject(error);
  }
);

<<<<<<< HEAD
// API methods
const apiService = {
  // Auth
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  logout: () => api.post('/auth/logout'),
  getCurrentUser: () => api.get('/auth/me'),
  
  // Admin
  getDashboardStats: () => api.get('/admin/stats'),
  getDoctors: () => api.get('/admin/doctors'),
  getPatients: () => api.get('/admin/patients'),
  getDepartments: () => api.get('/admin/departments'),
  getAppointments: () => api.get('/admin/appointments'),
  updateAppointmentStatus: (id, data) => api.patch(`/admin/appointments/${id}/status`, data),
  getPatientAppointments: (id) => api.get(`/admin/patients/${id}/appointments`),
  getPatientPrescriptions: (id) => api.get(`/admin/patients/${id}/prescriptions`),
  getDoctorAppointments: (id) => api.get(`/admin/doctors/${id}/appointments`),
  getDoctorPrescriptions: (id) => api.get(`/admin/doctors/${id}/prescriptions`),
  updateDoctorStatus: (id, data) => api.patch(`/admin/doctors/${id}/status`, data),
  updateDoctorApproval: (id, data) => api.patch(`/admin/doctors/${id}/approval`, data),
  
  // Contact/Messages
  sendMessage: (data) => api.post('/contact', data),
  getMessages: () => api.get('/contact'),
  updateMessage: (id, data) => api.patch(`/contact/${id}`, data),
  deleteMessage: (id) => api.delete(`/contact/${id}`),
  updateMessageStatus: (id, status) => api.patch(`/contact/${id}`, { status }),
};

export default apiService; 
=======
// Export the API service
const apiService = {
  getPrescriptions: () => api.get('/prescriptions'), // Ensure this matches your backend route
};

export default apiService;
>>>>>>> 2ff22c9 (Making Ready for Deployment)
