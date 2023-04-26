"use strict";
const ERROR = document.querySelector(".make-order__error");
const INPUT_PHONE = document.querySelector(".make-order__input");
const BUTTON_SUBMIT = document.querySelector(".make-order__button");
const regex = /[0-9]{12}/g;
INPUT_PHONE.addEventListener("input", (event) => {
    if (INPUT_PHONE.value.match(regex)) {
        INPUT_PHONE.classList.add("outline-green");
        INPUT_PHONE.classList.remove("outline-red");
    }
    else if (!INPUT_PHONE.value.match(regex)) {
        INPUT_PHONE.value = INPUT_PHONE.value.replace(/\D/g, "");
        INPUT_PHONE.classList.remove("outline-green");
        INPUT_PHONE.classList.add("outline-red");
    }
});
BUTTON_SUBMIT.addEventListener("click", (event) => {
    if (INPUT_PHONE.value.match(regex)) {
        console.log("submit");
        alert("Оператор зателефонує черех декілька хвилин");
        ERROR.innerText = "";
    }
    else {
        ERROR.innerText = "Введіть коректний номер";
    }
});
ERROR.innerText = "";
