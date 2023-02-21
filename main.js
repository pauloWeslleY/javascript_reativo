function waitingFor(time) {
	const future = Date.now() + time;
	while (Date.now() < future) {}
}

setInterval(() => console.log('After #01'), 400);
setTimeout(() => {
	waitingFor(3000);
	console.log('After #02');
}, 300);

waitingFor(5000);
console.log('End is here!');

function int5() {
	console.log('timeout');
}

function int4() {
	int5();
}

function int3() {
	setTimeout(() => int4(), 3000);

	console.log('int3 is Here!');
}

function int2() {
	int3();
}

function int1() {
	int2();
}

function main() {
	int1();
}

main();
console.log('End is here!!');
