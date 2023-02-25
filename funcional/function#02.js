/*
   ! Função pura é uma função em que o valor
   ! de retorno é determinado apenas por seus valores
   ! de entrada, sem efeitos colaterais observáveis
*/

//[] Pura!
function generateNumberRandom(min, max) {
   const factor = max - min + 1;

   return parseInt(Math.random() * factor) + min;
}


console.log(generateNumberRandom(1, 10000));
console.log(generateNumberRandom(1, 10000));
console.log(generateNumberRandom(1, 10000));
console.log(generateNumberRandom(1, 10000));
console.log(generateNumberRandom(1, 10000));