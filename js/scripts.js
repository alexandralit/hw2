let name = prompt('Ваше имя:'),
    age = prompt('Ваш возраст:'),
    city = prompt('Ваш город проживания:'),
    phone = prompt('Ваш телефон:'),
    email = prompt('Ваш email:'),
    company = prompt('Ваше место работы:');

document.write('Меня зовут ' + name + '. \n Мне ' + age + ' лет. \n Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. \n Мои контактные данные: ' + phone + ', ' + email + '.');

let year = 2020,
    birthyear = year - age;

document.write('\n \n' + name + ' родился в ' + birthyear + ' году.');

let a = [3, 5, 1, 8, 5, 3],
    summ1 = a[0] + a[1] + a[2],
    summ2 = a[3] + a[4] + a[5];

console.log(a);
console.log(summ1);
console.log(summ2);
if (summ1 == summ2) {
    console.log('Да');
} else {
    console.log('Нет');
}