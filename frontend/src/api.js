import axios from "axios";

const isLocalhost = window.location.hostname === "localhost";

const API = axios.create({
  baseURL: isLocalhost
    ? "http://localhost:5001/api"
    : "https://shakti-sahu-portfolio.onrender.com/api",
});

export default API;
