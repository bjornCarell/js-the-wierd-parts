Execution Context(Global)
The wrapper of all the code you written. The base Execution Context is the Global Executio Context. 

Global: It is accessable for everything you write, to all of your code.

Creats two things for us: Global Object and a special variable called 'this'.
These two things are created for us by the js engieen. 

When running JS there will always be a gloal object. 
When running JS in thw browser the global object is the window. 
Each tab, each window, will create a new global object, it is it's
own execution context. 

At a global level: Gobal object(the window) = 'this',
they are equal. this refers to the window. 

Global: Not inside  function. 
THINK NO DEEPER THAN THAT. 
Code is global when it is not inside a function. 

-------------

Execution Context (Global) - Creation Phase 
- Global Object is created
- 'this' is created 
- Outer Enviorment

The JS engieen Setup Memory Space for Variables and functions = Hoisting.
Since this is doen before your code us run - all of these variables
and functions are stored in memory, they are already there when you see
the outcome of your code. 

I Creation Phase skapas endast plats i minnet för variabler och function,
the JS engieen does not know what have been asigned each variable, that is 
taking place in the next phase; the EXECUTION PHASE. Therefore all variables
are initaial set to undefined, and therefore hoisting is often a bad thing
to rely on. The same is not true for funcitons, in the Creation Phase memory
is set up for functions as whole, with the funcitons and all its innehåll -
See the console for better understanding. 





