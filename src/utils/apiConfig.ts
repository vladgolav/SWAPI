import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '',
  timeout: 1000 * 30, // 30 sec
});

export default axiosInstance;
