const func1 = (str : string) : void => {
    console.log(str);
}
func1('RAHUL ROY');

const func2 = (str : string) => {
    console.log(str);
}
func2('RAHUL ROY');

/** 
* @param a {number} first number
* @param b {number} second number
This function adds two numbers and returns the result
*/
const add = (a: number, b:number) : number => {
    let number = a + b;
    return number;
}
console.log(add(10, 13));

// immidiate call to function
(function print() : void {
    console.log("Priority");
})();