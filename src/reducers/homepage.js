import {
  GET_HOT_TOURS_SUCCESS,
  GET_RECOMMENDED_TOURS_SUCCESS
} from "../actions/homepage";

const initialState = {
  loading: true,
  hotTours: [],
  recommendedTours: [],
};

export default function homepage(state = initialState, action) {
  switch (action.type) {
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
