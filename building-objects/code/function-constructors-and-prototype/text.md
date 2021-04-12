When using the new constructor it sets the prototype for us. 

Remember: In JS functions are objects. 

{
    code,
    name,
    prototype,
}

all functions in JavaScript has its own prototype, because in JavaScript functions
are objects. Most of the time it just hangs around, we do not do anything with it. 
It sits there and does nothing, until you invoke the function using the 'new' operator. 
Then it wakes up and start working. 

Prototype in this case is a bit of a confusing name. The prototype of a function is NOT
the prototype of the functions. The prototype of a functions is the prototype of any
object created by the function using the the new operator. 

The prototype of a function is NOT the prototype of the functions.

The prototype property of any function is where the prototype chain points for any objects
created by that function using it as a constructor. 

The prototype starts is life as an empty objet. And we can add to it. 

Since function are objects in JavaScript, they take up memory space when created. Everyting
that is added to the function will take up memory space. So if we add a method to the 
Person function above, and we have a thousand new Person() created, a thousand additional
methods will have been created. And that is where the prototype becomes efficient. When we
add the method, or what ever, to the prototype, it only gets addded once. 

When we add the method, or what ever, to the prototype, it only gets addded once. Why? Because there is only one prototype for all of the objects created via the function constructor. 

function Person(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname;

}

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
}

When add the method to the prototype. When calling a new Person with that method, 
it will go down the prototype chain and find it. 

let jane = new Person('Jane', 'Doe');
jane.getFullName();

let john = new Person('John', 'Doe');
john.getFullName();
