import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => {

    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export {axiosInstance as axios};
