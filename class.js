// Parent class


class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  
    static type() {
      console.log("Animals are multicellular, eukaryotic organisms of the kingdom Animalia.");
    }
  }
  
class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
  speak() {
      console.log(`${this.name} barks.`);
    }
  
  fetch() {
      console.log(`${this.name} fetches a ball.`);
    }
  }
  

  Animal.type();
  
 
  const dog1 = new Dog('Buddy', 'Labrador');
  
  const dog2 = new Dog('Max', 'Golden Retriever');
 
  dog1.speak(); // Output: Buddy barks.

  dog1.fetch(); // Output: Buddy fetches a ball.
  
  dog2.speak(); // Output: Max barks.

  dog2.fetch(); // Output: Max fetches a ball.
  