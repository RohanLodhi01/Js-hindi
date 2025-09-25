const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

let allHeros = marvel_heros.concat(dc_heros)  // can combine only one array
// console.log(allHeros);

let all_new_heros = [...marvel_heros, ...dc_heros] // can combine more arrays ex = [...marvel_heros, ...dc_heros, ...indian_heros ]and more

// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

// console.log(Array.isArray("rohan"));
// console.log(Array.from("rohan"));
// console.log(Array.from({name: "rohan"}));   // interesting for interviews

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));











