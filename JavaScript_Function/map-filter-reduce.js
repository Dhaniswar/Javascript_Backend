/*
let arr = [5,1,3,2,6];

const output = arr.map((x) => {
    return x.toString(2);
})
console.log(output);

const a = [10,20,30,40,50,1,2,3,4,56,7,8,9]
const filter1 = a.filter(x => x>30);
console.log(filter1);
*/

const a = [1,2,3,4,5];

const reducer = (m, n) => m + n;

// console.log(a.reduce(reducer));
console.log(a.reduce(reducer, 185));
