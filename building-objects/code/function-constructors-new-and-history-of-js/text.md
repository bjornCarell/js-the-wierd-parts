Called JavaScript to attract Java developers. Thta tis why it looks like Java,
and some times works a litte like Java. But it is nothing like it. 

let john = new Person();

Java devoplers where used to use the syntact above to create objects. 

function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
}

let john = new Person();


The new keyword is a an operator. So when we say new, something special happens. 
Immediatly when we use 'new' an empty object is created, and then the function
is called. 

When the function is called we know that the this variable for that
function is given to us with the execution context. 

In these cases, the cases we use the keyword new, it changes where the this 
variable points to. The this variable will point to that empty object. 

the this.firstname and this.lastname is being assigned to that empty object. 

We construct object with functions, function constructors. 

Remember though, function constructors are just functions. 

1. Invokes the function
2. a empty objects is created
3. execution context with the new operator setting the this variable
4. as long as nothing is returned by our function, our variables will be returned


///


JS was built by a guy called Brandon Ike. Back then there was "programming war".
It was called JavaScript to attract Java devs. 
Sometimes JavaScript syntax looks like Java, but it's nothing alike. 
JavaScript has a class keyword, but it does not work like a class in Java or C#, but
it does work the same. 

function Person() {

    this.firstname = 'John';
    this.lastname = 'Doe';

}

let john = new Person();
console.log(john);

What just happend here? All we are doing is using another way to construct objects. It
does not change what objects are and how they work. It's just another way of constructing
objects. 

new - is a operator. When we say 'new' an empty Object is created. Then it invokes the
function Person(). When we invoke a function the execution context is created, with the
'new' keyword a new context, a new 'this', keyword is created. 

let erik = new Person();

As long as we do not return anything from the Person function the 'new' keyword will give
us back an empty object.

Let's us construct a object via function - a function constructor. 

Function constructors are just functions. When called with the 'new' operator, if nothing is
returned inside the function, the 'this' keyword is set to an empty object, and instead of 
returning 'undefined' it, the function called with the new operator, will return that empty object. 

The 'this' keyword is pointing towards an empty object in memory.