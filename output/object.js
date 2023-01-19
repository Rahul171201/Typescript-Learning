"use strict";
const sprinklrOffice = {
    company: 'sprinklr',
    peopleStatus: 'working',
    coffeeAvailable: true,
    isTheBestCompany: true,
    totalPeople: 59,
    closed: false,
    location: 'Gurgaon'
};
const printOfficeState = (office) => {
    console.log(office);
};
// we cannot pass a direct object to the function printOffice
// since the extra property is not defined for the type parametr of the function
// console.log(printOfficeState({
//     company: 'sprinklr',
//     peopleStatus: 'working',
//     coffeeAvailable: true,
//     isTheBestCompany: true,
//     totalPeople: 59,
//     closed: false,
//     location: 'Gurgaon'
// }));
// However we can pass a variable object having extra property in the function
// This is allowed in typescript
console.log(printOfficeState(sprinklrOffice));
