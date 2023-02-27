const x = 3;

function outThere() {
	const x = 97;

	function sumXMore3() {
		return x + 3;
	}

	return sumXMore3;
}

module.exports = outThere();
