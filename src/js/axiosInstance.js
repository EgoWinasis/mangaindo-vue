import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://manga-api-express.vercel.app/api'
});

export default axiosInstance;
