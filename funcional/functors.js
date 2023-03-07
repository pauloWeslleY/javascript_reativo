/*

   ! Functors são objetos que implementam a função MAP
   ! que também é um "wrapper" de um valor

*/

// [] Array é um exemplo de functors
const nums = [1, 2, 3, 4, 5, 6]
const newNumbers = nums
   .map(el => el + 10)
   .map(el => el * 2)

console.log(nums, newNumbers)


function TypeSave(value) {
   return {
      value,
      isValid() {
        return this.value === null || this.value === undefined
      },
      map(fn) {

         if (this.isValid()) {
            return TypeSave(null)
         } else {
            const newValue = fn(this.value)
            return TypeSave(newValue)
         }
      },
      flatMap(fn) {
         return this.map(fn).value
      },
   }
}


const origin = 'This is text!'
const result = TypeSave(origin)
   .map(text => text.toUpperCase())
   .map(text => `${text}!!`)
   .flatMap(text => text.split("").join(" "))


console.log(origin, result)

