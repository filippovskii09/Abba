const animItems = document.querySelectorAll('.anim-items')
const mainBlock = animItems[0];
mainBlock.classList.add('_active');
document.addEventListener('DOMContentLoaded', () => {
	mainBlock.classList.add('_active')
})
if (animItems.length > 0) {
	// console.log(animItems)
	window.addEventListener('scroll', animOnScroll)
	function animOnScroll(params) {

		for(let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHight / animStart

			if (animItemHight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart
			}

			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHight )) {
				animItem.classList.add('_active')
			} else {
				if(!animItem.classList.contains('anim-no-hide')) {
					animItem.classList.remove('_active')
				}	
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