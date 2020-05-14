import { getGrandTotal } from './summary'

const deleteItem = (data) => {
	const deleteEl = document.querySelectorAll('.lnr-trash')

	deleteEl.forEach((btn) =>
		btn.addEventListener('click', (e) => {
			const row = e.target.offsetParent.parentElement
			row.remove()
			getGrandTotal(data)
		})
	)
}

export { deleteItem as default }
