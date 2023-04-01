const fs = require('fs');
const path = require('path');
const { Observable } = require('rxjs');

function readDirectory(paths) {
	return new Observable(subscriber => {
		try {
			fs.readdirSync(paths).forEach(file => {
				subscriber.next(path.join(paths, file));
			});
			subscriber.complete();
		} catch (err) {
			subscriber.error(err);
		}
	});
}

function readingFiles() {
	return createPipeableOperator(subscriber => ({
		next(paths) {
			try {
				const content = fs.readFileSync(paths, {
					encoding: 'utf-8'
				});
				subscriber.next(content.toString());
			} catch (err) {
				subscriber.error(err);
			}
		}
	}));
}

function elementsFinishedWith(defaultText) {
	return createPipeableOperator(subscriber => ({
		next(text) {
			if (text.endsWith(defaultText)) {
				subscriber.next(text);
			}
		}
	}));
}

function removeElementsIfEmpty() {
	return createPipeableOperator(subscriber => ({
		next(text) {
			if (text.trim()) {
				subscriber.next(text);
			}
		}
	}));
}

function removeElementsIfInitWithNumber() {
	return createPipeableOperator(subscriber => ({
		next(text) {
			const number = parseInt(text.trim());
			if (number != number) {
				subscriber.next(text);
			}
		}
	}));
}

function removeAllSymbols(symbols) {
	return createPipeableOperator(subscriber => ({
		next(text) {
			const textWithSymbols = symbols.reduce((acc, symbol) => {
				return acc.split(symbol).join('');
			}, text);
			subscriber.next(textWithSymbols);
		}
	}));
}

function groupElements() {
	return createPipeableOperator(subscriber => ({
		next(words) {
			const grouped = Object.values(
				words.reduce((group, word) => {
					const words = word.toLowerCase();
					const quantity = group[words] ? group[words].quantity + 1 : 1;
					group[words] = { word: words, quantity };
					return group;
				}, {}));
			subscriber.next(grouped);
		}
	}));
}

function separateTextFor(symbol) {
	return createPipeableOperator(subscriber => ({
		next(text) {
			text.split(symbol).forEach(subs => {
				subscriber.next(subs);
			})
		}
	}));
}

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

module.exports = {
	readDirectory,
	readingFiles,
	elementsFinishedWith,
	removeElementsIfEmpty,
	removeElementsIfInitWithNumber,
	removeAllSymbols,
	separateTextFor,
	groupElements,
};
