//object singleton -- Object.create

// we r use object literals
const mySym = Symbol("key1")

const User = {
    name : "Dilkhush",
    age : 21,
    mail : "yadavdilkhush@gmail.com",
    state : "Rajasthan",
    location : "Jaipur",
    [mySym] : "mykey1"
}

console.log(typeof User);
console.log(User["age"]);
console.log(User["location"]);
console.log(User[mySym]);
console.log(User);

User.age = 18


Object.freeze(User)

User.age = 29

console.log(User);











