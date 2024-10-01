import axios from "./axiosConfig";

export const handleDeletePost = async (e, id) => {
    e.preventDefault();
    console.log(id);
    try {
        const token = localStorage.getItem("authToken");
        const response = await axios.delete(`/posts/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data);
    } catch (error) {
        console.error("Erro ao deletar post:", error);
    }
    console.log(id);
};

export const handleEditPost = async (
    e,
    { title, content, id },
    setOpenModal
) => {
    e.preventDefault();

    try {
        const token = localStorage.getItem("authToken");
        const response = await axios.put(
            `/posts/${id}`,
            { title: title, content: content },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        console.log(response.data);
    } catch (error) {
        console.error("Erro ao enviar dados:", error);
    }

    setOpenModal(false);
};

export const getAllPosts = async () => {
    try {
        const response = await axios.get("/posts");
        //console.log(response.data.postList);
        return response.data.postList;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
};
