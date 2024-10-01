import React, { useState } from "react";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function SecaoLogin() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const data = await login(usuario, senha);
            console.log(data);
            setToken(data.token);
            navigate("/ListPostagens");
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="SectionLogin">
            <div className="login">
                <div>
                    <label htmlFor="usuario">Usuário:</label>
                    <input
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <div className="botao">
                    <input type="button" value="Enviar" onClick={handleLogin} />
                    <input
                        type="button"
                        value="Cancelar"
                        onClick={() => {
                            setUsuario("");
                            setSenha("");
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
