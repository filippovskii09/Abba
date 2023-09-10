	window.addEventListener('DOMContentLoaded', () => {

	// spin 

		setTimeout(() => {
			const preloader = document.querySelector(".preloader"),
					content = document.querySelector(".content");

			preloader.style.display = "none";
			content.style.display = "block";
		}, 2400);

	// spin

// create cards with class

class Project {
	constructor(src, alt, name, title, text, listBlock) {
		this.src = src;
		this.alt = alt;
		this.name = name;
		this.title = title;
		this.text = text;
		this.list = document.querySelector(listBlock);
	}

	render() {
		const item = document.createElement('li');
		item.classList.add('projects__item', 'projects-item')

		item.innerHTML = `
			<img src=${this.src} class="projects-item__image anim-image anim-no-hide" alt=${this.alt}>
			<div class="projects-item__content">
				<div class="projects-item__main">
					<p class="projects-item__name anim-items anim-no-hide">${this.name}</p>
					<h3 class="projects-item__title anim-items anim-no-hide">A Case Study_
						<span>${this.title}</span></h3>
				</div>
				<div class="projects-item__info">
					<p class="projects-item__text anim-items anim-no-hide">${this.text}</p>
					<a href="" class="projects-item__btn anim-items anim-no-hide">
						<span>View More</span>
						<img src="./images/projects/arr.svg" alt="">
					</a>
				</div>
			</div>
		`;
		this.list.append(item);
	}
}

new Project (
	"./images/projects/1.svg",
	"first",
	"Mental Health",
	"Find Peace in Meditation",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
	'.projects__list'	
).render();

new Project (
	"./images/projects/2.svg",
	"second",
	"Mental Health",
	"Find Peace in Meditation",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
	'.projects__list'	
).render();

new Project (
	"./images/projects/3.svg",
	"third",
	"Mental Health",
	"Find Peace in Meditation",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
	'.projects__list'	
).render();
// create cards with class

	// image animation 

	const animImages = document.querySelectorAll('.anim-image');

	if (animImages.length > 0) {
		window.addEventListener('scroll', animOnScroll)

		function animOnScroll(params) {

			for (let i = 0; i < animImages.length; i++) {
				const animImage = animImages[i],
					animImageHight = animImage.offsetHeight,
					animImageOffset = offset(animImage).top,
					animStart = 4;

				let animImagePoint = window.innerHeight - animImageHight / animStart

				if (animImageHight > window.innerHeight) {
					animImagePoint = window.innerHeight - window.innerHeight / animStart
				}

				if ((pageYOffset > animImageOffset - animImagePoint) && pageYOffset < (animImageOffset + animImageHight)) {
					animImage.classList.add('_active-image')
				} else {
					if (!animImage.classList.contains('anim-no-hide')) {
						animImage.classList.remove('_active-image')
					}
				}
			}
		}

		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return {
				top: rect.top + scrollTop,
				left: rect.left + scrollLeft
			}
		}
		animOnScroll()
	}

	// image animation 

	// Modal window

	const modal = document.querySelector('.modal'),
		openModalButton = document.querySelector('[data-modal]'),
		closeModalButton = document.querySelector('[data-close]');

	const closeModal = () => {
		document.documentElement.classList.remove('_modal-open');
	}

	openModalButton.addEventListener('click', () => {
		document.documentElement.classList.add('_modal-open')
	})

	closeModalButton.addEventListener('click', closeModal)

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal()
		}
	})

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape') {
			closeModal()
		}
	})

	// Modal window

	// animation

	const animItems = document.querySelectorAll('.anim-items'),
		mainBlock = animItems[0];
	mainBlock.classList.add('_active');

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll)

		function animOnScroll(params) {

			for (let i = 0; i < animItems.length; i++) {
				const animItem = animItems[i],
					animItemHight = animItem.offsetHeight,
					animItemOffset = offset(animItem).top,
					animStart = 4;

				let animItemPoint = window.innerHeight - animItemHight / animStart

				if (animItemHight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart
				}

				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHight)) {
					animItem.classList.add('_active')
				} else {
					if (!animItem.classList.contains('anim-no-hide')) {
						animItem.classList.remove('_active')
					}
				}
			}
		}

		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return {
				top: rect.top + scrollTop,
				left: rect.left + scrollLeft
			}
		}
		animOnScroll()

	}
	// animation

	// slow scroll 

	const anchors = document.querySelectorAll('a[href*="#"]')

	for (let item of anchors) {
		item.addEventListener('click', (event) => {
			event.preventDefault();
			const blockID = item.getAttribute('href')
			document.querySelector('' + blockID).scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		})
	}

	// slow scroll 

	// burger 

	const menuButton = document.querySelector('.icon-menu');
	const addClassToMenu = () => {
		document.body.classList.toggle("open-menu")
	}
	menuButton.addEventListener('click', addClassToMenu)

	// burger 

	// add header class on scroll 

	let scrollpos = window.scrollY

	const header = document.querySelector('.header'),
	 		headerHidden = 100,
	 		headerFixed = 110;

	const addHiddenToHeader = () => header.classList.add('header-hidden')
	const removeHiddenToHeader = () => header.classList.remove('header-hidden')
	const addClassOnScroll = () => header.classList.add('header-fixed')
	const removeClassOnScroll = () => header.classList.remove('header-fixed');

	window.addEventListener('scroll', () => {
		scrollpos = window.scrollY
		if (scrollpos <= headerHidden) {
			addHiddenToHeader();
			removeClassOnScroll();
		} else if (scrollpos >= headerFixed) {
			removeHiddenToHeader();
			addClassOnScroll();
		} else {
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

	// add header class on scroll 

})