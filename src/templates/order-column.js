import '../styles/order.css'

const orderCol = () => {
	return `
    <section class="pull-right order-total">
      <h2 class="semi-bold">Order Summary <span class="total-cart"></span></h2>
      <ul class="reset-list color-grey">
        <li>
          <span>Subtotal</span>
          <span class="subtotal"></span>
        </li>
        <li>
          <span>Total Discount</span>
          <span class="color-base discount"></span>
        </li>
        <!--<li>
          <span>Standard Shipping</span>
          <span class="shipping">Free</span>
        </li>-->
        <li class="grand-total color-base">
          <span>Order Total</span>
          <span class="semi-bold final-total"></span>
        </li>
      </ul>
    </section>
    
    <div class="clear-both"></div>
    
    <div class="btns-row">
      <a class="semi-bold" href="#">CONTINUE SHOPPING</a>
      <button>Checkout</button>
    </div>
  `
}

export { orderCol as default }
