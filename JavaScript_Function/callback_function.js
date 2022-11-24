/*
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function
 to complete some kind of routine or action.
*/
/*
let greeting = name => alert(`Hello, ${name}`);

let processUserInput = callback => {
    const name = prompt("Please enter your name");
    callback(name);
}

processUserInput(greeting);
*/


/*
setTimeout(() => {
    console.log("timer");
}, 5000);

function a(b) {
    console.log("a");
    b();
    

}

a(function b() {
    console.log("b");

});
*/

/*
function SayHello() {
    console.log("Hello");
}

function SayHi() {
    console.log("Hi...");
}

function Bye() {
    console.log("Bye");

}

function addTeoNumber(num1, num2, callback) {
    console.log(num1+num2);
    callback();
    
}

addTeoNumber(20, 30, SayHello);
addTeoNumber(20, 35, SayHi);
addTeoNumber(20, 3, Bye);
*/


/*
function greet(a){
    console.log("Price of sugar is =>", a);
}

function price(callback){
    let m = 200;
    callback(m);
}

price(greet);
*/


/*

function price(callback){
    let m = 200;
    callback(m);
}

price(function greet(a) {
    console.log("Price odf sugar is ", a);
});
*/


/*
let price = (a, callback) => {
    callback(a);
}
price(100, a => console.log("Price of sugar is", a));
*/

/*

setTimeout(()=> {

    for(let i=0; i<=10; i++ ){
        console.log(i);
    }

}, 5000);

console.log("Hello World");
*/

/*
// example of call back hell
const  getRollNo = () => {
    setTimeout(() => {
        console.log("API getting roll no");
        let roll_no = [1,2,3,4,5];
        console.log(roll_no);

        setTimeout( (rollno) => {
            const biodata = {
                name: 'vinod',
                age: 26
            }
            console.log(`My name is ${biodata.name}, my rollno is ${rollno} and I an ${biodata.age} years old`);
            setTimeout((name) => {
                biodata.gender = 'male';
            console.log(`My name is ${biodata.name}, my rollno is ${rollno} and I an ${biodata.age} years old and I am alpha ${biodata.gender}`);  
         
            },2000,biodata.name)

        }, 2000, roll_no[1]);

    },2000);

}

getRollNo();
*/