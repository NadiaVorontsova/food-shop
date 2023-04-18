let PRODUCT_LIST = document.querySelector(".catalog-items") as HTMLUListElement;

const render = () => {
  CATALOG.forEach((product) => {
    PRODUCT_LIST.innerHTML += `
        <li class="catalog-item" data-id="${product.id}">
            <img src=${product.img} alt="Бургер" class="catalog-item__image">
            <span class="catalog-item__name">${product.name}</span>
            <span class="catalog-item__description">${product.desc}</span>
            <div class="catalog-item__details">
                <div class="details__counter">
                    <div class="counter-control" data-action="minus">-</div>
                    <div class="counter-current" data-counter>1</div>
                    <div class="counter-control" data-action="plus">+</div>
                </div>
                <div class="details__price">
                    <div class="price__weight">${product.weight}г.</div>
                    <div class="price__currency">${product.price} грн</div>
                </div>
            </div>
            <button type="button" class="catalog-item__button" data-cart>Додати в кошик</button>
        </li> 
        `;
  });
};

render();
