// Botón que inicializa la función de cargar usuarios
function BotonCargar({ texto = 'Mostrar Usuarios', onClick, desactivado = false }) {
  return (
    <button className="boton" onClick={onClick} disabled={desactivado}>
      {texto}
    </button>
  );
}

export default BotonCargar;