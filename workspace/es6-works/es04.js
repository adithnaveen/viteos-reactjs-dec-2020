let s1 = hello(); 
console.log(s1);
// still work,  defined after it is invoked, the function 
// which we declare will be loaded in the VM at first 
function hello() {
    return "Hi I'm from Hello"
}

let greet= function() {
    return "Hey i'm from es6";
}
s2 = greet(); 
console.log(s2);
/////////////////////////// 
/* function welecome() {
    console.log("Hello i'm from welcome");
}*/
setInterval(() => console.log("Welcome to ReactJS"),  1000); 