let empName = "Vivek"
let age = 35

let s1 = `${empName} is ${age} year old`; 
console.log(s1)

function myTag(strings, p1, p2) {
    console.log("Strings : ", strings);
    console.log(p1, p2);
    console.log(arguments);
}

myTag `${empName} is ${age} year old`

// spread operator (...)
function myTag1 ( str, ... values) {
    console.log(str);
    console.log(values);
    return "MyTag1 Executed"
}

let s3 = myTag1`${empName} is ${age} year old`
console.log(s3);