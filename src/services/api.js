import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', //Mac OS
});

export default api;
