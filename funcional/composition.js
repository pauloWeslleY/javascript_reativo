
function composition(...fns) {
   return function (value) {
      return fns.reduce((acc, fn) => {
         return fn(acc)
      }, value)
   }
}

function scream(text) {
   return text.toUpperCase()
}

function toEmphasize(textValue) {
   return `${textValue}!!!`
}

function toSlow(textValue) {
   return textValue.split('').join(' ')
}

const resultOne = composition(
   scream,
   toEmphasize,
   toSlow
)

const resultTwo = composition(
   scream,
   toEmphasize,
)

const results = resultOne('Stop')
const results1 = resultTwo('Take Care!')

console.log(results)
console.log(results1)