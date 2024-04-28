import axios from "axios";
export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
  },
});
