function divide(n1, n2) {

    return new Promise((resolve, reject)=>{
       if(typeof n1 != 'number') {
            reject ("Please enter 1st arg as number")
        }
        if(typeof n2 != 'number') {
            reject ("Please enter 2nd arg as number")
        }
        if(n2===0) {
            reject ("Dont divide by zero")
        }
        resolve(n1/n2); 
    })
}


console.log("Start of Script");
let a = 25; 
let b = 5; 
// this will return the promise 
// result = divide(a, b); 
/* divide(a, b)
    .then(result => console.log("Result of division :", result))
    .catch(err => console.log("There was an error: " , err))
 */

 // es7 
 setTimeout(async() =>  {
    try{
        let result = await divide(a,b)
        console.log("Result is :", result);
    }catch(error) {
        console.log("There was an error: " , error);
    }
 }, 0); 

console.log("End of Script ");