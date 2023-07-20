/* ES5 and earlier */

/* Creating an object called animal with a method called eat */
const animal = {
  eat: function () {
    console.log("nom nom nom");
  },
};

/*Creating an object called dog with a method called bark */
const dog = {
  bark: function () {
    console.log("Woof!");
  },
};

/* Use prototype to set prototype of dog to an animal */
dog.__proto__ = animal;

/* Calling eath method from the animal object.  */
dog.eat();

const fozzie = {
  name: "Fozzie",
  breed: "Street Dog",
  howl: function () {
    console.log("Awooooo");
  },
};

fozzie.__proto__ = dog;

fozzie.howl(); // from the 'fozzie' object
fozzie.bark(); // from the 'dog' object
fozzie.eat(); // from the 'animal' object