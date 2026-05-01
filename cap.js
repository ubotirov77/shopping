/* Asynchronous function : Async vs promise
define           call
callback       callback 
async/await    then/catch & async/await
promise        then/catch
*/
// define 
async function division(a, b){
    if(b === 0){
        throw new Error("Not devided by zero");
    } else{
        return a % b;
    }
}

async function run(){
    let result = await division(10, 3);
    console.log("Result 1:", result);

    result = await division(10, 4);
    console.log("Result 2:", result);

    result = await division(20, 7);
    console.log("Result 3:", result);
}
run();