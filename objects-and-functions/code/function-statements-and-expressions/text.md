expression: something that results in a value 

statement: does the work

expressions can be used inside a statement, 
a statement can NOT be used inside a expression

Function statements
does not result in a value (true/false)
can be hoisted 
During the execution phase the JS engine sees this 
function statement and just notice "oh, there is a function"
and place it in memory but it does not result in a value

Function expressions
We assign a variable the function object value, by using = operator
During the execution phase this results in an object being created
Why can't functon expressions be hoisted? Think about it, we assign 
a variable the function object, what initial value does the JS engine
give each variable? undefined. So if we try to invoke the function
object via the variable it is assign to, JS sees undefined(). 

