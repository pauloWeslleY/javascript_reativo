//* esperar 3000 mili-segundos
//* gerar números de 500 em 500 mili-segundos
//* depois de 10segundos unsubscribe

const { timer, Subscription } = require('rxjs')

const isObservable = timer(3000, 500)
const isResultObservable = isObservable.subscribe(numbers => {
	console.log(`#1 Generate this number: ${numbers}`)
})

const isResultObservable2 = isObservable.subscribe(numbers => {
	console.log(`#2 Generate this number: ${numbers}`)
})

const isSubscription = new Subscription()

isSubscription.add(isResultObservable)
isSubscription.add(isResultObservable2)

setTimeout(() => {
	isSubscription.unsubscribe()
}, 5000)