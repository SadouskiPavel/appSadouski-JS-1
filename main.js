//2

let a1 = 5 % 3,
    a2 = 3 % 5,
    a3 = 5 +'3',
    a4 = '5' - 3,
    a5 = 75 + 'кг',
    a6 = 785 * 653,
    a7 = 100 / 25,
    a8 = 0 * 0,
    a9 = 0 / 2,
    a10 = 89 / 0,
    a11 = 98 + 2,
    a12 = 5 - 98,
    a13 = (8 + 56 * 4) / 5,
    a14 = (9 - 12) * 7 / (5 + 2),
    a15 = + '123',
    a16 = 1 || 0,
    a17 = false || true,
    a18 = true > 0;

console.log(a1 , typeof a1);
console.log(a2, typeof a2);
console.log(a3 , typeof a3);
console.log(a4, typeof a4);
console.log(a5, typeof a5);
console.log(a6, typeof a6);
console.log(a7, typeof a7);
console.log(a8, typeof a8);
console.log(a9, typeof a9);
console.log(a10, typeof a10);
console.log(a11, typeof a11);
console.log(a12, typeof a12);
console.log(a13, typeof a13);
console.log(a14, typeof a14);
console.log(a15, typeof a15);
console.log(a16, typeof a16);
console.log(a17, typeof a17);
console.log(a18, typeof a18);

//3

const height = 23;
const width = 10;
const SPryam = height * width;
console.log (`площадь прямоугольника: ${SPryam}см`)

//4

const cylinderHeight = 10;
const cylinderDiameter = a7;
const VСilindra = Number ((Math.PI * cylinderDiameter * cylinderHeight).toFixed(1));
console.log(`объем цилиндра: ${VСilindra}м`);


//5

const r = 5;
const SKruga = +(Math.PI * Math.pow(r, 2)).toFixed(1);
console.log(`площадь круга ${SKruga}см`)

//6

let a =5;
let b = 7;
let h =10;
const STrap = ((a + b) / 2) * h;
console.log(`площадь трапеции ${STrap}см`);

//7

const amount = 2000000;
let rate = 10;
let yers = 5;
let Pereplata = ((amount * rate) / 100) * yers;
console.log(`переплата: ${Pereplata}rub`);

//8

a = 8;
b = 3;

//С математикой у меня было плохо в школе