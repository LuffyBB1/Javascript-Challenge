/*
Autor: Brayan Bernal
Curso: 30 Days of Javascript
Tema: Day 5 - Arrays
Date: 28/06/2023
*/ 

// syntax
const arr = Array()
// or
// let arr = new Array()
console.log(arr) // []

// syntax
// This the most recommended way to create an empty list
const arr_o = []
console.log(arr_o)

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

const arrays = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arrays)

let splitear='Javascript'
const arr_split=splitear.split('')
console.log(arr_split) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

console.log(numbers.length)  // => to know the size of the array, which is 6
console.log(numbers)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0])      //  -> 0
console.log(numbers[5])      //  -> 100

console.log(webTechs)        // all the array items
console.log(webTechs.length) // => to know the size of the array, which is 7
console.log(webTechs[0])     //  -> HTML
console.log(webTechs[6])     //  -> MongoDB
  
let lastIndex = webTechs.length - 1
console.log(webTechs[lastIndex]) // -> MongoDB

const countries_list = [
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
    'Kenya'
  ]
  
countries_list[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
countries_list[(countries_list.length - 1)] = 'Korea' // Replacing Kenya by Kore
console.log(countries_list)

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]

const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]


//Concatenating array using concat
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]
console.log(thirdList.length) // -> 6 is the size of the array

let index = fruits.indexOf('banana')  // 0
console.log(index)

if(index === -1){
  console.log('This fruit does not exist in the array')  
} else {
   console.log('This fruit does exist in the array')
}
// This fruit does exist in the array

// we can use also ternary here
index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')

// let us check if an avocado exist in the array
let indexOfAvocado = fruits.indexOf('avocado')  // -1, if the element not found index is -1
if(indexOfAvocado === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does not exist in the array

//lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.
const numeros = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numeros.lastIndexOf(2)) // 7
console.log(numeros.lastIndexOf(0)) // -1
console.log(numeros.lastIndexOf(1)) //  6
console.log(numeros.lastIndexOf(4)) //  3
console.log(numeros.lastIndexOf(6)) // -1

//includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

console.log(webTechs.includes('Node'))  // true
console.log(webTechs.includes('C'))     // false


console.log(Array.isArray(numbers)) // true
const number = 100
console.log(Array.isArray(number)) // false

//
console.log(numbers.toString()) // 1,2,3,4,5
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

const numeros_two = [1,2,3,4,5]
console.log(numeros_two.slice()) // -> it copies all  item
console.log(numeros_two.slice(0)) // -> it copies all  item
console.log(numeros_two.slice(0, numeros_two.length)) // it copies all  item
console.log(numeros_two.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

numeros_two.splice(0,1)
  console.log(numeros_two)       // remove the first item

const numbers_s = [1, 2, 3, 4, 5, 6]
  numbers_s.splice(3, 3, 7, 8, 9)
console.log(numbers_s.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

console.log(numbers_s)

// syntax
const arra  = ['item1', 'item2','item3']
arr.push('new item')
console.log(arra)
// ['item1', 'item2','item3','new item']
numbers.push(6)
fruits.push('apple')
console.log(fruits)    // ['banana', 'orange', 'mango', 'lemon', 'apple']

numbers.pop() // -> remove one item from the end
console.log(numbers) // -> [1,2,3,4]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length)  // 2
console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
console.log(fullStack[1][2]) // MongoDB

console.log(frontEnd.splice(2,1))
console.log(frontEnd)

console.log(frontEnd.sort())

const firstTerm = webTechs[0];
const lastTerm = webTechs[webTechs.length - 1];
const middleTerm1 = webTechs[Math.floor(webTechs.length / 2) - 1];
const middleTerm2 = webTechs[Math.floor(webTechs.length / 2)];

console.log('Primer término:', firstTerm);
console.log('Último término:', lastTerm);
console.log('Término intermedio 1:', middleTerm1);
console.log('Término intermedio 2:', middleTerm2);

