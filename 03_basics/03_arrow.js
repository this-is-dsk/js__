const user = {
    username : "Dilkhush",
    gmail : "yadavdilkhush80@gmail.com",

    welcomeMessage : function () {
        console.log(`${this.username}, Welcome To Website`);
        console.log(this);
        
    }
}
    user.welcomeMessage()

    user.username = "DSK"
    user.welcomeMessage()

    console.log(this);


function one(){
    console.log(this);   
}
    
one();

// basic arrow function ----

const add = (num1, num2) => {
    return num1+num2;
}

console.log(add(1,2));

const add2 = (num1, num2) => num1+num2;


console.log(add2(1,2));




