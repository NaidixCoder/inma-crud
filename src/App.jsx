import "./index.css"

// Imports Firebase
import { dbFirebase, appFirebase } from "./firebase/config"
import { getFirestore } from "firebase/firestore"
import { getAuth, onAuthStateChanged} from 'firebase/auth'

import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Components 
import AppContainer from "./components/AppContainer"
import NavBar from "./components/NavBar"
import Productos from "./components/Productos"
import Proveedores from "./components/Proveedores"
import Caja from "./components/Caja"
import Admin from "./components/Admin"
import CuentaCorriente from "./components/CuentaCorriente"



const auth = getAuth(appFirebase);

console.log("Firebase app:", appFirebase);
console.log("Firebase firestore:", dbFirebase);

function App() {

  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null)
    }
  })


  return (
    <>
      
      <BrowserRouter>
        <div className="flex">
          <NavBar />
          { usuario ?
          <>
            <AppContainer/>
            <h1 className="p-5 text-6xl text-center text-red-500">Bienvenidos</h1>
          </>
          :
          <Routes>
            <Route path="/" element={<AppContainer/>} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/cuentacorriente" element={<CuentaCorriente />} />
            <Route path="/proveedores" element={<Proveedores />} />
            <Route path="/caja" element={<Caja />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          }
        </div>

      </BrowserRouter>
    </>
  )
}

export default App
