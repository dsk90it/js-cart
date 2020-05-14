import { getSubtotal, getGrandTotal } from './summary'

const initCounter = (data) => {
	const minusEl = document.querySelectorAll('.lnr-circle-minus')
	const plustEl = document.querySelectorAll('.lnr-plus-circle')

	// Increment Quantity
	plustEl.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			const counter = e.target.parentElement.parentElement
			const input = e.target.previousElementSibling
			const minusBtn = input.previousElementSibling

			if (input.value < 5) {
				input.value++
				minusBtn.classList.remove('disabled')
				getSubtotal(counter, input.value)
				getGrandTotal(data)
			}

			if (input.value > 4) {
				btn.classList.add('disabled')
			}
		})
	})

	// Decrement Quantity
	minusEl.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			const counter = e.target.parentElement.parentElement
			const input = e.target.nextElementSibling
			const plusBtn = input.nextElementSibling

			if (input.value > 1) {
				input.value--
				plusBtn.classList.remove('disabled')
				getSubtotal(counter, input.value)
				getGrandTotal(data)
			}

			if (input.value == 1) {
				btn.classList.add('disabled')
			}
		})
	})
}

export { initCounter as default }
