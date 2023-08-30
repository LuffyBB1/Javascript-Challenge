/*
Autor: Brayan Bernal
Curso: 30 - Days of Javascript
Tema: Day 18 - Promises
Date: 29/08/2023
*/


const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback(false, skills)
    }, 2000)
  }
  
  doSomething((err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  })


//Callback
const doThing = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback('It did not go well', skills)
    }, 2000)
  }
  
  const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }
  
  doThing(callback)


//Promise constructor
/*We can create a promise using the Promise constructor. 
We can create a new promise using the key word new followed by the word Promise and followed by a parenthesis. 
Inside the parenthesis, it takes a callback function. 
The promise callback function has two parameters which are the resolve and reject functions.*/

// syntax
const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
  })


// Promise
//The above promise has been settled with resolve. Let us another example when the promise is settled with reject.

const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))

// Promise
const doPromiseReject = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.includes('Node')) {
        resolve('fullstack developer')
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromiseReject
    .then(result => {
      console.log(result)
    })
    .catch(error => console.error(error))

const url = 'https://restcountries.com/v2/all' // countries api
    fetch(url)
      .then(response => response.json()) // accessing the API data as JSON
      .then(data => {
        // getting the data
        console.log(data[0])
      })
      .catch(error => console.error(error)) // handling error if something wrong happens

//Async and await is an elegant way to handle promises. It is easy to understand and it clean to write.

async function main() {
    const square = async function (n) {
      return n * n
    }
    const value = await square(2)
    console.log(value)
  }
  
main(); // Llamada a la función async
  
//Promise method fecht API

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))

//async and await
const fetchData = async () => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.error(err)
    }
  }
  console.log('===== async and await')
  fetchData()