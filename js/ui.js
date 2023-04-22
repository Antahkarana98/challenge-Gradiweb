export function showStars(stars, rating){
  switch (stars) {
    case 1:
      document.querySelector('.rating').innerHTML = `
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-gray"></i>
        <i class="fa-solid fa-star star-gray"></i>
        <i class="fa-solid fa-star star-gray"></i>
        <i class="fa-solid fa-star star-gray"></i>
        <span>(${rating})</span>
      `
      break;
    case 2:
      document.querySelector('.rating').innerHTML = `
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-gray"></i>
        <i class="fa-solid fa-star star-gray"></i>
        <i class="fa-solid fa-star star-gray"></i>
        <span>(${rating})</span>
      `
      break;

      case 3:
      document.querySelector('.rating').innerHTML = `
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-gray"></i>
        <i class="fa-solid fa-star star-gray"></i>
        <span>(${rating})</span>
      `
      break;

      case 4:
      document.querySelector('.rating').innerHTML = `
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-gray"></i>
        <span>(${rating})</span>
      `
      break;

      case 5:
      document.querySelector('.rating').innerHTML = `
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-yellow"></i>
        <span>(${rating})</span>
      `
      break;

    default:
      break;
  }
}
