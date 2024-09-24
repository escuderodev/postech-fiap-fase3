
import './style.css'
import React from 'react'
import logoExcluir from '../../../assets/img07.png'


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


  


  export default function ModalExluir({ isOpenn, setModalOpenn, children }) {
    if (isOpenn) {
      return (
       
        <div style={BACKGROUND_STYLE}>
             
          <div className="mod" style={MODAL_STYLE}>
            <div style={{ cursor: 'pointer'}} onClick={setModalOpenn}>
            <img className=' ' src={logoExcluir} alt='logo'></img>
           
            </div>
            <div>{children}</div>
            <button className='fechar' onClick={setModalOpenn}>X</button>
          </div>
        </div>
     
      )
    }
  
    return null
  }






