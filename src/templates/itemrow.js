import giftRow from './giftrow'

const itemRow = (item) => {
	return `
    <section class="item-row">
      <div class="col">
        <div class="item-img">
          <img src="${item.imageUrl}" alt="${item.name}">
        </div>
        <div class="item-details">
          ${item.tagline ? `<i class="tag">${item.tagline}</i>` : ''}
          <p>${item.name}<span class="color-grey">${item.desc}</span></p>
          ${
						item.planLink
							? `<span class="color-grey">Extended Warranty 
                  <a class="semi-bold" href="${item.planLink}">View Plans</a>
                </span>`
							: ''
					}
        </div>
      </div>
      
      <div class="col color-grey hidden-xs">${item.price}$</div>
      
      <div class="col">
        <div class="counter">
          <i class="lnr lnr-circle-minus disabled"></i>
          <input type="number" name="quantity" value="1">
          <i class="lnr lnr-plus-circle"></i>
        </div>
      </div>
      
      <div class="col">0$ <i class="lnr lnr-trash"></i></div>
    </section>

    ${item.gift ? `${giftRow(item)}` : ''}
  `
}

export { itemRow as default }
