document.getElementById('calculate-button').onclick= function() {
	// coletar números dentro das caixas de imput
	let elem1 = document.getElementById('elem-1');
	let elem2 = document.getElementById('elem-2');
	

	let val1 = parseInt(elem1.value);
	let val2 = parseInt(elem2.value);

	let choice = document.querySelector('input[name="operation"]:checked');
	let operation = choice.value;
	let operationResult = getresult(val1, val2, operation);

	let resultElement = document.getElementById('result');
		resultElement.innerHTML = operationResult;
}

/**
	*returns the result of an operation over two numbers.
	* Arguments: two number and one operation symbol.
	*Suports sum, subtraction, multiplication and division
	*/
function getresult(val1, val2, operation) {
	if(operation ==='+') {
		return val1 + val2;
	} else if(operation === '-') {
		return val1 - val2;
	} else if(operation === '*') {
		return val1 * val2;
	} else if(operation === '/') {
		return val1 / val2;
	}
}
