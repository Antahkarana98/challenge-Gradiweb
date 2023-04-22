export function formattTags(tags) {
  const number1 = Number(tags[0]);
  let number2 = Number(tags[1]);

  if(!number2) {
    number2 = 0;
  }

  return[number1, number2];
}


export function ratingCalc(numbers) {
  if(numbers[1] === 0) {
    return(numbers[0]);
  }

  return((numbers[0] + numbers[1] ) / 2);
}

export function ratingStars(rating) {

  switch (true) {
    case rating > 0 && rating <= 100:
      rating = 1;
      break;

    case rating > 100 && rating <= 200:
      rating = 2;
      break;

    case rating > 200 && rating <= 300:
      rating = 3;
      break;

    case rating > 300 && rating <= 400:
      rating = 4;
      break;

    case rating > 400 && rating <= 500:
      rating = 5;
      break;

    default:
      break;
  }

  return(rating);
}
