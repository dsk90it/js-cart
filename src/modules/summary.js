const getSubtotal = (counterCol, qty) => {
	const priceCol = counterCol.previousElementSibling.innerText
	const totalCol = counterCol.nextElementSibling
	const price = parseFloat(priceCol.replace('$', ''))
	const totalText = totalCol.querySelector('.item-total')
	const quantity = parseInt(qty)
	const subtotal = price * quantity

	totalText.innerText = ''

	totalText.innerText += `${subtotal}$`
}

const getGrandTotal = (data) => {
	// Elements
	const itemRows = document.querySelectorAll('section .item-row:first-child')
	const subtotalEl = document.querySelector('.subtotal')
	const discountEl = document.querySelector('.discount')
	const totalEl = document.querySelector('.final-total')
	const totalItemsEl = document.querySelector('.total-cart')
	const buttonEl = document.querySelector('.btns-row button')
	const tableEl = document.querySelector('.item-container')

	// Values
	let _subtotal = 0
	itemRows.forEach((row) => {
		const itemTotal = row.querySelector('.item-total')
		const itemTotalVal = parseFloat(itemTotal.innerText.replace('$', ''))
		return (_subtotal += itemTotalVal)
	})
	const _totalItems = itemRows.length
	const _discAmount = parseFloat(data.discount.minTotal)
	const _discPercent = parseFloat(data.discount.discountPercentage / 100)
	const _discount = parseFloat(
		_subtotal > _discAmount ? _subtotal * _discPercent : 0
	)
	const _total = parseFloat(_subtotal - _discount)
	const plural = _totalItems <= 1 ? '' : 's'

	// Inner Text
	totalItemsEl.innerText = `(${_totalItems} item${plural})`
	subtotalEl.innerText = `${_subtotal.toLocaleString()}$`
	discountEl.innerText = `${_discount.toLocaleString()}$`
	totalEl.innerText = `${_total.toLocaleString()} $`

	// Other Manipulations
	if (_totalItems < 1) {
		buttonEl.classList.add('disabled')
		tableEl.innerHTML += `<h3 class="text-center">Your cart is Empty !</h3>`
	} else {
		buttonEl.classList.remove('disabled')
	}
}

export { getSubtotal, getGrandTotal }
