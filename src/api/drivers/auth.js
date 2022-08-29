import axios from "axios";

export const auth = {

  login: (data) => {
    return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBJ9XsRkSAQcAUSGKGJ8X_wlu3v66YdHRs`, data);
  },

};