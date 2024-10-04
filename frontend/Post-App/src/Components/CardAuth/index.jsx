import ModalExluir from "../Modal/ModalExcluir";
import ModalEditar from "../Modal/ModalEditar";
import { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import {
    handleDeletePost,
    handleEditPost,
    getAllPosts,
} from "../../services/postService";
import { getAllDisciplines } from "../../services/disciplineService";

const CardAuth = ({ post, onUpdate }) => {
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [openModalremove, setOpenModalremove] = useState(false);
    const [discipline, setDiscipline] = useState();
    const [disciplines, setDisciplines] = useState([]);
    const [title, setTitle] = useState(post.title);
    const [description, setDescription] = useState(post.description);
    //const [author, setAuthor] = useState(post.author);
    const [postDiscipline, setPostDiscipline] = useState(post.discipline);

    useEffect(() => {
        const fetchDisciplines = async () => {
            const data = await getAllDisciplines();
            setDisciplines(data.disciplineList);
            setPostDiscipline(post.discipline);
        };

        fetchDisciplines();
    }, []);

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
                                handleDeletePost(post._id);
                                setOpenModalremove(false);
                                onUpdate();
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
                setModaEdilOpen={() => {
                    setOpenModalEdit(!openModalEdit);
                }}
            >
                <form
                    onSubmit={(e) => {
                        handleEditPost(
                            e,
                            post,
                            title,
                            description,
                            discipline,
                            setOpenModalEdit
                        );
                        onUpdate();
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
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <label>Disciplina:</label>
                    <select
                        className="modalbutton"
                        name="discipline"
                        value={discipline}
                        onChange={(ev) => {
                            setDiscipline(ev.target.value);
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
                                setOpenModalEdit(false);
                            }}
                        />
                    </div>
                </form>
            </ModalEditar>
        </section>
    );
};

export default CardAuth;
