const path = require('path');
const fns = require('./utils');

const paths = path.join(__dirname, 'legendas');

const symbols = ['.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')'];


fns.readDirectory(paths)
	.then(fns.elementsFinishedWith('.srt'))
	.then(fns.readingFiles)
	.then(fns.contentTogether)
	.then(fns.separateTextFor('\n'))
	.then(fns.removeIfEmpty)
	.then(fns.removeIfInclude('-->'))
	.then(fns.removeIfJustNumber)
	.then(fns.removeSymbols(symbols))
	.then(fns.contentTogether)
	.then(fns.separateTextFor(' '))
   .then(fns.removeIfEmpty)
   .then(fns.removeIfJustNumber)
	.then(fns.groupWords)
	.then(fns.orderForAtributesNumeric('quantity', 'orderDecrescent'))
	.then(console.log);
