"use strict";
const WRAPPER = document.querySelector('.wrapper');
WRAPPER.addEventListener("click", (event) => {
    const target = event.target;
    let counter;
    if (target.dataset.action === "plus" || target.dataset.action === "minus") {
        const COUNTER_WRAPPER = target.closest('.details__counter');
        counter = COUNTER_WRAPPER.querySelector('[data-counter]');
    }
    if (target.dataset.action === "plus") {
        if (parseInt(counter.innerText) < 99) {
            counter.innerText = ++counter.innerText;
        }
    }
    if (target.dataset.action === "minus") {
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
    }
});
