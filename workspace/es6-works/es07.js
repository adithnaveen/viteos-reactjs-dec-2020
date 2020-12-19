// object de-structuring 

let p1 = {
    name: "saad", 
    city:"Bengaluru", 
    email: "saad@example.com", 
    address: {
        houseno: 123, 
        street:"some blvd"
    }
}

let name1 = p1.name; 
let city1 = p1.city
let email1 = p1.email

console.log(name1);
console.log(city1);
console.log(email1);


let {name, city, address} = p1 ; 
let {houseno} =p1.address; 

console.log(name);
console.log(city);
console.log(address);
console.log(houseno);

let {name2, city2, address2} = p1 ; 
console.log(name2);
console.log(city2);
console.log(address2);

let nums = [1,2,3,4,5,6,7,8]; 


let [n1, n2, ...restNumbers] = nums; 
console.log(n1);
console.log(n2);
console.log(restNumbers);


