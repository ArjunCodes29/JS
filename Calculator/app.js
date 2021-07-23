const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const add = document.getElementById('add');
const substract = document.getElementById('substract');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

const enter = document.getElementById('enter');
const dlt = document.getElementById('delete');

const display = document.getElementById('display');

const button = document.querySelectorAll(".button")

var x = [];
var y = [];
var operation = String();
var x_num = Number();
var y_num = Number();
let vardisplay = [];

function displayscreen(variable) {
    display.textContent = variable;
};

function compute() {
    console.log(typeof operation)
    if (operation= "*") {
        answermultiply = x_num * y_num;
        console.log(answermultiply)
        display.textContent = answermultiply;
    }
    if (operation= "/") {
        answerdivide = x_num / y_num;
        console.log(answerdivide)
        displayscreen(answerdivide);
    }
    if (operation= "-") {
        answersubstract = x_num - y_num;
        console.log(answersubstract)
        displayscreen(answersubstract);
    }
    if (operation= "+") {
        answeradd = x_num+ y_num;
        console.log(answeradd)
        displayscreen(answeradd);
    }
}

var confirm_123 = 10;

// Getting x
one.addEventListener('click', function () {
    if (confirm_123 > 5) {
        x.push(1);
        x_num = +x.join("")

        vardisplay.push(x_num);
        displayscreen(vardisplay)
       
    } else {
        y.push(1);
        y_num = +y.join("")
        vardisplay.push(y_num);
        displayscreen(vardisplay)
        enter.addEventListener('click', function () {
            compute()
        });
    }
});





// getting operation
multiply.addEventListener('click', function () {
    operation = "*";
    vardisplay.push(operation)
    displayscreen(vardisplay);
    confirm_123 = confirm_123 - 10;

});
divide.addEventListener('click', function () {
    operation = "/";
    vardisplay.push(operation)
    displayscreen(vardisplay);
    confirm_123 = confirm_123 - 10;

});
add.addEventListener('click', function () {
    operation = "+";
    vardisplay.push(operation)
    displayscreen(vardisplay);
    confirm_123 = confirm_123 - 10;


});
substract.addEventListener('click', function () {
    operation = "-";
    vardisplay.push(operation)
    displayscreen(vardisplay);
    confirm_123 = confirm_123 - 10;



});