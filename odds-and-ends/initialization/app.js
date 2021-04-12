let people = [
    {
        // the 'john' object
        firstname: 'John',
        lastname: 'Doe',
        adresses: [
            '111 Main St.',
            '222 Third St.'
        ]
    }, {
        // the 'jane' obejct
        firstname: 'Jane',
        lastname: 'Doe',
        adresses: [
            '333 Main St',
            '444 Fith St.'
        ],
        greet: function() {
            return `Hello ${this.firstname} ${this.lastname}`;
        }
    }
]

console.log(people);