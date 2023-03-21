function generateElements(array) {
	return {
		init(fn) {
			let index = 0;

			const interval = setInterval(() => {
				if (index >= array.length) {
					clearInterval(interval);
				} else {
					fn(array[index]);
					index++;
				}
			}, 1000);

			return {
				stop() {
					clearInterval(interval);
				},
			};
		},
	};
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const timer = generateElements(numbers);

const subscriber = timer.init(num => {
	console.log(Math.pow(2, num));
});

setTimeout(() => {
	subscriber.stop();
}, 4000);

generateElements([
   ['Harry', 'Barry', 'Cisco'],
   ['Joe', 'Wally', 'Sing'],
   [1, 2, 3]
])
   .init(console.log)