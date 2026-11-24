// Hook que toma la lista de la api
import { useState } from 'react';

// Url de la api en localhost
function useUsuarios(url = 'http://localhost:3000/api/usuarios') {
  // Lista de usuarios que llega de la api
  const [usuarios, setUsuarios] = useState([]);
  // true mientras esperamos la respuesta (para mostrar "Cargando....")
  const [cargando, setCargando] = useState(false);

  // Se ejecuta al pulsar el botón
  function cargarUsuarios() {
    //true mientras se ejecute la función
    setCargando(true);
    //toma los datos de la api
    fetch(url)
      .then(res => res.json())
      .then(datos => {
        setUsuarios(datos);
        setCargando(false);
      })
      .catch(() => setCargando(false)); // si falla, quitamos el mensaje de carga
  }

  //Devueve la lista de usuarios, estado de carga y función para hacer el onClick
  return { usuarios, cargando, cargarUsuarios };
}

export default useUsuarios;