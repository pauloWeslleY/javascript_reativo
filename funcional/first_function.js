/*
   ? Diz-se que uma linguagem de programação possui
   ? funções de primeira classe quando funções nessa,
   ? linguagem são tratadas como qualquer outra variável.
*/

const X = 3
const Y = function (text) {
	return `This is text: ${text}`
};

const Z = () => console.log('Hey!')

console.log(X)
console.log(Y('Hello'))
Z()