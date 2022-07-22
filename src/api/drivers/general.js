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
    return axios.post(`https://farvater.travel/en${data.pathname.replace('/countries', '/hotel')}`, data.body);
  },
  getOtherTours: (data) => {
    return axios.post(`https://farvater.travel/en/tour/others/${data.id}`, data.body);
  },
  getFlightsInfo: (data) => {
    return axios.post(`https://farvater.travel/en/tour/flightsinfo/${data.id}`, data.body);
  },
  getHotTours: (data) => {
    return axios.post(`https://farvater.travel/en/home/homeHot`, data.body);
  },
  getRecommendedTours: (data) => {
    return axios.post(`https://farvater.travel/en/home/homeRecommended`, data.body);
  },
  getToursByCountry: (data) => {
    return axios.post(`https://farvater.travel/en/catalog/static-tophotels/`, data.body);
  },
};