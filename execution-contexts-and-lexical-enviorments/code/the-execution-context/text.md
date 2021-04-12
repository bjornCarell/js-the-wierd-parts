
The Execution Context: Creation and Hoisting. 

Many people like to explain Hoisting as if the JS engine is moving all variables and functions to the top of the script. That is not the case. 

The reason for why variables and functions are available, to some extent, before their lexical placement, is because the execution context is being created in two phases. 

The first phase: The Creation Phase
1. Global Ojbect
2. 'this'
3. Outer Enviorment 
4. Setup Memory Space for Variables and functions - Hoisting

Before your code is being executed the JS engine has already set aside memory space for the variables and all of the functions. They all exist in memory when the JS engine start to execute your code line by line. 

What you wrote on the 10th line is already there when the JS engine executes the code on the first line. Therefore it can access it. 

Functions get setup in whole, with their name and all of their code. 

Variables though, they get setup with an inital value of undefined. The JS engine does not know in beforehand what value you asign to the variables, it just notice that there is a variable and it sets up Memory Space for it.

The Execution Context, part 2 - Execution Phase 
In the execution phase we already have all the things that were setup for us during the creation phase. Now the JS engine compiles and converts your code to something the computer can understand. And it is doing this line by line. 


