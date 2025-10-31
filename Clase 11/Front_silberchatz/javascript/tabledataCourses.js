async function loadTableData() {
    const tableBody = document.getElementById('tableBodyData');
    tableBody.innerHTML = '';
    const {data} = await obtenerDatos();
    const tableBodyData = data;

    tableBodyData.forEach(data => {
      const url_formUsuario = 'form_Courses.html?id=' + data.course_id;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${data.course_id}</td>
            <td>${data.title}</td>
            <td>${data.dept_name}</td>
            <td>${data.credits}</td>
            <td>
                <a href="${url_formUsuario}" class="btn btn-primary">Edit</a>
                <a href='javascript:deleteUser(${JSON.stringify(data.course_id)})' class="btn btn-danger">Delete</a>
            </td>
        `;
        tableBody.appendChild(row);
    })
}

async function obtenerDatos() {
  try {
    // 1. Define la URL del endpoint de la API
    const url = 'http://localhost:3000/api/courses/'; // Ejemplo de URL

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

async function deleteUser(course_id){
    try{
        let userConfirmation = confirm("¿Estás seguro de que deseas eliminar este registro?");
        
        if (userConfirmation) {
          const url = 'http://localhost:3000/api/courses/'+course_id;

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
