async function loadTableData() {
    const tableBody = document.getElementById('tableBodyData');
    tableBody.innerHTML = '';
    const {data} = await obtenerDatos();
    const tableBodyData = data;

    tableBodyData.forEach(data => {
      const url_formUsuario = 'form_Departament.html?id=' + data.dept_name;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${data.dept_name}</td>
            <td>${data.building}</td>
            <td>${data.budget}</td>
            <td>
                <a href="${url_formUsuario}" class="btn btn-primary">Edit</a>
                <a href='javascript:deleteUser(${JSON.stringify(data.dept_name)})' class="btn btn-danger">Delete</a>
            </td>
        `;
        tableBody.appendChild(row);
    })
}


async function obtenerDatos() {
  try {
    // 1. Define la URL del endpoint de la API
    const url = 'http://localhost:3000/api/departments/'; // Ejemplo de URL

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

async function deleteUser(dept_name){
    try{
        let userConfirmation = confirm("¿Estás seguro de que deseas eliminar este registro?");
        
        if (userConfirmation) {
          const url = 'http://localhost:3000/api/departments/' +dept_name;

          const respuesta = await fetch(url, {
              method: "DELETE"
          });

          
          alert("registro borrado");

          await loadTableData();
          
        }
        
    } catch (error) {
        console.error('Error al consumir la API:', error);
        return null;
    }
}
