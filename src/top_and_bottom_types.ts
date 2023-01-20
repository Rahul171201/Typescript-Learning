let obj_x = {
    name: 'rahl'
};

if(typeof(obj_x) === "object")
    console.log(obj_x);

else
    console.log("no");


// Top types are the types that can have any possible value
// {any, unknown}

let arx : any = 'p';
arx = () => {
    console.log("just a function")
};
arx = "rahul";

// unknown is basically useful when the type of value you
// receive is unknown at runtime, so
// that you ca work upon the given data accordingly
let res : unknown = "success";

const foo = () => {
    let p = Math.random();
    if(p > 0.5)
        return 'rahul';
    else
        return 3;
}

type myType = (string | number);
let boat : myType = foo();

if(typeof(boat) === "number"){
    console.log(boat);
}
else if(typeof(boat) === "string"){
    console.log(boat);
}
else{
    const neverValue : never = boat;
    console.log(neverValue);
}

// For object checking , we can use
// user defined type guards to check if
// an object abides by the interface type

interface CarLike {
    make: string
    model: string
    year: number
  }
   
  let maybeCar: unknown
   
  // the guard
  function isCarLike(
    valueToTest: any
  ): valueToTest is CarLike {
    return (
      valueToTest &&
      typeof valueToTest === "object" &&
      "make" in valueToTest &&
      typeof valueToTest["make"] === "string" &&
      "model" in valueToTest &&
      typeof valueToTest["model"] === "string" &&
      "year" in valueToTest &&
      typeof valueToTest["year"] === "number"
    )
  }
   
  // using the guard
  if (isCarLike(maybeCar)) {
    maybeCar
  }

interface tempInterface{
    apex: string,
    num: number
}

let src : unknown;

function checkInterface(
    val : any
) : val is tempInterface {
    return (val &&
        typeof val === "object" &&
        "apex" in val &&
        typeof val["apex"] === "string" &&
        "num" in val &&
        typeof val["num"] === "number"
    )
}

if(checkInterface(src)){
    src
}