function textWithWidth(min, max, erro, text) {
	const width = (text || '').trim().length;

	if (width < min || width > max) {
		throw erro;
	}
}

const product1 = { name: 'Pencil', price: 14.99, desc: 0.25 };
textWithWidth(4, 455, 'name invalid', product1.name)
