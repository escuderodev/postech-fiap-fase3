import axios from "./axiosConfig";

export const getAllDisciplines = async () => {
    try {
        const response = await axios.get("/disciplinies");

        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
};

export const handleDisciplineSubmit = async (
    e,
    { title },
    setOpenModalView
) => {
    e.preventDefault();

    try {
        const token = localStorage.getItem("authToken");
        const response = await axios.post(
            "/disciplinies",
            { title: title },
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

    setOpenModalView(false);
};
