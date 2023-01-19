"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let rahul = 'rahul';
const user = {
    name: 'rahul',
    id: 25,
    isGood: true
};
/**
 * Returns the result of a coin toss ("0 or heads" or "1 or tails")
 */
const coinToss = () => {
    let num = Math.random();
    if (num > 0.5 && num <= 1)
        return {
            message: 'success',
            value: 0,
            outcome: "heads"
        };
    else if (num < 0.5 && num >= 0) {
        return {
            message: 'success',
            value: 1,
            outcome: "tails"
        };
    }
    else
        return {
            message: 'error',
            value: 'invalid probability generated'
        };
};
console.log(coinToss());
