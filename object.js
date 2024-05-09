let products = {};
products.name = "apple",
products.price = 100,
products.color = "red",
products.qty = 20;

//update properties like products.price
products.price = 200;

//console.log(products.price); // 200

//new object each fruits

let apple = {};
apple.price = 50,
apple.color = "red",
apple.qty = 10;

let orange = {};
orange.price = 30;
orange.color = "orange",
orange.qty = 30;

let banana = {};
banana.price = 10,
banana.color = "yellow",
banana.qty = 12;

//console.log(banana.price);


// All fruits in one single object

let fruits = {apple:
    {price :50,
    color : "red",
    qty : 10},
    orange:
    {price:20,
    color:'orange',
    qty:20},
    banana:
    {price:10,
    color:'yellow',
    qty:20}
   };


//console.log(fruits);


//add a new property in objects

console.log(fruits.apple); // { price: 50, color: 'red', qty: 10 }

fruits.apple.name = "Kasmir apple";

console.log(fruits.apple); //{ price: 50, color: 'red', qty: 10, name: 'Kasmir apple' }

//using Constructor method


class Students {
    constructor(Name, reg_no, ph_no, gender, Age) {
        this.Name = Name;
        this.reg_no = reg_no;
        this.ph_no = ph_no;
        this.gender = gender;
        this.Age = Age;
    }
}

let student1 = new Students("madhubalan", 952520, 9787, "Male", 20);
let student2 = new Students("madhu", 952521, 9786, "Female", 21);
let student3 = new Students("mani", 952522, 9787, "Male", 23);

let students = [student1, student2, student3];

students.forEach(student => {
    Object.entries(student).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
    console.log(); 
    
});

