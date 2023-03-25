const { interval } = require("rxjs");

const generateNumbers = interval(500);

const sub = generateNumbers.subscribe((number) => {
	console.log(Math.pow(2, number));
});

const sub2 = generateNumbers.subscribe(console.log);

setTimeout(() => sub.unsubscribe(), 8000);
setTimeout(() => sub2.unsubscribe(), 6000);

