let Mydate = new Date();

console.log(Mydate);
console.log(Mydate.toDateString());
console.log(Mydate.toISOString());
console.log(Mydate.toJSON());

console.log(typeof Mydate); //object

let myCreatedate  = new Date(1879,1,2);
console.log(myCreatedate.toDateString());