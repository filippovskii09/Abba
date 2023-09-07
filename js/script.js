const modal = document.querySelector('.modal'),
		openModalButton = document.querySelector('[data-modal]'),
		closeModalButton = document.querySelector('[data-close]');
		const closeModal = () => {
			document.documentElement.classList.remove('_modal-open');
		}
		openModalButton.addEventListener('click', () => {
			document.documentElement.classList.add('_modal-open')
		})

		closeModalButton.addEventListener('click', closeModal )

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