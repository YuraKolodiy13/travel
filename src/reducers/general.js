import {READ_RESULTS_SUCCESS, SEARCH_FORM_REQUEST, SEARCH_FORM_SUCCESS, SEARCH_START_SUCCESS} from "../actions/general";

const initialState = {
  loading: false,
  searchForm: {},
  hash: '',
  hotels: null
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
        hotels: action.payload.sResult,
      };

    default:
      return state;
  }
}
