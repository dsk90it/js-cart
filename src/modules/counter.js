const initCounter = () => {
	const minusBtn = document.querySelectorAll('.lnr-circle-minus')
	const plustBtn = document.querySelectorAll('.lnr-plus-circle')

	// Increment Quantity
	plustBtn.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			const input = e.target.previousElementSibling
			const minusBtn = input.previousElementSibling

			if (input.value < 5) {
				input.value++
				minusBtn.classList.remove('disabled')
			}

			if (input.value > 4) {
				btn.classList.add('disabled')
			}
		})
	})

	// Decrement Quantity
	minusBtn.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			const input = e.target.nextElementSibling
			const plusBtn = input.nextElementSibling

			if (input.value > 1) {
				input.value--
				plusBtn.classList.remove('disabled')
			}

			if (input.value == 1) {
				btn.classList.add('disabled')
			}
		})
	})
}

export { initCounter as default }
