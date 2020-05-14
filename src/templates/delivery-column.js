import '../styles/delivery.css'

const deliveryCol = () => {
	return `
    <section class="pull-left delivery-check">
      <h2 class="regular">Delivery Availability</h2>
      <div class="clearfix fw form-group">
        <i class="lnr lnr-map-marker"></i>
        <input type="text" value="110003" name="pincode">
        <a class="semi-bold" href="#">CHANGE</a>
      </div>
      <ul class="reset-list color-grey">
        <li>Free delivery</li>
        <li>Cash on delivery</li>
        <li>Estimated delivery time is 3-5 days</li>
      </ul>
    </section>
  `
}

export { deliveryCol as default }
