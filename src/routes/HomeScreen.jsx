import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"


const HomeScreen = () => {

const {usuario} = useContext(UsuarioContext) //para recibir varios valores , pais, moneda

  return (
   <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Tecnologia</th>
        <th scope="col">Email</th>
        <th scope="col">Redes</th>
        <th scope="col">Pais</th>
        <th scope="col">Moneda</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{usuario.nombre}</td>
        <td>{usuario.tecnologia}</td>
        <td>{usuario.email}</td>
        <td>{usuario.redes}</td>
        
        
      </tr>
    </tbody>
   </table>
  )
}

export default HomeScreen
