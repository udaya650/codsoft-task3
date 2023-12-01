let resultFrame = document.getElementById("resultFrame");
let openBracket = document.getElementById("openBracket");
let closeBracket = document.getElementById("closeBracket");
let ans = document.getElementById("ans");
let del = document.getElementById("del");
let clear = document.getElementById("clear");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let mod = document.getElementById("mod");
let squareRoot = document.getElementById("squareRoot");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let multiplication = document.getElementById("multiplication");
let division = document.getElementById("division");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let addition = document.getElementById("addition");
let subtraction = document.getElementById("subtraction");
let decimal = document.getElementById("decimal");
let zero = document.getElementById("zero");
let doubleZero = document.getElementById("doubleZero");
let enter = document.getElementById("enter");
let arrayItem = "";

function displayValueOB() {
    let item = openBracket.value;
    arrayItem = arrayItem + item;
    resultFrame.textContent = arrayItem;

}

function displayValueCB() {
    let item = closeBracket.value;
    arrayItem = arrayItem + item;
    resultFrame.textContent = arrayItem;
}

function delLastElement() {
    console.log(arrayItem.length);
    if(arrayItem.length===1){
        arrayItem="";
        resultFrame.textContent=arrayItem;
    }
    arrayItem = arrayItem.slice(0, -1);
    resultFrame.textContent = arrayItem;
}

function clearAllElements() {
    arrayItem = "";
    resultFrame.textContent = arrayItem;
}

function displayValue7() {
    let item = seven.value;
    arrayItem = arrayItem + item;
    resultFrame.textContent = arrayItem;
}

function displayValue8() {
    let item = eight.value;
    arrayItem = arrayItem + item;
    resultFrame.textContent = arrayItem;
}

function displayValue9() {
    let item = nine.value;
    arrayItem = arrayItem + item;
    resultFrame.textContent = arrayItem;
}

function displayValueModule() {
    let item = mod.value;
    arrayItem = arrayItem + item;
    resultFrame.textContent = arrayItem;
}

function displayValueSR() {
    let item = squareRoot.value;
    arrayItem = arrayItem + item;
    resultFrame.textContent = arrayItem;
}

function displayValue4() {
    let item = four.value;
    arrayItem = arrayItem + item;
    resultFrame.textContent = arrayItem;
}

function displayValue5() {
    let item = five.value;
    arrayItem = arrayItem + item;
    resultFrame.textContent = arrayItem;
}

function displayValue6() {
    let item = six.value;
    arrayItem = arrayItem + item;
    resultFrame.textContent = arrayItem;
}

function displayValueMul() {
    let item = multiplication.value;
    arrayItem = arrayItem + item;
    resultFrame.textContent = arrayItem;
}

function displayValueDivide() {
    let item = division.value;
    arrayItem = arrayItem + item;
    resultFrame.textContent = arrayItem;
}

function displayValue1() {
    let item = one.value;
    arrayItem = arrayItem + item;
    resultFrame.textContent = arrayItem;
}

function displayValue2() {
    let item = two.value;
    arrayItem = arrayItem + item;
    resultFrame.textContent = arrayItem;
}

function displayValue3() {
    let item = three.value;
    arrayItem = arrayItem + item;
    resultFrame.textContent = arrayItem;
}

function displayValueAdd() {
    let item = addition.value;
    arrayItem = arrayItem + item;
    resultFrame.textContent = arrayItem;
}

function displayValueSub() {
    let item = subtraction.value;
    arrayItem = arrayItem + item;
    resultFrame.textContent = arrayItem;
}

function displayValueDot() {
    let item = decimal.value;
    arrayItem = arrayItem + item;
    resultFrame.textContent = arrayItem;
}

function displayValue0() {
    let item = zero.value;
    arrayItem = arrayItem + item;
    resultFrame.textContent = arrayItem;
}

function displayValue00(){
    let item=doubleZero.value;
    arrayItem=arrayItem+item;
    resultFrame.textContent=arrayItem;
}

function calculatingItems() {
    let arr = Array.from(arrayItem);
    let opIndex = arr.findIndex(function(eachItem) {
        if (eachItem === "+" || eachItem === "-" || eachItem === "x" || eachItem === "÷" || eachItem === "%" || eachItem === "√") {
            return true;
        } else {
            return false;
        }
    });
    let firstTerm = arr.slice(0, opIndex);
    let secondTerm = arr.slice(opIndex + 1);
    let firstTermNum = firstTerm.toString();
    let secondTermNum = secondTerm.toString();
    let num1 = firstTermNum.replace(",", "");
    let num2 = secondTermNum.replace(",", "");
    let op = arr.slice(opIndex, opIndex + 1);
    let operator = (op.slice(0)).toString();
    if (operator === "+") {
        let result = parseInt(num1) + parseInt(num2);
        resultFrame.textContent = result;
        arrayItem=result;
    } else if (operator === "-") {
        let result = parseInt(num1) - parseInt(num2);
        resultFrame.textContent = result;
        arrayItem=result;
    } else if (operator === "x") {
        let result = parseInt(num1) * parseInt(num2);
        resultFrame.textContent = result;
        arrayItem=result;
    } else if (operator === "÷") {
        let result = parseInt(num1) / parseInt(num2);
        resultFrame.textContent = result;
        arrayItem=result;
    } else if (operator === "%") {
        let result = parseInt(num1) % parseInt(num2);
        resultFrame.textContent = result;
        arrayItem=result;
    }
    else if(operator === '√'){
        let result=Math.sqrt(parseInt(num2));
        resultFrame.textContent=result;
        arrayItem=result;
    }
}




