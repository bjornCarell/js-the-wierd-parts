// function Person() {
//     this.firstname = 'John';
//     this.lastname = 'Doe';

//     return {greeting: 'I got in the way'}
// }

// let john = new Person();
// console.log(john);

function Person(firstname, lastname) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('this function is invoked');

}

let john = new Person('John', 'Doe');
console.log(john);


let jane = new Person('Jane', 'Doe');
console.log(jane);


function Empty() {
    console.log(this);
}

let newEmpty = new Empty();

function WithReturn() {
    this.return = 'return';
    return {hello: "I'm the way"}
}

let newWithReturn = new WithReturn();
console.log(newWithReturn);
