//Este es el que provee del contexto

import { useState } from "react"
import { UsuarioContext } from "./UsuarioContext"


//Esta es una forma estatica de definirla
/*
const usuario = { //los valores a pasar
    nombre: 'Alvaro',
    tecnologia: 'React',
    email: 'yo@mail.com',
    redes : '@mispages'
}
*/



//Se puede proveer en el main, o donde se necesite

const UsuarioProvider = ({children}) => { //necesita recibir a los hijos

   
    const [usuario, setUsuario] = useState({})
     //GENERALMENTE NO SE SUELE PASAR EL useState DIRECTAMENTE, PARA QUE LOS HIJOS NO TENGAN TODO EL CONTROL, 
     //ENTONCES SE PASA UNA FUNCION MAS CONTROLADA
  
    return (
    <UsuarioContext.Provider value={{usuario, setUsuario}}> {/*para pasar de la forma estatica value={{usuario, pais: 'canada', moneda:'$'}}*/} {/*value={{usuario, setUsuario}}*/}
        {children}
    </UsuarioContext.Provider>
  )
}

export default UsuarioProvider
