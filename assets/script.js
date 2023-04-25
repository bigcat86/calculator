let calcArr = [2, '*', 4, '+', 6];

let newCalcArr = [];

function createArray() {
    for (let i = 0; i < calcArr.length; i++) {
        newCalcArr.push(calcArr[i]);
    }
}
createArray();

function multiply(num1, num2) {
    num1 * num2;
}

function add(num1, num2) {
    num1 * num2;
}

function calculate() {
    for (let i = 0; i < newCalcArr.length; i++) {
        if (i === '*') {
            multiply(num1, num2);
        }else if (i === '+') {
            add(num1, num2);
        }
        
    }
}
calculate();

console.log(newCalcArr.join(''));