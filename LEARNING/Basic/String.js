let myName = "kaushal";
let age = 20;

console.log(myName + " " + age); // simple string concat

console.log(`my name is ${myName.toUpperCase()} and age is ${age}`); //modern way , also known as string interpolation and benefit is we can add new feature like .toupper or .lowercase

const str = new String("batman"); //mordern way to implement string 
const gameName = new String('kausahl-kalariya-com')

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   kaushal    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://kaushal.com/kaushal%20kalariya"

console.log(url.replace('%20', '-'))


console.log(gameName.split('-'));
