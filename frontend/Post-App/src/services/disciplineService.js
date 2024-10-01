import axios from "./axiosConfig";

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
