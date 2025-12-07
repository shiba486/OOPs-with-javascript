# Object-Oriented Programming (OOP) in JavaScript

This repository explores fundamental Object-Oriented Programming (OOP) concepts implemented in JavaScript.

## Introduction to OOP

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects," which can contain data and code. JavaScript, while primarily a prototype-based language, provides mechanisms to implement OOP principles effectively, especially with the introduction of ES6 Classes.

## Core OOP Concepts in JavaScript

### 1. Encapsulation

Encapsulation involves bundling data (properties) and methods that operate on the data within a single unit (object or class). It also involves restricting direct access to some of an object's components, preventing external interference.

```javascript
class Car {
  constructor(make, model) {
    this.make = make; // Public property
    this._model = model; // Convention for "private" property
  }

  get model() { // Getter for controlled access
    return this._model;
  }

  startEngine() {
    console.log(`${this.make} ${this._model} engine started.`);
  }
}

const myCar = new Car('Toyota', 'Camry');
console.log(myCar.make); // Access public property
console.log(myCar.model); // Access via getter
myCar.startEngine();
