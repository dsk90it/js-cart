import './styles/defaults.css'
import getCart from './modules/requests'
import renderUI from './modules/views'
import { getGrandTotal } from './modules/summary'

getCart()
	.then((result) => {
		renderUI(result)
		getGrandTotal(result)
	})
	.catch((err) => {
		console.log(err)
	})
