import ModalExluir from "../Modal/ModalExcluir";
import ModalEditar from "../Modal/ModalEditar";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { handleDeletePost } from "../../services/postService";

const CardAuth = ({ post }) => {
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [openModalremove, setOpenModalremove] = useState(false);
    const [getpost, setPost] = useState(post);

    return (
        <section className="Quintasessao">
            <div className="centrocard">
                <div className="card1">
                    <div className="Ptitulo">
                        <h2>Titulo:{post.title}</h2>
                        <h2>Disciplina:{post.discipline}</h2>
                    </div>
                    <div className="Stitulo">
                        <h2>Autor:{post.author}</h2>
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
            </div>

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
                        <input
                            type="button"
                            value="Exluir"
                            onClick={() => {
                                handleDeletePost(getpost._id);
                                setOpenModalremove(false);
                            }}
                        />
                        <input
                            type="button"
                            value="Cancelar"
                            onClick={() => {
                                setOpenModalremove(false);
                            }}
                        />
                    </div>
                </form>
            </ModalExluir>

            <ModalEditar
                isEOpen={openModalEdit}
                setModaEdilOpen={() => setOpenModalEdit(!openModalEdit)}
            >
                <form>
                    <label> Titulo:</label>
                    <input className="modalbutton" type="text" name="name" />

                    <label>Autor:</label>
                    <input className="modalbutton" type="text" name="name" />

                    <label>Disciplina:</label>
                    <input className="modalbutton" type="text" name="name" />

                    <label>Conteudo:</label>
                    <input className="modalbutton" type="text" name="name" />

                    <div className="grupobutton">
                        <input type="submit" value="Adicionar" />

                        <input type="submit" value="cancelar" />
                    </div>
                </form>
            </ModalEditar>
        </section>
    );
};

export default CardAuth;
