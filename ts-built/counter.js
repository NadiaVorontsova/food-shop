"use strict";
const WRAPPER = document.querySelector(".wrapper");
WRAPPER.addEventListener("click", (event) => {
    var _a;
    const target = event.target;
    let counter;
    if (target.dataset.action === "plus" || target.dataset.action === "minus") {
        const COUNTER_WRAPPER = target.closest(".details__counter");
        counter = COUNTER_WRAPPER.querySelector("[data-counter]");
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
        else if (target.closest(".shopping-item") &&
            parseInt(counter.innerText) === 1) {
            (_a = target.closest(".shopping-item__order")) === null || _a === void 0 ? void 0 : _a.remove();
        }
    }
});
