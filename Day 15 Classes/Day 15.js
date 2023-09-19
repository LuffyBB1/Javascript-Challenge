/*
Autor: Brayan Bernal
Curso: 30 - Days of Javascript
Tema: Day 15 - Classes
Date: 05/09/2023
*/

// syntax
class Person{
    //  code goes here
    constructor(//firstName, lastName, age, country, city
            //Parámetros inicializados por default, al crearse una instancia si no se especifican los 
            //valores, esta tomará los por default
        firstName = 'Asabeneh',
        lastName = 'Yetayeh',
        age = 250,
        country = 'Finland',
        city = 'Helsinki') {

        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        /* When we create a class for some properties we may have an initial value. 
        For instance if you are playing a game, you starting score will be zero. 
        So, we may have a starting score or score which is zero. 
        In other way, we may have an initial skill and we will acquire some skill after some time.*/
        this.score=0
        this.skills=[]

      }

      getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
      }

      get getScore() {
        return this.score
      }
      get getSkills() {
        return this.skills
      }

      set setScore(score) {
        this.score += score
      }
      set setSkill(skill) {
        this.skills.push(skill)
      }

      /* Do not be puzzled by the difference between regular method and a getter. 
      If you know how to make a regular method you are good. 
      Let us add regular method called getPersonInfo in the Person class.

*/
      getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
          this.skills.length > 0 &&
          this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}` : ''
    
        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
      }

      /**The static keyword defines a static method for a class. 
       * Static methods are not called on instances of the class. 
       * Instead, they are called on the class itself. 
       * These are often utility functions, such as functions to create or clone objects. 
       * An example of static method is Date.now(). 
       * The now method is called directly from the class.
 */
      static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
      }
      static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
          hours = '0' + hours
        }
        if (minutes < 10) {
          minutes = '0' + minutes
        }
    
        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
      }

}



//Cada nueva persona, es decir, cada instancia herede de su padre sus métodos y atributos


const person1 = new Person('Asabeneh', 'Yetayeh')
const person2 = new Person('Lidiya', 'Tekle')
const person3 = new Person('Abraham', 'Yetayeh')
const personita = new Person('Brayan', 'Bernal', 36, 'Colombia', 'Yucatan')

console.log(person1)
console.log(person2)
console.log(person3)
console.log(personita)

console.log(personita.getFullName())

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.score)
console.log(person2.score)

console.log(person1.skills)
console.log(person2.skills)

console.log(person1.getPersonInfo())
console.log(person2.getPersonInfo())
console.log(person3.getPersonInfo())

console.log(Person.favoriteSkill())
console.log(Person.showDateTime())


class Student extends Person {

    /*we can add additional properties to a child class. 
    If we want to customize, the methods and if we want to add extra properties, 
    we need to use the constructor function the child class too. 
    Inside the constructor function we call the super() function to access all the properties 
    from the parent class.
    */
    constructor(firstName, lastName, age, country, city, gender) {
      super(firstName, lastName, age, country, city)
      this.gender = gender
    }
  
    saySomething() {
      console.log('I am a child of the person class')
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
  
      let formattedSkills = skills ? `He knows ${skills}` : ''
      let pronoun = this.gender == 'Male' ? 'He' : 'She'
  
      let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
  }
  
  const s1 = new Student(
    'Asabeneh',
    'Yetayeh',
    250,
    'Finland',
    'Helsinki',
    'Male'
  )
  const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
  s1.setScore = 1
  s1.setSkill = 'HTML'
  s1.setSkill = 'CSS'
  s1.setSkill = 'JavaScript'
  
  s2.setScore = 1
  s2.setSkill = 'Planning'
  s2.setSkill = 'Managing'
  s2.setSkill = 'Organizing'
  
  console.log(s1)
  
  console.log(s1.saySomething())
  console.log(s1.getFullName())
  console.log(s1.getPersonInfo())
  
  console.log(s2.saySomething())
  console.log(s2.getFullName())
  console.log(s2.getPersonInfo())