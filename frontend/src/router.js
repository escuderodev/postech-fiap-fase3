import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Header";
import Secao from "./Components/Section"
import SecaoBanner from "./Components/SectionBanner"
import SectionLogin from "./Components/SectionLogin"
import SectionDetalhe from "./Components/SectionDetalhe"
import Footer from "./Components/Footer"


export default  function RouterApp(){
    return( 
        <BrowserRouter>
       
        <Routes>
            <Route path="/" element={<Home/>}/>
           
        </Routes>
         <Secao/>
         <SecaoBanner/>
         <SectionLogin/>
         <SectionDetalhe/>
         <Footer/>
        </BrowserRouter>
    )
}