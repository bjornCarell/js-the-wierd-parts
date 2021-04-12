When a function is invoked a new execution context is created
think of execution context as what happens with that code when
it is invoced

Creation phase:
Variable Enviorment
'this' 
Outer Enviorment

'this' is given to us by the ES engine during the creation phase
the keyword 'this' points to another object in memory

When we create a function the 'this' keyword will still point 
towards the global object, the window object in the browser

In the case where a function, a method, is attached to an object the 
'this' keyword will become to that object 

self workaround
we understand that it works because objects are set by refernce 
we create the variable 'self' and set it equal to 'this'

let self = this

the self variable will now point to the same place in memory as 
this does 