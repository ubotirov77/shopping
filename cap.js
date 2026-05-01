/* Asynchronous function : Async vs promise
define           call
callback       callback 
async/await    then/catch
promise        then/catch
*/
// define 
function division(a, b){
    return new Promise((resolve, reject) => {
    if(b === 0){
        reject("Not devided by zero");
    } else{
        setInterval(() => {
            resolve(a % b);
        }, 5000);
    }
});
}
// call
division(10, 3).then(data => {
    console.log("Result division:", data);
    console.log(".................");

    division(10, 4).then(data => {
        console.log("Result division:", data);
        console.log(".................");


    division(20, 7).then(data => {
        console.log("Result division:", data);
        console.log(".................");
    }).catch(err => {
        console.log("Error division:", err);
    });
    }).catch(err => {
        console.log("Error division:", err);
    });
    
}).catch(err => {
    console.log("Error division:", err);
});
