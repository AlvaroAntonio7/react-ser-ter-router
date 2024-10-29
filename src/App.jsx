import { Navigate, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import HomeScreen from "./routes/HomeScreen"
import AboutScreen from "./routes/AboutScreen"
import ContactScreen from "./routes/ContactScreen"
import UsuarioProvider from "./context/UsuarioProvider"
import LoginScreen from "./routes/LoginScreen"

const App = () => {
  return (
    <UsuarioProvider> {/*todo lo de adentro ya tendra el usuario*/}
    <h1>Aplicacion de enrutamiento</h1>
    <NavBar></NavBar>
    <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="/login" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="/about" element={<AboutScreen></AboutScreen>}></Route>
        <Route path="/contact" element={<ContactScreen></ContactScreen>}></Route>
        <Route path="/*" element={<Navigate to='/'></Navigate>}></Route>
    </Routes>
    </UsuarioProvider>
  )
}

export default App
