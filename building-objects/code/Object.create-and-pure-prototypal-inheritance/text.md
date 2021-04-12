Function constructors, and classes(?), where created to attract people to JavaScript
that come from languages that does not have prototypal inheritance. Therefore they,
the function constructors and classes, are a bit off. They try to mimic classical
inheritance. 

Some people mean that we should imbrace the fact that JavaScript has prototypal
inheritance. So for building objects we should instead see Object.create

let person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    },
}

let john = Object.create(person);
console.log(john);

Object.create(passedInObject) will create a new empty object, with the prototype set
to the the object we pass in as the create parameter. 

The pattern for adding our own values to an object we create, we simply add them to 
the new variable using dot notaion(or bracket notation)

john.firstname = 'john';
john.lastname = 'doe';

Some people get confused by this, because it is so simple!

** Side note: 
                Unary operator: takes one parameter like: !doesExsist 
                Binary operator: takes two parameters like: checkIfThisIsTrue && checkThisToo
                turnary operator: takes three parameters like: ??







