import axios from "axios";

const client = axios.create({
  withCredentials: true,
});

client.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "/" : "https://www.reeul.me/";

export default client;
