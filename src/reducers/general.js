import {
  GET_FLIGHTS_INFO_SUCCESS, GET_HOT_TOURS_SUCCESS,
  GET_OTHER_TOURS_SUCCESS, GET_RECOMMENDED_TOURS_SUCCESS,
  GET_TOUR_SUCCESS,
  READ_RESULTS_SUCCESS,
  SEARCH_FORM_REQUEST,
  SEARCH_FORM_SUCCESS,
  SEARCH_START_SUCCESS
} from "../actions/general";

const initialState = {
  loading: false,
  searchForm: {},
  hash: '',
  hotels: null,
  tour: {},
  otherTours: [],
  hotTours: [],
  recommendedTours: [],
  flights: null
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

    case SEARCH_START_SUCCESS:
      return {
        ...state,
        hash: action.payload.hash,
      };

    case READ_RESULTS_SUCCESS:
      return {
        ...state,
        hotels: action.payload,
      };
    case GET_TOUR_SUCCESS:
      return {
        ...state,
        tour: action.payload,
      };
    case GET_OTHER_TOURS_SUCCESS:
      return {
        ...state,
        otherTours: action.payload.sResult,
      };
    case GET_FLIGHTS_INFO_SUCCESS:
      return {
        ...state,
        flights: action.payload,
      };
    case GET_HOT_TOURS_SUCCESS:
      return {
        ...state,
        hotTours: action.payload,
      };
    case GET_RECOMMENDED_TOURS_SUCCESS:
      return {
        ...state,
        recommendedTours: action.payload,
      };

    default:
      return state;
  }
}
