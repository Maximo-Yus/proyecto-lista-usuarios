// Dibuja una tarjeta por cada usuario recibido
function ListaUsuarios({ usuarios = [] }) {
  return (
    <div className="lista">
      {usuarios.map(u => (
        // Si es profesor, la tarjeta tiene la clase profesor para cambiar el color del borde en css
        <div key={u.id} className={u.esProfesor ? 'tarjeta profesor' : 'tarjeta'}>
          <img src={u.urlImagen} alt={`Foto de ${u.nombre}`} />
          <div className="datos">
            {/*Escribe alumno o profesor según el booleano*/}
            <p className="rol">{u.esProfesor ? 'Profesor' : 'Alumno'}</p>
            <p>{u.nombre} {u.apellidos}</p>
            <p>{u.fechaNacimiento}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListaUsuarios;