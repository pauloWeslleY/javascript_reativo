const { Observable } = require('rxjs')

function isElementsWithDelay(time, ...elements) {
	return Observable.create(subscriber => {
		(elements || []).forEach((el, i) => {
			setTimeout(() => {
				subscriber.next(el)

				if (elements.length  === i + 1) {
					subscriber.complete()
				}
			}, time * (i + 1))
		})
	})
}

isElementsWithDelay(1000, 1, 'Allegra', 3, false, 5, [1, 2, 3])
	.subscribe(console.log)