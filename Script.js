var operator = prompt("Enter the operator to perform the calculation (either +,-,/,*)");
var number1 = (prompt("Enter the first Number"));
var number2 = (prompt("Enter the second Number"));

var result;

if(operator=='+'){
    result= number1+number2;
    alert("1st number : " + number1 + "\n" + "2nd number : " + number2 + "\n" + "Result : " + result);
}
else if (operator=='-'){
    result= number1 - number2;
    alert("1st number : " + number1 + "\n" + "2nd number : " + number2 + "\n" + "Result : " + result);
}
else if(operator=='*'){
    result=number1 * number2;
    alert("1st number : " + number1 + "\n" + "2nd number : " + number2 + "\n" + "Result : " + result);
}
else if(operator=='/'){
    result=number1 / number2;
    alert("1st number : " + number1 + "\n" + "2nd number : " + number2 + "\n" + "Result : " + result);
}