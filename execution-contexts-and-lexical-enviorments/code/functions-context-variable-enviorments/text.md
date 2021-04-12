Functions, Contexts and Variable Environments
Variable Environment: Where a variable lives, and how it relates to other variables in memory. 

When you think of a variable environment, just think: Where is the variable? 

We know that each function will have its own execution context. And each execution context will set up its own variable environment. 

The variables in different variable environments are distinct, they do not touch or affect each other.

What is the value of the different myLet’s at any different time of execution? 

The Global Execution Context is created and then executed. myLet is equal to 1, in the Global Execution Context
Function a is invoked, a new execution context is set up, and function a gets run, line by line. myLet is equal to 2.
Inside function a, function b is invoked, a new execution context is set up, and function b gets run, line by line. myLet is never declared in function b and is therefore set to undefined.
myLet is again consoled in the global execution context. And in the global execution the myLet variable is 1. 
