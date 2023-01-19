"use strict";
// The type can either be of CharacterData or string
let bloodType = 'a';
/**
* Checks if the name is of odd length,
* If yes returns the name else returns an error
* @param user {{name : string, id: number}} user details
*/
const printUser = (user) => {
    if (user.name.length % 2 == 0)
        return ["error", { errorMessage: "Invalid name length" }];
    else
        return ["success", user];
};
console.log(printUser({
    name: 'Rahul',
    id: 25
}));
