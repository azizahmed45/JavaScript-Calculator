var allButtons = document.querySelectorAll('.button');
var previousNumber = 0;
var currentNumber = 0;
var currentOperator;

allButtons.forEach((button) => {
	button.addEventListener('click', getInput);
});

function getInput(event) {
	var input = event.target.id;

	if (Number(input)) {
		currentNumber = currentNumber * 10 + Number(input);
		showCurrent();
	} else {
		if (input == 'plus' || input == 'minus' || input == 'multiply' || input == 'divide') {
			clearCurrent();
			currentOperator = input;
		} else if (input == 'equal') {
			calculate();
			showCurrent();
		}
	}
}

function calculate() {
	var result = 0;
	if ((input = 'plus')) {
		result = previousNumber + currentNumber;
	} else if ((input = 'minus')) {
		result = previousNumber - currentNumber;
	} else if ((input = 'multiply')) {
		result = previousNumber * currentNumber;
	} else if ((input = 'divide')) {
		result = previousNumber / currentNumber;
	}

	currentNumber = result;
	showCurrent();
}

function clearCurrent() {
	previousNumber = currentNumber;
	currentNumber = 0;
}

function showCurrent() {
	var display = document.getElementById('display');

	display.innerHTML = currentNumber;
}
