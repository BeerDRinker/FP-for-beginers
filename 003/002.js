// SPREAD OPERATOR
const meal = {
  id: 1,
  description: 'Breakfast'
}

const updatedMeal = {
  ...meal, // <-- here it si
  calories: 600
}

console.log('SPREAD OPERATOR ', meal, updatedMeal)

// DESTRUCTURING OPERATOR
const { calories, description }  = updatedMeal
console.log('DESTRUCTURING OPERATOR: ', calories, description)

// REST OPERATOR
const { id, ...mealWithoutId } = updatedMeal
console.log('REST OPERATOR: ', mealWithoutId)


const meal = {
  description: 'Dinner',
};
// 1. In an Immutable way, add a property to the
// meal called calories setting it's value to 200,
// then log the result to the console
const updatedMeal = {
  ...meal,
  calories: 200
}
console.log(updatedMeal)
// 2. In an Immutable way, increase the calories 
// by 100 and print the result to the console
const updatedCalories = {
  ...updatedMeal,
  calories: updatedMeal.calories + 100
}
console.log(updatedCalories)
// 3. In an Immutable way, remove the calories property and log the result to the console
const { calories, ...mealWithoutalories } = updatedCalories
console.log(mealWithoutalories)
// See solution at: https://jsbin.com/sunewil/edit?js,console