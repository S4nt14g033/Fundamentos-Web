const categorias = [
	{
		titulo: 'Ropa para Hombre',
		imgAlt: 'Ropa para Hombre',
		link: 'hombres.html',
		linkText: 'Ver más',
        img : './imgs/ropa_hombre.jpg',
		imgWidth: '300'
	},
	{
		titulo: 'Ropa para Mujeres',
		imgAlt: 'Ropa para Mujeres',
		link: 'mujeres.html',
		linkText: 'Ver más',
        img : './imgs/ropa_mujer.png',
		imgWidth: '270'
	},
	{
		titulo: 'Accesorios',
		imgAlt: 'Accesorios',
		link: 'accesorios.html',
		linkText: 'Ver más',
        img : './imgs/accesorios.png',
		imgWidth: '190'

	}
];

const productos = [
	{
		titulo: 'Pack Tarjetas Regalo',
		imgAlt: 'Pack Tarjetas Regalo',
		link: 'TarjetasRegalo.html',
		linkText: 'Ver detalles',
		img : './imgs/pack_Tarjetas.png',
		precio: '$84.99',
		imgWidth: '250'
	},
	{
		titulo: 'Leggings de Yoga',
		imgAlt: 'Leggings de Yoga',
		link: 'LeggingsYoga.html',
		linkText: 'Ver detalles',
		img: './imgs/leggins.png',
		precio: '$39.99',
		imgWidth: '190'
	},
	{
		titulo: 'zapatillas de running',
		imgAlt: 'zapatillas de running',
		link: 'ZapatillasRunning.html',
		linkText: 'Ver detalles',
		img: './imgs/zapatillas.png',
		precio: '$59.99',
		imgWidth: '165'
	},
	{
		titulo: 'shorts deportivos',
		imgAlt: 'shorts deportivos',
		link: 'ShortsDeportivos.html',
		linkText: 'Ver detalles',
		img: './imgs/shorts.png',
		precio: '$29.99',
		imgWidth: '185'
		
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

function crearArticulo2(producto) {
	return `
		<article class="producto">
			<h3>${producto.titulo}</h3>
			<div class="img-producto">
				<img src="${producto.img}" alt="${producto.imgAlt}" width="${producto.imgWidth || 200}">
			</div>
			<p class="precio">${producto.precio}</p>
			<a href="${producto.link}">${producto.linkText}</a>
			<button>Añadir al carrito</button>
		</article>
	`;
}

