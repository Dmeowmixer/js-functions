function numberToString (foo) {
  var bar = "";
  return (bar + foo);    
}
numberToString(5);

function increase (number) {
    var plus = +1;
    return number + plus;
}
increase(1);


function decrease (number) {
    var plus = -1;
    return number + plus;    
}
decrease(1);

function add(num1,num2){
    return num1+num2;
}
add(1,2);

function subtract(num1,num2){
    return num1-num2
}
subtract(1,2);

function multiply(num1,num2){
    return num1*num2;
}
multiply(100,100);

function divide(num1,num2){
    return num1/num2;
}
divide(100,100);

function square(num1){
    return num1*num1;
}
square(2031);

function calculate(operator,num1,num2){
    var result;
    if (operator==="add"){
        var plus = num1+num2;
        console.log(num1 + " + " + num2 + " = " + plus);
        result =  plus;
    
    }
    else if (operator ==="subtract"){
        
        var subtract = num1-num2;
        console.log(num1 + " - " + num2 + " = " + subtract);
        result =  subtract;
    }
    else if (operator ==="divide"){
        var divide = num1/num2;
        console.log(num1 + " / " + num2 + " = " + divide);
        result = divide;
    }
    else if (operator ==="multiply"){
        var multiply =  num1*num2;
        console.log (num1 + " * " + num2 + " = "+ multiply);
        result = multiply;
    
    }
return result;
}

calculate(4,"add",7);
function isGreaterThan(x,y) {
    if (x>y) {
        return true;
    }
    else {
     return false;
    }
    
}
isGreaterThan(21,2);

function isLessThan(a,b) {
    if (a<b) {
        return true;
    }
    else {
     return false;
    }
    
}
isLessThan(21,2);

function areEqual(a,b) {
    if (a === b) {
        return true;
    } 
    else {
        return false;
    }
}
areEqual(11,1);

function minimum(a,b) {
    if (a<b) {
        return a;
    }
    else {
        return b;
    }
}
minimum(1,2);

function maximum(a,b) {
    if (a>b) {
        return a;
    }
    else {
        return b;
    }

}
maximum(1,2);

function isEven (a) {
    if (a%2===0) {
        return true + " the number is even"
    }
    else { 
        return false + " the number is odd"
    }
}
isEven(1);

function isOdd(a) {
    if (a%2===0) { 
        return false;
    }
    else {
        return true;
    }
}
isOdd(1);

function letterGrade(score,total){
    if (Math.floor((score / total) * 100) >= 90){
        return "A";
    }
    else if (Math.floor((score / total) * 100) >= 80 && score / total < 90){
        return "B";
    }
    else if (Math.floor((score/total) * 100) >= 70 && score / total < 80){
        return "C";
    }
    else if (Math.floor((score / total) * 100) >= 60 && score / total < 70){
        return "D";
    }
    else {
        return "F";
    }
}
    
letterGrade(60,150);


function incrementReviews(restaurant){
    if (restaurant.reviews){
        restaurant.reviews++;
    }
    else {
        restaurant.reviews = 1;
    }
    return restaurant;
}




function combine(word1,word2){
    return word1 + " " + word2;
}
combine("Meow","Mix");


function createCircle(radius){
        var circle = {    
    area : Math.PI * Math.pow(radius,2),
    circumference : 2 * Math.PI * radius,
    }
    return circle;
}
createCircle(50);










/*
Returns a circle object with the properties `circumferance` and `area`.

Use [Math.PI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI) for the value π.

**Parameters**

**radius**: number

**Returns**: object, circle

-----------------------------*/