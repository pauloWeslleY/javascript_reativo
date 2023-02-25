/*
   ! Função pura é uma função em que o valor
   ! de retorno é determinado apenas por seus valores
   ! de entrada, sem efeitos colaterais observáveis
*/

const PI = 3.141592;

//[] Impura - Porque o PI é uma valor externo!
function areaCirc(bolt) {
   return bolt * bolt * Math.PI; // estável
}

console.log(areaCirc(10));
console.log(areaCirc(10));
console.log(areaCirc(10));


//[] Pura - Porque o PI é uma valor externo!
function areaCircPure(bolt, PI) {
   return bolt * bolt * PI;
}

console.log(areaCircPure(10, 3.14));
console.log(areaCircPure(10, 3.141592));
console.log(areaCircPure(10, Math.PI));
