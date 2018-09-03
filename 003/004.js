// REDUCE
const array = [1, 2, 3]
const reduer = (accum, current) => accum + current
const sum = array.reduce(reduer)

const grades = [60, 55, 80, 90, 99, 92, 75, 72]

const total = grades.reduce((accum, cerrent) => accum + cerrent)
const count = grades.length
const avrg = total / count

const letterGradeCount = grades.reduce(groupByGrade, {})

function groupByGrade(acc, grade) {
  const { a = 0, b = 0, c = 0, d = 0, f = 0 } = acc
  if (grade >= 90) {
    return { ...acc, a: a + 1 }
  } else if (grade >= 80) {
    return { ...acc, b: b + 1 }
  } else if (grade >= 70) {
    return { ...acc, c: c + 1 }
  } else if (grade >= 60) {
    return { ...acc, d: d + 1 }
  } else {
    return { ...acc, f: f + 1 }
  }
}

// console.log(total, avrg, letterGradeCount)

// Functional Programming for Beginners Exercise

const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

// 1. Using the reduce function, create an object that
// has properties for each review value, where the value
// of the property is the number of reviews with that score.
// for example, the answer should be shaped like this:
// { 4.5: 1, 4.0: 2 ...}
// 
// TIP: checkout computed properties discussed here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
// solution can be found at:
// https://jsbin.com/himuzuw/1/edit?js,console

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

const rates = reviews.filter(onlyUnique).sort()
console.log(rates)

const letterGradeCount = grades.reduce(groupByRates, {})

function groupByRates(acc, grade) {
  const { a = 0, b = 0, c = 0, d = 0, f = 0 } = acc
  if (grade >= 90) {
    return { ...acc, a: a + 1 }
  } else if (grade >= 80) {
    return { ...acc, b: b + 1 }
  } else if (grade >= 70) {
    return { ...acc, c: c + 1 }
  } else if (grade >= 60) {
    return { ...acc, d: d + 1 }
  } else {
    return { ...acc, f: f + 1 }
  }
}