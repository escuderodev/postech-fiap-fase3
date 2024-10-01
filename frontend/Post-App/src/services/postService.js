import axios from "./axiosConfig";

export const getAllPosts = async () => {
    try {
        const response = await axios.get("/posts");
        console.log(response.data.postList);
        return response.data.postList;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
};
