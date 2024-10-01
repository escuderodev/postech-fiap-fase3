import axios from "./axiosConfig";

const API_URL = "http://127.0.0.1:3000/login";

export const login = async (usuario, senha) => {
    try {
        const response = await axios.post(API_URL, {
            email: usuario,
            password: senha,
        });
        console.log(response.data.result.token);
        // Armazena o token no localStorage
        const token = response.data.result.token;
        localStorage.setItem("authToken", token);

        return response.data;
    } catch (error) {
        if (error.response) {
            // O servidor respondeu com um status diferente de 2xx
            throw new Error(
                "Erro ao fazer login: " + error.response.data.message
            );
        } else if (error.request) {
            // A requisição foi feita, mas nenhuma resposta foi recebida
            throw new Error(
                "Erro de rede: Nenhuma resposta recebida do servidor"
            );
        } else {
            // Algo aconteceu ao configurar a requisição
            throw new Error("Erro: " + error.message);
        }
    }
};

// Função para obter o token armazenado
export const getToken = () => {
    return localStorage.getItem("authToken");
};

// Função para remover o token armazenado (logout)
export const logout = () => {
    localStorage.removeItem("authToken");
};
