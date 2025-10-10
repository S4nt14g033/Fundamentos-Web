async function loadTableData() {
    const tableBody = document.getElementById('tableBodyData');
    tableBody.innerHTML = '';
    const tableBodyData = await obtenerDatos();

    tableBodyData.forEach(data => {
      const url_formProdu = 'form_Productos.html?id=' + data.id;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${data.id}</td>
            <td>${data.title}</td>
            <td>${data.category}</td>
            
            <td>
                <a href="${url_formProdu}" class="btn btn-primary">Edit</a>
                <a href="#" class="btn btn-danger">Delete</a>
            </td>
        `;
        tableBody.appendChild(row);
    })
}

async function obtenerDatos() {
  try {
    // 1. Define la URL del endpoint de la API
    const url = 'https://fakestoreapi.com/products'; // Ejemplo de URL

    // 2. Realiza la petición GET usando fetch
    const respuesta = await fetch(url);

    // 3. Convierte la respuesta a formato JSON
    const datos = await respuesta.json();

    // 4. Utiliza los datos
    console.log(datos); // Muestra los datos en la consola
    return datos; //devuelve los datos para usarlos en loadTableData
    // Aquí podrías actualizar la interfaz de usuario, por ejemplo
  } catch (error) {
    console.error('Error al consumir la API:', error);
  }
}                              