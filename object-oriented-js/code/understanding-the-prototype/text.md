The prototype is a concept. 

We know that JS adds hiddens props and methods to things, properties
and methods we do not interact with directly. 

All object in JS, including functions, have a protoype property, a
property that is simply a reference to another obejct. 
It stands for itself.

Each object can have it's own prototype. 


If we look for a property on the "main" object, and the JS engine
can't find it - it will continue to look for that property on
the other object, the prototype property. If it can't find it there
it will continue to look on that objects prototype property --> The 
prototype chain. 

Do not confuse the prototype chain with the scope chain, even thouh 
they are similiar. The scope chain is about looking where we have
access to a variable. The prototypal chain is about where we have 
access to a property or methods amongst a sequence of objects that
are connected to each other via the prototype 

Two different objects can chair the same properties, if we want to. 
It is not that they have the same properties. 
The objects are chairing a property, but not directly, they share
it via this concept called the prototype chain in the JS engine. 

We never want to access the prototype directly, set a property
on the prototype, it comes with huge performance problems. 





