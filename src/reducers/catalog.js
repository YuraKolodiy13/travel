import {
  CLEAR_DATA, READ_RESULTS_REQUEST,
  READ_RESULTS_SUCCESS, SEARCH_START_REQUEST,
  SEARCH_START_SUCCESS
} from "../actions/catalog";

const initialState = {
  loading: true,
  hash: '',
  hotels: null,
};

export default function catalog(state = initialState, action) {
  switch (action.type) {

    case SEARCH_START_SUCCESS:
      return {
        ...state,
        hash: action.payload.hash,
      };

    case READ_RESULTS_REQUEST:
    case SEARCH_START_REQUEST:
      return {
        ...state,
        loading: (state.hotels?.sResult.length || 0) <= 9
      };

    case READ_RESULTS_SUCCESS:
      return {
        ...state,
        hotels: action.payload,
        loading: false
      };

    case CLEAR_DATA:
      return {
        ...state,
        hotels: null,
      };

    default:
      return state;
  }
}
