// Importas el módulo 'http' usando sintaxis ES Modules
import http from 'http';

// Array con los usuarios de la API
//Tienen id, nombre, apellidos, fecha de nacimiento, url de una de las imágenes y booleano si son profesor para el display. 
const usuarios = [
  {
    id: 1,
    nombre: 'Rodrigo Vladimir',
    apellidos: 'Alcantara Gutierrez',
    urlImagen: '/fotos/alumno1.png',
    fechaNacimiento: '2001-05-15',
    esProfesor: false
  },
  {
    id: 2,
    nombre: 'Evis',
    apellidos: 'Amponsah Omane',
    urlImagen: '/fotos/alumno2.png',
    fechaNacimiento: '2005-10-30',
    esProfesor: false
  },
  {
    id: 3,
    nombre: 'Zakaria',
    apellidos: 'Bourahlia Boudaoudi',
    urlImagen: '/fotos/alumno3.png',
    fechaNacimiento: '2003-03-12',
    esProfesor: false
  },
  {
    id: 4,
    nombre: 'Daniel Ionut',
    apellidos: 'Carindatoiu',
    urlImagen: '/fotos/alumno4.png',
    fechaNacimiento: '2000-07-22',
    esProfesor: false
  },
  {
    id: 5,
    nombre: 'Cristian',
    apellidos: 'Ceamanos',
    urlImagen: '/fotos/alumno5.png',
    fechaNacimiento: '2004-11-05',
    esProfesor: false
  },
  {
    id: 6,
    nombre: 'Hector',
    apellidos: 'De Pablo',
    urlImagen: '/fotos/profesor1.png',
    fechaNacimiento: '1985-11-02',
    esProfesor: true
  },
  {
    id: 7,
    nombre: 'Andres',
    apellidos: 'Dimidov Argente',
    urlImagen: '/fotos/alumno6.png',
    fechaNacimiento: '2006-01-18',
    esProfesor: false
  },
  {
    id: 8,
    nombre: 'Abderrahman',
    apellidos: 'Labiod Toumi',
    urlImagen: '/fotos/alumno7.png',
    fechaNacimiento: '2003-09-09',
    esProfesor: false
  },
  {
    id: 9,
    nombre: 'Gonzalo',
    apellidos: 'Lazaro Rodrigo',
    urlImagen: '/fotos/alumno8.png',
    fechaNacimiento: '2007-04-25',
    esProfesor: false
  },
  {
    id: 10,
    nombre: 'Noelia',
    apellidos: 'Orleans Lopez',
    urlImagen: '/fotos/alumno9.png',
    fechaNacimiento: '2006-12-14',
    esProfesor: false
  },
  {
    id: 11,
    nombre: 'Sergio',
    apellidos: 'Ruiz-Peinado Romanos',
    urlImagen: '/fotos/alumno10.png',
    fechaNacimiento: '2000-06-30',
    esProfesor: false
  },
  {
    id: 12,
    nombre: 'Jorge',
    apellidos: 'Ucendo Thomas',
    urlImagen: '/fotos/alumno11.png',
    fechaNacimiento: '2003-08-19',
    esProfesor: false
  },
  {
    id: 13,
    nombre: 'Jesus',
    apellidos: 'Vera',
    urlImagen: '/fotos/profesor2.png',
    fechaNacimiento: '1980-02-11',
    esProfesor: true
  },
  {
    id: 14,
    nombre: 'Maximo',
    apellidos: 'Yuste Palacian',
    urlImagen: '/fotos/alumno12.png',
    fechaNacimiento: '2001-06-27',
    esProfesor: false
  }
];

// Crea el servidor HTTP con soporte básico para CORS
const server = http.createServer((req, res) => {
  // Permite las peticiones desde el frontend en el puerto 5173
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  if (req.method === 'GET' && req.url === '/api/usuarios') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(usuarios));
  } else {
    res.writeHead(404);
    res.end('No encontrado');
  }
});

// El servidor escucha en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor API muy sencillo en http://localhost:3000');
});