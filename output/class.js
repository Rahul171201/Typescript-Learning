"use strict";
// By default every variable or function in a class is public
// Public Access Modifier enables the class properties to be inherited by other classes
// and are accessible outisde the class
// Protected Access Modifier enables the keys to be inherited and used by subclasses
// But tyhey cannot be accessd outside the class or its subclasses
// Private Access Modifier makes the key acccessible only within that class
// THEY CANNOT BE INHERITED NOR BE USED OUTSIDE THE CLASS
// Fields in classes
// private keys can be expressed with a '#' symbol before their name
// 'readonly' field property enables the property to be read-only, it cannot be re assigned
class A {
    constructor(value, name) {
        this.value = value;
        this.name = name;
        console.log(value);
    }
    isPositive() {
        if (this.value > 0)
            return true;
        else
            return false;
    }
    isEven() {
        if (this.value % 2 === 0)
            return true;
        else
            return false;
    }
}
const objA = new A(1, 'one');
// console.log(objA.value);
// console.log(objA.isPositive());
// console.log(objA.isEven());
class B extends A {
    constructor(value, name, nextNumber) {
        super(value, name);
        this.value = value;
        this.name = name;
        this.nextNumber = nextNumber;
        console.log(nextNumber);
    }
    startsWithT() {
        if (this.name[0] === ('t' || 'T'))
            return true;
        else
            return false;
    }
}
const objB = new B(3, 'three', 4);
// console.log(objB.isEven());
// console.log(objB.startsWithT());
// console.log(objB.value);
// console.log(objB.name);
