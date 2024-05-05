{
  //OOP ----> Class

  class Animal {
    // name: string;
    // species: string;
    // sound: string;

    //paramitter property

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }

    makeSound() {
      console.log(
        `The Animal ${this.name} says ${this.species} sound ${this.sound}`
      );
    }
  }

  const dog = new Animal("German Dog", "Dog", "Ghew Ghew");
  const cat = new Animal("German Cat", "Cat", "Mew mew");

  dog.makeSound();
}
