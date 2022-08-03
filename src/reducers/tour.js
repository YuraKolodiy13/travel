import {
  CLEAR_TOUR_DATA,
  GET_OTHER_TOURS_SUCCESS, GET_TOUR_REQUEST, GET_TOUR_REVIEWS_SUCCESS,
  GET_TOUR_SUCCESS
} from "../actions/tour";

const initialState = {
  loading: true,
  tourInfo: {},
  otherTours: [],
  reviews: null
};

export default function tour(state = initialState, action) {
  switch (action.type) {
    case GET_TOUR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TOUR_SUCCESS:
      return {
        ...state,
        tourInfo: action.payload,
        loading: false
      };
    case GET_OTHER_TOURS_SUCCESS:
      return {
        ...state,
        otherTours: action.payload.sResult,
      };

    case GET_TOUR_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: {
          total: action.payload.reviewsCount,
          items: state.reviews
            ? [...state.reviews.items, ...action.payload.reviews]
            : action.payload.reviews
        }
      };

    case CLEAR_TOUR_DATA:
      return {
        tourInfo: {},
        otherTours: [],
        reviews: null
      };

    default:
      return state;
  }
}
