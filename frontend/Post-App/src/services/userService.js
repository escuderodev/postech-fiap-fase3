import axios from "./axiosConfig";

const validateForm = (
    { usuario, email, senha, confirmarSenha },
    setFormErrors
) => {
    const errors = {};
    if (!usuario) errors.usuario = "Usuário é obrigatório";
    if (!email) errors.email = "E-mail é obrigatório";
    if (!senha) errors.senha = "Senha é obrigatória";
    if (senha !== confirmarSenha)
        errors.confirmarSenha = "As senhas não coincidem";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
};

export const handleSubmit = async (
    e,
    { usuario, email, senha, confirmarSenha },
    setFormErrors,
    setOpenModal
) => {
    e.preventDefault();
    console.log(usuario, email, senha, confirmarSenha);
    if (!validateForm({ usuario, email, senha, confirmarSenha }, setFormErrors))
        return;
    try {
        const token = localStorage.getItem("authToken");
        const response = await axios.post(
            "/users",
            {
                name: usuario,
                email: email,
                password: senha,
                confirmPassword: confirmarSenha,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log(response.data);
        // Fechar o modal após o envio bem-sucedido
        setOpenModal(false);
    } catch (error) {
        console.error("Erro ao enviar dados:", error);
    }
};
