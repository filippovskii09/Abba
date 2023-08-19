const animImages = document.querySelectorAll('.anim-image')

if (animImages.length > 0) {
	window.addEventListener('scroll', animOnScroll)
	function animOnScroll(params) {

		for(let i = 0; i < animImages.length; i++) {
			const animImage = animImages[i];
			const animImageHight = animImage.offsetHeight;
			const animImageOffset = offset(animImage).top;
			const animStart = 4;

			let animImagePoint = window.innerHeight - animImageHight / animStart

			if (animImageHight > window.innerHeight) {
				animImagePoint = window.innerHeight - window.innerHeight / animStart
			}

			if((pageYOffset > animImageOffset - animImagePoint) && pageYOffset < (animImageOffset + animImageHight )) {
				animImage.classList.add('_active-image')
			} else {
				animImage.classList.remove('_active-image')
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
	animOnScroll()
}