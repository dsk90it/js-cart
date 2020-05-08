import '../styles/table.css'
import alertBox from '../templates/alert'
import itemRow from '../templates/itemrow'
import deliveryCol from '../templates/delivery-column'
import orderCol from '../templates/order-column'

const renderUI = (data) => {
	const products = data.products
	const contentDOM = document.querySelector('#app')
	const generateItems = products.map((item) => itemRow(item)).join('')

	contentDOM.innerHTML = ''

	return (contentDOM.innerHTML += `
		${alertBox(data.discount.minTotal, data.discount.discountPercentage)}
		
		<h1 class="hidden-xs">Shopping cart</h1>
		
		<!-- item-container starts -->
		<div class="clearfix fw item-container">
			<section class="item-heading hidden-xs">
				<div class="col">Product</div>
				<div class="col">Price</div>
				<div class="col">Quantity</div>
				<div class="col">Subtotal</div>
			</section>

			${
				products.length !== 0
					? generateItems
					: `<h3 class="text-center">No Products to display !</h3>`
			}
		</div>
		<!-- item-container ends -->

		<div class="clearfix fw summary-container">
			${deliveryCol()}
			${orderCol()}
		</div>
	`)
}

export { renderUI as default }
