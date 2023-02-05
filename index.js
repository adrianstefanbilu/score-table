let number1 = 0;
let number2 = 0;
let black1 = document.getElementById("black-background1")
let black2 = document.getElementById("black-background2")
function add1()
{
    number1 += 1
    black1.textContent = number1
}

function add2()
{
    number1 += 2
    black1.textContent = number1
}

function add3()
{
    number1 += 3
    black1.textContent = number1
}

//--------------------------------------------------
function add4()
{
    number2 += 1
    black2.textContent = number2
    
}

function add5()
{
    number2 += 2
    black2.textContent = number2
}

function add6()
{
    number2 += 3
    black2.textContent = number2
}

function reset()
{
    number1 = 0
    black1.textContent = number1
    number2 = 0
    black2.textContent = number2

}