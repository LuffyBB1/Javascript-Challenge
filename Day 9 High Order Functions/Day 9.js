/*
Autor: Brayan Bernal
Curso: 30 - Days of Javascript
Tema: Day 9 - High Order Functions
Date: 26/07/2023
*/ 

// a callback function, the name of the function could be any name
const callback = (n) => {
    return n ** 2
  }
 //function that takes other function as a callback
function cube(xd, n) {
    return xd(n) * n
  }
  console.log(cube(callback, 3))


// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }
    return doSomething
  }
  console.log(higherOrder(2)(3)(10))

  const numbers = [1, 2, 3, 4]

  const sumArray = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray(numbers))

function sayHello() {
  console.log('Hello')
}
//setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s

/**
 * arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})
// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})
// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))
 * 
 */


numbers.forEach(num => console.log(num))
let sum = 0;
numbers.forEach(num => sum += num)

console.log(sum)

//map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.

const countries_two = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries_two.forEach((element) => console.log(element.toUpperCase()))

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]
const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

/*
// Arrow function
const countriesToUpperCase = countries.map((country) => {
  return country.toUpperCase();
})
//Explicit return arrow function
const countriesToUpperCase = countries.map(country => country.toUpperCase());
*/

//Filter: Filter out items which full fill filtering conditions and return a new array.

const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)


//reduce, reduce todos los items del arreglo a uno solo (como un acumulador para número o un concatenador para strings)

const res = scores.reduce((acc, item) =>{
    return acc +=item.score;
}, 0)
console.log(res)


//every Cada item del arreglo cumple x condición? sí return true, no, return false
const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true) // Are all true? 

console.log(areAllTrue) // true



//find: Return the first element which satisfies the condition
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log(age)

const result = names.find((name) => name.length > 7)
console.log(result)

const score = scores.find((user) => user.score > 80)
console.log(score)

//findIndex: Return the position of the first element which satisfies the condition

const rest = names.findIndex((name) => name.length > 7)
console.log(rest) // 0

const age_index = ages.findIndex((age) => age < 20)
console.log(age_index) // 5

//some: Check if some of the elements are similar in one aspect. It returns boolean

const areAllStr = names.some((name) => typeof name === 'string') // Are all strings ?
console.log(areAllStr) // false

names.forEach((element) => console.log(typeof(element)))

const some_age=ages.some((item) => item >1)
console.log(some_age)

/*sort: The sort methods arranges the array elements either ascending or descending order. 
By default, the sort() method sorts values as strings.This works well for string array items 
but not for numbers. If number values are sorted as strings and it give us wrong result. 
Sort method modify the original array. It is recommended to copy the original data before you start using 
sort method.*/

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted

//Sorting Numeric values
const numeros = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numeros.sort()) //[100, 3.14, 37, 9.81]
numeros.sort(function (a, b) {
  return a - b
})

console.log(numeros) // [3.14, 9.81, 37, 100]

numeros.sort(function (a, b) {
  return b - a
})
console.log(numeros) //[100, 37, 9.81, 3.14]



//Sorting Object Arrays  - Whenever we sort objects in an array, we use the object key to compare. Let us see the example below.

objArr.sort(function (a, b) {
  if (a.key < b.key) return -1
  if (a.key > b.key) return 1
  return 0
})

// or

objArr.sort(function (a, b) {
  if (a['key'] < b['key']) return -1
  if (a['key'] > b['key']) return 1
  return 0
})

const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log(users) // sorted ascending
// [{…}, {…}, {…}, {…}]