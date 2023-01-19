// defining type alias for certain types
type ar = string;
let rahul : ar = 'rahul';

type UserType = {
    name: string,
    id: number,
    isGood: true
}


const user : UserType = {
    name: 'rahul',
    id: 25,
    isGood: true
}

// type alias can be exported and imported anywhere in ither files
export type data = {
    id: number,
    value: 'string'
};
// import {data} from 'types.ts'; 

type errorOutcome = {
    message: 'error',
    value: string
}
type successOutcome = {
    message: 'success',
    value: number,
    outcome: string
}
type tossOutcome = errorOutcome | successOutcome;

/**
 * Returns the result of a coin toss ("0 or heads" or "1 or tails")
 */
const coinToss = () : tossOutcome => {
    let num = Math.random();
    if(num > 0.5 && num <= 1)
        return {
            message : 'success',
            value: 0,
            outcome: "heads"
        }
    
    else if(num < 0.5 && num >= 0){
        return {
            message : 'success',
            value: 1,
            outcome: "tails"
        }
    }

    else
        return {
            message: 'error',
            value: 'invalid probability generated'
        }
}

console.log(coinToss());