function textWithSizeBetween(min) {
	return function (max) {
		return function (err) {
			return function (text) {
				//* Lazy Evaluation
				const size = (text || '').trim().length

				if (size < min || size > max) {
					throw err;
				}
			}
		}
	}
}

function applyValidation(fn) {
	return function (value) {
		try {
			fn(value)
		} catch (err) {
			return { error: err }
		}
	}
}

const forceSizeDefault = textWithSizeBetween(4)(255)
const forceNameProductValid = forceSizeDefault('Name product is invalid!')
const validNameProduct = applyValidation(forceNameProductValid)

const product1 = { name: 'A', price: 14.99, desc: 0.25 }
const product2 = { name: 'AB', price: 14.99, desc: 0.25 }
console.log(validNameProduct(product1.name))
console.log(validNameProduct(product2.name))

