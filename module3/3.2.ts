{
  //inharitence

  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(sleepTime: number) {
      console.log(`This student is sleeping ${sleepTime}`);
    }
  }

  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("jishan", 21, "Dhaka");

  student1.getSleep(8);

  class Teacher extends Parent {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
  }

  const teacher = new Teacher("jishan", 21, "Dhaka", "Professor");

  teacher.getSleep(8);
}
