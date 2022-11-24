/*
Promise can be created using Promise constructor
2. Promise constructor takes only one cal
l back anonymous function as parameter.
3. that callback function takes two argument resolve

*/

/*
var promise = new Promise((resolve, reject) => {
    const x = "Ram";
    const y  = "Ram";
    if(x===y){
        resolve();
    }
    else{
        reject();
    }
});

promise
.then(() => console.log("Success"))
.catch(()=>console.log("Error"));
*/

/*
var promise = new Promise((resolve, reject) =>{
    resolve("Chardra for Chandra");

});

promise
.then((result)=> {
    console.log(result);
}, (error) => {
    console.log(error);
});
*/

/*
var promise = new Promise((resolve, reject) => {
    reject("Reject message display");
});

promise
.then(result => console.log(result),  error => console.log(error));
*/

/*
var promise = new Promise((resolve, reject) => {
    reject("Error message is display");
});

promise
.then((result) => console.log(result))
.catch((err) => console.log(err));
*/

/**
 * 1: 2s rollno
 * 2: 2s name, age
 */

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let roll_no = [1,2,3,4,5];
        resolve(roll_no);
        // reject("Error While Communicating");

    },2000);
});

const getBiodata = (indexData) => {
    return new Promise((resolve, reject) => {
        setTimeout((indexData)=>{
            let biodata = {
                name: 'vinod',
                age: 26
            }

            resolve(`My rollno is ${indexData}. my name is ${biodata.name}, and I am ${biodata.age} years old`);

        },2000, indexData);

    });
}

promise
.then((roll_no) => {
    console.log(roll_no);
   return getBiodata(roll_no[1]);
    
}).then((nestedData) => {
    console.log(nestedData);
})
.catch((err) => console.log(err));