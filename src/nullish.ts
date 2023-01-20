const fruit : {
    name : string,
    count :  number,
    isGood?: boolean
    vareity?: string[]
} = {
    name: 'apple',
    count : 10,
}

// this will tell typescript to ignore the possibility of
// the value 'vareity' being undefined
// But it will show error during runtime
fruit.vareity!.push('green apple');
console.log(fruit);

