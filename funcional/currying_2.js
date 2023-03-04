function textWithWidth(min) {
	return function (max) {
		return function (err) {
			return function (text) {
				//* Lazy Evaluation
				const width = (text || '').trim().length;

				if (width < min || width > max) {
					throw err;
				}
			};
		};
	};
}


const forceWidthDefault = textWithWidth(4)(455);
const forceNameProductValid = forceWidthDefault('name product invalid!')

const product1 = { name: 'A', price: 14.99, desc: 0.25 };
forceNameProductValid(product1.name)
