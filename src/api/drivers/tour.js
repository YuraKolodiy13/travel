import axios from "axios";
import {API_URL} from "../../helpers/constants";

export const tour = {

  getTour: (data) => {
    return axios.post(`${API_URL}uk${data.pathname.replace('/countries', '/hotel')}`, data.body);
  },
  getOtherTours: (data) => {
    return axios.post(`${API_URL}uk/tour/others/${data.id}`, data.body);
  },
  getTourReviews: (data) => {
    return axios.post(`${API_URL}wS/detalinfo/ws.asmx/HotelReviewsV2?lang=uk`, data);
  },
};