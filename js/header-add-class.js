let scrollpos = window.scrollY

const header = document.querySelector('.header');

const scrollChange = 100;

const addClassOnScroll = () => header.classList.add('header-scroll')
const removeClassOnScroll = () => header.classList.remove('header-scroll');

window.addEventListener('scroll', () => {
	scrollpos = window.scrollY
	if (scrollpos >= scrollChange) {
		addClassOnScroll()
	} else {
		removeClassOnScroll()
	}
})