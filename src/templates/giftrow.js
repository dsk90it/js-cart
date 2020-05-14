const giftRow = (giftItem) => {
	return `
    <div class="item-row gift-row">
      <div class="col">
        <div class="item-img">
          <img src="https://img.tttcdn.com/product/xy/500/500/p/gu1/R/2/RM10142/RM10142-1-7a10-jyfv.jpg" alt="${giftItem.gift.name}">
        </div>
        <div class="item-details">
          <i class="tag">GIFT</i>
          <p>${giftItem.gift.name} <span class="color-grey">${giftItem.gift.desc}</span></p>
        </div>
      </div>
      <div class="col color-grey">${giftItem.gift.price}$</div>
      <div class="col color-grey"><span class="hidden-sm hidden-md hidden-lg">Qty</span> 1</div>
    </div>
  `
}

export { giftRow as default }
