Helps us controll what 'this' turns out to be.
Let us set the context, decide what 'this' should be. 

Why would we need that? Because 'this', for a function, if
not inside an object, will always be the global object. 

To properly understand these inbuilt function we needed
to have a fundemental understaning of first class functions.
We need to remind ourselfs, repeat the mantra if you so will: 
IN JAVASCRIPT FUNCTIONS ARE OBJECTS

Function object properties 
code --> invocable ()
name --> optional
apply() --> method
call() --> method
bind() --> method

A function is just an object, so it can be assigned methods. bind(),
call(), and apply() are inbuilt methods that can be accessed. 

### bind
The bind method sets up a new function, a copy of the function it is attached to, with the parameter deciding what 'this' should be. Unlike call() and apply(), bind() does not invoke the function. 

Example:

let person = {
    firstname: 'Mike',
    lastname: 'Ericson',
    getFullName: function() {
        let fullName = this.firstname + ' ' + this.lastname;
        return fullName;
    },
}

let thisPersonSpeaks = function(lang1, lang2) {
    
    console.log(`${this.getFullName()} speakes ${lang1} and ${lang2}`);

}.bind(person);

thisPersonSpeaks('Swedish', 'Dutch');

### call
call lets us invoke the function and at the same time lets us decide
what the context, the 'this' variable, should be. The context is set
in the first paramater in the call method. The rest of the parameters
is there for us to use to whatever we like. 

logName.call(person, 'fr', 'it');

### apply 
does the same thing as call but takes an array as parameter.

logName.apply(person, ['tr', 'ru']);