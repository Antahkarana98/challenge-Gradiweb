export function carousel() {

  const carousel = document.querySelector('.carousel');
  const btnArrows = document.querySelectorAll('.button-carrousel');
  const firstCardWidth = document.querySelector('.card').offsetWidth;

  let isDraging = false, startX, starScrollLeft;

  // agregar el evento a los botoones del scroll
  btnArrows.forEach(btn => {
    btn.addEventListener('click', () => {
      carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth;
    })
  });

  const dragStart = (e) => {
    isDraging = true;
    carousel.classList.add('dragging');
    //Guarda la posicion inicial del mouse y del scroll del carrusel
    startX = e.pageX;
    starScrollLeft = carousel.scrollLeft;
  }

  const dragging = (e) => {
    if(!isDraging) return; //si draggring es falso lo retorna
    // actualiza el scroll del carrusel basado en el movimiento del cursor
    carousel.scrollLeft = starScrollLeft - (e.pageX - startX);
  }

  const dragEnd = () => {
    isDraging = false;
    carousel.classList.remove('dragging');
  }

  carousel.addEventListener('mousedown', dragStart);
  carousel.addEventListener('mousemove', dragging);
  carousel.addEventListener('mouseup', dragEnd);
}
