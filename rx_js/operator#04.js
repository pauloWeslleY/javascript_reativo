const { from, Observable } = require('rxjs')

function isFirst() {
	return function (source) {
		return Observable.create(subs => {
			source.subscribe({
				next(value) {
					subs.next(value)
					subs.complete()
				}
			})
		})
	}
}

function isAnywhere() {
	return function (source) {
		return Observable.create(subs => {
			source.subscribe({
				next(value) {
					subs.complete()
				}
			})
		})
	}
}


function isLast() {
	return function (source) {
		return Observable.create(subs => {
			let last

			source.subscribe({
				next(value) {
					last = value
				},
				complete() {
					if (last !== undefined) {
						subs.next(last)
					}
					subs.complete()
				}
			})
		})
	}
}

from([1, 2, 3, 4, 5])
	.pipe(
		// isFirst(),
		// isAnywhere(),
		isLast()
	)
	.subscribe(console.log)