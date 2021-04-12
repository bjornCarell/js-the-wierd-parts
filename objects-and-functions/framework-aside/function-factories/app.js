function makeGreet(language) {
    
    return function (firstname, lastname) {
        
        if(language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);
        }

        if(language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);
        }
    }
}

makeGreet('en')('Andrew', 'Reynholds');
makeGreet('es')('Jose', 'Garcia');

let greetEnglish = makeGreet('en'); // one execution context here
let greetSpanish = makeGreet('es'); // another execution context here

console.log('-----------------');

greetEnglish('Jose', 'Garcia');
greetSpanish('Andrew', 'Reynholds');