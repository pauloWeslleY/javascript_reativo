/*
   [] Paradigma Imperativo vs Paradigma Declarativo
*/

const note = [8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0];

//! Paradigma Imperativo
function average(note) {
	let all = 0;

	for (let i = 0; i < note.length; i++) {
		all += note[i];
	}

	return all / note.length;
}

const averageClass = average(note);
console.log(`This Average is: ${averageClass}`);

//! Paradigma Declarativo
const sum = (a, b) => a + b;
const divide = (a, b) => a / b;

const averageClassB = divide(note.reduce(sum), note.length);

console.log(`This Average B is: ${averageClassB}`);

o