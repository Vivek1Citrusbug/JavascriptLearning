"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var num = 13;
num = 'vivek';
console.log(num);
function addtwo(num) {
    return num + 2;
}
function returning() { }
of;
different;
types;
function getValue(myVal) {
    if (myVal > 5)
        return true;
    else
        return "status code 400";
}
var nuFun = function (s) {
    return "";
};
var names = [];
names.push("Dylan"); // no error
names.push(3);
addtwo(5);
var names = ["Dylan"];
names.push("Jack");
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);
var car = {
    type: "Toyota"
};
car.mileage = 2000;
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
;
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
;
var rectangle = {
    height: 20,
    width: 10
};
console.log(rectangle);
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
printStatusCode(404);
printStatusCode('404');
var x = 'hello';
console.log(x.length);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Jane");
console.log(person.getName());
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
is;
a;
member;
variable;
constructor(private, name, string);
{ }
getName();
string;
{
    return this.name;
}
var person = new Person("Jane");
console.log(person.getName());
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42));
