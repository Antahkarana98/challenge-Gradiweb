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
  return (numbers[0] + numbers[1]) / 2;
}
