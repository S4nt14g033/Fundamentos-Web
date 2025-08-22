const datosImagen = [
    {id:"img1", src:"../imgs/ropa_hombre.jpg", alt:"ropa_hombre", width:"300"},
    {id:"img2", src:"../imgs/ropa_mujer.png", alt:"ropa_mujer", width:"300"},
    {id:"img3", src:"../imgs/accesorios.png", alt:"accesorios", width:"300"}
];

function crearImagen(src, alt,width) { 
    return `<img src="${src}" alt="${alt}" width="${width}">`;
}