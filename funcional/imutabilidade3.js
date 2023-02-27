const people = Object.freeze({
	name: 'John',
	height: 1.76,
   city: 'San Francisco',
   address: Object.freeze({
      street: '5° with Journey'
   })
});

//! Atribuição por Referência
const anotherPerson = people

//! Passagem por Referência
function changePerson(people) {
   const newPeople = {...people}

	newPeople.name = 'Joe';
   newPeople.city = 'New York';
   newPeople.address.street = 'Time Square';

   return newPeople
}

const newPerson = changePerson(people)
console.log(people)
console.log(newPerson)


let x = 3
let y = x // atribuição por valor (copia!)

x++
y--

console.log(x, y);