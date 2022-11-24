
// example of async await
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


async function getData() {
   const rollnodata = await promise;
   console.log("getData",rollnodata);

   const biodatas = await getBiodata(rollnodata[1]);
   console.log(biodatas);

   return biodatas;
}
const result = getData();
console.log(result);