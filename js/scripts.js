/*let name = prompt('Ваше имя:'),
    age = prompt('Ваш возраст:'),
    city = prompt('Ваш город проживания:'),
    phone = prompt('Ваш телефон:'),
    email = prompt('Ваш email:'),
    company = prompt('Ваше место работы:');

document.write('Меня зовут ' + name + '. \n Мне ' + age + ' лет. \n Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. \n Мои контактные данные: ' + phone + ', ' + email + '.');

let year = 2020,
    birthyear = year - age;

document.write('\n \n' + name + ' родился в ' + birthyear + ' году.');
*/
let arr = [3, 5, 1, 6, 0, 4],
    summ1 = arr[0] + arr[1] + arr[2],
    summ2 = arr[3] + arr[4] + arr[5];

console.log(arr);
console.log(summ1);
console.log(summ2);

if (summ1 == summ2) {
    console.log('Да');
} else {
    console.log('Нет');
}

let n = 1;

if (n > 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let a = 10,
    b = 2,
    summ = a + b;

console.log(summ);
console.log(a - b);
console.log(a * b);
console.log(a / b);
if (summ > 1) console.log(Math.pow(summ, 2));

if ( (a > 2 && a < 11) || (b >= 6 && b < 14) ) { 
    console.log('Верно');
} else {
    console.log('Неверно');
}

let minute = prompt('Введите число от 0 до 59:');

if (minute < 0 || minute > 59) {
    alert('Неверное число');
} else if (minute < 16) {
    alert('Первая четверть часа');
}
else if (minute < 31 && minute > 15) {
    alert('Вторая четверть часа');
}
else if (minute < 46 && minute > 30) {
    alert('Третья четверть часа');
} else {
    alert('Четвертая четверть часа');
}


/*let minute = prompt('Введите число от 0 до 59:');

switch (minute) {
    case minute < 0:
    case minute > 59:
        alert('Неверное число');
    break;
    case minute < 16:
        alert('Первая четверть часа');
    break;
    case 15 < minute < 31:
        alert('Вторая четверть часа');
    break;
    case 30 < minute < 46:
        alert('Первая четверть часа');
    break;
    case 45 < minute < 60:
        alert('Первая четверть часа');
    break;
}*/