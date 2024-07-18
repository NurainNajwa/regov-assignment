import axios from 'axios';

const API_URL = 'http://localhost:5000'

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  register(user) {
    return apiClient.post('/register', user);
  },
  login(user) {
    return apiClient.post('/login', user);
  },
  getUserProfile(userId) {
    return apiClient.get(`/profile/${userId}`);
  }
};

// export function register(user) {
//     return axios.post(`${API_URL}/register`, user);
// }
// export const loginUser = (user) => {
//     return axios.post(`${API_URL}/login`, user);
// };
// export const getUserProfile = () => apiClient.get(`/profile/${userId}`);

