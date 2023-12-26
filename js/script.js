var stringNumber = [];
var notValid = false;
var newArr = [];

function isValidNumber(num)
{
    return !isNaN(num)
}

function isValidString(str)
{
    return str != null && str.toString().trim() != "";
}

function takeInput(msg)
{
    stringNumber = prompt(msg);
    checkIsValid(stringNumber);
}

function checkIsValid(stringNumber)
{
    var arr = stringNumber.split(",");
    for (var i = 0; i < arr.length; i++) { 
        if (arr[i] != ",") {
            if(isValidString(arr[i]) && isValidNumber(arr[i]))
            {
                newArr.push(+arr[i]);
                notValid = false;
            }
            else
            {
                notValid = true;
                break;
            }
        }  
    }
    
    if (notValid) {
        takeInput("Enter the numbers seperated by ','");
    }
}

takeInput();

console.log(newArr);
