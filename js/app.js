// for generating random pin

function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pintString = pin + '';
    if (pintString.length == 4) {
        return pin;
    }
    else {
        // console.log('You have got a three digit pin', pin);
        return getPin();
    }
}


function generatePin() {
    const pin = getPin();
    const pinDisplay = document.getElementById('display-pin');
    pinDisplay.value = pin;
}

// for calculator second image
document.getElementById('key-pad').addEventListener('click', function (event) {
    const numbers = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(numbers)) {
        // console.log(numbers);
        if (numbers == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousInputValue = calcInput.value;
        const newInputValue = previousInputValue + numbers;
        calcInput.value = newInputValue;
    }
})

// matching pin and submit button usage
function verifyPin() {
    const generatedPin = document.getElementById('display-pin').value;
    const typedCalc = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failedMessage = document.getElementById('notify-fail');
    if (generatedPin == typedCalc) {
        // console.log('yayy');
        successMessage.style.display = 'block';
        failedMessage.style.display = 'none';

    }
    else {
        // console.log('oh noooo');
        successMessage.style.display = 'none';
        failedMessage.style.display = 'block';
    }
}