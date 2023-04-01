const path = require('path');
const fns = require('./utils');
const _ = require('lodash');
const { toArray, map } = require('rxjs/operators');

const paths = path.join(__dirname, 'legendas');

const symbols = [
	'.', '?', '-', ',', '"', '♪', '_', '!',
	'<i>', '</i>', '\r', '[', ']', '(', ')'
];

fns.readDirectory(paths)
	.pipe(
		fns.elementsFinishedWith('.srt'),
		fns.readingFiles(),
		fns.separateTextFor('\n'),
		fns.removeElementsIfEmpty(),
		fns.removeElementsIfInitWithNumber(),
		fns.removeAllSymbols(symbols),
		fns.separateTextFor(' '),
		fns.removeElementsIfEmpty(),
		fns.removeElementsIfInitWithNumber(),
		toArray(),
		fns.groupElements(),
		map(arr => _.sortBy(arr, el => -el.quantity))
	)
	.subscribe(console.log);
