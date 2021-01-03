const $numbers = $('.number');
const $operators = $('.operator')
const $numberAreaOne = $('.numberAreaOne');
const $numberAreaTwo = $('.numberAreaTwo');
const $operatorArea = $('.operatorArea');

let numberAreaOneArray = [];
let operatorValue = '';

// Number Buttons Event Listener
$numbers.on('click', (event) => {
    event.preventDefault();

    if (numberAreaOneArray.length > 10) {
        return
    } else {
        numberAreaOneArray.push(event.target.value);
    }

    if (operatorValue === '') {
        $numberAreaOne.text(numberAreaOneArray.join(''));
    } else {
        $numberAreaTwo.text(numberAreaOneArray.join(''));
    }
});



// Operator Buttons Event Listener
$operators.on('click', (event) => {
    event.preventDefault();
    $operatorArea.html(event.target.value);
    console.log($operatorArea);
});




