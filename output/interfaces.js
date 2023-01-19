"use strict";
// type alias should be used fo other than objects type like union cases
// interfaces should be used for classes which 'implement'
// a certain type
class SprinklrOffice {
    constructor() {
        this.company = 'Sprinklr';
        this.totalPeople = 59;
        this.location = 'Gurgaon';
        this.morePeople = () => {
            if (this.totalPeople > 50) {
                return true;
            }
            else {
                return false;
            }
        };
        this.isInIndia = () => {
            if (this.location === ("Gurgaon" || "Banglore")) {
                return true;
            }
            else
                return false;
        };
    }
}
const newOffice = new SprinklrOffice();
console.log(newOffice.morePeople());
console.log(newOffice.isInIndia());
const a = [[1, 2], [2, 3]];
console.log(a);
const b = [1, 2, [4, 5, 6], 7, [2, 6, [3, 4, [5]]]];
console.log(b);
