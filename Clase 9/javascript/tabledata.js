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
  "id": 4,
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

                                       