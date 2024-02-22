import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://swapi.dev/api/',
  timeout: 1000 * 30, // 30 sec
});

export default axiosInstance;
