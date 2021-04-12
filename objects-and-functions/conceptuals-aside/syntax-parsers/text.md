In javascript syntax parsers goes through your code character by character,
line by line, and it makes assumptions about your code before it has read
all the characters 

It is important to think about the JS engine parsers like this, that they
read your code character by character and deciding what you intend, and
it is all happening before your code has been executed. It can make changes
to your code. 