const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //seperate the whole array into individual elements and add them to a new array 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //remove the arrays inside arrays and flatten out a new array //here Infinity means the depth counts, sometimes we do not know the depth so we use infinity
console.log(real_another_array);



console.log(Array.isArray("kaushal"))
console.log(Array.from("kaushal"))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));