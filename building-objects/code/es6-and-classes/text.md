Classes in other programming languages are very popular. They are a way of defining an object.
Is is used to set its classes and properties should be. 

In JavaScript Class is in Object. In other programming lanugages Class is not an object. 

The 'extends' key word sets the prototype(__proto__)
so any objects created with the class InformalPerson
will have their prototype set to the Person object: 

class InformalPerson extends Person {

    constructor(firstname, lastname) {
        super(firstname, lastname);
    }

    greet() {
        return 'Whats up ' + this.firstname;
    }
}

The keyword 'super' will call the constructor of the object
that is my prototype. 