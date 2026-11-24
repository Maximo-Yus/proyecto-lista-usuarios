// Importamos useState (guardar datos) y useEffect (pedirlos al montar)
import { useState, useEffect } from 'react';

function cargarUsuarios() {
  // Tres estados: los datos, si está cargando y si ha habido un error
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // La función del efecto no puede ser async, así que declaramos
    // dentro una función async y la llamamos justo después
    const fetchUsuarios = async () => {
      try {
        // await espera a que llegue la respuesta del servidor
        const response = await fetch('http://localhost:3000/api/usuarios');
        // fetch NO falla con errores HTTP (404, 500...): hay que mirar response.ok
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        // Convertimos la respuesta a un array/objeto de JavaScript
        const data = await response.json();
        setUsuarios(data);
      } catch (err) {
        // Si algo falla, guardamos el mensaje del error
        setError(err.message);
      } finally {
        // finally se ejecuta siempre: tanto si ha ido bien como si ha fallado
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []); // [] vacío: se pide una sola vez, al montar el componente

  // Según el estado, mostramos una cosa u otra
  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* map recorre el array y crea un bloque por cada post.
          key identifica cada elemento de la lista */}
      {usuarios.map(u => (
        <div key={u.id}>
          <img src={u.urlImagen}/>
         <p>{u.nombre} {u.apellidos} - {u.fechaNacimiento}</p>
        </div>
      ))}
    </div>
  );
}

export default cargarUsuarios;