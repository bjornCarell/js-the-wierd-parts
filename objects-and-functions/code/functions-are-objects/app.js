function greet() {
    console.log('hi')
}

greet.language = 'english'
console.log(greet.language)

const newGreet = () => console.log('hej')
newGreet.language = 'swedish'
console.log(newGreet.language)
newGreet()

// IN JAVASCRIPT FUNCTIONS ARE OBJECTS

