const isLetterNesting = [
   ['H', 'e', 'l', 'l', 'o',],
   [' '],
   ['w', ['o', 'r',], 'l', 'd', '!']
]

const isLetter = isLetterNesting.flat(Infinity)

const result = isLetter
   .flatMap(letter => [letter, ','])
   // .reduce((a, b) => a + b)

console.log(result)