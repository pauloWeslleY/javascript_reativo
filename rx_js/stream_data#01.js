function generateNumbers() {
	return {
		init(fn, time = 1000) {
			let num = 0;

			const int = setInterval(() => {
				fn(num++);
         }, time);

         return {
            stop() {
               clearInterval(int)
            }
         }
		},
	};
}

const temp1 = generateNumbers();
const temp2 = generateNumbers();

const exec1 = temp1.init(number => {
	console.log(`#1: ${number * 2}`);
}, 2000);

const exec12 = temp1.init(number => {
	console.log(`#12: ${number * 2}`);
}, 500);

const exec2 = temp2.init(numA => {
	console.log(`#2: ${numA + 100}`);
}, 1000);


setTimeout(() => {
   exec1.stop()
   exec2.stop()
}, 10000)

setTimeout(() => {
   exec12.stop()
},12000)