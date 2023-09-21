const dog={}
console.log(dog) 

dog.name='Lazy'
dog.legs=4
dog.color='brown'
dog.bark = function(){
    return 'woof woof'
}
dog.getInfDog= function(){
    return `Nombre: ${this.name}, legs: ${this.legs}, color ${this.color}, bark ${this.bark}`
}

console.log(dog.getInfDog())

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node','asd'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }


console.log(Object.keys(users))
console.log(users.Alex.skills.length)
function mostSkills(objeto){
    let mayor, aux=0, name, cont=0
    for (let key in objeto){
        mayor=objeto[key].skills.length
        if (mayor>aux){
            name=key
            aux=mayor
        }else if(mayor===aux){
            cont+=1
            name+=' ' + key
        }
    }
    let out='La o las personas que tienen más skills son: '+name+' y tienen '+aux+' skills'
    return out
}
console.log(mostSkills(users))
//Otra forma realizada por gpt
function findPersonWithMostSkills(users) {
    const personWithMostSkills = Object.keys(users).reduce((personA, personB) =>
      users[personA].skills.length > users[personB].skills.length ? personA : personB
    );
  
    return personWithMostSkills;
  }
  
  // Ejemplo de uso:
  const personWithMostSkills = findPersonWithMostSkills(users);
  console.log(personWithMostSkills); // Resultado: "Asab"
  
function mern(objeto){
    let peopleMern=[]
        for (let key in objeto){
            for (let j=0; j<objeto[key].skills.length; j++){
                if (objeto[key].skills[j]==='React'||objeto[key].skills[j]==='MongoDB'||
                objeto[key].skills[j]==='Express'||objeto[key].skills[j]==='Node'){
                    if (!peopleMern.includes(key)){
                        peopleMern.push(key)
                    }
                    
                }
            }
        
    }
    return peopleMern
  }

console.log(mern(users))


const people = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

console.log('Please SingUp: ')
function SingUp(arreglo, mail){
    let res=false
    for (let i=0; i<arreglo.length; i++){
        if (Object.values(arreglo[i]).includes(mail)){
            res=true
            break
        }
    }
    return res
}

function generateRandomId(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters[randomIndex];
    }
  
    return id;
  }



console.log(people)

const myName='Brayan'
const myEmployeed={
  Brayan:{
    area: 'Analitica y desarrollo',
    salario: 2200000,
    skills:['Java','Javascript','Pyhton', 'Django', 'Postgresql']
    },
  Angel:{
    area:'Analitica y desarrollo',
    salario:1400000,
    skills:['Java','Javascript', 'Django', 'Postgresql']
  }
}

const myFunct = (obs) => {
  let mayor=0, name;
    for (let key in obs){
      if(obs[key].salario>mayor){
        mayor = obs[key].salario;
        name = key;
      }
    }
    return name
}

const myPru=(objeto) => {

  const masSalario=Object.keys(objeto).reduce((personA, personB) =>
    objeto[personA].salario > objeto[personB].salario ? personA : personB
  ); 
    return `La persona con más salario es ${masSalario}`;
  }

console.log(myPru(myEmployeed))
