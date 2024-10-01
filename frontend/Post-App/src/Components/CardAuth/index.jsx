import ModalExluir from "../Modal/ModalExcluir";
import ModalEditar from "../Modal/ModalEditar";
import { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { handleDeletePost, handleEditPost } from "../../services/postService";
import { getAllDisciplines } from "./disciplineService";

const CardAuth = ({ post }) => {
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [openModalremove, setOpenModalremove] = useState(false);
    const [getpost, setPost] = useState(post);
    const [title, setTitle] = useState(post.title);
    const [discipline, setDiscipline] = useState(post.discipline);
    const [disciplines, setDisciplines] = useState([]);
    const [description, setDescription] = useState(post.description);
    const [author, setAuthor] = useState(post.author);

    useEffect(() => {
        const fetchDisciplines = async () => {
            const data = await getAllDisciplines();
            setDisciplines(data);
        };

        fetchPosts();
    }, []);

    return (
        <section className="Quintasessao">
            <div className="centrocard">
                <div className="card1">
                    <div className="Ptitulo">
                        <h2>Titulo:{title}</h2>
                        <h2>Disciplina:{discipline}</h2>
                    </div>
                    <div className="Stitulo">
                        <h2>Autor:{author}</h2>
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
                <form
                    onSubmit={(e) =>
                        handleEditPost(e, getpost, setOpenModalEdit)
                    }
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
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <label>Disciplina:</label>
                    <input
                        className="modalbutton"
                        type="text"
                        name="discipline"
                        value={discipline}
                        onChange={(e) => setDiscipline(e.target.value)}
                    />

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
