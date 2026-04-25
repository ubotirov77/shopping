const moment = require("moment"); // require
const time = moment().format("DD MM YYYY HH:mm:ss");
/* callback function:
define       call
callback     function
*/

// define
const advice = [
    "be a good student", // 0-20
    "Choose a right path", // 21-30
    "start your own business", // 31-40
    " do what you are good at", // 41-50
    "invest in young generation", // 51-60
    "now do rest and enjoy your life" // 61
];
 function giveAdvice(age, callback){
    if(typeof age !== "number") callback("insert only number");
    else if(age >= 61) callback(null,advice[5]);
    else if(age >= 51) callback(null,advice[4]);
    else if(age >= 41) callback(null,advice[3]);
    else if(age >= 31) callback(null,advice[2]);
    else if(age >= 21) callback(null,advice[1]);
    else callback(null,advice[0]);
 }
 // call
 giveAdvice(34, (err, data)=>{
    if(err) console.log("Error:", err);
    else {
        console.log("Advice:", data);   
    }   
 })
 console.log("Time:",time);

 
 