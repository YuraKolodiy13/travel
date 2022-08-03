import axios from "axios";
import {API_URL} from "../../helpers/constants";

export const homepage = {
  getHotTours: (data) => {
    return axios.post(`${API_URL}uk/home/homeHot`, data.body);
  },
  getRecommendedTours: (data) => {
    return axios.post(`${API_URL}uk/home/homeRecommended`, data.body);
  },
};