const borderedDarkTableBodyData = [
    { first: "Mark", last: "Otto", handle: "@mdo" },
    { first: "Jacob", last: "Thornton", handle: "@fat" },
    { first: "Larry", last: "the Bird", handle: "@twitter" },
];

const borderedTableBodyData = [
    { first: "Mark", last: "Otto", handle: "@mdo" },
    { first: "Jacob", last: "Thornton", handle: "@fat" },
    { first: "Larry", last: "the Bird", handle: "@twitter" },
];

function loadBorderedDarkTable() {
    const tableBody = document.getElementById('borderedDarkTableBodyData');
    tableBody.innerHTML = '';

    borderedDarkTableBodyData.forEach((data, idx) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <th scope="row">${idx + 1}</th>
            <td>${data.first}</td>
            <td>${data.last}</td>
            <td>${data.handle}</td>
        `;
        tableBody.appendChild(row);
    });
}

function loadBorderedTable() {
    const tableBody = document.getElementById('borderedTableBodyData');
    tableBody.innerHTML = '';

    borderedTableBodyData.forEach((data, idx) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <th scope="row">${idx + 1}</th>
            <td>${data.first}</td>
            <td>${data.last}</td>
            <td>${data.handle}</td>
        `;
        tableBody.appendChild(row);
    });
}