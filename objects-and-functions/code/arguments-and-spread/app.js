function greet(firstname,lastname,language) {
    
    lastname = lastname || 'Doe';
    language = language || 'en';

    if(arguments.length === 0) {
        console.log('Missing parameters!');
        console.log('---------');
        return
    }
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('------------');
}

greet();
greet('John');
greet('John', 'Anderson');
greet('John', 'Doe', 'es');

const greet2 = (
    firstname = 'Joe', 
    lastname = 'Doe', 
    language = 'en'
    ) => {

    console.log({
        firstname,
        lastname,
        language
    }); 
}

// In many other programming languages calling a function without
// all its arguments would give an error 

function greeting(firstname,lastname,language,...rest) {

    language = language || 'en'

    if(arguments.length === 0) {
        console.log('Missing parameters!')
        console.log('---------')
        return
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(rest);
    console.log('------------');

}

greeting('Jane', 'Doe', 'se', 'Stockholm', 'Liljeholmen');
