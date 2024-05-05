{
  //inostance of guird

  class Animal {
    constructor(public name: string, public species: string) {}

    makeSound() {
      console.log(`The Animal ${this.name} says ${this.species}`);
    }
  }

  class Dog extends Animal {
    constructor(public name: string, public species: string) {
      super(name, species);
    }

    makeBark() {
      console.log("I am barking");
    }
  }

  class Cat extends Animal {
    constructor(public name: string, public species: string) {
      super(name, species);
    }

    makeMaw() {
      console.log("I am Mawing");
    }
  }

  const dog = new Dog("DG BHAI", "Dog");
  const cat = new Cat("Cat BHAI", "Cat");

  dog.makeBark();
  cat.makeMaw();

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMaw();
    } else {
      animal.makeSound();
    }
  };

  getAnimal(dog);
}
