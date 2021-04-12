# Syntax parser

Semicolons are optionals, but you should always use them. Automatic
semicolon insertion can cause big problems in your code

Automatic semicolon insertion will always insert a semicolon 
after a return statement, if the rest of the line is blank

return 
{
    name: 'Björn'
}

This return statement will return undefined, because a semicolon
will be inserted after the return statement, and all the rest 
will be 'ignored'

