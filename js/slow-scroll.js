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