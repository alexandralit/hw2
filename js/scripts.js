document.write('-------- 1 задание -------- \n');

let name = prompt('Ваше имя:'),
    age = prompt('Ваш возраст:'),
    city = prompt('Ваш город проживания:'),
    phone = prompt('Ваш телефон:'),
    email = prompt('Ваш email:'),
    company = prompt('Ваше место работы:');

document.write('Меня зовут ' + name + '. \n Мне ' + age + ' лет. \n Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. \n Мои контактные данные: ' + phone + ', ' + email + '.');


document.write('\n -------- 2 задание -------- \n');

let year = 2020,
    birthyear = year - age;

document.write(name + ' родился в ' + birthyear + ' году.');


console.log('-------- 3 задание --------');

let arr = [3, 5, 1, 6, 0, 4],
    summ1 = arr[0] + arr[1] + arr[2],
    summ2 = arr[3] + arr[4] + arr[5];

console.log(arr);
console.log('Cумма первых трех цифр', summ1);
console.log('Cумма вторых трех цифр', summ2);

if (summ1 == summ2) {
    console.log('Да');
} else {
    console.log('Нет');
}


console.log('-------- 4 задание --------');

let с = 1;

if (с > 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


console.log('-------- 5 задание --------');

let a = 10,
    b = 2,
    summ = a + b;

console.log('Сумма', summ);
console.log('Разность', a - b);
console.log('Произведение', a * b);
console.log('Частное', a / b);

if (summ > 1) console.log(Math.pow(summ, 2));


console.log('-------- 6 задание --------');

if ( (a > 2 && a < 11) || (b >= 6 && b < 14) ) { 
    console.log('Верно');
} else {
    console.log('Неверно');
}


// -------- 7 задание --------

let n = prompt('Введите число от 0 до 59:');

if (n < 0 || n > 59) {
    alert('Неверное число');
} else if (n < 16) {
    alert('Первая четверть часа');
}
else if (n < 31 && n > 15) {
    alert('Вторая четверть часа');
}
else if (n < 46 && n > 30) {
    alert('Третья четверть часа');
} else {
    alert('Четвертая четверть часа');
}


//-------- 8 задание --------

let day = prompt('Введите число от 1 до 31:');

if (day < 1 || day > 31) {
    alert('Неверное число');
} else if (day < 11) {
    alert('Первая декада');
}
else if (day < 21 && day > 10) {
    alert('Вторая декада');
}
else if (day < 32 && day > 20) {
    alert('Третья декада');
} 


console.log('-------- 9 задание --------');

let years,
    month,
    week,
    hour,
    minutes,
    seconds,
    days = prompt('Введите количество дней:'); 

console.log('Количество дней', days);

if (days < 1) {
    alert('Неверное число');
} else {
    years = days / 365;
    console.log('Количество лет', years);
    month = years * 12;
    console.log('Количество месяцев', month);
    week = days / 7;
    console.log('Количество недель', week);
    hour = days * 24;
    console.log('Количество часов', hour);
    minutes = hour * 60;
    console.log('Количество минут', minutes);
    seconds = minutes * 60;
    console.log('Количество секунд', seconds);
}


//-------- 10 задание --------

let timeyear;

day = prompt('Введите день в году:');

if (day < 1 || day > 366) {
    alert('Неверное число');
} else if (day < 32) {
    alert('Январь');
    timeyear = 1;
} else if (day > 31 && day < 61) {
    alert('Февраль');
    timeyear = 2;
} else if (day > 60 && day < 92) {
    alert('Март');
    timeyear = 3;
} else if (day > 91 && day < 122) {
    alert('Апрель');
    timeyear = 4;
} else if (day > 121 && day < 153) {
    alert('Май');
    timeyear = 5;
} else if (day > 152 && day < 183) {
    alert('Июнь');
    timeyear = 6;
} else if (day > 182 && day < 214) {
    alert('Июль');
    timeyear = 7;
} else if (day > 213 && day < 245) {
    alert('Август');
    timeyear = 8;
} else if (day > 244 && day < 275) {
    alert('Сентябрь');
    timeyear = 9;
} else if (day > 274 && day < 306) {
    alert('Октябрь');
    timeyear = 10;
} else if (day > 305 && day < 336) {
    alert('Ноябрь');
    timeyear = 11;
} else {
    alert('Декабрь');
    timeyear = 12;
}

switch (timeyear) {
    case 1:
    case 2:
    case 12:
        alert('Зима');
    break;
    case 3:
    case 4:
    case 5:
        alert('Весна');
    break;
    case 6:
    case 7:
    case 8:
        alert('Лето');
    break;
    case 9:
    case 10:
    case 11:
        alert('Осень');
    break;
}