import { axios } from "../axios";

const API = 'https://farvater.travel/en/api/';

export const general = {

  searchForm: (data) => {
    return axios.post(`${API}autocomplete/searchform`, data.body);
  },
  searchStart: (data) => {
    return axios.post(`${API}searchstart2`, data.body);
  },
  readResults: (data) => {
    return axios.post(`${API}readresults`, data.body);
  },
  getTour: (data) => {
    return axios.post(`https://farvater.travel/en${data.pathname}`, data.body);
  },
  getOtherTours: (data) => {
    return axios.post(`https://farvater.travel/en/tour/others/${data.id}`, data.body);
  },
  getFlightsInfo: (data) => {
    return axios.post(`https://farvater.travel/en/tour/flightsinfo/${data.id}`, data.body);
  },
  getHotTours: (data) => {
    return axios.post(`https://farvater.travel/home/homeHot`, data.body);
  },
  getRecommendedTours: (data) => {
    return axios.post(`https://farvater.travel/home/homeRecommended`, data.body);
  },
};