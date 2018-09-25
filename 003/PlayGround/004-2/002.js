const partial = require('partial');
const R = require('ramda');


const friends = ['Nate', 'Jim', 'Scott', 'Dean']

// Classic function
const greet = (greeting, name) => `${greeting} ${name}`
console.log('Classic function: ', greet('Hello', 'Jemes'), friends.map(greet));

// Curring function
const curringGreet = (greeting) => (name) => `${greeting} ${name}`
console.log('Curring function: ', curringGreet('Good Morning')('Jemes'), friends.map(curringGreet('Good Morning')));

// Partial Application
const morningGreeting = curringGreet('Good Morning')
console.log('Partial Application: ', morningGreeting('Joe'));

// Partial Application without curring
const multiplay = (x, y) => x * y
const multiplay3 = partial(multiplay, [3])
console.log(multiplay3(2))

// Ramda Curring
const RamdaGreet = R.curry((greeting, name) => `${greeting} ${name}`)
console.log('Ramda Curring: ', RamdaGreet('Hello', 'Jemes'))
console.log('Ramda Curring: ', friends.map(RamdaGreet('Good Morning')));
