function Person(firstname, lastname) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('this function is invoked');
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

let john = new Person('John', 'Doe');
console.log(john);
console.log(john.getFullName());

let jane = new Person('Jane', 'Doe');
console.log(jane.getFullName());

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
}

console.log(jane.getFormalFullName());

