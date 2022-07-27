import {
  GET_FLIGHTS_INFO_SUCCESS, GET_HOT_TOURS_SUCCESS,
  GET_OTHER_TOURS_SUCCESS, GET_RECOMMENDED_TOURS_SUCCESS, GET_TOUR_REQUEST, GET_TOUR_REVIEWS_SUCCESS,
  GET_TOUR_SUCCESS, GET_TOURS_BY_COUNTRY_REQUEST, GET_TOURS_BY_COUNTRY_SUCCESS,
  READ_RESULTS_SUCCESS,
  SEARCH_FORM_REQUEST,
  SEARCH_FORM_SUCCESS,
  SEARCH_START_SUCCESS
} from "../actions/general";

const initialState = {
  loading: true,
  searchForm: {},
  hash: '',
  hotels: null,
  tour: {},
  otherTours: [],
  hotTours: [],
  recommendedTours: [],
  flights: {},
  toursByCountry: [],
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
    case GET_TOUR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TOUR_SUCCESS:
      return {
        ...state,
        tour: action.payload,
        loading: false
      };
    case GET_OTHER_TOURS_SUCCESS:
      return {
        ...state,
        otherTours: action.payload.sResult,
      };
    case GET_FLIGHTS_INFO_SUCCESS:
      return {
        ...state,
        flights: {...state.flights, ...action.payload},
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
    case GET_TOUR_REVIEWS_SUCCESS:
      return {
        ...state,
        tour: {
          ...state.tour,
          reviews: {
            total: action.payload.reviewsCount,
            items: state.tour.reviews ? [...state.tour.reviews.items, ...action.payload.reviews] : action.payload.reviews
          }
        }
      };

    default:
      return state;
  }
}
