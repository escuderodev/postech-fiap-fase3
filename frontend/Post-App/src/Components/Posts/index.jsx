import "./style.css";
import logotitulo from "../../assets/img03.png";
import visual from "../../assets/img05.png";
import { MdAddToPhotos } from "react-icons/md";
import SectionDetalhe from "../../Components/SectionDetalhe";
import ModalView from "../../Components/Modal/ModalView";
import { useState, useEffect } from "react";
import Card from "../../Components/Card";
import { getAllPosts } from "../../services/postService";

export default function ListPostagens() {
    const [openModal, setOpenModal] = useState(false);
    const [openModalView, setOpenModalView] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getAllPosts();
            setPosts(data);
        };

        fetchPosts();
    }, []);

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

            {posts.length > 0 ? (
                posts.map((post, index) => <Card key={index} post={post} />)
            ) : (
                <p>Nenhuma postagem encontrada.</p>
            )}

            <SectionDetalhe />
        </div>
    );
}
