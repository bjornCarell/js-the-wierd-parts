## By Value
If we assign variable 'a' a primitive value and then 
assign varible a as value for variable b, a copy of
that value is created in memory

1. varible a creates and is assign a primitive
2. varible b creates and is assing varible a
3. variable b becomes a copy of a 

They are at two different spots in memory, the equals operator 
creates this copy  

## By reference
All objects points to memory by reference. So if we assign 
variable 'c' an object and then we assign variable 'd' the
'c' variable, a copy is not created. They point to the exact
same thing in memory. This means that if we change something
in the object via the c variable, it will affect the object
assigned to the d variable, because they point to the same
value in memory.



