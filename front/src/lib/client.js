import axios from "axios";

const client = axios.create({
  withCredentials: true,
});

client.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "/" : "http://146.56.146.29:1337/";

export default client;
