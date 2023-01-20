interface Office {
    company: string;
    totalPeople: number;
    location: string;
    morePeople(): boolean;
    isInIndia(): boolean; 
} 

// type alias should be used fo other than objects type like union cases
// interfaces should be used for classes which 'implement'
// a certain type

class SprinklrOffice implements Office {
    company = 'Sprinklr';
    totalPeople = 59;
    location = 'Gurgaon';

    morePeople = () => {
        if(this.totalPeople > 50){
            return true;
        }
        else{
            return false;
        }
    }
    isInIndia = () => {
        if(this.location === ("Gurgaon" || "Banglore")){
            return true;
        }
        else
            return false;
    }
}

const newOffice = new SprinklrOffice();

console.log(newOffice.morePeople());
console.log(newOffice.isInIndia());

// also interfaces can be used to augment user or system defined types

// interface Window{
//     example: number
// }

// console.log(window.example);


type two_dimensional_matrix = number[][];
const a : two_dimensional_matrix = [[1, 2], [2,3]];
console.log(a);

// recursive type alias
type num_and_numArrays = (number | num_and_numArrays[]);
const b : num_and_numArrays = [1, 2, [4, 5, 6], 7, [2, 6, [3, 4, [5]]]];
console.log(b);