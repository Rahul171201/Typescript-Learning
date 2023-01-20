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

type two_number_calc = (x : number, y : number) => number;

interface two_num_calculation{
    (x : number, y: number) : number;
   
}

const ad: two_num_calculation = (a, b) => {
    return a+b;
};

// function overloading
function addTwoThings(
    a : string,
    b: string
) : string
function addTwoThings(
    a:number,
    b: number
) : number
function addTwoThings(
    x : string | number,
    y: string | number
) : (number | string | undefined){
    if(typeof(x) === "string" && typeof(y)=== "string"){
        return x+y;
    }
    else if(typeof(x) === "number" && typeof(y)=== "number"){
        return x+y;
    }
};