import axios from "axios";
import {API_URL} from "../../helpers/constants";

export const tours = {

  getToursByCountry: (data) => {
    return axios.post(`${API_URL}uk/catalog/static-tophotels/`, data.body);
  },

};