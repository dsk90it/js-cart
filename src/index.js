import heading from './heading'

const headingEl = document.createElement('h1')
headingEl.innerHTML = heading

document.querySelector('#app').append(headingEl)
