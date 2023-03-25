const { Observable } = require('rxjs')

const promise = new Promise(resolve => {
	resolve('Promise is nice!')
})

promise.then(console.log)

const obs = new Observable(subscriber => {
	subscriber.next('Observable')
	subscriber.next('that')
	setTimeout(() => {
		subscriber.next('nice!')
		subscriber.complete()
	}, 1000);
})

obs.subscribe(console.log)
obs.subscribe(text => console.log(text.toUpperCase()))