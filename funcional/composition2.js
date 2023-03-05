
function composition(...fns) {
   return function (value) {
      return fns.reduce(async (acc, fn) => {
         if (Promise.resolve(acc) === acc) {

            return fn(await acc)

         } else {

            return fn(acc)

         }
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
   return new Promise(resolve => {
      setTimeout(() => {

         resolve(textValue.split('').join(' '))

      }, 3000)
   })
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

resultOne('Stop').then(console.log)

resultTwo('Take Care!').then(console.log)

