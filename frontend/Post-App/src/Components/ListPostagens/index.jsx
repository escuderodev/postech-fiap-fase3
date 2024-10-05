import "./style.css";
import logotitulo from "../../assets/img03.png";
import visual from "../../assets/img05.png";
import Footer from "../../Components/Footer";
import SectionDetalhe from "../../Components/SectionDetalhe";
import Modal from "../../Components/Modal";
import ModalAdicionar from "../../Components/Modal/ModalAdicionar";
import ModalView from "../Modal/ModalView";
import { useState, useEffect } from "react";
import { handleSubmit } from "../../services/userService";
import {
    getAllDisciplines,
    handleDisciplineSubmit,
} from "../../services/disciplineService";
import CardAuth from "../CardAuth";
import {
    handleEditPost,
    getAllPosts,
    handleAddPost,
} from "../../services/postService";

export default function ListPostagens() {
    const [openModal, setOpenModal] = useState(false);
    const [openModalView, setOpenModalView] = useState(false);
    const [openModalremove, setOpenModalremove] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [openModalAdic, setOpenModalAdic] = useState(false);

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [, setFormErrors] = useState({});
    const [update, setUpdate] = useState(false);

    const [disciplines, setDisciplines] = useState([]);
    const [discipline, setDiscipline] = useState("");
    const [disciplineTitle, setDisciplineTitle] = useState("");
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getAllPosts();
            console.log(data);
            setPosts(data);
            console.log("Entrou no fetchPosts");
        };
        fetchPosts();
        const fetchDisciplines = async () => {
            const data = await getAllDisciplines();
            setDisciplines(data.disciplineList);
        };
        fetchDisciplines();
    }, [update]);

    const onUpdate = () => {
        setTimeout(() => {
            setUpdate(!update);
        }, 300);
    };

    return (
        <div className="PrimeiraSesaao">
            <header></header>

            <section className="Segundasessao">
                <img src={logotitulo} alt="logo"></img>
            </section>

            <section className="Terceirasessao">
                <div className="itens">
                    <img src={visual} alt="logo"></img>
                </div>

                <div className="itens">
                    <p>3 Quantidade:</p>
                </div>

                <div className="itens3">
                    <input
                        type="button"
                        value={"Adicionar Usuário"}
                        onClick={() => setOpenModal(true)}
                    ></input>
                </div>
                <div className="itens4">
                    <input
                        type="button"
                        value={"Adicionar Postagem"}
                        onClick={() => setOpenModalAdic(true)}
                    ></input>
                </div>
                <div className="itens5">
                    <input
                        type="button"
                        value={"Adicionar Disciplina"}
                        onClick={() => setOpenModalView(true)}
                    ></input>
                </div>
            </section>

            <section className="Quartasessao">
                <div className="linha">
                    <hr></hr>
                </div>

                <div className="Qitens">
                    <label>Pesquisar Post:</label>
                </div>
                <div className="Qitens3">
                    <input type="text" placeholder="Pesquise aqui postagens" />
                </div>
                <div className="Qitens">
                    <input type="button" value="Buscar"></input>
                </div>
            </section>

            {/*Carrega os posts baseado na quantidade*/}
            {posts.length > 0 ? (
                posts.map((post, index) => (
                    <CardAuth
                        key={index}
                        post={post}
                        onUpdate={() => {
                            onUpdate();
                        }}
                    />
                ))
            ) : (
                <p>Nenhuma postagem encontrada.</p>
            )}

            <Modal
                isOpen={openModal}
                setModalOpen={() => setOpenModal(!openModal)}
            >
                <form
                    onSubmit={(e) => {
                        handleSubmit(
                            e,
                            {
                                usuario,
                                email,
                                senha,
                                confirmarSenha,
                            },
                            setFormErrors,
                            setOpenModal
                        );
                    }}
                >
                    <label>Usuário:</label>
                    <input
                        className="modalbutton"
                        type="text"
                        name="usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />

                    <label>E-mail:</label>
                    <input
                        className="modalbutton"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Senha:</label>
                    <input
                        className="modalbutton"
                        type="password"
                        name="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    <label>Confimar senha:</label>
                    <input
                        className="modalbutton"
                        type="password"
                        name="confirmarSenha"
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                    />

                    <div className="grupobutton">
                        <input type="submit" value="Adicionar" />

                        <input type="submit" value="Cancelar" />
                    </div>
                </form>
            </Modal>

            <ModalView
                isAdOpen={openModalView}
                setAdModalOpen={() => setOpenModalView(!openModalView)}
            >
                <form
                    onSubmit={(e) => {
                        handleDisciplineSubmit(
                            e,
                            disciplineTitle,
                            setOpenModalView
                        );
                        onUpdate();
                    }}
                >
                    <label className=""> Titulo: </label>
                    <input
                        className="modalbutton"
                        type="text"
                        name="title"
                        value={disciplineTitle}
                        onChange={(e) => setDisciplineTitle(e.target.value)}
                    />

                    <div className="grupobutton">
                        <input type="submit" value="Adicionar" />
                        <input
                            type="button"
                            value="Cancelar"
                            onClick={() => setOpenModalView(false)}
                        />
                    </div>
                </form>
            </ModalView>

            <ModalAdicionar
                isAdOpen={openModalAdic}
                setAdModalOpen={() => setOpenModalAdic(!openModalAdic)}
            >
                <form
                    onSubmit={(e) => {
                        //console.log(title, description, discipline);
                        handleAddPost(e, title, description, discipline);
                        onUpdate();
                        setOpenModalAdic(false);
                    }}
                >
                    <label> Titulo:</label>
                    <input
                        className="modalbutton"
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label>Descrição:</label>
                    <input
                        className="modalbutton"
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    />

                    {/* <label>Disciplina:</label>
                    <input
                        className="modalbutton"
                        type="text"
                        name="discipline"
                        value={discipline}
                        onChange={(e) => {
                            setDiscipline(e.target.value);
                        }}
                    /> */}

                    <select
                        className="modalbutton"
                        name="discipline"
                        value={discipline}
                        onChange={(e) => {
                            setDiscipline(e.target.value);
                        }}
                    >
                        <option value="">Selecione uma disciplina</option>
                        {disciplines.length > 0 ? (
                            disciplines.map((disciplina) => (
                                <option
                                    key={disciplina._id}
                                    value={disciplina._id}
                                >
                                    {disciplina.title}
                                </option>
                            ))
                        ) : (
                            <option disabled>Nenhuma</option>
                        )}
                    </select>

                    <div className="grupobutton">
                        <input type="submit" value="Adicionar" />

                        <input
                            type="button"
                            value="cancelar"
                            onClick={() => {
                                setOpenModalAdic(false);
                            }}
                        />
                    </div>
                </form>
            </ModalAdicionar>

            <SectionDetalhe />

            <Footer />
        </div>
    );
}
