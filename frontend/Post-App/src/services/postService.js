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

export const handleEditPost = async (e, post, setOpenModalEdit) => {
    e.preventDefault();
    try {
        const token = localStorage.getItem("authToken");
        const response = await axios.put(
            `/posts/${post._id}`,
            {
                title: post.title,
                description: post.description,
                discipline: post._id,
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
        const response = await axios.get("/posts");
        //console.log(response.data.postList);
        return response.data.postList;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
};
