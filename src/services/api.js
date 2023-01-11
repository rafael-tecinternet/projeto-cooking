import axios from "axios";
const api = axios.create({
  baseURL: "https://mobile-975e2-default-rtdb.firebaseio.com/",
});

export default api;
