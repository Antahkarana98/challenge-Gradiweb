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


})();
