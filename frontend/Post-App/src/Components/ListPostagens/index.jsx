
import './style.css'
import logotitulo from '../../assets/img03.png'
import visual from '../../assets/img05.png'
import { FaRegEdit } from "react-icons/fa";
import { MdAddToPhotos } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";
import Footer from "../../Components/Footer"
import SectionDetalhe from "../../Components/SectionDetalhe"
import Modal from "../../Components/Modal"
import ModalExluir from "../../Components/Modal/ModalExcluir"
import ModalEditar from "../../Components/Modal/ModalEditar"
import ModalAdicionar from "../../Components/Modal/ModalAdicionar"
import { useState } from 'react';


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
  const [openModalremove, setOpenModalremove] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalAdic, setOpenModalAdic] = useState(false);

  return (
    <div className='PrimeiraSesaao'>
      <header></header>

      <section className='Segundasessao'>
        <img src={logotitulo} alt='logo'></img>
      </section>

      <section className='Terceirasessao'>
        <div className='itens'>
          <img src={visual} alt='logo'></img>
        </div>
        <div className='itens'>
          <p>3 Quantidade:</p>
        </div>
        <div className='itens3'>

          <input type="button" value={"Adicionar usuário"} onClick={() => setOpenModal(true)}></input>



        </div>
      </section>

      <section className='Quartasessao'>
        <div className='linha'>
          <hr></hr>
        </div>

        <div className='Qitens'>
          <label>Pesquisar Post:</label>
        </div>
        <div className='Qitens3'>
          <input type="text" placeholder="Pesquise aqui postagens" />
        </div>
        <div className='Qitens'>
          <input type="button" value="Buscar"></input>
        </div>
      </section>

      <section className='Quintasessao'>
        <div className='centrocard'>

          <div className='card1'>

            <div className='Ptitulo'>


              <h2>Titulo:Back-End</h2>
              <h2>Disciplina:Programação</h2>

            </div>
            <div className='Stitulo'>

              <h2>Autor:Eduardo</h2>
            </div>
            <div className='icones'>
              <div className='icon'><FaRegEdit size={30} onClick={() => setOpenModalEdit(true)} /></div>
              <div className='icon'><MdAddToPhotos size={30} onClick={() => setOpenModalAdic(true)} /></div>
              <div className='icon'><FaTrashCan size={27} onClick={() => setOpenModalremove(true)} /></div>
            </div>


          </div>





          <div className='card1'>

            <div className='Ptitulo'>


              <h2>Titulo:Front-End</h2>
              <h2>Disciplina:Programação</h2>

            </div>
            <div className='Stitulo'>

              <h2>Autor:Eduardo</h2>
            </div>
            <div className='icones'>
              <div className='icon'><FaRegEdit size={30} /></div>
              <div className='icon'><MdAddToPhotos size={30} /></div>
              <div className='icon'><FaTrashCan size={27} /></div>
            </div>
          </div>
        </div>
        <div className='card2'>
          <div className='Centrocard2'>
            <h2>Total de Postagens</h2>
            <h3>SubTotal</h3>
            <h3>Disciplina</h3>
            <h3>Data</h3>
            <h2>Total Postagem</h2>
            <input type="button" value="Página de Usuário  ->"></input>
          </div>
          <h2></h2>
        </div>
        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>

          <form>

            <label> Titulo:</label>
            <input className='modalbutton' type="text" name="name" />

            <label>Autor:</label>
            <input className='modalbutton' type="text" name="name" />
            <label>Disciplina:</label>

            <input className='modalbutton' type="text" name="name" />

            <div className='grupobutton'>
              <input type="submit" value="Adicionar" />

              <input type="submit" value="cancelar" />
            </div>
          </form>



        </Modal>
        <ModalExluir isOpenn={openModalremove} setModalOpenn={() => setOpenModalremove(!openModalremove)}>

          <form>

            <label className='excluirtitulo'> Deseja Exluir Postagens?</label>
            <div className='grupobutton'>
              <input type="submit" value="Exluir" />
              <input type="submit" value="cancelar" />
            </div>
          </form>
        </ModalExluir>


        <ModalEditar isEOpen={openModalEdit} setModaEdilOpen={() => setOpenModalEdit(!openModalEdit)}>

          <form>
            <label className=''> Deseja Editar Postagens?</label>

            <label> Titulo:</label>
            <input className='modalbutton' type="text" name="name" />

            <label>Autor:</label>
            <input className='modalbutton' type="text" name="name" />
            <label>Disciplina:</label>

            <input className='modalbutton' type="text" name="name" />

            <div className='grupobutton'>
              <input type="submit" value="Adicionar" />

              <input type="submit" value="cancelar" />
            </div>
          </form>
        </ModalEditar>







        <ModalAdicionar isAdOpen={openModalAdic} setAdModalOpen={() => setOpenModalAdic(!openModalAdic)}>

          <form>
            <label className=''> Deseja Adicionar Postagens?</label>


            <input className='modalbutton' type="text" name="name" />

            <label>Autor:</label>
            <input className='modalbutton' type="text" name="name" />
            <label>Disciplina:</label>

            <input className='modalbutton' type="text" name="name" />

            <div className='grupobutton'>
              <input type="submit" value="Adicionar" />

              <input type="submit" value="cancelar" />
            </div>
          </form>
        </ModalAdicionar>

      </section>
      <SectionDetalhe />
      <Footer />
    </div>
  )
}






































































