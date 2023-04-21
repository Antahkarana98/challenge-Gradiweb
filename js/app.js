import { apiQuery } from './api.js';

(function () {

  const productsList = document.querySelector('#list-products');

  document.addEventListener('DOMContentLoaded', showProducts);

  async function showProducts(){
    const products = await apiQuery();

    products.forEach(product => {
      const { title } = product;

      const div = document.createElement('div');
      
      productsList.innerHTML += `
        <p>${title}</p>

      `;
    });
  }
})();
