/* Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante. Sugerencia de array: */

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
  if (index1 >=4 || index2 >=4 ) {
    return `El numero del index no puede ser igual o mayor que 4`
  }
  const change = array[index1];
  array[index1] = array[index2];
  array[index2] = change;
  return array;
}
console.log(swap(fantasticFour, 2, 4));
console.log(swap(fantasticFour, 1, 3));
console.log(swap(fantasticFour, 0, 2));
console.log(swap(fantasticFour, 4, 0));
