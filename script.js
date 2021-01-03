const $numbers = $('.number');
const $operators = $('.operator')
const $numberAreaOne = $('.numberAreaOne');
const $numberAreaTwo = $('.numberAreaTwo');
const $operatorArea = $('.operatorArea');
const $equal = $('.equal');
const $clear = $('.clear');

const $outputDisplay = $('.outputDisplay');

let numberAreaOneArray = [];
let numberOne = null;
let numberAreaTwoArray = [];
let numberTwo = null;
let operatorValue = '';
let output = null;



// Number Buttons Event Listener
$numbers.on('click', (event) => {
    event.preventDefault();

    if (output === null) {
        if (operatorValue === '') {
            if (numberAreaOneArray.length > 10) {
                return
            } else {
                numberAreaOneArray.push(event.target.value);
            }
            numberOne = numberAreaOneArray.join('')
            $numberAreaOne.text(numberOne);
        } else {
            if (numberAreaTwoArray.length > 10) {
                return
            } else {
                numberAreaTwoArray.push(event.target.value);
            }
            numberTwo = numberAreaTwoArray.join('')
            $numberAreaTwo.text(numberTwo);
        }
    } else {
        return;
    }
});



// Operator Buttons Event Listener
$operators.on('click', (event) => {
    event.preventDefault();
    operatorValue = event.target.value;
    $operatorArea.html(event.target.value);
});



// Clear Button
$clear.on('click', (event) => {
    event.preventDefault();
    numberAreaOneArray = [];
    numberOne = null;
    numberAreaTwoArray = [];
    numberTwo = null;
    operatorValue = '';
    output = null;
    $numberAreaOne.text(numberOne);
    $numberAreaTwo.text(numberTwo);
    $operatorArea.text(operatorValue);
    $outputDisplay.text(output);
});



// Calculator Delegator
$equal.on('click', (event) => {
    event.preventDefault();
    if (operatorValue === '+') {
        add();
    } else if (operatorValue === '-') {
        subtract();
    } else if (operatorValue === '/') {
        divide();
    } else if (operatorValue === 'x') {
        multiply();
    } else if (operatorValue === '**') {
        square();
    } else if (operatorValue === '%') {
        percentage();
    } else if (operatorValue === 'mod') {
        modulo();
    }
});



// Calculator Function (Add)
const add = () => {
    output = (parseFloat(numberOne) + parseFloat(numberTwo));
    $outputDisplay.text(output);
}



// Calculator Function (Subtract)
const subtract = () => {
    output = (parseFloat(numberOne) - parseFloat(numberTwo));
    $outputDisplay.text(output);
}



// Calculator Function (Divide)
const divide = () => {
    output = (parseFloat(numberOne) / parseFloat(numberTwo));
    $outputDisplay.text(output);
}



// Calculator Function (Multiply)
const multiply = () => {
    output = (parseFloat(numberOne) * parseFloat(numberTwo));
    $outputDisplay.text(output);
}



// Calculator Function (Square)
const square = () => {
    output = (parseFloat(numberOne) ** parseFloat(numberTwo));
    $outputDisplay.text(output);
}



// Calculator Function (Percentage)
const percentage = () => {
    output = ((parseFloat(numberOne) / parseFloat(numberTwo)) * 100);
    $outputDisplay.text(output);
}



// Calculator Function (Modulo)
const modulo = () => {
    output = (parseFloat(numberOne) % parseFloat(numberTwo));
    $outputDisplay.text(output);
}







