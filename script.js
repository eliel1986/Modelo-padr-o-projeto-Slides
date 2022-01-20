let totalSlides = document.querySelectorAll('.slider--item').length; // pega quantidade total de slides da classe 'slider--item'.
let currentSlide = 0; // variável para iniciar do slide 0, primeiro slide.

document.querySelector('.slider--width').style.width = `calc(100vw  * ${totalSlides})`; // calculo para trocar a largura de 'slider--width' de acordo com a quantia de sliders. 

document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`; // posiciona os botões avançar/voltar no centro da imagem. 'slider--controls': div do botão; 'slider': div da imagem; clientHeight: comando para posicionar no centro na vertical.

function goPrev() {
	currentSlide--; // retorna um slide
	if(currentSlide < 0) { // condição para quando está no primeiro slide, retornar para último.
		currentSlide = totalSlides - 1;
	}
	updateMargin(); // define valor do recuo da margem para posicionamento do novo slide
}
function goNext() {
	currentSlide++; // avança um slide
	if(currentSlide > (totalSlides-1)) { // condição para quando está no último slide, retornar para primeiro.
		currentSlide = 0;
	}
	updateMargin(); // define valor do recuo da margem para posicionamento do novo slide
}

function updateMargin() {
	let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
	let newMargin = (currentSlide * sliderItemWidth); // variável para definir qual o tamanho da margem para deslocamento dos sliders.
	document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`; // marginLeft irá receber o valor de newMargin para deslocamento.
}

setInterval(goNext, 4000);
