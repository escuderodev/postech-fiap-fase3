import './style.css'
export default function SecaoLogin(){

    return(
        <div className="SectionLogin">
            <div className='login'>    
                <div>
                <label for="html">Usuário:</label>
                <input type='text' value={''}></input>  
                </div>  
                <div>
                <label for="html">Passwor:</label>
                <input type='text' value={''}></input>                 
                </div>
                <div className="botao">
                <input type="button" value="Enviar"></input>    
                <input type="button" value="Cancelar"></input> 
                </div>   
             
             
                                 
            </div>
         
          
            </div>

     
    )
}
