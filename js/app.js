import { apiQuery } from './api.js';
import { showStars } from './stars.js';
import { ratingCalc, formattTags } from './functions.js';
import { carousel } from './carousel.js';

(function () {

  //Ejecuta la funcion showProducts cuando el DOM este cargado
  document.addEventListener('DOMContentLoaded', showProducts);

  async function showProducts(){
    //Obtiene los productos de la API, pero no los guarda hasta que la funcion apiQuery se ejecute
    const products = await apiQuery();

    //obtenemos lista de productos del DOM
    const productsList = document.querySelector('#list-products');

    //Recorremos los productos para crear las cards
    products.forEach(product => {
      //Obtenemos los datos de cada producto con destructuring
      const { title, totalInventory, prices: {max: {amount: amountMax }, min: {amount: amountMin }}, featuredImage: { url:url }, tags } = product;

      //Formateamos los tags para obtener solo los numeros
      const numbers = formattTags(tags);
      //Calculamos el rating cuando son mas de dos tags numericos
      const rating = ratingCalc(numbers);

      //Creamos el elemento div para agregar las cards
      const div = document.createElement('div');

      //Agregamos el contenido a la card con innerHTML ya que sabemos que los datos vienen de una API controlada
      div.innerHTML += `
          <div class="card">
          <div class="card-img">
            <img
            src="${url}"
            alt="product omage"
            class="img-card"
            draggable="false"
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

      //Agregamos la card al DOM
      productsList.appendChild(div);

      //Una vez la card este creada y ya exista en el DOM,
      //y por medio de scripting agregamos la clase rating al id rating
      const ratingElement = div.querySelector('#rating');
      ratingElement.classList.add('rating');

      //Ejecutamos la funcion showStars para agregar las estrellas
      const stars = showStars(rating);
      //Agregamos las estrellas al elemento rating manipulando el DOM
      ratingElement.appendChild(stars);

      //Creamos el elemento span para agregar el rating
      const spanRating = document.createElement('span');
      spanRating.textContent = `(${rating})`;

      //Agregamos el span al elemento rating manipulando el DOM
      ratingElement.appendChild(spanRating);

    });
    //Esta funcion se ejecuta aca debido a que necesita que cada card exista en el DOM y es la que le da
    //funcionalidad al carousel
    carousel();
  }

})();
