const WRAPPER = document.querySelector('.wrapper') as HTMLElement;

WRAPPER.addEventListener("click", (event: Event) => {
    const target = event.target as HTMLButtonElement;

    let counter;

    if(target.dataset.action === "plus" || target.dataset.action === "minus") {
        const COUNTER_WRAPPER = target.closest('.details__counter') as HTMLElement;
        counter = COUNTER_WRAPPER.querySelector('[data-counter]') as any;
    }

    if(target.dataset.action === "plus") {
        if (parseInt(counter.innerText) < 99){
            counter.innerText = ++counter.innerText;
        }
    }

    if(target.dataset.action === "minus") {
        if (parseInt(counter.innerText) > 1){
            counter.innerText = --counter.innerText;
        }
    }
})
