let jimmy = 'Jimmy Jones';

(function(name = 'Jane Hoffa') {

    let greeting = 'Hello';
    console.log(greeting + ' ' + name);

}(jimmy));

Any variable inside the IFFEs will be declared inside the
invoked function (), it will never touch the global object. 
It has it's own execution context, and all variables will be 
attached to that. And that is what makes IFFEs so usefull. 

This means that we do not risk to colide with anything in the 
global object. So if we would have a variable with the same 
name inisde the IFFE and the global object, they will not colide. 

Code inside a IFFE will not interfer with code in the global 
object, and it will not get interferred with. The code is Safe. 

If we do want to access the global object, we just pass it
as paramater a parameter.

We can attache variables inside IFFEs by simple decalraring
global.variable = 'my variable'  - This makes it attentional.