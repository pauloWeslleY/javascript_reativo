const { Observable, Subject } = require('rxjs')

function getObservableHandle() {
	return new Observable(subscriber => {
		setTimeout(() => {
			console.log('#01 Observable!')
			subscriber.next(Math.random())
			subscriber.complete()
		}, 1000)
	})
}

const isResultObservable = getObservableHandle()
isResultObservable.subscribe(console.log)
isResultObservable.subscribe(console.log)

function getSubjectHandle() {
	const isSubject = new Subject()
	setTimeout(() => {
		console.log('#02 Subject!')
		isSubject.next(Math.random())
		isSubject.complete()
	}, 1000)
	return isSubject
}

const isResultSubject = getSubjectHandle()
isResultSubject.subscribe(console.log)
isResultSubject.subscribe(console.log)
