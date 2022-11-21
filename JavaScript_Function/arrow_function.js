//Arrow Function
let a = () => {
    console.log("This is simple Arrow Function");
}
a();

let b = ()=> console.log("This is Arrow function of shutcut with only one arg");
b();

const sum = (a,b) => a+b;

const restut = sum (20, 30);
console.log("result => ",restut);


const s = x => console.log(x);
s(100);


let age = 5;

let welcome = (age < 18) ? () => console.log("Baby"): () => console.log("Adult");
welcome();


let m =20, n =30, large;
large = (m>n)?m:n;
console.log(large);