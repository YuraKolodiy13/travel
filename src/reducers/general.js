import {
  GET_FLIGHTS_INFO_SUCCESS,
  SEARCH_FORM_REQUEST,
  SEARCH_FORM_SUCCESS
} from "../actions/general";

const initialState = {
  loading: true,
  searchForm: {},
  flights: {},
};

export default function general(state = initialState, action) {
  switch (action.type) {
    case SEARCH_FORM_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SEARCH_FORM_SUCCESS:
      return {
        ...state,
        searchForm: action.payload,
        loading: false,
      };

    case GET_FLIGHTS_INFO_SUCCESS:
      return {
        ...state,
        flights: {...state.flights, ...action.payload},
      };

    default:
      return state;
  }
}
