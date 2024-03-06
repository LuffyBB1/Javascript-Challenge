/*
Autor: Brayan Bernal
Curso: 30 - Days of Javascript
Tema: Day 21 - Document Object Model(DOM)
Date: 05/12/2023
*/


function pow(x, n) {
    let result = 1;
    
    for (let i = 0; i < n; i++) {
    result *= x;
    }
    
    return result;
    }

const any_date=new Date()

console.log( any_date.getFullYear());
any_date.toLocaleString('default', { month: 'long' })
const full_date=`${any_date.toLocaleString('default', { month: 'long' }).toUpperCase()} ${any_date.getDate()} ${any_date.getFullYear()}`
console.log( full_date);
console.log('\'https://github.com/LuffyBB1/fotos_test/raw/cea6035154d1d2fd3df8fa754bab862e95f8bdb0/plantilla.png\'');



const my='¡Hola {{1}}!, <br><br>Hoy celebramos nuestro primer año juntos, gracias por tu compañía y por todo tu apoyo, esperamos que sigas soñando en grande para que cumplas más metas y podamos llegar juntos mucho más lejos 🚀. <br><br> <div class="flexbox" style="background-image: url({{2}}); background-size: 100% 100%; width: 100%; max-width:700px; height: 500px; background-position: center; display: flex; align-items: center; justify-content: center; flex-direction: column; "> <h1 style="color: white; margin-top: 28%; margin-bottom: 0px; font-size:280%;font-family: Calibri, sans-serif;">¡FELIZ {{3}} </h1> <h1 style="color: white; margin-top: 0px; margin-bottom: 0px;font-size:280%; font-family: Calibri, sans-serif;">ANIVERSARIO {{4}}!</h1> <p style=" position:absolute; color: white;font-family: Calibri, sans-serif; font-size:150%; margin-top:15%; margin-bottom:0px; ">{{5}}</p></div> <br><br>Recuerda que SAS te invita a almorzar, para esto debes pasar el formato de reembolso y recibo hasta por un valor de $150 000 (lo puedes reclamar antes de que cumplas otro aniversario con nosotros). <br><br>Saludos, Equipo Gestión Humana 😊'