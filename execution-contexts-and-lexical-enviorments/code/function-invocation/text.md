Everytime we envoke a function in JS, a new execution context is created. 
And put on the execution stack. 
This means that each function will go through its own creation and 
execution phase: 
    1. memory will be set up: creation phase
    2. JS goes through the function line by line: execution phase

EVERY FUNCTION CREATES A NEW EXECUTION CONTEXT, for that function
The enviorment for that function will be created
The 'this' keyword for that function will be created
The variables within are setup during the creation phase. 

THE FUNCTION TO BE INVOKED LATEST IS PUT ON THE TOP OF THE EXECTUON STACK
WHATEVER FUNCTION IS ON TOP WILL GET EXECUTED BEFORE ALL OTHERS - 
Line by line.
When the function has executed fully it will get poped of the stack 
The lexical order does not matter 

