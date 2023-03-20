const readline = require('readline');

function toObtainResponse(question) {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	return new Promise(resolve => {
		rl.question(question, response => {
			resolve(response);
			rl.close();
		});
	});
}

//[] Observer
function toGirlFriend() {
	setTimeout(() => {
		console.log('Girlfriend: turn off the lights!');
		console.log('Girlfriend: ask to silence...');
		console.log('Girlfriend: surprise!');
	}, 1000);
}

//[] Observer
function toTrustee(event) {
	setTimeout(() => {
      console.log('Trustee: you can see that!');
      console.log(`Trustee: event info ==> ${event.response}`)
      console.log(`Trustee: event info ==> ${event.date}`)
	}, 1000);
}
-
//[] Subject
async function toConcierge(interested) {
	while (true) {
		const response = await toObtainResponse('your girlfriend is coming? (yes/NO/goOut): ');

      if (response.toLowerCase() === 'yes') {
         //[] os observadores são notificados
			(interested || []).forEach(obs => obs({response, date: Date.now()}));
		} else if (response.toLowerCase() === 'goOut' || "goout") {
			break;
		}
	}
}

/*
   [] Chamada da Função ==> Registra os dois observadores!
   [] Os observadores são: [toGirlFriend, toTrustee]
*/
toConcierge([toGirlFriend, toTrustee]);
