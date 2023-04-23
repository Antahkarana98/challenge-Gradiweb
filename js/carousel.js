export function carousel() {

  //Obtenemos los elementos del DOM que necesitamos
  const carousel = document.querySelector('.carousel');
  const btnArrows = document.querySelectorAll('.button-carrousel');
  const firstCardWidth = document.querySelector('.card').offsetWidth;

  let isDraging = false, startX, starScrollLeft;

  // agregar el evento a los botones del scroll y al darle click se mueve el carrusel
  btnArrows.forEach(btn => {
    btn.addEventListener('click', () => {
      carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth;
    })
  });

  //Cuando se presiona el mouse para mover el carrusel
  const dragStart = (e) => {
    isDraging = true;
    carousel.classList.add('dragging');
    //Guarda la posicion inicial del mouse y del scroll del carrusel
    startX = e.pageX;
    starScrollLeft = carousel.scrollLeft;
  }

  //Cuando se mueve el mouse para mover el carrusel
  const dragging = (e) => {
    if(!isDraging) return; //si draggring es falso lo retorna
    // actualiza el scroll del carrusel basado en el movimiento del cursor
    carousel.scrollLeft = starScrollLeft - (e.pageX - startX);
  }

  //Cuando se suelta el mouse para mover el carrusel
  const dragEnd = () => {
    isDraging = false;
    carousel.classList.remove('dragging');
  }

  //Agregamos los eventos al carrusel
  carousel.addEventListener('mousedown', dragStart);
  carousel.addEventListener('mousemove', dragging);
  carousel.addEventListener('mouseup', dragEnd);
}
