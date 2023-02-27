
function order(arr) {
   return [...arr].sort((a, b) => a - b)
}

const num = [2, 1, 3, 54, 76, 68]
// num[0] = 2300
// num.sort()

const orderNumber = order(num)
console.log(num, orderNumber)


const partNumbers = num.slice(2)
console.log(partNumbers, num)