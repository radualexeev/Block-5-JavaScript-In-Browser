const btn = document.querySelector(".wriper__button");
const blocksCounter = document.querySelectorAll(".swiper__item").length;
const vector = document.querySelector(".button__vector");
const container = document.querySelector(".swiper__list");
const btnText = document.querySelector(".button__text");
const defaultRows = 2;
const itemHeight = 72;
const gap = 8; 
const screenTablet = 768;
const screenDesktop = 1120;
let lever = false;


btn.addEventListener('click', (event) => {
    event.preventDefault();
    
    let screenWidth = window.screen.availWidth;

    if (!lever && screenWidth >= screenDesktop) {
        const rows = Math.ceil(blocksCounter / 4);
        container.style.cssText = `max-height: ${rows * (itemHeight + gap)}px;`;
        vector.style.cssText = `transform: rotate(180deg);`
        btnText.textContent = "Скрыть"
        lever = true;
    } else if (!lever && screenWidth >= screenTablet) {
        const rows = Math.ceil(blocksCounter / 3);
        container.style.cssText = `max-height: ${rows * (itemHeight + gap)}px;`;
        vector.style.cssText = `transform: rotate(180deg);`
        btnText.textContent = "Скрыть"
        lever = true;
    } else {
        container.style.cssText = `max-height: ${defaultRows * (itemHeight + gap)}px;`;
        vector.style.cssText = `transform: rotate(0deg);`
        btnText.textContent = "Показать все"
        lever = false;
    }
});
