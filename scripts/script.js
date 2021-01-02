'use strict';
var allButtons = document.querySelectorAll('.button');
var previousNumber = '';
var currentNumber = '';
var currentOperator = '';

allButtons.forEach((button) => {
	button.addEventListener('click', getInput);
});

function getInput(event) {
	var input = event.target.id;

	if (!isNaN(input)) {
		currentNumber = currentNumber + input;
		display();
	} else {
		if (input === 'plus' || input === 'minus' || input === 'multiply' || input === 'divide') {
			calculate();
			clearCurrent();
			currentOperator = input;
		} else if (input === 'point' && !currentNumber.includes('.')) {
			currentNumber = currentNumber + '.';
			display();
		} else if (input === 'plus-minus' && currentNumber.length > 0) {
			if (currentNumber.includes('-')) {
				currentNumber = currentNumber.slice(1);
			} else {
				currentNumber = '-' + currentNumber;
			}

			display();
		} else if (input === 'percent' && currentNumber !== '') {
			currentNumber = Number(currentNumber) / 100;
			display();
		} else if (input === 'equal') {
			calculate();
			clearCurrent();
		} else if (input === 'delete') {
			del();
			display();
		} else if (input === 'clear') {
			clear();
			display();
		}
	}
}

function calculate() {
	if (previousNumber !== '') {
		var result;
		var number1 = Number(previousNumber);
		var number2 = Number(currentNumber);
		if (currentOperator === 'plus') {
			result = number1 + number2;
		} else if (currentOperator === 'minus') {
			result = number1 - number2;
		} else if (currentOperator === 'multiply') {
			result = number1 * number2;
		} else if (currentOperator === 'divide') {
			result = number1 / number2;
		}

		currentNumber = Number(result).toString();

		display();
	}
}

function clearCurrent() {
	previousNumber = currentNumber;
	currentNumber = '';
}

function display() {
	var display = document.getElementById('display');

	display.innerHTML = currentNumber;
}

function del() {
	currentNumber = currentNumber.slice(0, -1);
}

function clear() {
	previousNumber = '';
	currentNumber = '';
	currentOperator = '';
}
