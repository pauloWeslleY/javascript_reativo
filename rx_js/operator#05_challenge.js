const { of, Observable } = require('rxjs')

function endItWith(partFinal) {
	return function (source) {
		return Observable.create(sub => {
			source.subscribe({
				next(value) {
					if (Array.isArray(value)) {
						sub.next(
							value.filter(el => el.endsWith(partFinal))
						)
					} else if (value.endsWith(partFinal)) {
						sub.next(value)
					}
				},
				error(e) {
					sub.error(e)
				},
				complete() {
					sub.complete()
				}
			})
		})
	}
}

of(['Barry Allen', 'Harry Wells', 'Cisco Ramon', 'Harrison Wells'])
	.pipe(endItWith('ls'))
	.subscribe(console.log)