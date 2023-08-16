import axios from "axios";

const api = axios.create({
  baseURL: "https://api.unirent.cloud/",
});

export default api;