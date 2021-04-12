function greet(firstname,lastname,language) {
    language = language || 'en';

    if(language === 'en') {
        console.log('Hello ' + firstname + ' ' + lastname);
    }

    if(language === 'es'){
        console.log('Hola ' + firstname + ' ' + lastname);
    }
}

function greetEnglish(firstname,lastname) {
    greet(firstname,lastname, 'en');
}

function greetSpanish(firstname,lastname) {
    greet(firstname,lastname,'es');
}

greetEnglish('John', 'Doe', 'es');
greetSpanish('Jane', 'Doe', 'en');


const greet = (firstname, lastname, language = 'en') => {
    if(language === 'en') {
        console.log(`Hello ${firstname} ${lastname}`)
    }

    if(language === 'es') {
        console.log(`Hello ${firstname} ${lastname}`)
    }
}

const greetEnglish = (firstname, lastname) => {
    greet(firstname, lastname, 'en');
}

const greetSpanish = (firstname, lastname) => {
    greet(firstname, lastname, 'es');
}

greetEnglish('Richard', 'Dawkins'); // Hello Richard Dawkins
greetSpanish('Leonel', 'Messi'); // Hola Leonel Messi