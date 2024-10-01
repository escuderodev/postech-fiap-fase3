
import './style.css'
import logotitulo from '../../assets/img03.png'
import visual from '../../assets/img05.png'
import { MdAddToPhotos } from "react-icons/md";
import SectionDetalhe from "../../Components/SectionDetalhe"
import ModalView from "../../Components/Modal/ModalView"
import { useState } from 'react';


export default function ListPostagens() {

  const [openModal, setOpenModal] = useState(false);
  const [openModalView, setOpenModalView] = useState(false);

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
              <div className='icon'><MdAddToPhotos size={30} onClick={() => setOpenModalView(true)} /></div>
            </div>
          </div>

          </div>

        <ModalView isAdOpen={openModalView} setAdModalOpen={() => setOpenModalView(!openModalView)}>

          <form>
            <label className=''> Titulo: </label>
            <input className='modalbutton' type="text" name="name" />

            <label>Autor:</label>
            <input className='modalbutton' type="text" name="name" />

            <label>Disciplina:</label>
            <input className='modalbutton' type="text" name="name" />

            <label className=''> Detalhamento: </label>
            <input className='modalbutton' type="text" name="name" />

            <label>Comentarios: </label>
            <input className='modalbutton' type="text" name="name" />


            <div className='grupobutton'>
              <input type="submit" value="Adicionar" />

              <input type="submit" value="Cancelar" />
            </div>
          </form>
        </ModalView>

      </section>
      <SectionDetalhe />

    </div>
  )
}
