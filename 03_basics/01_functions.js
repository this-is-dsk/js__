function addNumbers(number1, number2) {
    console.log(number1+number2);
}
addNumbers(3,10);

function logIn(username){
    if (!username) {
        console.log("plz enter username");
        return;
    }
    return `${username} logged in succesfully`
}

console.log(logIn());


function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(100,100,300,10000));


const user = {
    username: "Dilkhush",
    price: 175
}

function handleObject(anyObject) {
    console.log(`the username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

const myArray = [1,2,3,4,5]

function handleArray(anyArray) {
    return anyArray[2]
}

console.log(handleArray(myArray));






