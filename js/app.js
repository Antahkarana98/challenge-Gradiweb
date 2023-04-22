import { apiQuery } from './api.js';
// import { showProducts } from './showProducts.js';
import { showStars } from './ui.js';
import { ratingCalc, formattTags } from './functions.js';

(function () {

  document.addEventListener('DOMContentLoaded', showProducts);

  async function showProducts(){
    const products = await apiQuery();

    const productsList = document.querySelector('#list-products');

    products.forEach(product => {
      const { title, totalInventory, prices: {max: {amount: amountMax }, min: {amount: amountMin }}, featuredImage: { url:url }, tags } = product;

      const numbers = formattTags(tags);
      const rating = ratingCalc(numbers);

      const div = document.createElement('div');

      div.innerHTML += `
          <div class="card">
          <div class="card-img">
            <img
            src="${url}"
            alt=""
            class="img-card"
            >
            <a href="#" class="button-card">Add to cart</a>
          </div>

          <div class="card-body">
            <p class="card-title">${title} <span>x${totalInventory}</span></p>
            <div class="card-info">
              <p id="rating"></p>

              <div class="price">
                <p class="sales">€${amountMax}</p>
                <p>€${amountMin}</p>
              </div>
            </div>
          </div>
        </div>
      `;

      productsList.appendChild(div);

      const ratingElement = div.querySelector('#rating');
      ratingElement.classList.add('rating');

      const stars = showStars(rating);
      ratingElement.appendChild(stars);

      const spanRating = document.createElement('span');
      spanRating.textContent = `(${rating})`;

      ratingElement.appendChild(spanRating);

    });
  }


  const carousel = document.querySelector('.carousel');
  const btnArrows = document.querySelectorAll('.wrapper i');
  const firstCardWidth = document.querySelector('.card2').offsetWidth;
  const carouselChildrens = [...carousel.children];

  let isDraging = false, startX, starScrollLeft;

  // obtine el numero de card que se adptan al carrusel
  let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

  // agrega las card al inicio del carrusel para el loop infinito
  carouselChildrens.slice(-cardPerView).reverse().forEach(card =>{
    carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
  })

  // agrega las card al final del carrusel para el loop infinito
  carouselChildrens.slice(0, cardPerView).forEach(card =>{
    carousel.insertAdjacentHTML('beforeend', card.outerHTML);
  })

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

  const infinteCarousel = () => {
    // si el scroll llega al inicio lo devuelve al final
    // se puso 40 para poder detectar el inicio ya que no llega completamente a 0
    if(carousel.scrollLeft === 40){
      carousel.classList.add('no-transition');
      carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
      carousel.classList.remove('no-transition');
    }
    // si el scroll llega al final lo devuelve al inicio
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
      carousel.classList.add('no-transition');
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove('no-transition');
    }
  }

  carousel.addEventListener('mousedown', dragStart);
  carousel.addEventListener('mousemove', dragging);
  carousel.addEventListener('mouseup', dragEnd);
  carousel.addEventListener('scroll', infinteCarousel);

})();
