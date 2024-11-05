
const buscador = document.getElementById('buscador');
const botonBuscar = document.getElementById('boton-buscar');
const resultados = document.getElementById('resultados');

botonBuscar.addEventListener('click', () => {
	const palabra = buscador.value.toLowerCase();
	const enlaces = document.querySelectorAll('a');
	const resultadosHtml = [];

	enlaces.forEach((enlace) => {
		const href = enlace.href;
		const texto = enlace.textContent.toLowerCase();

		if (texto.includes(palabra)) {
			resultadosHtml.push(`<a href="${href}">${texto}</a>`);
		}
	});

	resultados.innerHTML = resultadosHtml.join('');
});
