const tableBodyData = [
    { name: "Lael Greer", position: "Systems Administrator", office: "London", salary: "$103,500" },
    { name: "Jonas Alexander", position: "Developer", office: "San Francisco", salary: "$86,500" },
    { name: "Shad Decker", position: "Regional Director", office: "Edinburgh", salary: "$183,000" },
   
];

function loadtableData() {
    const tableBody = document.getElementById("tableBodyData");

    tableBodyData.forEach(data => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${data.name}</td>
            <td>${data.position}</td>
            <td>${data.office}</td>
            <td>${data.salary}</td>
        `;
        tableBody.appendChild(row);
    })
}

                                        <tr>
                                            <td>Lael Greer</td>
                                            <td>Systems Administrator</td>
                                            <td>London</td>
                                            <td>$103,500</td>
                                        </tr>
                                        <tr>
                                            <td>Jonas Alexander</td>
                                            <td>Developer</td>
                                            <td>San Francisco</td>
                                            <td>$86,500</td>
                                        </tr>
                                        <tr>
                                            <td>Shad Decker</td>
                                            <td>Regional Director</td>
                                            <td>Edinburgh</td>
                                            <td>$183,000</td>
                                        </tr>