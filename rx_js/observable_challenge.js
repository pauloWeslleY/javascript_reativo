/*
	! desafio!
	! Criar uma stream de números
	! entre o min e o max com Observable
*/

const { Observable, noop } = require('rxjs')

const result = new Observable(subs => {
	for (let index = 0; index <= 10; index++) {
		console.log("number", index);
	}
	subs.complete()
})

result.subscribe(console.log)


//! Resolution this challenge
function isBetween(min, max) {
	return new Observable(subscriber => {
		Array(max - min).fill().map((_, i) => {
			subscriber.next(min + i)
		})
		subscriber.complete()
	})
}

isBetween(4, 10)
	.subscribe(
		num => console.log(`num: ${num}`),
		noop,
		() => console.log('End!')
	)

