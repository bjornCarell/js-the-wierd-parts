// Polyfill if object.create would not exist 
if(!Object.create) {
    Object.create = function (o) {
        if(arguments.length > 1) {
            throw new Error('Object.create Implementation'
            + ' only accepts the first parameter.');
        }
        function F() {}
        F.prototype = o;
        return new F();
    };
}


let person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    },
}

let john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);
console.log('GREET',john.greet());


console.log({
    firstname: john.firstname,
    lastname: john.lastname,
    greet: john.greet(),
});

console.log('person obj', person);

createNewEmptyObj = function(obj) {
    function F() {}
    F.prototype = obj;
    return new F();
}

let jane = createNewEmptyObj(john);
console.log(jane);
jane.firstname = 'jane';
jane.lastname = john.lastname; // But what if they get a divorce?? 
console.log(jane);

john.lastname = 'Andersen';
console.log(jane.lastname); // What will this will be the output? 
console.log(john.lastname);

// add method to the person obejct gives all obejct created
// the person object access to it 

person.formalName = function() {
    return this.lastname + ', ' + this.firstname;
}

console.log(john.formalName());