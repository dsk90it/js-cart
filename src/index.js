import './styles/defaults.css'
import getCart from './modules/requests'
import renderUI from './modules/views'

getCart()
	.then((result) => {
		renderUI(result)
	})
	.catch((err) => {
		console.log(err)
	})
