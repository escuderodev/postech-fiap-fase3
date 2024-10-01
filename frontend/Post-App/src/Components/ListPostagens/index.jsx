import "./style.css";
import logotitulo from "../../assets/img03.png";
import visual from "../../assets/img05.png";
import { FaRegEdit } from "react-icons/fa";
import { MdAddToPhotos } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";
import Footer from "../../Components/Footer";
import SectionDetalhe from "../../Components/SectionDetalhe";
import Modal from "../../Components/Modal";
import ModalExluir from "../../Components/Modal/ModalExcluir";
import ModalEditar from "../../Components/Modal/ModalEditar";
import ModalAdicionar from "../../Components/Modal/ModalAdicionar";
import ModalView from "../Modal/ModalView";
import { useState } from "react";
import { handleSubmit } from "../../services/userService";

/*
import titulo from '../../assets/img05.png'
import img1 from '../../assets/icone2.png'
import img2 from '../../assets/Add_To_Queue.png'
import SectionDetalhe from "../../Components/SectionDetalhe"

import { MdAddToPhotos } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";*/

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
    const [formErrors, setFormErrors] = useState({});

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

            <section className="Quintasessao">
                <div className="centrocard">
                    <div className="card1">
                        <div className="Ptitulo">
                            <h2>Titulo:Back-End</h2>
                            <h2>Disciplina:Programação</h2>
                        </div>
                        <div className="Stitulo">
                            <h2>Autor:Eduardo</h2>
                        </div>
                        <div className="icones">
                            <div className="icon">
                                <FaRegEdit
                                    size={30}
                                    onClick={() => setOpenModalEdit(true)}
                                />
                            </div>
                            <div className="icon">
                                <FaTrashCan
                                    size={27}
                                    onClick={() => setOpenModalremove(true)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="card1">
                        <div className="Ptitulo">
                            <h2>Titulo:Front-End</h2>
                            <h2>Disciplina:Programação</h2>
                        </div>
                        <div className="Stitulo">
                            <h2>Autor:Eduardo</h2>
                        </div>
                        <div className="icones">
                            <div className="icon">
                                <FaRegEdit size={30} />
                            </div>
                            <div className="icon">
                                <FaTrashCan size={27} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card2">
                    <div className="Centrocard2">
                        <h2>Total de Postagens</h2>
                        <h3>SubTotal</h3>
                        <h3>Disciplina</h3>
                        <h3>Data</h3>
                        <h2>Total Postagem</h2>
                        <input
                            type="button"
                            value="Página de Usuário  ->"
                        ></input>
                    </div>
                    <h2></h2>
                </div>

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
                    <form>
                        <label className=""> Titulo: </label>
                        <input
                            className="modalbutton"
                            type="text"
                            name="name"
                        />

                        <div className="grupobutton">
                            <input type="submit" value="Adicionar" />
                            <input type="submit" value="Cancelar" />
                        </div>
                    </form>
                </ModalView>

                <ModalExluir
                    isOpenn={openModalremove}
                    setModalOpen={() => setOpenModalremove(!openModalremove)}
                >
                    <form>
                        <label className="excluirtitulo">
                            {" "}
                            Deseja exluir a postagem?
                        </label>
                        <div className="grupobutton">
                            <input type="submit" value="Exluir" />
                            <input type="submit" value="Cancelar" />
                        </div>
                    </form>
                </ModalExluir>

                <ModalEditar
                    isEOpen={openModalEdit}
                    setModaEdilOpen={() => setOpenModalEdit(!openModalEdit)}
                >
                    <form>
                        <label> Titulo:</label>
                        <input
                            className="modalbutton"
                            type="text"
                            name="name"
                        />

                        <label>Autor:</label>
                        <input
                            className="modalbutton"
                            type="text"
                            name="name"
                        />

                        <label>Disciplina:</label>
                        <input
                            className="modalbutton"
                            type="text"
                            name="name"
                        />

                        <label>Conteudo:</label>
                        <input
                            className="modalbutton"
                            type="text"
                            name="name"
                        />

                        <div className="grupobutton">
                            <input type="submit" value="Adicionar" />

                            <input type="submit" value="cancelar" />
                        </div>
                    </form>
                </ModalEditar>

                <ModalAdicionar
                    isAdOpen={openModalAdic}
                    setAdModalOpen={() => setOpenModalAdic(!openModalAdic)}
                >
                    <form>
                        <label> Titulo:</label>
                        <input
                            className="modalbutton"
                            type="text"
                            name="name"
                        />

                        <label>Autor:</label>
                        <input
                            className="modalbutton"
                            type="text"
                            name="name"
                        />

                        <label>Disciplina:</label>
                        <input
                            className="modalbutton"
                            type="text"
                            name="name"
                        />

                        <label>Conteudo:</label>
                        <input
                            className="modalbutton"
                            type="text"
                            name="name"
                        />

                        <div className="grupobutton">
                            <input type="submit" value="Adicionar" />

                            <input type="submit" value="cancelar" />
                        </div>
                    </form>
                </ModalAdicionar>
            </section>

            <SectionDetalhe />

            <Footer />
        </div>
    );
}
