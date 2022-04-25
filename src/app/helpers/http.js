import axios from "axios";

const http = axios.create({
    // baseURL: 'localhost',
    headers: {
        "Content-type": "application/json",
    },
});

http.interceptors.request.use(function (config) {
    // setting tokens and configs
    return config;
});

export default http;