import '../styles/alert.css'

const alertBox = (minTotal, percent) => {
	return `
    <div class="alert">
      Shop for ${minTotal} or more and get ${percent}% discount on your order
    </div>
  `
}

export { alertBox as default }
