const $numbers = $('.number');
const $operators = $('.operator')
const $numberAreaOne = $('.numberAreaOne');
const $numberAreaTwo = $('.numberAreaTwo');
const $operatorArea = $('.operatorArea');
const $equal = $('.equal');
const $clear = $('.clear');

let numberAreaOneArray = [];
let numberOne;
let numberAreaTwoArray = [];
let numberTwo;
let operatorValue = '';



// Number Buttons Event Listener
$numbers.on('click', (event) => {
    event.preventDefault();

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
});



// Operator Buttons Event Listener
$operators.on('click', (event) => {
    event.preventDefault();
    operatorValue = event.target.value;
    $operatorArea.html(event.target.value);
});



// Calculate Button





