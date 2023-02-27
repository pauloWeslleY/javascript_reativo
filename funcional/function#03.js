/*
   ! Função pura é uma função em que o valor
   ! de retorno é determinado APENAS por seus valores
   ! de entrada, sem efeitos colaterais observáveis
*/

let quantity = 0;

//? Pura!
function calc(numA, numB) {

   quantity++ //[] efeitos colaterais observáveis
	return numA + numB;
}


console.log(quantity);
console.log(calc(463, 123));
console.log(calc(463, 123));
console.log(calc(463, 123));
console.log(calc(463, 123));
console.log(quantity);
