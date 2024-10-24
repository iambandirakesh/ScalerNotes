//Example forClass
class car {
  constructor(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
  }
  start() {
    console.log(
      `Car name is ${this.name} and model is ${this.model} and year is ${this.year}`
    );
  }
}
let nano = new car("Nano", "Small", 2015); //Creating of the objects
let Tata = new car("Tata", "tataH", 2020);
// nano.start();
// Tata.start();

//Encapsulation
class BankBalance {
  #balance = 21; //private
  constructor(accountNumber) {
    this.accountNumber = accountNumber;
  }
  deposite(amount) {
    this.#balance += amount;
    console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
  }
  getBalance() {
    return this.#balance;
  }
}
let myAccount = new BankBalance(12111);
myAccount.deposite(299);
myAccount.getBalance();

//Inheritance
class Vehicle {
  //parent class
  constructor(type, wheels) {
    this.type = type;
    this.wheels = wheels;
  }
  describe() {
    console.log(`This vehicle is a ${this.type} with ${this.wheels} wheels.`);
  }
}
class MotorCyle extends Vehicle {
  //Child Class
  constructor(make, model) {
    super("MotorCycle ", 2);
    this.make = make;
    this.model = model;
  }
  showDetails() {
    console.log(`This motorcycle is a ${this.make} ${this.model}.`);
  }
}
let bike = new MotorCyle("Yamaha", "MT15");
bike.describe();
bike.showDetails();
//Polymorphism
class Animal {
  speak() {
    console.log("Animal makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks.");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows.");
  }
}

let animals = [new Animal(), new Dog(), new Cat()];
animals.forEach((animal) => animal.speak());
