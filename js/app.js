import { apiQuery } from './api.js';

(function () {

  const productsList = document.querySelector('#list-products');

  document.addEventListener('DOMContentLoaded', showProducts);

  async function showProducts(){
    const products = await apiQuery();

    products.forEach(product => {
      const { title, totalInventory, prices: {max: {amount: amountMax }, min: {amount: amountMin }}, featuredImage: { url:url } } = product;

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
              <p class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>(320)</span>
              </p>

              <div class="price">
                <p class="sales">€${amountMax}</p>
                <p>€${amountMin}</p>
              </div>
            </div>
          </div>
        </div>
      `;

      productsList.appendChild(div);
    });
  }
})();
