const datosImagen = [
    {id:"img1", src:"../imgs/ropa1.jpg", alt:"ropa1", width:"300"},
    {id:"img2", src:"../imgs/ropa1.jpg", alt:"ropa2", width:"300"},
    {id:"img3", src:"../imgs/ropa1.jpg", alt:"ropa3", width:"300"}
];

function crearImagen(src, alt,width) { 
    return `<img src="${src}" alt="${alt}" width="${width}">`;
}