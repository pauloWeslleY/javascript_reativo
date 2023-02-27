const fs = require('fs');
const path = require('path');

function readDirectory(paths) {
	return new Promise((resolve, reject) => {
		try {
			const files = fs.readdirSync(paths).map(file => path.join(paths, file));
			resolve(files);
		} catch (err) {
			reject(err);
		}
	});
}

function readingOnFile(paths) {
	return new Promise((resolve, reject) => {
		try {
			const content = fs.readFileSync(paths, { encoding: 'utf-8' });
			resolve(content.toString());
		} catch (error) {
			reject(error);
		}
	});
}

function readingFiles(paths) {
	return Promise.all(paths.map(path => readingOnFile(path)));
}

function elementsFinishedWith(defaultText) {
	return function (array) {
		return array.filter(el => el.endsWith(defaultText));
	};
}

function removeIfEmpty(array) {
	return array.filter(el => el.trim());
}

function removeIfInclude(defaultText) {
	return function (array) {
		return array.filter(el => !el.includes(defaultText));
	};
}

function removeIfJustNumber(array) {
	return array.filter(numbers => {
		const number = parseInt(numbers.trim());
		return !(number != 0 && !!number);
		// return number !== number;
	});
}

function removeSymbols(symbols) {
	return function (array) {
		return array.map(el => {
			return symbols.reduce((acc, symbol) => {
				return acc.split(symbol).join('');
			}, el);
		});
	};
}

function groupWords(word) {
	return Object.values(
		word.reduce((group, word) => {
			const words = word.toLowerCase();
			const quantity = group[words] ? group[words].quantity + 1 : 1;

			group[words] = { word: words, quantity };

			return group;
		}, {}),
	);
}

function orderForAtributesNumeric(attr, order = 'orderCrescent') {
	return function (arr) {
		const orderCrescent = (o1, o2) => o1[attr] - o2[attr];
		const orderDecrescent = (o1, o2) => o2[attr] - o1[attr];

		return [...arr].sort(order === 'orderCrescent' ? orderCrescent : orderDecrescent);
	};
}

function contentTogether(content) {
	return content.join(' ');
}

function separateTextFor(symbol) {
	return function (text) {
		return text.split(symbol);
	};
}

module.exports = {
	readDirectory,
	readingOnFile,
	readingFiles,
	elementsFinishedWith,
	removeIfEmpty,
	removeIfInclude,
	removeIfJustNumber,
	removeSymbols,
	contentTogether,
	separateTextFor,
	groupWords,
	orderForAtributesNumeric,
};
