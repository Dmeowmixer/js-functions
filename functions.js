/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string*/
 

function numberToString (foo) {
  var bar = "";
  return (bar + foo);

    
}
numberToString(5)




/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
function increase (number) {
    var plus = +1;
    return number + plus;
    
}
increase(1)
/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function decrease (number) {
    var plus = -1;
    return number + plus;
    
}
decrease(1)
/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add(num1,num2){
return num1+num2


}
add(1,2)
/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subtract(num1,num2){
return num1-num2


}
subtract(1,2)
/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function multiply(num1,num2){
return num1*num2


}
multiply(100,100)
 /* Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide(num1,num2){
return num1/num2


}
divide(100,100)
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square(num1){

return num1*num1;

}
square(2031)
/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
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

calculate(4,"add",7)
/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function isGreaterThan(x,y) {
    if (x>y) {
        return true;
    }
    else {
     return false;
    }
    
}
isGreaterThan(21,2)
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function isLessThan(a,b) {
    if (a<b) {
        return true;
    }
    else {
     return false;
    }
    
}
isLessThan(21,2)
/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function areEqual(a,b) {
    if (a === b) {
        return true;
    } 
    else {
        return false;
    }
}
areEqual(11,1)
/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function minimum(a,b) {
    if (a<b) {
        return a;
    }
    else {
        return b;
    }
}
minimum(1,2)
/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function maximum(a,b) {
	if (a>b) {
		return a;
	}
	else {
		return b;
	}

}
maximum(1,2)
/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function isEven (a) {
    if (a%2===0) {
        return true + " the number is even"
    }
    else { 
        return false + " the number is odd"
    }
}
isEven(1)
/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function isOdd(a) {
	if (a%2===0) { 
		return false;
	}
	else {
		return true;
	}
}
isOdd(1)
/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
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
/**
 * Checks if a `restaurant` object has are `views` field.
 * If it does, increase it by 1. If it does not,
 * set itsreviews` field to 1.
 * @param {object} restaurant represents a restaurant
 */

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function combine(word1,word2){
	return word1 + " " + word2;
}
combine("Meow","Mix")
/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
