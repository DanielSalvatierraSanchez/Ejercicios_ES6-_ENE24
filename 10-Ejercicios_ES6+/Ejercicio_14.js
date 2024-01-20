/* Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! Busca información sobre la función de javascript Math.random() */

function rollDice(numberOfFaces) {
  if (numberOfFaces <= 5) {
    return console.error('El numero de caras del dado tiene que se igual o mayor que 6')
  }
  if (numberOfFaces >= 121) {
    return console.error('El numero de caras del dado tiene que se igual o menor que 120')
  }
  const numberRandom = Math.floor(Math.random() * numberOfFaces);
  return numberRandom;
}
console.log(rollDice(67));
console.log(rollDice(20));
console.log(rollDice(145));
console.log(rollDice(4));
