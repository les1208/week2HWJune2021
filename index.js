let position = 0;

const prevSlide = function () { //block scoped

	const imageSlider = document.getElementById('imageSliderDos');
	// decrement position by the width of the image
	position += 400;
	//access the style transform on the element and apply position
	imageSlider.style.transform = `translateX(${position}px)`;

}

const nextSlide = function () {

	const imageSlider = document.getElementById('imageSliderDos');

	position -= 400;

	imageSlider.style.transform = `translateX(${position}px)`;
}

