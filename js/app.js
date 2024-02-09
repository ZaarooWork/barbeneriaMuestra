let front = document.querySelector('.face-front');
let back = document.querySelector('.face-back');
let flip = document.querySelector('.book-content');
let uno = document.querySelectorAll('.book');
let portada = document.querySelectorAll('#portada');

let contZindex = 2;
let customZindex = 1;

for (var i = 0; i < uno.length; i++) {
	uno[i].style.zIndex = customZindex;
	customZindex--;

	uno[i].addEventListener('click', function(e){

		let tgt = e.target;
		let unoThis = this;

		unoThis.style.zIndex = contZindex;
		contZindex++;

		if (tgt.getAttribute('class') == 'face-front') {
			unoThis.style.zIndex = contZindex;
			contZindex +=20;
			setTimeout(function(){
				unoThis.style.transform = 'rotateY(-180deg)';
			}, 500);
		}
		if (tgt.getAttribute("class") == 'face-back') {
			unoThis.style.zIndex = contZindex; 
			contZindex +=20;

			setTimeout(function(){
				unoThis.style.transform = 'rotateY(0deg)';
			}, 500);
		}

		if (tgt.getAttribute('id') == 'portada') {
			flip.classList.remove("trnsf-reset");
			flip.classList.add("trnsf");
		}
		if (tgt.getAttribute('id') == 'trsf') {
			flip.classList.remove("trnsf");
			flip.classList.add("trnsf-reset");
		}

	});
}

document.addEventListener('DOMContentLoaded', function () {
    const imageBook = document.getElementById('imageBook');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    let currentIndex = 0;

    nextButton.addEventListener('click', function () {
        showImage(currentIndex + 1);
    });

    prevButton.addEventListener('click', function () {
        showImage(currentIndex - 1);
    });

    function showImage(index) {
        const totalImages = imageBook.children.length;

        if (index < 0) {
            index = totalImages - 1;
        } else if (index >= totalImages) {
            index = 0;
        }

        currentIndex = index;
        const translateValue = -index * 405; // 400 (ancho de imagen) + 10 (margen entre imágenes)
        imageBook.style.transform = 'translateX(' + translateValue + 'px)';
    }
});



