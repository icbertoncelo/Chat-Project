import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

/* api.interceptors.request.use((config) => {
  const { token } = store.getState().auth;

  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  console.log(token);

  return { ...config, headers };
}); */

export default api;
