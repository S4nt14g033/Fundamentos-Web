const tableBodyData = [
{
  "address": {
    "geolocation": {
      "lat": "50.3467",
      "long": "-20.1310"
    },
    "city": "San Antonio",
    "street": "Hunters Creek Dr",
    "number": 6454,
    "zipcode": "98234-1734"
  },
  "id": 33,
  "email": "Santiago@gmail.com",
  "username": "donero",
  "password": "ewedon",
  "name": {
    "firstname": "Santiago Niño Cardona",
    "lastname": "romer"
  },
  "phone": "1-765-789-6734",
  "__v": 0
}
];

function loadTableData() {
    const tableBody = document.getElementById('tableBodyData');
    tableBody.innerHTML = '';

    tableBodyData.forEach(data => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${data.id}</td>
            <td>${data.name.firstname}</td>
            <td>${data.email}</td>
            <td>${data.username}</td>
        `;
        tableBody.appendChild(row);
    })
}

async function obtenerDatos() {
  try {
    // 1. Define la URL del endpoint de la API
    const url = 'https://jsonplaceholder.typicode.com/users'; // Ejemplo de URL

    // 2. Realiza la petición GET usando fetch
    const respuesta = await fetch(url);

    // 3. Convierte la respuesta a formato JSON
    const datos = await respuesta.json();

    // 4. Utiliza los datos
    console.log(datos); // Muestra los datos en la consola
    // Aquí podrías actualizar la interfaz de usuario, por ejemplo
  } catch (error) {
    console.error('Error al consumir la API:', error);
  }
}                              