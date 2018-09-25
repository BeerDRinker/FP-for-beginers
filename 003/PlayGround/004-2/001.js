// const greet = (greeting, name) => `${greeting} ${name}`

// const greet = (greeting) => (name) => `${greeting} ${name}`

// // console.log(greet('Good Morning', 'James')); 

// const friends = ['Nate', 'Jim', 'Scott', 'Dean']

// const friendGreetings = friends.map(greet('Good Morning'))

// console.log(friendGreetings);

// Functional Programming for Beginners Excercise

// create the code to go from studentGrades array, 
// to studentFeedback (as shown in comments below)

const studentGrades = [ 
  {name: 'Joe', grade: 88},
  {name: 'Jen', grade: 94},
  {name: 'Steph', grade: 77},
  {name: 'Allen', grade: 60},
  {name: 'Gina', grade: 54},
];

const gradeToFeedback = {
  a: 'Excellent Job',
  b: 'Nice Job',
  c: 'Well done',
  d: 'What happened',
  e: 'Not good'
}

const gradeToLetter = (grade) => {
  if (grade >= 90) {
    return 'a'
  } else if (grade >= 80) {
    return 'b'
  } else if (grade >= 70) {
    return 'c'
  } else if (grade >= 60) {
    return 'd'
  } else {
    return 'e'
  }
}
//my solution
// const studentFeedback = (studentGrades) => {
//   const grade = gradeToLetter(studentGrades.grade)
//   const feedBack = gradeToFeedback[grade]
//   return `${feedBack} ${studentGrades.name} you got an ${grade}`
// }

// console.log(studentGrades.map(studentFeedback))

const feedBack = (feedBackRules) => (student) => {
  const grade = gradeToLetter(student.grade)
  const message = feedBackRules[grade]
  return `${message} ${student.name} you got an ${grade}`
}

const gradeFeedback = studentGrades.map(feedBack(gradeToFeedback))
console.log(gradeFeedback)

/*
const studentFeedback = [
  'Nice Job Joe, you got an b',
  'Excellent Job Jen, you got an a',
  'Well done Steph, you got an c',
  'What happened Allen, you got an d',
  'Not good Gina, you got an f',
]; 
*/

// Solution found at:
// https://jsbin.com/vaqomiy/1/edit?js,console