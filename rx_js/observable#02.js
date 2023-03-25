const { Observable } = require('rxjs')

const observer = Observable.create(subscriber => {
	subscriber.next("RxJS")
	subscriber.next("is")
	subscriber.next("very")
	subscriber.next("powerful")

	if (Math.random > 0.5) {
		subscriber.complete()
	} else {
		subscriber.error('We have a problem!')
	}
})

// observer.subscribe(
// 	value => console.log(`Value is: ${value}`),
// 	erro => console.log(`Error: ${erro}`),
// 	() => console.log("End!")
// )

console.log("<| --------- ---------|>")
observer.subscribe({
	next(value) {
		console.log(`Value is: ${value}`)
	},
	error(message) {
		console.log(`Error: ${message}`)
	},
	complete() {
		console.log("End!")
	}
})

