const borderedDarkTableBodyData = [
    { first: "Mark", last: "Otto", handle: "@mdo" },
    { first: "Jacob", last: "Thornton", handle: "@fat" },
    { first: "Larry", last: "the Bird", handle: "@twitter" },
    { first: "John", last: "Doe", handle: "@jdoe" },
];

const borderedTableBodyData = [
    { first: "Mark", last: "Otto", handle: "@mdo" },
    { first: "Jacob", last: "Thornton", handle: "@fat" },
    { first: "Larry", last: "the Bird", handle: "@twitter" },
    
];

const darkHeadTableBodyData = [
    { first: "Mark", last: "Otto", handle: "@mdo" },
    { first: "Jacob", last: "Thornton", handle: "@fat" },
    { first: "Larry", last: "BlaseTerror", handle: "@twitter" },
   
];

const darkTableBodyData = [
    { first: "Mark", last: "Otto", handle: "@mdo" },
    { first: "Jacob", last: "Thornton", handle: "@fat" },
    { first: "Oscar", last: "Carrera", handle: "@twitter" },
];

const strippedTableBodyData = [
    { first: "Mark", last: "Otto", handle: "@mdo" },
    { first: "Jacob", last: "Thornton", handle: "@fat" },
    { first: "Larry", last: "the Bird", handle: "@twitter" },
    { first: "Jhon", last: "Molina", handle: "@jmolina" },
];

const basicTableBodyData = [
    { first: "Mark", last: "Otto", handle: "@mdo" },
    { first: "Jacob", last: "Thornton", handle: "@fat" },
    { first: "Larry", last: "the Bird", handle: "@twitter" },
    { first: "Santiago", last: "Nick", handle: "@snick" },
];

const customTableBodyData = [
    {avatar: "./dashboard_base/images/avatar/1.jpg", id: "#5469", name: "Louis Stanley", product: "iMax", count: 231, status: "Complete"},
    {avatar: "./dashboard_base/images/avatar/2.jpg", id: "#5468", name: "Gregory Dixon", product: "iPad", count: 250, status: "Pending"},
    {avatar: "./dashboard_base/images/avatar/3.jpg", id: "#5467", name: "Catherine Dixon", product: "SSD", count: 250, status: "Complete"},
    {avatar: "./dashboard_base/images/avatar/4.jpg", id: "#5466", name: "Mary Silva", product: "Magic Mouse", count: 250, status: "Pending"},
    {avatar: "./dashboard_base/images/avatar/5.jpg", id: "#5465", name: "Kathryn Murphy", product: "iPhone 6s", count: 250, status: "Complete"},
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
        if (data.first === "Larry") {
            row.innerHTML = `
                <th scope="row">${idx + 1}</th>
                <td colspan="2">${data.first} ${data.last}</td>
                <td>${data.handle}</td>
            `;
        } else {
            row.innerHTML = `
                <th scope="row">${idx + 1}</th>
                <td>${data.first}</td>
                <td>${data.last}</td>
                <td>${data.handle}</td>
            `;
        }
        tableBody.appendChild(row);
    });
}

function loadDarkHeadTable() {
    const tableBody = document.getElementById('darkHeadTableBodyData');
    tableBody.innerHTML = '';

    darkHeadTableBodyData.forEach((data, idx) => {
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

function loadDarkTable() {
    const tableBody = document.getElementById('darkTableBodyData');
    tableBody.innerHTML = '';

    darkTableBodyData.forEach((data, idx) => {
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

function loadStrippedTable() {
    const tableBody = document.getElementById('strippedTableBodyData');
    tableBody.innerHTML = '';

    strippedTableBodyData.forEach((data, idx) => {
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

function loadBasicTable() {
    const tableBody = document.getElementById('basicTableBodyData');
    tableBody.innerHTML = '';

    basicTableBodyData.forEach((data, idx) => {
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

function loadCustomTable() {
    const tableBody = document.getElementById('customTableBodyData');
    tableBody.innerHTML = '';

    customTableBodyData.forEach((data, idx) => {
        const statusClass = data.status === "Pending" ? "badge-warning" : "badge-complete";
        const row = document.createElement("tr");
        row.innerHTML = `
            <th scope="row">${idx + 1}</th>
            <td>
                <img class="rounded-circle" style="width: 35px;" src="${data.avatar}" alt="">
            </td>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.product}</td>
            <td><span class="badge badge-primary">${data.count}</span></td>
            <td><span class="badge ${statusClass}">${data.status}</span></td>
        `;
        tableBody.appendChild(row);
    });
}
