let scrollpos = window.scrollY

const header = document.querySelector('.header');

const headerHidden = 100;
const headerFixed = 110;

const addHiddenToHeader = () => header.classList.add('header-hidden')
const removeHiddenToHeader = () => header.classList.remove('header-hidden')
const addClassOnScroll = () => header.classList.add('header-fixed')
const removeClassOnScroll = () => header.classList.remove('header-fixed');

window.addEventListener('scroll', () => {
	scrollpos = window.scrollY
	if (scrollpos <= headerHidden) {
		addHiddenToHeader();
		removeClassOnScroll();
	} else if(scrollpos >= headerFixed) {
		removeHiddenToHeader();
		addClassOnScroll();
	}	else {
		removeHiddenToHeader();
		removeClassOnScroll();
	}

	if (scrollpos = 0) {
		removeHiddenToHeader();
		removeClassOnScroll();
	} else {
		console.log('Hello My dear friend');
	}
})