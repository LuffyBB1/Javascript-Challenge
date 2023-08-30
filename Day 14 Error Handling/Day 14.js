/*
Autor: Brayan Bernal
Curso: 30 - Days of Javascript
Tema: Day 14 - Error Handling
Date: 23/08/2023
*/

/*try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}*/

try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log(err)
  }

/*ReferenceError: fistName is not defined
    at <anonymous>:4:20*/

try {
        
        let lastName = 'Yetayeh'
        let fullName = fistName + ' ' + lastName
} catch (err) {
        console.error(err) // we can use console.log() or console.error()
} finally {
        console.log('In any case I will be executed')
}

/*ReferenceError: fistName is not defined
    at <anonymous>:4:20
In any case it  will be executed*/

try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
  } finally {
    console.log('In any case I will be executed')
  }

  const throwErrorExampleFun = () => {
    let message
    let x = prompt('Enter a number: ')
    try {
      if (x == '') throw 'empty'
      if (isNaN(x)) throw 'not a number'
      x = Number(x)
      if (x < 5) throw 'too low'
      if (x > 10) throw 'too high'
    } catch (err) {
      console.log(err)
    }
  }
  throwErrorExampleFun()