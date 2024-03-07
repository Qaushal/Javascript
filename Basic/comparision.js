console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//The reason is that an equality check == and comparisons > < >= <= work differently 
// Comparisons convert null to a number, treating it as 0. 
// That's why (3) null>= 0_is true and (1) null> 0 is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === : compare value as well as datatype

console.log("2" === 2); 

// ==: compare only values 

console.log("2" == 2); 