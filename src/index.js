import './styles/defaults.css'
import getCart from './modules/requests'
import renderUI from './modules/views'
import initCounter from './modules/counter'

getCart()
	.then((result) => {
		renderUI(result)
		initCounter()
	})
	.catch((err) => {
		console.log(err)
	})
