// classes and objects 
// in the class you can have only 1 constructor 
class Person {
    constructor() {
        this.name = "Arun"
        this.city = "Bengaluru"
    }
    // constructor(name, city="Bengaluru") {
    //     this.name = name
    //     this.city = city
    // }

    printPerson() {
        console.log("Name : ", this.name);
        console.log("City : ", this.city);
    }
}

class Employee extends Person {
    // for the client class having the super is mandatory 
    // constructor(name, city) {
    //     super(name, city); 
    // }
    constructor() {
        // this is mandatory 
        super(); 
    }
}


let p1 = new Person("Sivan"); 
console.log(typeof(p1));
console.log(p1);

let p2 = new Person("Harry")
console.log(p2);

let e1 = new Employee(); 
console.log(e1);