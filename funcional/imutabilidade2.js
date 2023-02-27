const numbers = [4, 8, 3, 2, 9, 1, 9, 3]


//? #1 Dados mutáveis
let all = 0

for (let i = 0; i < numbers.length; i++) {
   all += numbers[i]
}

console.log(all);
console.log('=== === === === === === === === === === === === === === ===');


//? #2 Reduce
const sum = (x, y) => x + y
const all2 = numbers.reduce(sum)
console.log(all2);
console.log('=== === === === === === REDUCE === === === === === === === ===');


//* #3 Recursividade
function sumArr(arr, all = 0) {
   if (arr.length === 0) {
      return all
   }
   return sumArr(arr.slice(1), all + arr[0])
}

const resultAll = sumArr(numbers)
console.log(resultAll);