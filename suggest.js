/* Asynchronous function : Async vs promise
define           call
callback       function
async/await    then/catch
promise        then/catch
*/

const list = [ 
    "be a good student", // 0-20
    "choose a right path", // 21-30
    "start your own business", // 31-40
    " do what you are good at", // 41-50
    "invest in young generation", // 51-60
    "now do rest and enjoy your life" // 61
];
// define
/*
async function suggest(age){
    if(typeof age !== "number") throw new Error("insert only number");
    else if (age >= 61) return list[5];
    else if (age >= 51) return list[4];
    else if (age >= 41) return list[3];
    else if (age >= 31) return list[2];
    else if (age >= 21) return list[1];
    else return list[0];

} */
// call 
 function suggest(age){
    return new Promise((resolve, reject) => {   
    if(typeof age !== "number") reject("insert only number");
    else if (age >= 61) resolve(list[5]);
    else if (age >= 51) resolve(list[4]);
    else if (age >= 41) resolve(list[3]);
    else if (age >= 31) resolve(list[2]);
    else if (age >= 21) resolve(list[1]);
    else resolve(list[0]);
});
}
// call
suggest(65).then(data => {
    console.log("Suggest:", data);
}).catch(err => {
    console.log("Error:", err);
});
