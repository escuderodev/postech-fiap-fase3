import './style.css'
import {Link} from 'react-router-dom'
import Secao from '../../Components/Section'
import SecaoBanner from '../../Components/SectionBanner'
import SectionLogin from "../../Components/SectionLogin"
import Footer from "../../Components/Footer"

import SectionDetalhe from "../../Components/SectionDetalhe"

export default function Header(){

return(
    <div>
    <header>
         <Link className='topo' to='/'></Link>
    </header>
         <Secao/>
         <SecaoBanner/>
         <SectionLogin/>
         <SectionDetalhe/>
         <Footer/>
         
  
  </div>
)
}