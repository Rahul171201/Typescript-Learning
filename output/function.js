"use strict";
const func1 = (str) => {
    console.log(str);
};
func1('RAHUL ROY');
const func2 = (str) => {
    console.log(str);
};
func2('RAHUL ROY');
/**
* @param a {number} first number
* @param b {number} second number
This function adds two numbers and returns the result
*/
const add = (a, b) => {
    let number = a + b;
    return number;
};
console.log(add(10, 13));
// immidiate call to function
(function print() {
    console.log("Priority");
})();
