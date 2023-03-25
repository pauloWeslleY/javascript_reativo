const path = require('path');
const fns = require('./utils');

const paths = path.join(__dirname, 'legendas');

const symbols = ['.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')'];

const readPaths = fns.composition(
	fns.readDirectory,
	fns.elementsFinishedWith('.srt'),
	fns.readingFiles,
	fns.contentTogether,
	fns.separateTextFor('\n'),
	fns.removeIfEmpty,
	fns.removeIfInclude('-->'),
	fns.removeIfJustNumber,
	fns.removeSymbols(symbols),
	fns.contentTogether,
	fns.separateTextFor(' '),
   fns.removeIfEmpty,
   fns.removeIfJustNumber,
	fns.groupWords,
	fns.orderForAtributesNumeric('quantity', 'orderDecrescent'),
)

readPaths(paths).then(console.log)


