Built in function constructors. Constructors that are already there. Meaning
that its functions, and methods, that are already there. 

let a = new Number(3);
let n = new String('john');

These function constructors looks like you are creating primitives. But you
are not. You are creating objects with those primitives find as a property
inside those objects. With these objects comes inbuilt methods like 'toFixed'
for numbers and 'indexOf' for strings. 

We must remember that when we use these constructor functions we are building
objects. And these objects can somtimes be very useful, and seen, in libraries,
to tack on extra functionality to the primitive values we give as props to
these objects. 

We can add functionality to these objects by adding to the prototype. We can
add to the inbuilt constructors. Ex. adding to all string obejcts: 

String.prototype.isLenghtGreaterThan = function(limit) {
    return this.length > limit;
}

console.log('John'.isLenghtGreaterThan(3));

All strings will have access to this method. It is possible due to how we can
add to the prototype. It can be very usefull. But we need to be carefull, we
do not want to override existing methods. 

We can very powerfully effect the language. And it works pretty nicely as long
as we work with things like arrays or strings, but it gets more confusing when
we start working with primitives, like numbers. 

While JavaScript is nice enough to convert a 'string' to an object, it will not
convert a number to an object. So the below will give an error: 

Number.prototype.isPositive = function() {
    return this > 0;
}

console.log(3.isPositive())

This will work: 

let d = new Number(3);
d.isPositive();

Why? Because even though it looks like we have created a number, a primitive, we
have actually created an object. The obejct boxes up the primitive and gives us
the possibilty to use inbuilt methods or add our own. 

