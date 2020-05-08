import '../styles/table.css'
import itemRow from '../templates/itemrow'
import deliveryCol from '../templates/delivery-column'
import orderCol from '../templates/order-column'

const renderUI = (data) => {
	console.log(data)

	const contentDOM = document.querySelector('#app')
	contentDOM.innerHTML = ''

	return (contentDOM.innerHTML += `
		<!-- item-container starts -->
		<div class="clearfix fw item-container">
			<section class="item-heading hidden-xs">
				<div class="col">Product</div>
				<div class="col">Price</div>
				<div class="col">Quantity</div>
				<div class="col">Subtotal</div>
			</section>

			${
				data.products.length !== 0
					? `${data.products.map(itemRow(data)).join('')}`
					: `<h3 class="text-center">No Products to display !</h3>`
			}
		
			<div class="clearfix fw summary-container">
				${deliveryCol()}
				${orderCol()}
			</div>
		</div>
		<!-- item-container ends -->
	`)
}

export { renderUI as default }
