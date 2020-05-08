import '../styles/alert.css'

const alert = (minTotal, percent) => {
	return `
    <div class="alert">
      Shop for ${minTotal} or more and get ${percent}% discount on your order
    </div>
  `
}

export { alert as default }
