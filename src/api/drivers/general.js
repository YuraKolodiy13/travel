import axios from "axios";
import {API_URL} from "../../helpers/constants";

export const general = {

  searchForm: (data) => {
    return axios.post(`${API_URL}uk/api/autocomplete/searchform`, data);
  },
  getFlightsInfo: (data) => {
    return axios.post(`${API_URL}uk/tour/flightsinfo/${data.id}`, data.body);
  },

};