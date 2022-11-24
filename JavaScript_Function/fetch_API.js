
// let weatherBalloon = () => {
//     var key = '0792eb7163967bc34f67b418e8499286';
 var url = 'https://data.covid19india.org/v4/min/timeseries.min.json';
//     const fetch = (url) => import('node-fetch')
//     .then((responce) => {
//         return responce.json()
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// }

// weatherBalloon();

const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url))
    .then((responce) => {
    console.log("H")
        return responce.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });



