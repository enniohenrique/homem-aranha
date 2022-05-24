function handleMouseEnter() {
    this.classList.add('card--hovered');
    document.body.id = `${this.id}--hovered`;
}

function handleMouseLeave() {
    this.classList.remove('card--hovered');
    document.body.id = '';
}

function adddEventListenersToCards() {
    const cardElements = document.getElementsByClassName('card');
    
    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", adddEventListenersToCards, false);


// Função que pode resolver o problema do contador de pizza
function selectCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.cards-carrossel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);      //Rejex
    const rotateYDeg = -120 * (Number(selectedItem) - 1)
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

    carousel.style.transform = newTransform;

    const activeButtonElement = document.querySelector('.controlador__botao--active');
    activeButtonElement.classList.remove('controlador__botao--active');
    selectedButtonElement.classList.add('controlador__botao--active');
    console.log(selectedButtonElement);
}