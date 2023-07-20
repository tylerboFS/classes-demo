

/* ES6 Classes */

/* Define a base class for pets */
class Pet {
  //initialize values
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  birthday() {
    return `${this.name} is ${this.age} years old!`;
  }
}

/* Define a sub class for dogs */
class Dog extends Pet {
  constructor(name, age, breed) {
    //Super calls parent constrtor
    super(name, age);
    this.breed = breed;
  }

  bark() {
    return `${this.name} is barking! Woof woof!`;
  }
}

/* Define a sub class for cats */
class Cat extends Pet {
  constructor(name, age, furColor){
    super(name, age);
    this.furColor = furColor;
  }

  meow() {
    return `${this.name} is meowing! MEEEEEOWWWWW!`;
  }
}

/** Creates object
  const pet1 = 
  {
    name: "Spot",
    age: 3,
    birthday: function () {
      return `${this.name} is ${this.age} years old!`
    }
  }
 */
const pet1 = new Pet("Spot", 3);
console.log(pet1.birthday());

const pet2 = new Dog("Rover", 2, "Labrador");
console.log(pet2.birthday());
console.log(pet2.bark());

const pet3 = new Cat("Gary", 1, "white");
console.log(pet3.birthday());
console.log(pet3.meow());

// Check if the instances are instances of their respective classes
console.log(pet1 instanceof Pet); // Output: true
console.log(pet2 instanceof Dog); // Output: true
console.log(pet3 instanceof Cat); // Output: true
