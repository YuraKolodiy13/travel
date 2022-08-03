import {
  GET_TOURS_BY_COUNTRY_REQUEST, GET_TOURS_BY_COUNTRY_SUCCESS
} from "../actions/tours";

const initialState = {
  loading: false,
  toursByCountry: [],
};

export default function tours(state = initialState, action) {
  switch (action.type) {

    case GET_TOURS_BY_COUNTRY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TOURS_BY_COUNTRY_SUCCESS:
      return {
        ...state,
        toursByCountry: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
