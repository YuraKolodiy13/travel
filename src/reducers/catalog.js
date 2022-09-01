import {
  CLEAR_CATALOG_DATA,
  READ_FILTERED_RESULTS_REQUEST,
  READ_FILTERED_RESULTS_SUCCESS,
  READ_FILTERS_SUCCESS,
  READ_RESULTS_REQUEST,
  READ_RESULTS_SUCCESS,
  SEARCH_START_REQUEST,
  SEARCH_START_SUCCESS
} from "../actions/catalog";

const initialState = {
  loadingHotels: true,
  loadingFilters: true,
  hash: '',
  error: null,
  hotels: null,
  filters: null
};

export default function catalog(state = initialState, action) {
  switch (action.type) {

    case SEARCH_START_SUCCESS:
      return {
        ...state,
        hash: action.payload.data?.hash,
        loadingHotels: !action.payload.statusMessage,
        loadingFilters: !action.payload.statusMessage,
        error: action.payload.statusMessage,
      };

    case READ_RESULTS_REQUEST:
    case SEARCH_START_REQUEST:
    case READ_FILTERED_RESULTS_REQUEST:
      return {
        ...state,
        loadingHotels: (state.hotels?.sResult.length || 0) <= 9
      };

    case READ_RESULTS_SUCCESS:
      return {
        ...state,
        hotels: action.payload,
        loadingHotels: false
      };

    case READ_FILTERS_SUCCESS:
      return {
        ...state,
        filters: action.payload,
        loadingFilters: false
      };

    case READ_FILTERED_RESULTS_SUCCESS:
      return {
        ...state,
        hotels: action.payload,
        loadingHotels: false
      };

    case CLEAR_CATALOG_DATA:
      return {
        ...state,
        hotels: null,
        error: null
      };

    default:
      return state;
  }
}
