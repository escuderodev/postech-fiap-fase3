
import './style.css'
import React from 'react'
import logoeditar from '../../../assets/img09.png'


const BACKGROUND_STYLE = {
  
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0,0,0, 0.7)',
    zIndex: '1000'
  }
  
  const MODAL_STYLE = {
    
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    padding: '150px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    color: 'black',
  
   
  }


  


  export default function ModalExluir({ isEOpen, setModaEdilOpen, children }) {
    if (isEOpen) {
      return (
       
        <div style={BACKGROUND_STYLE}>
             
          <div className="mod" style={MODAL_STYLE}>
            <div style={{ cursor: 'pointer'}} onClick={setModaEdilOpen}>
            <img className=' ' src={logoeditar} alt='logo'></img>
           
            </div>
            <div>{children}</div>
            <button className='fechar' onClick={setModaEdilOpen}>X</button>
          </div>
        </div>
     
      )
    }
  
    return null
  }





