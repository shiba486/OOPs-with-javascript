// Method Overriding
class Animal {
  speak() {
    console.log("The animal makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("The dog barks.");
  }
}

class Cat extends Animal {
  speak() {
    console.log("The cat meows.");
  }
}
// const animal1 = new Dog()
// animal1.speak()

// let animals = [new Dog(), new Cat(), new Animal()];

// animals.forEach(a => a.speak());


// Using super with Overridden Methods
class Vehicle {
  start() {
    console.log("Vehicle starts");
  }
}

class Car extends Vehicle {
  start() {
    super.start(); // call parent version
    console.log("Car engine starts");
  }
}

new Car().start();
