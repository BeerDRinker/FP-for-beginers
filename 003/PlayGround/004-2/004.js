const R = require('ramda');

const sentense = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, magnam. Odit vel consectetur optio nostrum aut distinctio dolore minima quia nam fugiat adipisci voluptates quod odio iusto, qui numquam minus?'

const wordList = R.split(' ', sentense)
console.log(wordList)

const wordCount = R.length(wordList)
console.log(wordCount)

// Function composition
const countWords = R.compose(R.length, R.split) // R.compose works right-to-left
console.log(countWords(' ', sentense));

// Function composition with partial application
const countWordsPartial = R.compose(R.length, R.split(' '))
console.log(countWordsPartial(sentense))           // ^^ - Partial Application

const countWordsPartial2 = R.pipe(R.split(' '), R.length) // R.pipe works left-to-right
console.log(countWordsPartial2(sentense))           // ^^ - Partial Application