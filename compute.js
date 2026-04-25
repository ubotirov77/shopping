/* callback function:
define       call
callback     function

*/
// define 
function division(a, b, callback){
    if(b === 0){
        callback("Not devided by zero", null);
    } else{
        callback(null, a % b);
    }
}
// call 
division(7, 4, function(err, data){
    if(err) console.log("Error:", err);
    else{
        console.log("Result:", data);
        console.log(".................");
    }
});