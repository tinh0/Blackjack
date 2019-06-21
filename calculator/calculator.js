

function createCalculator() {
    document.getElementById("calculator-button").disabled = true;
    
    var calculatorDiv = document.createElement("div");
    var firstNumberForm = document.createElement("input");
    var operatorForm = document.createElement("input");
    var secondNumberForm = document.createElement("input");   
    var bottomCalculatorDiv = document.createElement("div");
    var outputForm = document.createElement("input");
    var calculateButton = document.createElement("button");
    var clearButton = document.createElement("button");
    
    document.body.appendChild(calculatorDiv);

    firstNumberForm.type = "text";
    firstNumberForm.id = "firstNumber";
    firstNumberForm.placeholder = "First Number";
    calculatorDiv.appendChild(firstNumberForm);

    operatorForm.type = "text";
    operatorForm.id = "operator";
    operatorForm.placeholder = "(+, -, *, /, %)";
    calculatorDiv.appendChild(operatorForm);

    secondNumberForm.type = "text";
    secondNumberForm.id = "secondNumber";
    secondNumberForm.placeholder = "Second Number";
    calculatorDiv.appendChild(secondNumberForm);

    calculatorDiv.appendChild(bottomCalculatorDiv);

    calculateButton.innerHTML = "Calculate";
    calculateButton.onclick = function() {calculate()};
    bottomCalculatorDiv.appendChild(calculateButton);

    clearButton.innerHTML = "Clear";
    clearButton.onclick = function() {notClear()}; 
    bottomCalculatorDiv.appendChild(clearButton);
    
    outputForm.type = "text";
    outputForm.id = "calculatorOutput";
    outputForm.placeholder = "Output";
    bottomCalculatorDiv.appendChild(outputForm);
    outputForm.readOnly = true;


}

function calculate() {
    var firstNumber = document.getElementById("firstNumber").value;
    var operator = document.getElementById("operator").value;
    var secondNumber = document.getElementById("secondNumber").value;

    var conversion = {
        '+': function(x, y) { return parseInt(x) + parseInt(y) },
        '-': function(x, y) { return parseInt(x) - parseInt(y) },
        '/': function(x, y) { return parseInt(x) / parseInt(y) },
        '*': function(x, y) { return parseInt(x) * parseInt(y) },
        '%': function(x, y) { return parseInt(x) % parseInt(y) }
    }
    document.getElementById("calculatorOutput").value = conversion[operator](firstNumber, secondNumber);
}

function notClear() {
    document.getElementById("firstNumber").value = "";
    document.getElementById("operator").value = "";
    document.getElementById("secondNumber").value = "";
    document.getElementById("calculatorOutput").value = '';
}
