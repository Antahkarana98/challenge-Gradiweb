export function showStars(rating){

  //Crea las estrellas de acuerdo al rating total
  const stars = document.createElement('div');

  //Evaluan el rating para agregar las estrellas por medio de innerhtml
  switch (true) {
    case rating > 0 && rating <= 100:
      stars.innerHTML = `
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-gray"></i>
        <i class="fa-solid fa-star star-gray"></i>
        <i class="fa-solid fa-star star-gray"></i>
        <i class="fa-solid fa-star star-gray"></i>
      `
      break;

    case rating > 100 && rating <= 200:
      stars.innerHTML = `
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-gray"></i>
        <i class="fa-solid fa-star star-gray"></i>
        <i class="fa-solid fa-star star-gray"></i>
      `
      break;

    case rating > 200 && rating <= 300:
      stars.innerHTML = `
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-gray"></i>
        <i class="fa-solid fa-star star-gray"></i>
      `
      break;

    case rating > 300 && rating <= 400:
      stars.innerHTML = `
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-gray"></i>
      `
      break;

    case rating > 400 && rating <= 500:
      stars.innerHTML = `
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-yellow"></i>
        <i class="fa-solid fa-star star-yellow"></i>
      `
      break;

    default:
      break;

    }
    return stars;
}
