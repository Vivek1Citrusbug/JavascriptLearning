// let text = "The temperature is " + toCelsius(77) + " Celsius.";
// document.getElementById("demo").innerHTML = text;

// function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// } 

// const person = new Object()
// person.firstName = 'Vivek';
// person.lastName - 'Soni';
// person.city = 'Patdi';

// const car = {
//     name : 'fortuner',
//     color: 'black',
//     speed: 126
// };

// car.givespeed = function(){
//     return this.speed;
// };


// document.getElementById('demo').innerHTML = car.givespeed();

// let temp = ""
// for(let it in car){
//     temp = temp + car[it] + " "; 
// }

// const values = Object.values(car);
// document.getElementById('demo').innerHTML = values;

// function CAR(name,color,speed){
//     this.name = name;
//     this.color = color;
//     this.speed = speed;
// }

// CAR.prototype.nationality = 'Indian model';

// const mycar1 = new CAR('Fortuner','black',123);
// const mycar2 = new CAR('Innova','green',5041);

// mycar2.changespeed = function(speed){
//     this.speed = speed;
// }
// document.getElementById('demo').innerHTML = "hello " + mycar1.name + " " + mycar1.color+ " " + mycar1.speed + " " +mycar1.nationality;
// mycar2.changespeed(200)
// document.getElementById('demo').innerHTML =  "hello " + mycar2.name + " " + mycar2.color+ " " + mycar2.speed + " " +mycar2.nationality;

// CAR.prototype.changeName = function (speed){
//     this.speed = speed;
// }

// mycar2.changeName(250);

// document.getElementById('demo').innerHTML =  "hello " + mycar2.name + " " + mycar2.color+ " " + mycar2.speed + " " + mycar2.nationality;

// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");
// document.getElementById("demo").innerHTML = index; 

// const myarray = {
//     name : 'john',
//     age : 30,
//     cars : [
//                 {name : 'ford',models : ['fierstak','Focus','Mustang']},
//                 {name : 'bmw',models : ['320','X3','X5']},
//                 {name : 'fiat',models : ['500','panda']}
//             ]
// }
// let x = "";

// for(let i in myarray.cars){
//     x = x + "<h1>" + myarray.cars[i].name + "</h1>";
//     for(let j in myarray.cars[i].models){
//         x = x + myarray.cars[i].models[j];
//     }
// }

// document.getElementById('demo').innerHTML = x;

// let x = Math.floor(Math.random() * 10);
// document.getElementById('demo').innerHTML = x;

// let x = '0';

// switch (x) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }
// document.getElementById("demo").innerHTML = text;

// const letters = new Set();

// let a = "a";
// let b = "b";
// let c = "c";

// letters.add(a);
// letters.add(b);
// letters.add(c);
// document.getElementById("demo").innerHTML = letters.size;

// const fruit = new Map();
// fruit.set("Apple",300);
// fruit.set("Banana",800);
// fruit.set("Orange",900);

// let num = fruit.get("Apple");
// document.getElementById('demo').innerHTML = num;

