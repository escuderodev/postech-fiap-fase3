import axios from "axios";
import { getToken } from "./authService";

axios.defaults.baseURL = "http://127.0.0.1:3000";

// Configura o axios para incluir o token em todas as requisições
axios.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axios;
