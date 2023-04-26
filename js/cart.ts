const ORDER_CONTAINER = document.querySelector(
  ".shopping-items"
) as HTMLElement;

const MAKE_ORDER_CONTAINER = document.querySelector(
  ".make-order"
) as HTMLElement;

const OPEN_CART_BTN = document.querySelector(
  ".header-cart"
) as HTMLButtonElement;

const SHOPPING_WRAPPER = document.querySelector(".shopping") as HTMLElement;

OPEN_CART_BTN.addEventListener("click", (event: Event) => {
  SHOPPING_WRAPPER.classList.toggle("hidden");
});

WRAPPER.addEventListener("click", (event: Event) => {
  const target = event.target as HTMLButtonElement;

  if (target.hasAttribute("data-cart")) {
    const cart = target.closest(".catalog-item") as HTMLButtonElement;
    if (cart) {
      const cartInfo: {
        id?: string;
        title: string;
        img: string | null;
        weight: string;
        price: string;
        counter: number;
      } = {
        id: cart.dataset.id,
        title: (cart.querySelector(".catalog-item__name") as HTMLElement)
          .innerText,
        img: (
          cart.querySelector(".catalog-item__image") as HTMLElement
        ).getAttribute("src"),
        weight: (cart.querySelector(".price__weight") as HTMLElement).innerText,
        price: (cart.querySelector(".price__currency") as HTMLElement)
          .innerText,
        counter: parseInt(
          (cart.querySelector("[data-counter]") as HTMLElement).innerText
        ),
      };

      const similarItem = ORDER_CONTAINER.querySelector(
        `[data-id="${cartInfo.id}"]`
      ) as HTMLElement;
      if (similarItem) {
        const counterItemInCart = similarItem.querySelector(
          "[data-counter]"
        ) as HTMLButtonElement;
        counterItemInCart.innerText = (
          parseInt(counterItemInCart.innerText) + cartInfo.counter
        ).toString();
      } else {
        const cartItemHtml: string = `<li class="shopping-item">
                <div class="shopping-item__order" data-id="${cartInfo.id}">
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
              </li>
              `;
        ORDER_CONTAINER.insertAdjacentHTML("beforeend", cartItemHtml);
      }
      parseInt(
        ((cart.querySelector("[data-counter]") as HTMLElement).innerText = "1")
      );
    }
    if (ORDER_CONTAINER.children.length > 2) {
      MAKE_ORDER_CONTAINER.classList.remove("hidden");
    }
  }
});
