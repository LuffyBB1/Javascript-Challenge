/*
Autor: Brayan Bernal
Curso: 30 - Days of Javascript
Tema: Day 11 - Destructuring and Spreading
Date: 21/08/2023
*/ 

//Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree)

const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  const [frontEnd, backEnd] = fullStack
  
  console.log(frontEnd)
  console.log(backEnd)

//If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index

const last_names = ['Bernal', 'Martínez', 'Taco', undefined]
let [one_last, , three_last, fourth_last='Halisco'] = last_names //2 is omitted

//We can use default value in case the value of array for that index is undefined:
console.log(one_last, three_last, fourth_last)

//We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)


// ----------- Destructuring during iteration -------------------


const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
console.log(country, city)
}

for(const [first, second, third] of fullStack) {
    console.log(first, second, third)
}


// Destructuring Object

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }
  let { width, height, area, perimeter, volumn } = rectangle
  
  console.log(width, height, area, perimeter, volumn)

  const square = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width: w, height: h, area: a} = square
  
  console.log(w, h, a)

  //Destructuring keys as a function parameters. Let us create a function which takes a rectangle object and it returns a perimeter of a rectangle.

// Without destructuring
const rect = {
    width: 20,
    height: 10
  }
  const calculatePerimeter = rect => {
    return 2 * (rect.width + rect.height)
  }
  
  console.log(calculatePerimeter(rect)) // 60
  //with destructuring


  //Another Example
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
  }
  // Let us create a function which give information about the person object without destructuring
  
  const getPersonInfo = obj => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0, -1).join(', ')
    const languages = obj.languages
    const formattedLanguages = languages.slice(0, -1).join(', ')
  
    personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
      obj.age
    } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
      skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
    return personInfo
  }
  
  console.log(getPersonInfo(person))


//-------------Object parameter with destructuring-----------------
const calculatePerimeterDestructuring = ({ width, height }) => {
    return 2 * (width + height)
  }
  
  console.log(calculatePerimeterDestructuring(rect)) // 60

  // Let us create a function which give information about the person object with destructuring
const getPersonInfoDestructuring = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages
  }) => {
    const formattedSkills = skills.slice(0, -1).join(', ')
    const formattedLanguages = languages.slice(0, -1).join(', ')
  
    personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
      skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
    return personInfo
  }
  console.log(getPersonInfoDestructuring(person))
  /*
  Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
  */

console.log('\n')

//----------Destructuring object during iteration----------------
const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
    ]
    
    for (const {task, time, completed} of todoList){
      console.log(task, time, completed)
    }


// ------------------ Spread or Rest Operator   --------------------------
/*When we destructure an array we use the spread operator(...) to get the rest elements as array. 
In addition to that we use spread operator to spread array elements to another array.
*/

const countriesList = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
  ]
  
  let [gem, fra, , ...nordicCountries] = countriesList
  
  console.log(gem)
  console.log(fra)
  console.log(nordicCountries)

  const evens = [0, 2, 4, 6, 8, 10]
  const evenNumbers = [...evens]
  
  const odds = [1, 3, 5, 7, 9]
  const oddNumbers = [...odds]
  
  const wholeNumbers = [...evens, ...odds]
  
  console.log(evenNumbers)
  console.log(oddNumbers)
  console.log(wholeNumbers)

  // we can use the spread operator to copy arrays and objects, in adition we can modify it during copy:

  const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }
  
  const copiedUser = {...user, title:'instructor'}
  console.log(copiedUser)

// --------- Spread operator in an arrow function --------------
const sumAllNums = (...args) => {
    let sum = 0
    for (const num of args){
      sum += num
    }
    return sum
    
  }
  
  console.log(sumAllNums(1, 2, 3, 4, 5))