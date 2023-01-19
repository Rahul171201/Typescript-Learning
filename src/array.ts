let arr : string[] = ['rahul', 'rohit', 'virat'];
let arr_temp = ['rahul', 'rohit', 'virat'];

let arr1 : (number | string)[] = [23, 'rahul', 46, 'virat'];
let arr1_temp = [23, 'rahul', 46, 'virat'];

let tupple : [number, string, number] = [23, 'rahul', 46];

console.log(arr.length);
console.log(tupple);

// though tupples have fixed order when initially assigned, theu can be 
// pushed | poped like regular arrays
// typescript is only useful during assignment in this case
tupple.push(3);
tupple.push(46);
console.log(tupple);