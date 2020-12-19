let names = ['Ankit', 'Sivan', 'Ananth', 'Akshay'];

let chars = names.map((val) =>   val.charAt(0))

console.log(chars);

let indexPos = names.findIndex((value) => value ==='Ankita')
console.log(indexPos);


// spread & rest operator 
let nums = [10, 20, 30, 40, 50, 60]; 
console.log(nums);

let anotherNumbers = [...nums, 100, 200]
console.log(anotherNumbers);
let num2 = nums; 
num2.push(999); 
// whenyou push it to num2 even numbs will be have 999 
// as both are referring to same data set 
console.log("nums -> "+ nums);
console.log("num2 -> " + num2);

let p1 = {name:"sivan", email:"sivan@viteos.com"}
let p2 = {city:"Delhi", ...p1, country: 'india'}

console.log(p1);
console.log(p2);

// when you use rest operator a new copy of p1 is created 
let p3 = {...p1} ; 
console.log(p3);
console.log(p1 === p3);



