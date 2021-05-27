console.log("Hello World!");

document.write("<p> Document Write 1. </p>");
// document.write("<br/>");
document.write("<p> Document Write 2. </p>");

// Popups
// alert, prompt, confirm
// alert("Welcome, new user!!");
// confirm("Are you sure you want to login?");
// prompt("What is your name?","Input your name..");

// Topik penting dalam Javascript:
/**
 * 1. Variable
 * 2. Tipe Data
 * 3. Operation
 * 4. Conditional
 * 5. Looping
 * 6. Array
 * 7. Function
 * 8. Object
 * 9. DOM
 */


// Variable : sebuah penampung berisi value dengan tipe data;
let angka = 100;
let kata = "Makan";
// document.write(angka);
// document.write("<br/>")
// document.write(kata);
// ES5 -> versi awal
// document.write(angka + "<br/>" + kata);
// ES6 -> versi baru (2015)
document.write(`${angka} <br/> ${kata} <br/>`); // template literal

/* 
    Tipe data primitif :
    1. Number       : 1,2,3, 5.0, -10, 
    2. String :     : "a","A","abc","10", '!@#$%^&*()'
    3. Boolean      : true, false
    4. Object
    5. undefined
    6. null
*/

// Operation : math, logical

// Math : +,=,*,/, %
// Logic : AND(&&), OR(||), NOT(!=), EQUAL(==), EQUAL DATA TYPE(===)

let a = 7;
let b = 5;
let total = a ** b;
console.log(typeof total);

// let -> dapat di reassign
// const -> tidak dapat di reassign

const pi = 3.14;
let x = pi * 10;
console.log(x.toFixed(2));

let xx = 10;
let yy = "abc";
let concat = xx + +yy;
console.log(concat); 
// NaN = Not a Number

let ab = 100;
let ac = "100";
let compare = ab === ac;
console.log(compare);

// SELECTION / CONDITIONAL
// if...else, switch...case

let p = 1;
if(p === 1){
    console.log('P = 1');
}else if(p === 2){
    console.log('P = 2');
}else {
    console.log('P != 1 dan P != 2');
}

let harga = 10000;
if(harga < 10000){
    console.log("Harga kurang dari 10000, murah!!")
}else if(harga > 10000){
    console.log("Harga lebih dari 10000, mahal!!")
}else {
    console.log("Harga = 10000, pas di kantong!!")
}

let price = 17;
if(price >= 5 && price <= 15){
    console.log("Price between 5 and 15")
}else {
    console.log("Price lower than 5 OR Price higher than 15")
}

let choice = "public";

switch(choice.toLowerCase()) {
    case "public":
        console.log("Your choice is public");
        break;
    case "private":
        console.log("Your choice is private");
        break;
    default:
        console.log("Your choice is not available");
        break;
}

// Looping
// for, while

for(let i = 0; i < 5; i++){
    document.write(i+1);
    document.write(`. Hello World <br/>`);
}

// Array : 1D, 2D, Multidimensi

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
numbers.push(100);
numbers.pop();
console.log(numbers);
console.log(numbers.length);

let items = [
    ["Asus",7500000,true],
    ["Dell", 7000000,false]
]
console.log(items)

document.write("=== Array with looping === <br/>")
for(let i = 0; i < numbers.length; i++){
    document.write(`${numbers[i]} <br/>`)
}


// Function : kumpulan perintah untuk menjalankan tugas tertentu

// Invoke function / call function
jumlah(1,2);
jumlah(5,2);

function jumlah(a,b){
    console.log("Ini dalam function")
    console.log(a + b);
}


function convertToCapital(string){
    let result = string.toUpperCase();
    return result;
}
console.log(convertToCapital("javascript"));
console.log(convertToCapital("mAkAn"));
console.log(convertToCapital("105ab"));

// Object : kumpulan value yang memiliki key

// let arr = ["Asus",7500000,true];
let item = {
    name: "Asus",
    price: 7500000,
    isSold: true,
    "is Available": false,
    100 : 500,
    specs : ["i5-9500U","16gb"],
    a : {
        x : 1,
        y : 2
    }
}
document.write(item);
console.log(item);

console.log(item.name);
console.log(item["price"]);
console.log(item.isSold);
console.log(item["is Available"]);
console.log(item["100"]);