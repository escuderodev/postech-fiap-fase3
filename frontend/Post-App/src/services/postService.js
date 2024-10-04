import axios from "./axiosConfig";

export const handleDeletePost = async (id) => {
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
    post,
    title,
    description,
    discipline,
    setOpenModalEdit
) => {
    e.preventDefault();
    try {
        const token = localStorage.getItem("authToken");
        const response = await axios.put(
            `/posts/${post._id}`,
            {
                title: title,
                description: description,
                discipline: discipline,
            },
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

    setOpenModalEdit(false);
};

export const getAllPosts = async () => {
    try {
        const response = await axios.get("/posts", {
            headers: {
                CacheControl: "no-cache",
                Pragma: "no-cache",
                Expires: "0",
            },
        });
        console.log(response.data);
        return response.data.postList;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
};
