const youtubers = ["BB","Harsh","Swagger","Fukra","Elvish"]
const heroes = ["akshay","ajay","kartik","ssr","varun"]

youtubers.push(heroes)
console.log(youtubers);

const newArr = youtubers.concat(heroes)
console.log(newArr);

const newArr2 = [...heroes,...youtubers]
console.log(newArr2);

const another_array = [1,2,3,[4,5,6],7,8,[4,5,[6,7]]]
console.log(another_array);

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("hello"));
console.log(Array.from("hello"))
console.log(Array.of("hello"));


let marks1 = 35
let marks2 = 67
let marks3 = 47

console.log(Array.of(marks1,marks2,marks3))





