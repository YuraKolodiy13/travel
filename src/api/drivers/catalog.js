import axios from "axios";
import {API_URL} from "../../helpers/constants";

export const catalog = {

  searchStart: (data) => {
    return axios.post(`${API_URL}uk/api/searchstart2`, data.body);
  },
  readResults: (data) => {
    return axios.post(`${API_URL}uk/api/readresults`, data.body);
  },

};