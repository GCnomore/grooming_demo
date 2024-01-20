import axios from "axios"

const axiosConfigure = () => {
   // const instance = axios.create({
   //    baseURL: process.env.VITE_REACT_APP_BASE_URL_DEV,
   //    timeout: 10000,
   //    headers: {
   //       'Authorization': 'Bearer' + token,
   //    },
   // });
   // return instance;

   axios.interceptors.request.use((config) => {
      const _token = localStorage.getItem('accessToken');

      if(_token && config.headers) {
         config.headers['Authorization'] = 'Bearer ' + _token;
      }

      config.baseURL = import.meta.env.VITE_REACT_APP_BASE_URL_DEV;
      config.timeout = 10000;

      return config;
   });
}

export default axiosConfigure;