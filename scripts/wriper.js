const scrollbarContainer = document.querySelector(".swiper__scrollbar");
const scrollbarItems = Array.from(document.querySelectorAll(".scrollbar__item"));
const swiperItems = Array.from(document.querySelectorAll(".swiper__item"));

function removeClassFromElements(className, elements) {
    elements.forEach(element => {
        element.classList.remove(className);
    });
}

scrollbarContainer.addEventListener('click', (event) => {
    event.preventDefault();
    const clickedElement = event.target;

    if (clickedElement.classList.contains("scrollbar__item") && !clickedElement.classList.contains('active')) {
        removeClassFromElements('active', scrollbarItems);
        clickedElement.classList.add('active');
        
        const clickedIndex = scrollbarItems.indexOf(clickedElement); 
        const targetSwiperItem = swiperItems[clickedIndex]; 

        if (targetSwiperItem) {
            targetSwiperItem.scrollIntoView({
                behavior: 'smooth',
                inline: 'start'
            });
        }
    }
});
