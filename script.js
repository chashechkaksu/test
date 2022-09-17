"use strict";

let pol = prompt('Введите ваш пол');
let age = Number(prompt('Введите ваш возраст'));

switch(pol=='Мужской'){
    case(age<18):
        alert('Вам ещё рано в армию');
        break;
    case(age>=18 && age<27):
        alert('Вам пора в армию');
        break;
    case(age>=27 && age<55):
        alert('Вам уже поздно в армию');
        break;
   
}

switch(pol=='Женский'){
    case(age<18):
        alert('Вы юная девушка');
        break;
    case(age>=18 && age<45):
        alert('Вы просто красавица');
        break;
    case(age>=45):
        alert('Вы ягодка опять');
        break;
   
}