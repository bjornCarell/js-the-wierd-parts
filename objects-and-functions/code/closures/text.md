## Part 3

function greet(whatToSay) {
    return function(name) {
        console.log(whatToSay + ' ' + name);
    }
}

let sayHi = greet('Hi');
sayHi('Tony');

1. Global execution context, greet function being attached to the global object
2. greet() - execution context for greet function - whatToSay 'Hi'
3. the greet exectution context is poped of the stack, but its variables 
    is still left in memory sonwehere. 
4. sayHi() - execution context for sayHi function - name 'Tony', then the JS engine 
    sees the whatToSay variable, but it can't find it inside its own execution
    context. So what does it do? It goes to next, its outer, execution
    context, which is the greet function.

Even though the greet function was executed, any function inside of it
will still have access to its outer enviorment, which is the greet function,
and has therefore still access to all the variables attached to the 
greet function. 

The execution context for the greet function is gone, but what is stored
in memory is still there, accessable for all functions inside the greet
function,even though it is not in the execution stack anymore. 

The JS engine closes in all variables that should be accessable, so all
functions have always access to its outer enviorment(s). The JS engine makes
sure of this, it is a feature of the language. 

### Part 2

function buildFunctions() {
    let arr = [];

    for(var i = 0; i < 3; i++) {
        
        arr.push(
            function() {
                console.log(i);
            }
        );
    }
    
    return arr;
}

let fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();


Beacuse of how for loops work, we exit the for loop when i is above 3.
Then we hit the return statement, and the last memory of i is 3. And
therefore the three functions will all return 3. All of the functions
inside the for loop have the same outer enviorment reference, the 
buildFunctions. Becaues they where all created in the same place, inside 
the buildFunctions.

Using let instead of var, we get seperatly scoped variables. So each i
variable will be seperated, and each function will have access to the
i variable that was ran with the creation for that function 0,1,2





