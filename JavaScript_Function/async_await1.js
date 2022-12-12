
async function f1() {

    return  new Promise((resolve, reject)=> {

   setTimeout(()=> {
        console.log("f1 completed");

        resolve('')
    }, 10000);

})

}

async function f2() {
   setTimeout(()=> {
        console.log("f2 completed");
    }, 5000);
    
}

async function f3() {
   setTimeout(()=> {
        console.log("f3 completed");
    }, 5000);
    
}


async function main() {

    await f1();
    f2().then((result)=>{
        console.log(result);
    })
    f3();
}

main();


/*
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
	console.log('async2');
}

console.log('script start');

setTimeout(function() {
    console.log('setTimeout');
}, 0)

async1();

new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
})
console.log('script end');

*/