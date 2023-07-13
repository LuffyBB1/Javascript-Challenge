/*Exercise: Level 1
Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
Print the string on the browser console using console.log()
Print the length of the string on the browser console using console.log()
Change all the string characters to capital letters using toUpperCase() method
Change all the string characters to lowercase letters using toLowerCase() method
Cut (slice) out the first word of the string using substr() or substring() method
Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
Check if the string contains a word Script using includes() method
Split the string into an array using split() method
Split the string 30 Days Of JavaScript at the space using split() method
'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
Use startsWith() method with the string 30 Days Of JavaScript and make the result true
Use endsWith() method with the string 30 Days Of JavaScript and make the result true
Use match() method to find all the a’s in 30 Days Of JavaScript
Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
Use repeat() method to print 30 Days Of JavaScript 2 times*/

let challenge = '30 Days Of Javascript' //punto 1
console.log(challenge)  //punto 2
console.log(challenge.length)   //punto 3
let upper=challenge.toUpperCase()//punto 4
console.log(upper)
let lower=challenge.toLowerCase() //punto 5
console.log(lower)
console.log(challenge.substring(0,3)) //punto 6
console.log(challenge.slice(3, challenge.length)) // punto 7
let contains=challenge.includes('Script') //punto 8
console.log(contains)
let array_convert=challenge.split()//punto 9
console.log(array_convert)
let array_comilla=challenge.split(' ')//punto 10
console.log(array_comilla)
let empresas='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' //11
console.log(empresas.split(','))
let change=challenge.replace('Javascript', 'Python') //12
console.log(change)
console.log(challenge.charAt(15))//13
console.log(challenge.indexOf('J'))//14
console.log(challenge.indexOf('a'))//15
console.log(challenge.lastIndexOf('a'))//16
let because='You cannot end a sentence with because because because is a conjunction'
console.log(because.indexOf('because'))//17
console.log(because.lastIndexOf('because'))//18
let string_E_g= ' 30 Days Of JavaScript '
console.log(string_E_g.trim())//19
console.log(challenge.startsWith('30'))//20
console.log(challenge.endsWith('Javascript'))//21
let haceMacth = /a/gi
console.log(challenge.match(haceMacth))//22
let firts = '30 Days of '
let second='JavaScript'
console.log(firts.concat(second))//23
console.log(challenge.repeat(2))//24



//------------------------Ejercicios nivel 2 --------------------------//
/*Using console.log() print out the following statement:

The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
Using console.log() print out the following quote by Mother Teresa:

"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

Check if 'on' is found in both python and jargon

I hope this course is not full of jargon. Check if jargon is in the sentence.

Generate a random number between 0 and 100 inclusively.

Generate a random number between 50 and 100 inclusively.

Generate a random number between 0 and 255 inclusively.

Access the 'JavaScript' string characters using a random number.

Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'*/

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.') //1
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')//2
let number=parseFloat('9.8')//4
console.log(number==10)
console.log(Math.round(number)==10)
let a='jargon', b='python'
console.log(a.includes('on'), b.includes('on')) //5
let sentence='I hope this course is not full of jargon.'
console.log(sentence.includes('jargon'))//6
let rando=Math.random() * 101
console.log(Math.floor(Math.random() * 10))
console.log(rando)
console.log(Math.floor(Math.random() * 5)+2)
var randomNumber = Math.floor(Math.random() * (100 - 50 + 1) + 50)
console.log(randomNumber);
console.log(Math.floor(Math.random() * 256))
let sts='JavaScript'
console.log(sts[Math.floor(Math.random() * sts.length)])
let texto = 'You cannot end a sentence with because because because is a conjunction'
let patron= /because/gi
let contador= texto.match(patron)
console.log(contador.length)