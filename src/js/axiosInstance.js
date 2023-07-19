import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'manga-api-express.vercel.app/api'
});

export default axiosInstance;
