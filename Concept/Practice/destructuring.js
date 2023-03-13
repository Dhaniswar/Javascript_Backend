const yellow = [255, 255, 0]

/* accessing red, green, blue values* */

const red = yellow[0];
const green = yellow[1];
const blue = yellow[2];

console.log(red,green,blue);

/* accessing red, green, blue values using destructing* */

const [ r, g, b] = yellow;
console.log(r,g, b);
console.log(...yellow);

const [red1, ...blueAndGreen] = yellow;
console.log(...blueAndGreen);
