const { from, Observable } = require('rxjs')

function createPipeableOperator(operatorGeneratorFunction) {
	return function (source) {
		return Observable.create(subscriber => {
			const subscriberObject = operatorGeneratorFunction(subscriber)
			source.subscribe({
				next: subscriberObject.next,
				error: subscriberObject.error || (e => subscriber.error(e)),
				complete: subscriberObject.complete || (e => subscriber.complete(e)),
			})
		})
	}
}

function isFirstGenerator() {
	return createPipeableOperator(function (subscriber) {
		return {
			next(value){
				subscriber.next(value)
				subscriber.complete()
			}
		}
	})
}

//* [WITH ARROW FUNCTION]
function isAnywhereGenerator() {
	return createPipeableOperator(subscriber => ({
		next(value) {
			console.log('Anywhere...')
			subscriber.complete()
		}
	}))
}

function isLastGenerator() {
	let last
	return createPipeableOperator(subscriber => ({
		next(value) {
			last = value
		},
		complete() {
			if (last !== undefined) {
				subscriber.next(last)
			}
			subscriber.complete()
		}
	}))
}

from([1, 2, 3, 4, 5])
	.pipe(
		// isFirstGenerator(),
		// isAnywhereGenerator(),
		isLastGenerator()
	)
	.subscribe(console.log)