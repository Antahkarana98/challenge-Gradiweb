// Se encarga de separar los valores numericos que necesitamos de los tags
export function formattTags(tags) {

  //Convertimos esos valores a numero ya que vienen como string
  const number1 = Number(tags[0]);
  let number2 = Number(tags[1]);

  // Si el segundo valor no existe o es NaN, le asignamos 0
  if(!number2) {
    number2 = 0;
  }

  // Retornamos un array con los valores numericos
  return[number1, number2];
}

//Calcula el rating de los productos cuando tienen mas de dos tags numericos
export function ratingCalc(numbers) {
  if(numbers[1] === 0) {
    return(numbers[0]);
  }
  return (numbers[0] + numbers[1]) / 2;
}
