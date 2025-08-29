const categorias = [
	{
		titulo: 'Ropa para Hombre',
		imgAlt: 'Ropa para Hombre',
		link: 'hombres.html',
		linkText: 'Ver más',
        img : './imgs/ropa_hombre.jpg'
	},
	{
		titulo: 'Ropa para Mujeres',
		imgAlt: 'Ropa para Mujeres',
		link: 'mujeres.html',
		linkText: 'Ver más',
        img : './imgs/ropa_mujer.png'
	},
	{
		titulo: 'Accesorios',
		imgAlt: 'Accesorios',
		link: 'accesorios.html',
		linkText: 'Ver más',
        img : './imgs/accesorios.png'

	}
];

function crearArticulo(categoria) {
	return `
		<article class="categoria">
			<h3>${categoria.titulo}</h3>
			<div class="img-categoria">
				<img src="${categoria.img}" alt="${categoria.imgAlt}" width="${categoria.imgWidth || 200}">
			</div>
			<a href="${categoria.link}">${categoria.linkText}</a>
		</article>
	`;
}

