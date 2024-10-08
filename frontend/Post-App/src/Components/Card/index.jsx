import ModalView from "../Modal/ModalView";
import { useState } from "react";
import { MdAddToPhotos } from "react-icons/md";

const Card = ({ post }) => {
    const [openModalView, setOpenModalView] = useState(false);

    //console.log(post);

    return (
        <section className="Quintasessao">
            <div className="centrocard">
                <div className="card1">
                    <div className="Ptitulo">
                        <h2>Titulo: {post.title}</h2>
                        <h2>Disciplina: {post.discipline}</h2>
                    </div>
                    <div className="Stitulo">
                        <h2>Autor:{post.author}</h2>
                    </div>
                    <div className="icones">
                        <div className="icon">
                            <MdAddToPhotos
                                size={30}
                                onClick={() => setOpenModalView(true)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <ModalView
                isAdOpen={openModalView}
                setAdModalOpen={() => setOpenModalView(!openModalView)}
            >
                <form>
                    <label className=""> Titulo: </label>
                    <input
                        readOnly
                        className="modalbutton"
                        type="text"
                        name="title"
                        value={post.title}
                    />

                    <label>Autor:</label>
                    <input
                        readOnly
                        className="modalbutton"
                        type="text"
                        name="author"
                        value={post.author}
                    />

                    <label>Disciplina:</label>
                    <input
                        readOnly
                        className="modalbutton"
                        type="text"
                        name="name"
                        value={post.discipline}
                    />

                    <label className=""> Detalhamento: </label>
                    <input
                        readOnly
                        className="modalbutton"
                        type="text"
                        name="name"
                        value={post.description}
                    />

                    <label>Comentarios: </label>
                    <input className="modalbutton" type="text" name="name" />

                    <div className="grupobutton">
                        <input type="submit" value="Adicionar comentário" />
                        <input type="submit" value="Cancelar" />
                    </div>
                </form>
            </ModalView>
        </section>
    );
};

export default Card;
