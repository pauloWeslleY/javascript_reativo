/*
   ! Funções que operam em outras funções,
   ! tomando-as como argumentos ou retornando-as,
   ! são chamadas de higher-order functions.
*/

function exe(fn, ...params) {
	return function (textInit) {
		return `${textInit} ${fn(...params)}!`;
	};
}

function sum(a, b, c) {
	return a + b + c;
}

function multi(a, b) {
	return a * b;
}

const results = exe(sum, 4, 2, 2)('The result sum is')
const results1 = exe(multi, 45, 2)('The result multiply is')

console.log(results);
console.log(results1);
