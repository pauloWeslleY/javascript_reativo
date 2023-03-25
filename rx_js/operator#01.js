
//* Os dois tipos...

//! 1. Operadores de criação
const { from, of } = require('rxjs')

//! 2. Operadores Encadeáveis (Pipeable Op.)
const { last, map } = require('rxjs/operators')

const observables = of(1, 2, 'Iris', false, 'Joe')

observables.subscribe(function (value) {
	console.log(`This value is ${value}`)
})

console.log("== == == == === === === === === == == == ==")
from([1, 2, 'Barry', false, 'lastTime'])
	.pipe(
		last(),
		map(value => value[0]),
		map(value => `this letter find out was: ${value}`),
	)
	.subscribe(function (value) {
		console.log(`This value is ${value}`)
	})


