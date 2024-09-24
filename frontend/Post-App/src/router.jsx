import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Header"; 
import ListPostagens from "./Components/ListPostagens";


export default  function RouterApp(){
    return( 
        <BrowserRouter>
       
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/ListPostagens" element={<ListPostagens/>}/>            
        </Routes>                  
        
        </BrowserRouter>
    )
}