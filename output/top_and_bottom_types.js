"use strict";
let obj_x = {
    name: 'rahl'
};
if (typeof (obj_x) === "object")
    console.log(obj_x);
else
    console.log("no");
// Top types are the types that can have any possible value
// {any, unknown}
let arx = 'p';
arx = () => {
    console.log("just a function");
};
arx = "rahul";
// unknown is basically useful when the type of value you
// receive is unknown at runtime, so
// that you ca work upon the given data accordingly
let res = "success";
const foo = () => {
    let p = Math.random();
    if (p > 0.5)
        return 'rahul';
    else
        return 3;
};
let boat = foo();
if (typeof (boat) === "number") {
    console.log(boat);
}
else if (typeof (boat) === "string") {
    console.log(boat);
}
else {
    const neverValue = boat;
    console.log(neverValue);
}
