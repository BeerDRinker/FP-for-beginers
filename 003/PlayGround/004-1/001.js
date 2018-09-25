const greet = (greeting, name) => `${greeting} ${name}`
// console.log(greet('Hello', 'You'))

const newGreet = (greeting) => (name) => `${greeting} ${name}`
const friends = ['Allan', 'Joe', 'Tommy', 'Zoe']
const friendsGritting = friends.map(newGreet('Hello'))

// console.log(friendsGritting)

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

const grades = {
  a: 'Excellent',
  b: 'Nice Job',
  c: 'Well done',
  d: 'What happened',
  f: 'Not good'
}

const letterGrade = (points) => {
  if(points >= 90) {
    return 'a'
  } else if(points >= 80) {
    return 'b'
  } else if(points >= 70) {
    return 'c'
  } else if(points >= 60) {
    return 'd'
  } else {
    return 'f'
  }
}

const feedBack = (feedBackRules) => (student) => {
  const grade = letterGrade(student.grade)
  const message = feedBackRules[grade]
  return `${message} ${student.name}, you got an ${grade}`
}

const studentFeedback = studentGrades.map(feedBack(grades))
console.log(studentFeedback)

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