import './styles/defaults.css'
import getCart from './modules/requests'

getCart()
	.then((result) => {
		console.log(result)
	})
	.catch((err) => {
		console.log(err)
	})
