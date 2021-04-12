Every execution context has a reference to its outer enviorment 

Order of execution determains how functions are invoked,
how exucutions contexts are created

JS cares about the lexical enviorment when it comes to the 
outer reference that every exection context get. 

When you ask for a variable, the JS engieen will do everything
to find that variable. If it can't find that variable inside the 
current enviorment/context it will go the outer enviorment of that 
context and look for it, somwhere down the execution stack. 

The outer enviorment is whatever surounds the function where it 
was written, where it was placed lexical

Remember that where something sits lexical differ from where 
something(a function) is invoked. Even though it is when the 
fnction is invoked, the execution context and the outer reference 
is created.

The chain of outer enviorments - The Scope Chain

The links of outer enviorments. If JS can't find a variable it
will go down the scope chain to find it. 