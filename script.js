let calculator = document.createElement("div");
calculator.setAttribute("class","calculator");


let calc_0 = document.createElement("div");
calc_0.setAttribute("class","result");
calc_0.setAttribute("id","result");
calc_0.innerText=("0");

let buttons_1 = document.createElement("div");
buttons_1.setAttribute("class","buttons");

let button_clear = document.createElement("button");
button_clear.setAttribute("id","clear");
button_clear.innerText=("C");

let button_del = document.createElement("button");
button_del.setAttribute("id","backspace");
button_del.innerText=("Del");

let button_div = document.createElement("button");
button_div.setAttribute("id","divide");
button_div.innerText=("/");

let button_7 = document.createElement("button");
button_7.setAttribute("id","seven");
button_7.innerText=("7");

let button_8 = document.createElement("button");
button_8.setAttribute("id","eight");
button_8.innerText=("8");

let button_9 = document.createElement("button");
button_9.setAttribute("id","nine");
button_9.innerText=("9");

let button_Mul = document.createElement("button");
button_Mul.setAttribute("id","multiply");
button_Mul.innerText=("*");


let button_4 = document.createElement("button");
button_4.setAttribute("id","four");
button_4.innerText=("4");

let button_5 = document.createElement("button");
button_5.setAttribute("id","five");
button_5.innerText=("5");

let button_6 = document.createElement("button");
button_6.setAttribute("id","six");
button_6.innerText=("6");

let button_minus = document.createElement("button");
button_minus.setAttribute("id","subtract");
button_minus.innerText=("-");

let button_1 = document.createElement("button");
button_1.setAttribute("id","one");
button_1.innerText=("1");

let button_2 = document.createElement("button");
button_2.setAttribute("id","two");
button_2.innerText=("2");

let button_3 = document.createElement("button");
button_3.setAttribute("id","three");
button_3.innerText=("3");

let button_Add = document.createElement("button");
button_Add.setAttribute("id","add");
button_Add.innerText=("+");

let button_0 = document.createElement("button");
button_0.setAttribute("id","zero");
button_0.innerText=("0");


let button_dot= document.createElement("button");
button_dot.setAttribute("id","decimal");
button_dot.innerText=(".");

let button_eql = document.createElement("button");
button_eql.setAttribute("id","equals");
button_eql.innerText=("=");

calculator.append(calc_0);
calculator.append(buttons_1);
buttons_1.append(button_clear);
buttons_1.append(button_del);

buttons_1.append(button_7);
buttons_1.append(button_div);

buttons_1.append(button_8);
buttons_1.append(button_9);
buttons_1.append(button_4);
buttons_1.append(button_Mul);

buttons_1.append(button_5);
buttons_1.append(button_6);
buttons_1.append(button_1);
buttons_1.append(button_minus);

buttons_1.append(button_2);
buttons_1.append(button_3);
buttons_1.append(button_0);
buttons_1.append(button_Add);

buttons_1.append(button_dot);
buttons_1.append(button_eql);

document.body.append(calculator);

const resultElement = document.getElementById("result");
const buttons = document.querySelectorAll("button");
let currentInput = "";
let currentResult = 0;
let currentOperator = null;

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const value = button.textContent;
        handleButtonClick(value);
    });
});

function handleButtonClick(value) {
    if (/\d/.test(value)) {
        currentInput += value;
        updateResult(currentInput);
    } else if (value === ".") {
        if (!currentInput.includes(".")) {
            currentInput += value;
            updateResult(currentInput);
        }
    } else if (value === "C") {
        clearCalculator();
    } else if (value === "Del") {
        backspace();
    } else if (value === "=") {
        calculateResult();
    } else {
        handleOperator(value);
    }
}

function updateResult(value) {
    resultElement.textContent = value;
}

function clearCalculator() {
    currentInput = "";
    currentResult = 0;
    currentOperator = null;
    updateResult("0");
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === "") {
        updateResult("0");
    } else {
        updateResult(currentInput);
    }
}

function handleOperator(operator) {
    if (currentOperator !== null) {
        calculateResult();
    }
    currentOperator = operator;
    currentResult = parseFloat(currentInput);
    currentInput = "";
}

function calculateResult() {
    if (currentOperator !== null) {
        const secondOperand = parseFloat(currentInput);
        switch (currentOperator) {
            case "+":
                currentResult += secondOperand;
                break;
            case "-":
                currentResult -= secondOperand;
                break;
            case "*":
                currentResult *= secondOperand;
                break;
            case "/":
                currentResult /= secondOperand;
                break;
        }
        updateResult(currentResult);
        currentInput = currentResult.toString();
        currentOperator = null;
    }
}