/*
Autor: Brayan Bernal
Curso: 30 - Days of Javascript
Tema: Day 8 - Objects
Date: 13/07/2023
*/ 

//scope.js
a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
b = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // accessible


//scope.js
let c = 'JavaScript' // is a global scope it will be found anywhere in this file
let d = 10 // is a global scope it will be found anywhere in this file
function LearnScope() {
  console.log(c, d) // JavaScript 10, accessible
  if (true) {
    let c = 'Python'
    let d = 100
    console.log(c, d) // Python 100
  }
  console.log(c, d)
}
LearnScope()
console.log(c, d) // JavaScript 10, accessible


//scope.js
let x = 'React' // is a global scope it will be found anywhere in this file
let y = 15 // is a global scope it will be found anywhere in this file
// Function scope
function ScopeGaL() {
  console.log(x, y) // React 15, accessible
  let value = false
// block scope
  if (true) {
    // we can access from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block
    let x = 'Python'
    let y = 20
    let z = 30
    let v = 40
    value = !value
    console.log(x, y, z, v,  value) // Python 20 30 40 true
  }
  // we can not access c because c's scope is only the if block
  console.log(x, y, value) // React 15 true
}
ScopeGaL()
console.log(x, y) // React 15, accessible


if (true){
    var gravity = 9.81
    console.log(gravity) // 9.81
  }
console.log(gravity)  // 9.81
  
for(var i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }
console.log(i) // 3



//--------------------- Objects -------------------------
/*An empty object

const person = {}*/

const rectangle = {
    length: 20,
    width: 20
  }
console.log(rectangle) // {length: 20, width: 20}

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    address: {
        street: 'Heitamienkatu 16',
        pobox: 2002,
        city: 'Helsinki'
      },
    isMarried: true,
    //Creating object methods
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
      },
      'phone number': '+3584545454545'
  }

console.log(person)
console.log(person.skills)
// accessing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) // undefined

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['isMarried']) // undefined

//Method getFullName
console.log(person.getFullName())

//Setting new key for an object
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

person.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills
      .slice(0, this.skills.length - 1)
      .join(', ')
    let lastSkill = this.skills.slice(this.skills.length - 1)[0]
  
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
  }
console.log(person.getPersonInfo())

console.log(person)
//Object Methods
////Object methods: Object.assign, Object.keys, Object.values, Object.entries
const copyPerson = Object.assign({}, person)
const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']

const values = Object.values(copyPerson)
console.log(values)

const target = { a: 1, b: 8 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

const entries = Object.entries(copyPerson)
console.log(entries)
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('Helsinki'))
console.log(keys[5],values[5])
console.log(person)
person.Nuevo_arr=[1,2,3,1,4,8,6,4]
console.log(person.Nuevo_arr, person.skills)