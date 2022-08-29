import {LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS} from "../actions/auth";

const initialState = {
  user: JSON.parse(localStorage.getItem('user')),
  error: false,
  loading: false
};

export default function auth(state = initialState, action){
  switch (action.type){
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state
  }
};