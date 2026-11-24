//Imports
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Usuarios from './Usuarios.jsx'

//No hace falta importar los componentes desde carpeta, se ha cargado desde el paquete tgz
import { BotonCargar, useUsuarios, ListaUsuarios } from 'componentes-carga-muestra-usuarios'

function App() {
  // El hook nos da la lista, si está cargando y la función de carga de usuarios
  const { usuarios, cargando, cargarUsuarios } = useUsuarios();


  return (
    <div className="pagina">
      <h1>Desarrollo de Interfaces</h1>

      {/* Botón que al pulsar inicia la función de carga de usuarios y se desactiva mientras se encuentre cargando */}
      <BotonCargar onClick={cargarUsuarios} desactivado={cargando} />

      {/* Mientras el estado está como 'cargando' muestra el mensaje de carga, cuando acaba muestra la lista de usuarios */}
      {cargando ? <p className="cargando">Cargando....</p> : <ListaUsuarios usuarios={usuarios} />}
    </div>
  );
}

export default App
