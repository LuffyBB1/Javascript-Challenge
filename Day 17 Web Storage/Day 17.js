/*localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time, 
data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed.
*/

/*
HTML web storage provides two objects for storing data on the client:

window.localStorage - stores data with no expiration date
window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)Most modern browsers support Web Storage, however it is good to check browser support for localStorage and sessionStorage. Let us see the available methods for the Web Storage objects.
Web Storage objects:

localStorage - to display the localStorage object
localStorage.clear() - to remove everything in the local storage
localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.
*/ 

//----------------Setting Items ----------------------
//syntax
localStorage.setItem('key', 'value')

localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it

localStorage.setItem('age', 200)


/*Storing an array in a localStorage. 
If we are storing an array, an object or object array, 
we should stringify the object first. See the example below.
*/
const skills = ['HTML', 'CSS', 'JS', 'React']
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)

let skills_2 = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
  ]
  
  let skillJSON = JSON.stringify(skills_2)
  localStorage.setItem('skills_2', skillJSON)

  const user = {
    firstName: 'Asabeneh',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React']
  }
  
  const userText = JSON.stringify(user, undefined, 4)
  localStorage.setItem('user', userText)



  //-------------------------- Getting Items -------------------------------
  //syntax
localStorage.getItem('key')

let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skillsGet = localStorage.getItem('skills')
console.log(firstName, age, skills)

let skillsObj = JSON.parse(skillsGet, undefined, 4)
console.log(skillsObj)

//--------------------  Clearing the Storage -----------------------
//localStorage.clear()
