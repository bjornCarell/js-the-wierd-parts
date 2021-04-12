Everything is an Object (or a Primitive)

We know this, because anything that is not a primitive; basic object,
function,array etc, the all have a protoype. Except for the base object
in JavaScript. 

The base object is the last link the chain. This is where the prototype
chain ends. 

For basic objects you find the base object as the prototype. Here you 
find properties like hasOwnProperty etc. All basic objects in JS has
access top these properties and methods. 

For functions you will find things like bind, call, apply; inbuilt
methods all javascript functions has access to. All functions in 
JS has access to these methods because all function in JS has a
prototype that is pointing towards an object with these methods. 

For arrays you will find methods like push, pop, reduce, slice, sort;
methods that all arrays in javascript has access to. And why do they
have access to these methods? because they all have a prototype that
is pointing towards an object with theses methods. 



