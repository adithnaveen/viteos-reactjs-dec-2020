
let p1 = {
    name: "saad", 
    city:"Bengaluru", 
    email: "saad@example.com"
}


// let p1Arry = [p1, p1, p1]
// console.log(p1Arry);

function sayHello(name, city) {
    console.log(`Hello ${name} you are in ${city}`);
}
function sayHello1({name, city} ) {
    console.log("in sayHello1");
    console.log(`Hello ${name} you are in ${city}`);
}

let {name, city} = p1; 

sayHello(name, city)
sayHello1(p1)
