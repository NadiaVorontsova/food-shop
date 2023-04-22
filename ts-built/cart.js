"use strict";
const ORDER_CONTAINER = document.querySelector(".shopping-item");
WRAPPER.addEventListener("click", (event) => {
    const target = event.target;
    if (target.hasAttribute("data-cart")) {
        const cart = target.closest(".catalog-item");
        if (cart) {
            const cartInfo = {
                id: cart.dataset.id,
                title: cart.querySelector(".catalog-item__name")
                    .innerText,
                img: cart.querySelector(".catalog-item__image").getAttribute("src"),
                weight: cart.querySelector(".price__weight").innerText,
                price: cart.querySelector(".price__currency")
                    .innerText,
                counter: parseInt(cart.querySelector("[data-counter]").innerText),
            };
            const similarItem = ORDER_CONTAINER.querySelector(`[data-id="${cartInfo.id}"]`);
            if (similarItem) {
                const counterItemInCart = similarItem.querySelector("[data-counter]");
                counterItemInCart.innerText = (parseInt(counterItemInCart.innerText) + cartInfo.counter).toString();
            }
            else {
                const cartItemHtml = `<div class="shopping-item__order" data-id="${cartInfo.id}">
                <img src=${cartInfo.img} alt="бургер" class="order__image" />
                <div class="order-description">
                <span class="order-description__name">${cartInfo.title}</span>
                <div class="catalog-item__details">
                  <div class="details__counter">
                    <div class="counter-control" data-action="minus">-</div>
                    <div class="counter-current" data-counter>${cartInfo.counter}</div>
                    <div class="counter-control" data-action="plus">+</div>
                  </div>
                  <div class="details__price">
                    <div class="price__weight">${cartInfo.weight}</div>
                    <div class="price__currency">${cartInfo.price}</div>
                  </div>
                </div>
              </div>
              </div>
              `;
                ORDER_CONTAINER.insertAdjacentHTML("beforeend", cartItemHtml);
            }
            parseInt((cart.querySelector("[data-counter]").innerText = "1"));
        }
    }
});
