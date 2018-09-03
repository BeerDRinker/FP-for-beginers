// SPREAD OPERATOR
const meals = [
  { id: 1, description: 'Breakfast', calories: 420 },
  { id: 2, description: 'Lunch', calories: 520 }
]

const meal = { id: 3, description: 'Snack', calories: 180 }

const updatedMeals = [ ...meals, meal ]
// console.log('SPREAD OPERATOR: ', updatedMeals)

const updatedMealDescription = updatedMeals.map(meal => {
  if (meal.id === 2) {
    return {
      ...meal,
      description: 'Early Lunch'
    }
  }
  return meal
})

//console.log('updatedMealDescription: ', updatedMealDescription)

const filteredMeals = updatedMeals.filter(meal => meal.id !== 2)
console.log('filteredMeals: ', filteredMeals)

// 1. create a constant named friends, 
// which is an array that contains 2 
// names of your choosing.
const friends = ['fri1', 'frid2']
console.log(friends)
// 2. Create a new constant named updatedFriends, 
// which includes the friends array values plus 
// one additional name
const updatedFriends = [...friends, 'fried3']
console.log(updatedFriends)
// 3. Create a new constant named friendNameLengths, 
// which is based on the array updatedFriends, 
// but instead of having the friends names, 
// have the array store the length of each persons name.
const friendNameLengths = updatedFriends.map(friend => friend.length)
console.log(friendNameLengths)
// 4. Create a new constant named shorterNamedFriends, 
// which will be a list of the friends except the friend with the longest name.
const maxFriendLength = Math.max(...friendNameLengths)
console.log(maxFriendLength)
const shorterNamedFriends = updatedFriends.filter(friend => friend.length !== maxFriendLength)
console.log(shorterNamedFriends)
// 5. Print each variable to the console.

// Solution can be seen at: 
// https://jsbin.com/nevonet/1/edit?js,console