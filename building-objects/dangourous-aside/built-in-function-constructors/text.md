By using built in function constructors for creating primitive, we 
are not actually creaing primitives. We are creating objects. And 
strange things can happen when doing comparisons. It is generally 
better not to use the inbuilt function constructors. User literalls,
us the actuall primitive values. 

Remember that any type need to be compared to the same type. 

It is dangerous to use inbuilt function constructors for primitives. 
It can be usefull to use ibuilt functions like 

Number(3);

but notice how we are not using the 'new' operator. Meaning, we are
not creating that empty object that boxes in the primitive. Alot of
developers are using 

new Number(3);

without even realising that they are creating objets. So be carefull
with that 'new' operator. 