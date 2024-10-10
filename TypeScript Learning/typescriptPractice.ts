// let num : number = 13;
// num = 'vivek';
// console.log(num);

// function addtwo(num:number) : number{
//     return num + 2;
// }

//function returning of different types

// function getValue(myVal: number):boolean{
//     if(myVal > 5)   return true;
//     else return "status code 400";
// }

// const nuFun = (s:string):string =>{
//     return "";
// }

// const names: string[] = [];
// names.push("Dylan"); // no error
// names.push(3);

// addtwo(5);

// const names: readonly string[] = ["Dylan"];
// names.push("Jack");

// const car: { type: string, model: string, year: number } = {
//     type: "Toyota",
//     model: "Corolla",
//     year: 2009
//   };
  
//   console.log(car);

// const car: { type: string, mileage?: number } = { // no error
//     type: "Toyota"
//   };
//   car.mileage = 2000;

// enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accepted = 202,
//     BadRequest = 400
//   };
  
//   // logs 404
//   console.log(StatusCodes.NotFound);
  
//   // logs 200
//   console.log(StatusCodes.Success);

// interface Rectangle {
//     height: number,
//     width: number
//   };
  
//   const rectangle: Rectangle = {
//     height: 20,
//     width: 10
//   };
  
//   console.log(rectangle);

// function printStatusCode(code: string | number) {
//     console.log(`My status code is ${code}.`)
//   }
//   printStatusCode(404);
//   printStatusCode('404');

// let x: unknown = 'hello';
// console.log((x as string).length);

// class Person {
//     private name: string;
  
//     public constructor(name: string) {
//       this.name = name;
//     }
  
//     public getName(): string {
//       return this.name;
//     }
//   }
  
//   const person = new Person("Jane");
//   console.log(person.getName());

// class Person {
    // name is a private member variable
//     public constructor(private name: string) {}
  
//     public getName(): string {
//       return this.name;
//     }
//   }
  
//   const person = new Person("Jane");
//   console.log(person.getName());

// function createPair<S, T>(v1: S, v2: T): [S, T] {
//     return [v1, v2];
//   }
//   console.log(createPair<string, number>('hello', 42)); 
export{}