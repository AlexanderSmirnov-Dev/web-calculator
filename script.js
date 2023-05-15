let currentCount = 0
let currentOperator = "";
let operand = 0;
let firstNum = true;
let numAdded = 0;

function addValue(x)
{
    if (firstNum)
    {
        currentCount *= 10;
        currentCount += Number(x);
        document.getElementById("total").innerHTML = "Total = " + currentCount;
        numAdded += 1;
    } 
    else
    {
        operand *= 10;
        operand += Number(x);
        document.getElementById("operand").innerHTML = "Operand = " + operand;
        numAdded += 1;
    }
}

function changeOperand(oper)
{
    currentOperator = oper;
    firstNum = false;
    numAdded = 0;
}

function calculate()
{
    switch (currentOperator) {
        case '+':
            currentCount += operand;
            document.getElementById("total").innerHTML = "Total = " + currentCount;
            break;
        case '-':
            currentCount -= operand;
            document.getElementById("total").innerHTML = "Total = " + currentCount;
            break;
        case '*':
            currentCount *= operand;
            document.getElementById("total").innerHTML = "Total = " + currentCount;
            break;
        case '/':
            currentCount /= operand;
            document.getElementById("total").innerHTML = "Total = " + currentCount;
            break;
        default:
            break;
    }

    operand = 0;
    currentOperator = "";
    document.getElementById("operand").innerHTML = "Operand = " + operand;
}

function ce()
{
    currentCount = 0;
    operand = 0;
    currentOperator = "";
    document.getElementById("total").innerHTML = "Total = " + currentCount;
    document.getElementById("operand").innerHTML = "Operand = " + operand;
    firstNum = true;
    numAdded = 0;
}

function del()
{
    if (firstNum) // in the total num area
    {
        if (numAdded > 0)
        {
            currentCount /= 10;
            currentCount = Math.floor(currentCount);
            document.getElementById("total").innerHTML = "Total = " + currentCount;
        }
    }
    else // in the operand area
    {
        if (numAdded > 0)
        {
            operand /= 10;
            operand = Math.floor(operand);
            document.getElementById("operand").innerHTML = "Operand = " + operand;
        }
    }
}