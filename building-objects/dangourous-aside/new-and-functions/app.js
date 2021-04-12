function Person(firstname, lastname) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('this function is invoked');
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

let john = Person('John', 'Doe');

console.log(john);
console.log(Person.prototype.getFullName());
